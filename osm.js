function init() {
    let map = new OpenLayers.Map('vegamap'),
        markers = new OpenLayers.Layer.Markers("Markers"),
        zoom = 12;

    const from = new OpenLayers.Projection("EPSG:4326"),
        to = map.getProjectionObject();

    map.addLayer(new OpenLayers.Layer.OSM());

    console.info(getMarkers(map), 'SERGEY getMarkers(map)');
    getMarkers(map).forEach(m => markers.addMarker(m));

    map.addLayer(markers);

    let minskCenter = new OpenLayers.LonLat(27.55972, 53.90138)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
        );

    map.setCenter(minskCenter, zoom);
}

function getMarkers(map) {
    let markers = [];
    const from = new OpenLayers.Projection("EPSG:4326"),
        to = map.getProjectionObject();

    MARKERS.forEach(m => {
        m.geo.forEach(g => {
            const markerPos = new OpenLayers
                .LonLat(g.longitude, g.latitude)
                .transform(from, to);

            markers.push(new OpenLayers.Marker(markerPos));
        });
    });

    return markers;
}

document.addEventListener('DOMContentLoaded', () => init());