import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { cleanData } from '../utils/cleandata';
import Reminder from './reminderform'


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxtb250ZXoiLCJhIjoiY2w5OG9sYmNrMDdzZjNwdXB2Ym9tNnlsaSJ9.7qMcqrkDozh6eKMTolbQdg';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [streetName, setStreetName] = useState('')
  const [streetLimits, setStreetLimits] = useState('')
  const [leftSideData, setLeftSideData] = useState('')
  const [rightSideData, setRightSideData] = useState('')

  // initialize base map
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/almontez/clakfgv2c000d14uqsx0wji3t',
      center: [-122.4378588051518, 37.753502532309014],
      zoom: 11.5,
    });
    map.current.addControl(new mapboxgl.GeolocateControl(), 'top-right')    // find my location
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')   // zoom 
    map.current.addControl(new MapboxGeocoder({accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl}), 'top-left') // search bar
  });

  // generate popup with map data and reminder
  useEffect(() => {
    map.current.on('click', (e) => {
      // grab map data
      const data = map.current.queryRenderedFeatures(e.point, {
        layers: ['sf-street-clean-schedule']
      });

      // clean data and send to pop-up componenets
      const feature = cleanData(data);
      feature.then(data => {
        console.log(data)
        setStreetName(data.streetName)
        setStreetLimits(data.streetLimits)
        setLeftSideData(data.leftSideData)
        setRightSideData(data.rightSideData)
      })
      
      const popup = new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`Test: ${streetName}`);
      
      // close pop up
      const popups = document.getElementsByClassName('mapboxgl-popup');
      if (popups.length) {
        popups[0].remove()
      } 
      popup.addTo(map.current);
    });
  })

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}


export default Map;

/* 
  Citation for Mapbox Code
  Date: 10/16/2022 and 11/15/2022

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

  Title: "Add points to a web map, part 2: create a map style"
  Source URL: https://docs.mapbox.com/help/tutorials/add-points-pt-2/

  Citation for Modal and Form
  Date: 10/17/2022
  
  Title: "Modals"
  Source URL: https://react-bootstrap.github.io/components/modal/
*/