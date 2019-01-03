function placeMarkers(map) {
    MARKERS.forEach(m => {
        if (m.geo && m.geo.length > 0) {
            m.geo.forEach(g => {
                L.marker([g.latitude, g.longitude]).addTo(map)
                    .bindPopup(`${m.name}<br>${m.address || ''} <br> ${m.timeOfWork || ''} <br> ${m.phones || ''}`);
            });
        }
    });
}

function init() {
    const MINSK_CENTER = {
        latitude: 53.90138,
        longitude: 27.55972
    };
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const MAP_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    let map = L.map('vegamap').setView([MINSK_CENTER.latitude, MINSK_CENTER.longitude], 12);

    L.tileLayer(MAP_LAYER, {attribution}).addTo(map);
    placeMarkers(map);
}

document.addEventListener('DOMContentLoaded', () => init());