function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 53.9,
            lng: 27.5667
        },
        scrollwheel: true,
        zoom:11
    });
}