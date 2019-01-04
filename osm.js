function placeMarkers(map) {
    let icon = L.icon({
        iconUrl: 'images/marker-icon-green.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',

        iconSize:     [25, 41], // size of the icon
        shadowSize:   [41, 41], // size of the shadow
        iconAnchor:   [15, 40], // point of the icon which will correspond to marker's location
        shadowAnchor: [15, 40],  // the same for the shadow
        popupAnchor:  [-3, -40] // point from which the popup should open relative to the iconAnchor
    });

    MARKERS.forEach(m => {
        if (m.geo && m.geo.length > 0) {
            m.geo.forEach(g => L.marker([g.latitude, g.longitude], { icon }).addTo(map).bindPopup(popupText(g, m)));
        }
    });
}

function popupText(currentGeo, currentMarker) {
    let baseText = `<span class="geo-marker-popup"><span class="geo-name">${currentMarker.name}</span> <br>`;

    try {
        if (currentGeo.address) {
            baseText += `<span class="geo-label-text">Адрес:</span> ${currentGeo.address}<br>`;
        }

        if (currentGeo.timeOfWork) {
            baseText += `<span class="geo-label-text">Время работы:</span> ${currentGeo.timeOfWork}<br>`;
        }

        if (currentGeo.phones && currentGeo.phones.length > 0) {
            baseText += '<span class="geo-label-text">Телефоны:</span> ';
            currentGeo.phones.forEach(p => baseText += `${p}; `);
            baseText += '<br>';
        }

        if (currentMarker.links && currentMarker.links.length > 0) {
            currentMarker.links.forEach(l => baseText += `<a href="${l}">${l}</a><br>`);
        }
    } catch (e) {
        //silent
    }

    return baseText += '</span>';
}

function init() {
    const MINSK_CENTER = {
        latitude: 53.90138,
        longitude: 27.55972
    };
    const MAP_ID = 'vegamap';

    const DEFAULT_ZOOM = 12;
    const MAP_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


    let map = L.map(MAP_ID).setView([MINSK_CENTER.latitude, MINSK_CENTER.longitude], DEFAULT_ZOOM);

    L.tileLayer(MAP_LAYER, {attribution}).addTo(map);

    placeMarkers(map);
}

document.addEventListener('DOMContentLoaded', () => init());