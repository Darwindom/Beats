let myMap;

const init = () => {
    var myMap = new ymaps.Map("map", {
        center: [31.238567, 34.882650],
        zoom: 11,
        controls: []
    });

    const coords = [
        [31.228023, 34.798577],
        [31.064017, 35.030540],
        [31.304216, 34.625439],
        [31.365386, 34.810951]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/Icons/location.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-46, -57]
    });


coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
});

myMap.geoObjects.add(myCollection);

myMap.behaviors.disable('scrollZoom');

}
ymaps.ready(init);