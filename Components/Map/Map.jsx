

import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Map = (props) => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFzc2VuMjM4MyIsImEiOiJjbG01MjRybmwwNTQzM3FtbTEzbXVvd3B5In0.jwpqaDgUr7KlsUhGMTAVww";
    mapboxgl.setRTLTextPlugin(
      "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
      null,
      true // Lazy load the plugin
    );
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", // Replace with your Mapbox style URL
      center: [props.longitude, props.latitude], // Replace with your coordinates
      zoom: 12, 
      attributionControl: false, 
      
    });
  }, [props.longitude, props.latitude]);

  return (
    <div className="container mx-auto p-4 bg-gray-100 border rounded-lg shadow-md">
       <div id="map" className="w-full h-64 md:h-96 lg:h-72"></div>
      {/* Other map components go here */}
    {" "}
    </div>
  );
};

export default Map;
