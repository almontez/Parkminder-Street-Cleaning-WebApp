import React, { useRef, useEffect, useState }from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxtb250ZXoiLCJhIjoiY2w5OG9sYmNrMDdzZjNwdXB2Ym9tNnlsaSJ9.7qMcqrkDozh6eKMTolbQdg'

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lat, setLat] = useState(37.753502532309014);
    const [lng, setLng] = useState(-122.4378588051518);
    const [zoom, setZoom] = useState(11.75);

    useEffect(()=>{
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div ref={mapContainer} className="map-container"></div>
    )

}

export default Map;