import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function Map({ lat = 40.6782, lng = -73.9442 }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Create the map once, on mount
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: 13,
    });

    // Add the marker at the same initial coordinates
    markerRef.current = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(mapRef.current);

    // Cleanup: destroy the map when the component unmounts
    return () => {
      mapRef.current.remove();
    };
  }, []); // empty deps = run once on mount

  // Update map + marker position whenever lat/lng props change later (for the API step)
  useEffect(() => {
    if (mapRef.current && markerRef.current) {
      mapRef.current.setCenter([lng, lat]);
      markerRef.current.setLngLat([lng, lat]);
    }
  }, [lat, lng]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-[400px] md:h-[500px]"
    />
  );
}

export default Map;