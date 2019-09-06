$(document).ready(function () {
    // List of Advantage offices
    var offices = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    coordinates: [-117.8491357, 33.68315],
                    type: 'Point'                
                },
                properties: {
                    address: '18100 Von Karman Avenue, Suite 1000',
                    code: 'I',
                    city: 'Irvine, CA 92612',
                    title: 'Irvine Towers'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    coordinates: [-117.209298, 32.880391],
                    type: 'Point'
                },
                properties: {
                    address: '9520 Towne Centre Drive',
                    code: 'SD',
                    city: 'San Diego 92121',
                    title: 'San Diego office'
                }
            }
        ]
    };

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2RzbnlkZXJkZXYiLCJhIjoiY2swNnZ4ODB6MDEyZjNscGFuYXhnbzVrYyJ9.Yy8MxX3sxuGu0NVwxeFEJA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kdsnyderdev/ck08foh1q14mu1cnv84lem9cu',
        center: [-97.6114, 38.8403], // center on Salinas, Kansas
        zoom: 4.25
    });
    map.addControl(new mapboxgl.NavigationControl());

    // add layer with marked office locations to map
    map.on('load', function (e) {
        // Add the data to your map as a layer
        map.addLayer({
            id: 'locations',
            type: 'symbol',
            // Add a GeoJSON source containing place coordinates and information.
            source: {
                type: 'geojson',
                data: offices
            },
            layout: {
                'icon-image': 'marker-editor',
                'icon-allow-overlap': true,
            }
        });
    });

});