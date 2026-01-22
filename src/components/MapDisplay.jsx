import * as React from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // custom styling within the map component

function MapDisplay(props) {
  return (
    <Map
      initialViewState={{
        longitude: props.longitude || -122.4, // sets default values if nothing is inputted
        latitude: props.latitude || 51.5074,
        zoom: props.zoom || 9
      }}
      style={{width: 600, height: 400}}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    />
  );
}

export default MapDisplay;
// props = way of passing data from one component to another