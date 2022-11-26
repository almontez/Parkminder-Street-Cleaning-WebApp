import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { cleanData } from '../utils/cleandata';
import { reformatCleanTimes } from '../utils/reformating'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxtb250ZXoiLCJhIjoiY2w5OG9sYmNrMDdzZjNwdXB2Ym9tNnlsaSJ9.7qMcqrkDozh6eKMTolbQdg';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [streetName, setStreetName] = useState('')
  const [streetLimits, setStreetLimits] = useState('')
  const [leftSideCleanDay, setLeftSideCleanDay] = useState('')
  const [rightSideCleanDay, setRightSideCleanDay] = useState('')
  const [leftSideTimes, setLeftSideTimes] = useState('')
  const [rightSideTimes, setRightSideTimes] = useState('')

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

      // clean data and send to pop-up html
      const feature = cleanData(data);
      feature.then(data => {
        setStreetName(data.streetName);
        setStreetLimits(data.streetLimits);

        const leftDaysPromise = Promise.resolve(data.leftSideData.clean_days)
        leftDaysPromise.then(days => {
          setLeftSideCleanDay(days)
        });

        const rightDaysPromise = Promise.resolve(data.rightSideData.clean_days)
        rightDaysPromise.then(days => {
          setRightSideCleanDay(days)
        });

        const left_clean_times = reformatCleanTimes(data.leftSideData.start_time, data.leftSideData.end_time);
        left_clean_times.then(times => {
          setLeftSideTimes(times)
        });

        const right_clean_times = reformatCleanTimes(data.rightSideData.start_time, data.rightSideData.end_time);
        right_clean_times.then(times => {
          setRightSideTimes(times)
        });
      });

      // create pop up
      const popup = new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<b>Street Name:</b> ${streetName}<br>
                  <b>Street Boundaries:</b> ${streetLimits}
                  <br><br>
                  <b>I parked on the <u>LEFT</u> side of the street.</b>
                  <ul>
                  <li>Cleaning Days: ${leftSideCleanDay}</li>
                  <li>Cleaning Times: ${leftSideTimes}</li>
                  </ul>
                  <b>I parked on the <u>RIGHT</u> side of the street.</b>
                  <ul>
                  <li>Cleaning Days: ${rightSideCleanDay}</li>
                  <li>Cleaning Times: ${rightSideTimes}</li>
                  </ul>`);
      
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