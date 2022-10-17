import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

{/* 
  Citation for following code:
  Date: 10/16/2022

  Title: "Use Mapbox GL JS in React app"
  Source URL: https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/

  Title: "Locate the user"
  Source URL: https://docs.mapbox.com/mapbox-gl-js/example/locate-user/

  Title: "Display map navigation controls"
  Source URL: https://docs.mapbox.com/mapbox-gl-js/example/navigation/

  Title: "Add a geocoder"
  Source URL: https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder

  Title: "Mapbox GL Geocoder"
  Source URL: https://www.npmjs.com/package/@mapbox/mapbox-gl-geocoder
*/}

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxtb250ZXoiLCJhIjoiY2w5OG9sYmNrMDdzZjNwdXB2Ym9tNnlsaSJ9.7qMcqrkDozh6eKMTolbQdg';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.4378588051518);
  const [lat, setLat] = useState(37.753502532309014);
  const [zoom, setZoom] = useState(11.5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new mapboxgl.GeolocateControl({ positionOptions: {timeout: 1000}}), 'top-left')
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-left')
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}


export default Map;