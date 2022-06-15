var map;
map = L.map('stationMap').setView([23.3332725,120.6606653], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> | <a href="https://noob.tw/openstreetmap/">Tutorial 教學</a>',
		maxZoom: 18,
}).addTo(map);

var marker = L.marker([25.0002177,121.554961,18.14]);
marker.addTo(map);

$.getJSON('http://122.116.217.115:6150/Station/List/york/V1', function(r){
    L.geoJSON(r, {color: '#333', weight: 0.7}).addTo(map);
})