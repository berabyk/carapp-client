import React, { useEffect } from 'react';
import L from 'leaflet';



const Navigation = () => {

  const startCoordinates = [39.9070543, 32.8072134];
  const endCoordinates = [39.9031398, 32.8027227];
  useEffect(() => {


    const map = L.map('map').setView(startCoordinates, 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.flyTo(startCoordinates, 18, { duration: 1 });

    L.marker(startCoordinates).addTo(map).bindPopup('Bozankaya').openPopup();
    L.marker(endCoordinates).addTo(map).bindPopup('Çukurambar').openPopup();

    const pathCoordinates = [
      [39.9070543, 32.8072134], [39.9076181, 32.8066003], [39.9092725, 32.8054312],
      [39.9087428, 32.8052597], [39.9081123, 32.8050119], [39.9074597, 32.8047806],
      [39.9067382, 32.8044797], [39.9055326, 32.8037317], [39.9050073, 32.8032606],
      [39.9039664, 32.8025281], [39.9031398, 32.8027227]
    ];

    const mainPolyline = L.polyline(pathCoordinates, { color: 'purple' }).addTo(map);

    const carIcon = L.divIcon({
      className: 'car-icon',
      html: '<div style="font-size: 24px;">🚗</div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    const carMarker = L.marker(startCoordinates, { icon: carIcon }).addTo(map);

    let currentIndex = 0;
    let traveledPath = [];
    let grayPolyline = L.polyline(traveledPath, { color: 'gray' }).addTo(map);

    const moveCar = () => {
      if (currentIndex < pathCoordinates.length - 1) {
        currentIndex++;
        const nextPoint = pathCoordinates[currentIndex];
        traveledPath.push(nextPoint);

        // Güncellenen gri polyline'ı yeniden ekle
        grayPolyline.setLatLngs(traveledPath);

        carMarker.setLatLng(nextPoint);
        map.flyTo(nextPoint, 18, { duration: 1 });
        setTimeout(moveCar, 2000); // Araba hareket hızını ayarlamak için bu değeri değiştirebilirsiniz
      }
    };

    moveCar();

  }, []);

  return <div key={`div-${startCoordinates}`}>
    <div id="map" key={`div2-${startCoordinates}`} style={{ height: 'calc(100vh - 140px)'}}></div>
  </div>;
};

export default Navigation;

// function Navigation() {
//   return (
//     <div>Navigation</div>
//   )
// }

// export default Navigation;