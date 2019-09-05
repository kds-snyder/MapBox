$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2RzbnlkZXJkZXYiLCJhIjoiY2swNnZ4ODB6MDEyZjNscGFuYXhnbzVrYyJ9.Yy8MxX3sxuGu0NVwxeFEJA';

    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding.forwardGeocode({
        query: 'Salina, Kansas',
        autocomplete: false,
        limit: 1
    })
        .send()
        .then(function (response) {
            if (response && response.body && response.body.features && response.body.features.length) {
                console.log('geocode response: ');
                console.log(response);
                var centerFeature = response.body.features[0];

                var map = new mapboxgl.Map({
                    container: 'map',
                    boxZoom: true,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: centerFeature.center,
                    zoom: 4
                });

                mapboxClient.geocoding.forwardGeocode({
                    query: 'San Diego, California',
                    autocomplete: false,
                    limit: 1
                })
                    .send()
                    .then(function (response) {
                        if (response && response.body && response.body.features && response.body.features.length) {
                            console.log('geocode response: ');
                            console.log(response);
                            var sdFeature = response.body.features[0];

                            new mapboxgl.Marker()
                                .setLngLat(sdFeature.center)
                                .addTo(map);
                        }
                    });
            }
        });
});