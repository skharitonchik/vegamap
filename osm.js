function placeMarkers(map) {
    MARKERS.forEach(m => {
        if (m.geo && m.geo.length > 0) {
            m.geo.forEach(g => L.marker([g.latitude, g.longitude]).addTo(map).bindPopup(popupText(g, m)));
        }
    });
}

function popupText(currentGeo, currentMarker) {
    let baseText = `${currentMarker.name} <br>`;

    try {
        if (currentGeo.address) {
            baseText += `${currentGeo.address}<br>`;
        }

        if (currentGeo.timeOfWork) {
            baseText += `${currentGeo.timeOfWork}<br>`;
        }

        if (currentGeo.phones && currentGeo.phones.length > 0) {
            currentGeo.phones.forEach(p => baseText += `${p}  `);
            baseText += '<br>';
        }

        if (currentMarker.links && currentMarker.links.length > 0) {
            currentMarker.links.forEach(l => baseText += `<a href="${l}">${l}</a><br>`);
        }
    } catch (e) {
        //silent
    }

    return baseText;
}

function init() {
    const MINSK_CENTER = {
        latitude: 53.90138,
        longitude: 27.55972
    };
    const MAP_ID = 'vegamap';

    const MAP_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


    let map = L.map(MAP_ID).setView([MINSK_CENTER.latitude, MINSK_CENTER.longitude], 12);

    L.tileLayer(MAP_LAYER, {attribution}).addTo(map);

    placeMarkers(map);
}

document.addEventListener('DOMContentLoaded', () => init());