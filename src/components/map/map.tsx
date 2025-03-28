import { FC, useEffect, useRef } from 'react';

import './map.scss';

// TODO: 다른 방법
const latitude = 37.542868;
const longitude = 126.729962;

const mapOptions: naver.maps.MapOptions = {
  center: new naver.maps.LatLng(latitude, longitude),
  zoom: 17,
  zoomControl: false,
  scrollWheel: false,
};

export const Map: FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const initMap = () => {
    if (mapRef.current) {
      console.log('@2');

      const mapInstance = new naver.maps.Map('map', mapOptions);
      new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: mapInstance,
      });
    }
  };

  useEffect(() => {
    initMap();
  }, []);

  return (
    <div className="map_container">
      <div className="map_header">
        <h1 className="title">오시는길</h1>
        <h2 className="sub_title">CN 천년 웨딩홀 4F 라비엔 홀</h2>
      </div>
      <div id="map" ref={mapRef} />
    </div>
  );
};
