// Map.js

import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./Map.module.css";

const Map = (props) => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!mapboxgl.getRTLTextPluginStatus()) {
      mapboxgl.setRTLTextPlugin(
        process.env.NEXT_PUBLIC_MAPBOX_RTL_PLUGIN,
        null,
        true
      );
    }

    const map = new mapboxgl.Map({
      container: "map",
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL,
      center: [props.longitude, props.latitude],
      zoom: 12,
      attributionControl: false,
    });

    // Add a marker at the specified coordinates
    new mapboxgl.Marker().setLngLat([props.longitude, props.latitude]).addTo(map);
  }, [props.longitude, props.latitude]);

  return (
    <div className={styles.container}>
      <div id="map" className={styles.mapSection}></div>
    </div>
  );
};

export default Map;
