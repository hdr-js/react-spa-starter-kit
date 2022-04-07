/* global google */
import React from 'react';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import Marker from 'react-google-maps/lib/components/Marker';
import Polygon from 'react-google-maps/lib/components/Polygon';
import GoogleMap from 'react-google-maps/lib/components/GoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';

export const getFencesFromServiceAreaList = (serviceAreaList = {}) => {
  if (Object.keys(serviceAreaList).length === 0 && serviceAreaList.constructor === Object) {
    return false;
  }

  const fences = serviceAreaList.map(obj => {
    return JSON.parse(obj.geofence);
  });

  const polygon = [];
  fences.forEach(singleFence => {
    const finalCoordinates = [];
    for (let j = 0; j < singleFence.length; j++) {
      const floatLat = parseFloat(singleFence[j].x);
      const floatLng = parseFloat(singleFence[j].y);

      finalCoordinates.push({
        lat: floatLat,
        lng: floatLng,
      });
    }

    // let randomColour = getRandomColor();
    const randomColour = '#6386AB';

    polygon.push(
      <Polygon
        path={finalCoordinates}
        key={JSON.stringify(singleFence)}
        options={{
          fillColor: randomColour,
          fillOpacity: 0.3,
          strokeColor: '#000',
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
        onClick={() => {}}
      />,
    );
  });

  return polygon;
};

export default withScriptjs(
  withGoogleMap(props => {
    let polygon = null;
    polygon = getFencesFromServiceAreaList(props.serviceAreaList);

    return (
      <GoogleMap defaultZoom={14} center={props.center}>
        <DrawingManager
          defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
          defaultOptions={{
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [google.maps.drawing.OverlayType.POLYGON],
            },
          }}
          onPolygonComplete={props.doneDrawing}
        />
        {props.center.lat && props.center.lng && <Marker position={props.center} />}
        {polygon || null}
      </GoogleMap>
    );
  }),
);
