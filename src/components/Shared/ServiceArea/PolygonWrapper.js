import React from 'react';
import propTypes from 'prop-types';
import Polygon from 'react-google-maps/lib/components/Polygon';

class PolygonWrapper extends React.Component {
  handleFenceChange = coordinatesData => {
    const { handleCoordinatesChange } = this.props;
    if (handleCoordinatesChange) {
      handleCoordinatesChange(coordinatesData);
    }
  };

  handleServiceAreaName = serviceArea => {
    const { handleServiceArea } = this.props;
    handleServiceArea(serviceArea);
  };

  render() {
    const { finalCoordinates, isFenceEditable, compKey, randomColour, serviceArea } = this.props;
    return (
      <Polygon
        path={finalCoordinates}
        editable={isFenceEditable}
        draggable={isFenceEditable}
        ref={ref => {
          this.ref = ref;
        }}
        key={compKey}
        options={{
          fillColor: randomColour,
          fillOpacity: 0.3,
          strokeColor: '#000',
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
        onClick={() => {
          this.handleServiceAreaName(serviceArea);
        }}
        onMouseUp={() => {
          const coordinatesArray = [];
          for (let i = 0; i < this.ref.getPath().getLength(); i++) {
            const xy = this.ref.getPath().getAt(i);
            coordinatesArray.push({ x: xy.lat(), y: xy.lng() });
          }

          this.handleFenceChange({
            coordinates: coordinatesArray,
            editedServiceArea: serviceArea,
          });
        }}
      />
    );
  }
}

PolygonWrapper.propTypes = {
  handleCoordinatesChange: propTypes.func,
  handleServiceArea: propTypes.func,
  finalCoordinates: propTypes.array,
  randomColour: propTypes.string,
  serviceArea: propTypes.object,
  compKey: propTypes.number,
  isFenceEditable: propTypes.bool,
};

export default PolygonWrapper;
