var rawAreaCoords = [
    { "lat": 42.634211303261544, "lng": 23.20621490478516 },
    { "lat": 42.7520544036665, "lng": 23.20621490478516 },
    { "lat": 42.7520544036665, "lng": 23.469886779785156 },
    { "lat": 42.634211303261544, "lng": 23.469886779785156 }
];
var areaBoundaries = rawAreaCoords.map(function (single) {
    return L.latLng(single);
});
