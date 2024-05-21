function updateVehicleLocation(map, vehicleMarker, newLat, newLon) {
    const latLng = new google.maps.LatLng(newLat, newLon);
    vehicleMarker.setPosition(latLng);
    map.panTo(latLng);
}
