import React from 'react';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import Marker from 'react-google-maps/lib/components/Marker';
import GoogleMap from 'react-google-maps/lib/components/GoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import PropTypes from 'prop-types';
import { GOOGLE_MAP_URL_URL, MAP_DEFAULT_ZOOM_LEVEL } from '../../../configs/applicationConstants';

const { compose, withProps, lifecycle } = require('recompose');

class MapWithSearchComp extends React.Component {
  render() {
    const {
      customMarker,
      enableSearching,
      center,
      searchBoxStyle,
      onSearchBoxMounted,
      handleMapClick,
      bounds,
      zoomLevel,
      markerIcon,
      onPlacesChanged,
    } = this.props;
    return (
      <div data-standalone-searchbox="">
        <GoogleMap
          zoom={zoomLevel || MAP_DEFAULT_ZOOM_LEVEL}
          onClick={e => handleMapClick(e)}
          center={
            center?.constructor !== Array
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
          <Marker
            position={customMarker}
            icon={{
              url: markerIcon,
            }}
          />
        </GoogleMap>
      </div>
    );
  }
}

MapWithSearchComp.propTypes = {
  searchBoxStyle: PropTypes.object,
  customMarker: PropTypes.object,
  serviceAreaList: PropTypes.array,
  zoomLevel: PropTypes.number,
  showServiceAreaFencing: PropTypes.bool,
  enableSearching: PropTypes.bool,
  center: PropTypes.object,
  bounds: PropTypes.object,
  markerIcon: PropTypes.string,
  onSearchBoxMounted: PropTypes.func,
  onPlacesChanged: PropTypes.func,
  handleMapClick: PropTypes.func,
};

export const RetailerMap = compose(
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

export default RetailerMap;
