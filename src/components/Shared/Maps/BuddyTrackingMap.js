import React from 'react';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import Marker from 'react-google-maps/lib/components/Marker';
import GoogleMap from 'react-google-maps/lib/components/GoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import PropTypes from 'prop-types';
import {
  GOOGLE_MAP_URL_URL,
  MAP_DEFAULT_ZOOM_LEVEL,
  MAP_MULTIPLE_BUDDIES_ZOOM_LEVEL,
  BUDDY_STATUS_ONLINE_ID,
  BUDDY_STATUS_ON_JOB_ID,
  BUDDY_STATUS_ENGAGED_ID,
} from '../../../configs/applicationConstants';
import PolygonWrapper from '../ServiceArea/PolygonWrapper';
import statusOnlineIcon from '../../../assets/img/buddy_online.png';
import statusOfflineIcon from '../../../assets/img/buddy_offline.png';
import statusOnjobIcon from '../../../assets/img/buddy_onjob.png';
import statusEngagedIcon from '../../../assets/img/buddy_engaged.png';
import buddyMarker from '../../../assets/img/ic_buddy_marker.png';

const { compose, withProps, lifecycle } = require('recompose');

class MapWithSearchComp extends React.Component {
  getFencesFromServiceAreaList = (props, serviceAreaList = {}) => {
    if (Object.keys(serviceAreaList).length === 0 && serviceAreaList.constructor === Object) {
      return false;
    }

    const fences = serviceAreaList.map(obj => {
      return JSON.parse(obj.geofence);
    });

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
          isFenceEditable={false}
          compKey={indx}
          key={serviceAreaList[indx]?.id}
          handleServiceArea={data => props.handleServiceArea(data)}
          randomColour={randomColour}
          serviceArea={serviceAreaList[indx]}
        />,
      );
    });

    return polygon;
  };

  generateMarkers = (markers, props) => {
    return markers.map(obj => {
      let buddyIcon = statusOfflineIcon;
      if (obj.statusId === BUDDY_STATUS_ONLINE_ID) {
        buddyIcon = statusOnlineIcon;
      }

      if (obj.statusId === BUDDY_STATUS_ON_JOB_ID) {
        buddyIcon = statusOnjobIcon;
      }

      if (obj.statusId === BUDDY_STATUS_ENGAGED_ID) {
        buddyIcon = statusEngagedIcon;
      }

      return (
        <MarkerWithLabel
          position={{
            lat: obj.location.latitude,
            lng: obj.location.longitude,
          }}
          icon={{
            url: buddyMarker,
          }}
          key={obj.id}
          labelAnchor={{}}
          labelClass="buddy-marker-label"
          onClick={() => props.handleMapClick(obj)}
        >
          <div>
            <span>
              <img className="buddy-icon" src={buddyIcon} alt="map-icon" />
            </span>
            <span className="live-buddy-detail">
              {obj.name ? `${obj.id} - ${obj.name.substr(0, 15)}` : `Buddy ID: ${obj.id}`}{' '}
              {obj.is_preferred ? '(P)' : null}
            </span>
          </div>
        </MarkerWithLabel>
      );
    });
  };

  render() {
    const {
      customMarker,
      showServiceAreaFencing,
      serviceAreaList,
      enableSearching,
      center,
      searchBoxStyle,
      onSearchBoxMounted,
      bounds,
      onPlacesChanged,
    } = this.props;
    return (
      <div data-standalone-searchbox="" className="buddy-tracking-map">
        <GoogleMap
          defaultZoom={
            customMarker.constructor !== Array
              ? MAP_DEFAULT_ZOOM_LEVEL
              : MAP_MULTIPLE_BUDDIES_ZOOM_LEVEL
          }
          center={
            center.constructor !== Array
              ? center
              : { lat: center[0].location.latitude, lng: center[0].location.longitude }
          }
        >
          {enableSearching && (
            <StandaloneSearchBox
              ref={onSearchBoxMounted}
              bounds={bounds}
              onPlacesChanged={onPlacesChanged}
            >
              <input type="text" placeholder="Search Location..." className={searchBoxStyle} />
            </StandaloneSearchBox>
          )}
          {customMarker.constructor !== Array ? (
            <Marker
              position={customMarker}
              icon={{
                url: buddyMarker,
              }}
            />
          ) : (
            this.generateMarkers(customMarker, this.props)
          )}

          {showServiceAreaFencing
            ? this.getFencesFromServiceAreaList(this.props, serviceAreaList)
            : null}
        </GoogleMap>
      </div>
    );
  }
}

MapWithSearchComp.propTypes = {
  searchBoxStyle: PropTypes.object,
  customMarker: PropTypes.array,
  serviceAreaList: PropTypes.array,
  showServiceAreaFencing: PropTypes.bool,
  enableSearching: PropTypes.bool,
  center: PropTypes.object,
  bounds: PropTypes.object,
  onSearchBoxMounted: PropTypes.func,
  onPlacesChanged: PropTypes.func,
};

export const BuddyLiveTrackingMap = compose(
  withProps({
    googleMapURL: GOOGLE_MAP_URL_URL,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%' }} />,
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
          this.setState({
            places,
          });
        },
      });
    },
  }),
  withScriptjs,
)(withGoogleMap(MapWithSearchComp));

export default BuddyLiveTrackingMap;
