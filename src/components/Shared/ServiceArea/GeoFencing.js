/* global google */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import { withTranslation } from 'react-i18next';
import { PlacesWithStandaloneSearchBox } from './MapWithSearch';

import {
  refreshKbData,
  serviceAreaEditRequest,
  serviceAreaSaveRequest,
} from '../../../redux/actions/main/KbAction';

import { notificationServiceAreaAdditionFailed } from '../../../redux/actions/main/NotificationAction';
import { DEFAULT_MAP_CENTER, GOOGLE_MAP_URL_URL } from '../../../configs/applicationConstants';

class GeoFencing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        // CN Tower default
        lat: DEFAULT_MAP_CENTER.latitude,
        lng: DEFAULT_MAP_CENTER.longitude,
      },
      content: 'Getting position...',
      previousPolygon: null,
      serviceAreaName: props.selectedServiceAreaName,
      coordinatesArray: null,
      clearGeoFenceButtonEnabled: false,
      watchID: null,
      lastFetched: null,
      serviceAreaStatus: props.isFenceEditable ? props.serviceAreaList[0].active : false,
      selectedCityId: props.isFenceEditable ? props.serviceAreaList[0].city.id : 1,
    };
    this.serviceArea = React.createRef();
    this.serviceAreaName = '';
    this.editedCoordinates = null;
  }

  componentDidMount() {
    this.watchLocation();
  }

  componentWillUnmount() {
    this.unwatchLocation();
  }

  getLocation = position => {
    this.setState({
      center: {
        lat: DEFAULT_MAP_CENTER.latitude,
        lng: DEFAULT_MAP_CENTER.longitude,
      },
      content: 'Location found.',
      lastFetched: position.timestamp,
    });
  };

  getCurrentPosition() {
    const { center } = this.state;
    return new google.maps.LatLng(center.lat, center.lng);
  }

  fieldChangeHandler = data => {
    this.setState({
      serviceAreaName: data.target.value,
    });
  };

  handleFenceEdit = data => {
    this.editedCoordinates = data.coordinates;
  };

  clearFence = () => {
    const { previousPolygon } = this.state;
    if (previousPolygon) {
      previousPolygon.setMap(null);
      this.setState({
        coordinatesArray: null,
        clearGeoFenceButtonEnabled: false,
      });
    }
  };

  setServiceAreaCity = e => {
    this.setState({
      selectedCityId: e.target.value,
    });
  };

  saveServiceArea = () => {
    const { saveServiceArea } = this.props;
    const { coordinatesArray, selectedCityId, serviceAreaStatus } = this.state;
    const serviceAreaNameRegex = /^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/;
    if (!serviceAreaNameRegex.test(this.serviceArea.value)) {
      return false;
    }

    if (!coordinatesArray) {
      return false;
    }

    const payloadCoordinatesObject = coordinatesArray.map(coordinates => ({
      x: coordinates.lat,
      y: coordinates.lng,
    }));

    const payload = {
      cityId: selectedCityId,
      geoPointPayLoads: payloadCoordinatesObject,
      name: this.serviceArea.value,
      isActive: serviceAreaStatus,
    };

    saveServiceArea(payload);
    return false;
  };

  editServiceArea = () => {
    const { serviceAreaList, editServiceArea } = this.props;
    const { selectedCityId, serviceAreaStatus } = this.state;
    const serviceAreaNameRegex = /^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/;

    if (!serviceAreaNameRegex.test(this.serviceArea.value)) {
      return false;
    }

    let payloadCoordinatesObject = [];
    if (!this.editedCoordinates) {
      const fence = serviceAreaList.map(obj => {
        return JSON.parse(obj.geofence);
      });

      const finalCoordinates = [];
      fence.forEach(singleFence => {
        for (let j = 0; j < singleFence.length; j++) {
          const floatLat = parseFloat(singleFence[j].x);
          const floatLng = parseFloat(singleFence[j].y);

          finalCoordinates.push({
            x: floatLat,
            y: floatLng,
          });
        }
      });

      payloadCoordinatesObject = finalCoordinates;
    } else {
      payloadCoordinatesObject = this.editedCoordinates;
    }

    editServiceArea({
      cityId: selectedCityId,
      geoPointPayLoads: payloadCoordinatesObject,
      name: this.serviceArea.value,
      id: serviceAreaList[0].id,
      isActive: serviceAreaStatus,
    });
    return 0;
  };

  handleStatusUpdate = () => {
    const { serviceAreaStatus } = this.state;
    this.setState({
      serviceAreaStatus: !serviceAreaStatus,
    });
  };

  doneDrawing(polygon) {
    const vertices = polygon.getPath();
    const coordinatesArr = [];
    for (let i = 0; i < vertices.getLength(); i++) {
      const xy = vertices.getAt(i);
      coordinatesArr.push({ lat: xy.lat(), lng: xy.lng() });
    }

    this.setState(prevState => ({
      coordinatesArray: prevState.previousPolygon ? null : coordinatesArr,
      clearGeoFenceButtonEnabled: true,
      previousPolygon: prevState.previousPolygon ? null : polygon,
    }));
  }

  watchLocation() {
    if ('geolocation' in navigator) {
      const defaultGeoLocation = {
        lat: DEFAULT_MAP_CENTER.latitude,
        lng: DEFAULT_MAP_CENTER.longitude,
        timestamp: 1551175314117,
      };
      this.getLocation(defaultGeoLocation);
    }
  }

  unwatchLocation() {
    const { watchID } = this.state;
    if ('geolocation' in navigator && watchID) {
      navigator.geolocation.clearWatch(watchID);
    }
  }

  render() {
    const {
      serviceAreaList,
      enableSearch,
      handleServiceArea,
      isFenceEditable,
      serviceAreaAdditionResponse,
      refreshData,
      history,
      errorNotification,
      serviceAreaEditResponse,
      serviceAreaCities,
      t,
    } = this.props;

    const {
      serviceAreaName,
      clearGeoFenceButtonEnabled,
      serviceAreaStatus,
      selectedCityId,
    } = this.state;

    if (Object.keys(serviceAreaAdditionResponse).length > 0) {
      refreshData();
      if (serviceAreaAdditionResponse.errors && serviceAreaAdditionResponse.errors.length > 0) {
        const errorMessage = serviceAreaAdditionResponse.errors[0].errorMessage;
        errorNotification({
          message: errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1),
        });
        window.scrollTo(0, 0);
      } else {
        history.push('/service-areas');
        window.location.reload();
      }
    }

    if (serviceAreaEditResponse.success) {
      history.push('/service-areas');
      window.location.reload();
    }

    const { lastFetched, center, content } = this.state;
    let map = null;
    const usedServiceAreaList = serviceAreaList;

    if (this.editedCoordinates) {
      usedServiceAreaList[0].geofence = JSON.stringify(this.editedCoordinates);
    }

    if (lastFetched) {
      map = (
        <div className="map-outer-container">
          <PlacesWithStandaloneSearchBox
            googleMapURL={GOOGLE_MAP_URL_URL}
            loadingElement={<p>Loading maps...</p>}
            containerElement={<div style={{ height: '500px' }} />}
            mapElement={<div style={{ height: '100vh' }} />}
            center={center}
            enableSearch={enableSearch}
            content={content}
            isFenceEditable={isFenceEditable}
            doneDrawing={e => this.doneDrawing(e)}
            serviceAreaList={usedServiceAreaList}
            handleCoordinatesChange={this.handleFenceEdit}
            handleServiceArea={data => handleServiceArea(data)}
            showServiceAreaFencing
            searchBoxStyle={{ height: '500px' }}
          />
        </div>
      );
    } else {
      map = <p>Getting location...</p>;
    }

    let fenceButtons = '';
    if (isFenceEditable) {
      fenceButtons = (
        <div className="buttons-container">
          <Button onClick={this.editServiceArea} variant="contained" color="primary">
            {t('text_save_changes')}
          </Button>
        </div>
      );
    } else {
      fenceButtons = (
        <div className="buttons-container">
          <Button
            onClick={this.clearFence}
            disabled={!clearGeoFenceButtonEnabled}
            variant="contained"
            color="primary"
          >
            {t('text_clear')}
          </Button>
          <Button onClick={this.saveServiceArea} variant="contained" color="primary">
            {t('text_save')}
          </Button>
        </div>
      );
    }

    return (
      <div className="service-area-root">
        <div className="section-fields">
          <TextField
            id="serviceArea"
            label={isFenceEditable ? '' : t('text_please_enter_service_area_name')}
            value={serviceAreaName}
            className="service-area-text-field"
            inputRef={serviceArea => {
              this.serviceArea = serviceArea;
            }}
            onChange={data => this.fieldChangeHandler(data)}
            inputProps={{}}
            color="primary"
            variant="outlined"
          />
          <TextField
            select
            color="primary"
            label={t('text_service_area_city')}
            value={selectedCityId || ''}
            onChange={e => this.setServiceAreaCity(e)}
            variant="outlined"
          >
            {serviceAreaCities.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {t(option.label)}
              </MenuItem>
            ))}
          </TextField>
          <FormControlLabel
            className="status-control"
            control={
              <Switch
                color="primary"
                checked={serviceAreaStatus}
                onChange={() => this.handleStatusUpdate()}
              />
            }
            label={t('text_service_area_enableddisabled')}
            labelPlacement="start"
          />
          {fenceButtons}
        </div>
        {map}
      </div>
    );
  }
}

GeoFencing.propTypes = {
  refreshData: propTypes.func,
  errorNotification: propTypes.func,
  saveServiceArea: propTypes.func,
  handleServiceArea: propTypes.func,
  t: propTypes.func,
  selectedServiceAreaName: propTypes.string,
  editServiceArea: propTypes.func,
  serviceAreaCities: propTypes.array,
  history: propTypes.object,
  serviceAreaAdditionResponse: propTypes.object,
  serviceAreaEditResponse: propTypes.object,
  serviceAreaList: propTypes.array,
  enableSearch: propTypes.bool,
  isFenceEditable: propTypes.bool,
};

function mapStateToProps({ kbReducer }) {
  return {
    serviceAreaAdditionResponse: kbReducer.serviceArea,
    serviceAreaEditResponse: kbReducer.serviceAreaEditResponse,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveServiceArea: data => dispatch(serviceAreaSaveRequest(data)),
    editServiceArea: data => dispatch(serviceAreaEditRequest(data)),
    refreshData: data => dispatch(refreshKbData(data)),
    errorNotification: data => dispatch(notificationServiceAreaAdditionFailed(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(GeoFencing));
