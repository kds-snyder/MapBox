$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2RzbnlkZXJkZXYiLCJhIjoiY2swNnZ4ODB6MDEyZjNscGFuYXhnbzVrYyJ9.Yy8MxX3sxuGu0NVwxeFEJA';

    var map = new mapboxgl.Map({
        container: 'map',
        boxZoom: true,
        style: 'mapbox://styles/kdsnyderdev/ck087tsv706x61cmqu8p4m6r7',
        center: [-97.6114, 38.8403],
        zoom: 4.5
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on('click', function (e) {
        console.log(e);
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['advantage-offices'] 
        });
        console.log(features);

        if (!features.length) {
            return;
        }

        var feature = features[0];
        var popup = new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p><p>' + feature.properties.address + '</p>')
            .addTo(map);
    });
    
});