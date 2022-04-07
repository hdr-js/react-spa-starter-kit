/* global google */
import React from 'react';
import propTypes from 'prop-types';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import Marker from 'react-google-maps/lib/components/Marker';
import GoogleMap from 'react-google-maps/lib/components/GoogleMap';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import { compose, withProps, lifecycle } from 'recompose';
import PolygonWrapper from './PolygonWrapper';
import { DEFAULT_MAP_CENTER, GOOGLE_MAP_URL_URL } from '../../../configs/applicationConstants';

let center = {
  lat: DEFAULT_MAP_CENTER.latitude,
  lng: DEFAULT_MAP_CENTER.longitude,
};

class MapWithSearchComp extends React.Component {
  getFencesFromServiceAreaList = (serviceAreaList = {}) => {
    const { handleCoordinatesChange, handleServiceArea } = this.props;
    if (Object.keys(serviceAreaList).length === 0 && serviceAreaList.constructor === Object) {
      return false;
    }

    const fences = serviceAreaList.map(obj => {
      return JSON.parse(obj.geofence);
    });

    const isFenceEditable = serviceAreaList.length === 1;

    const polygon = [];
    fences.forEach((singleFence, indx) => {
      const finalCoordinates = [];
      for (let j = 0; j < singleFence.length; j++) {
        const floatLat = parseFloat(singleFence[j].x);
        const floatLng = parseFloat(singleFence[j].y);

        finalCoordinates.push({
          lat: floatLat,
          lng: floatLng,
        });
      }

      const randomColour = '#6386AB';
      polygon.push(
        <PolygonWrapper
          finalCoordinates={finalCoordinates}
          isFenceEditable={isFenceEditable}
          compKey={indx}
          key={singleFence[indx] ? singleFence[indx].x : indx}
          handleCoordinatesChange={data => handleCoordinatesChange(data)}
          handleServiceArea={data => handleServiceArea(data)}
          randomColour={randomColour}
          serviceArea={serviceAreaList[indx]}
        />,
      );
    });

    return polygon;
  };

  render() {
    const {
      serviceAreaList,
      handleMapClick,
      showServiceAreaFencing,
      doneDrawing,
      enableSearch,
      onSearchBoxMounted,
      bounds,
      onPlacesChanged,
      searchBoxStyle,
      customMarker,
      isFenceEditable,
    } = this.props;
    const defaultZoom = 12;

    if (isFenceEditable) {
      const polygonFirstPoint = JSON.parse(serviceAreaList[0].geofence)[0];
      center = {
        lat: parseFloat(polygonFirstPoint.x),
        lng: parseFloat(polygonFirstPoint.y),
      };
    }

    return (
      <div data-standalone-searchbox="">
        <GoogleMap defaultZoom={defaultZoom} center={center} onClick={e => handleMapClick(e)}>
          {showServiceAreaFencing ? (
            <DrawingManager
              defaultDrawingMode={isFenceEditable ? '' : google.maps.drawing.OverlayType.POLYGON}
              defaultOptions={{
                drawingControl: true,
                drawingControlOptions: {
                  position: google.maps.ControlPosition.TOP_CENTER,
                  drawingModes: [isFenceEditable ? '' : google.maps.drawing.OverlayType.POLYGON],
                },
              }}
              onPolygonComplete={doneDrawing}
            />
          ) : null}
          {enableSearch ? (
            <StandaloneSearchBox
              ref={onSearchBoxMounted}
              bounds={bounds}
              onPlacesChanged={onPlacesChanged}
            >
              <input type="text" placeholder="Search Location..." className={searchBoxStyle} />
            </StandaloneSearchBox>
          ) : (
            ''
          )}
          <Marker position={customMarker} />

          {showServiceAreaFencing
            ? this.getFencesFromServiceAreaList(serviceAreaList, this.props)
            : null}
        </GoogleMap>
      </div>
    );
  }
}

MapWithSearchComp.propTypes = {
  handleMapClick: propTypes.func,
  onPlacesChanged: propTypes.func,
  doneDrawing: propTypes.func,
  handleCoordinatesChange: propTypes.func,
  handleServiceArea: propTypes.func,
  onSearchBoxMounted: propTypes.func,
  serviceAreaList: propTypes.array,
  bounds: propTypes.object,
  showServiceAreaFencing: propTypes.bool,
  enableSearch: propTypes.bool,
  isFenceEditable: propTypes.bool,
  searchBoxStyle: propTypes.object,
  customMarker: propTypes.object,
};

export const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL: GOOGLE_MAP_URL_URL,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          center = {
            lat: places[0].geometry.location.lat(),
            lng: places[0].geometry.location.lng(),
          };

          this.setState({
            places,
          });
        },
      });
    },
  }),
  withScriptjs,
)(withGoogleMap(MapWithSearchComp));

export default PlacesWithStandaloneSearchBox;
