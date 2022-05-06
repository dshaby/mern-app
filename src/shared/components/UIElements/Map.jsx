import "./Map.css";
import { useEffect, useRef } from "react";
const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });
    new window.google.maps.Marker({ position: props.center, map: map });
    // eslint-disable-next-line
  }, [center, zoom]);

  return (
    <>
      <div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}
      ></div>
    </>
  );
};

export default Map;
