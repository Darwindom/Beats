let myMap;

const init = () => {
    var myMap = new ymaps.Map("map", {
        center: [34.783661, 32.097889],
        zoom: 11,
        controls: []
    });

    const coords = [
        [34.778379, 32.083803],
        [34.778073, 32.012313],
        [34.828436, 32.063012],
        [34.751213, 32.015823]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/Icons/location.png',
        iconImageSize: [15, 27],
        iconImageOffset: [-15, -27]
    })
}

cords.forEach(coord => {
    myCollection.add(new ymaps.placemark(cord));
});

myMap.geoObjects.add(myCollection);

ymaps.ready(init);