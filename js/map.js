
function initMap() {

    var locations = [
        ['Sankhamul Branch', 27.679876, 85.329920],
        ['Bouddha Branch', 27.721599, 85.3745483],
        ['Putalishadak Branch', 27.7010209, 85.3198485],
        ['Kumaripati Branch', 27.6676777, 85.3168587],
        ['New Road Branch', 27.7032743, 85.3093911]
    ];

    var map = new google.maps.Map(document.getElementById('map1'), {
        zoom: 13,
        center: new google.maps.LatLng(27.7010209, 85.3198485),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
scrollwheel: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map

        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));

    }
}