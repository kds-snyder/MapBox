$(document).ready(function () {
    // List of Advantage offices
    var geojson = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    coordinates: [-117.8491357, 33.68315],
                    type: 'Point'                
                },
                properties: {
                    address: '18100 Von Karman Avenue, Suite 1000, Irvine, CA 92612',
                    code: 'I',
                    description: 'Irvine Towers',
                    title: 'Irvine office'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    coordinates: [-117.209298, 32.880391],
                    type: 'Point'
                },
                properties: {
                    address: '9520 Towne Centre Drive, San Diego 92121',
                    code: 'SD',
                    description: 'San Diego office',
                    title: 'San Diego office'
                }
            }
        ]
    };

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2RzbnlkZXJkZXYiLCJhIjoiY2swNnZ4ODB6MDEyZjNscGFuYXhnbzVrYyJ9.Yy8MxX3sxuGu0NVwxeFEJA';
    var map = new mapboxgl.Map({
        container: 'map',
        boxZoom: true,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-97.6114, 38.8403], // center on Salinas, Kansas
        zoom: 4.5
    });
    map.addControl(new mapboxgl.NavigationControl());

    // add markers to map
    geojson.features.forEach(function (marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p><p>' + marker.properties.address + '</p>'))
            .addTo(map);
    });

});