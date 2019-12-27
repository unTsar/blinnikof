ymaps.ready(init);   

function init(){
    var myMap = new ymaps.Map("mapy", {
        center: [55.7574454, 37.5471324],
        zoom: 13,
        controls: ['typeSelector', 'trafficControl', 'fullscreenControl']

    }); 
    var zoomControl = new ymaps.control.ZoomControl({  
        options: {            
            position: {
                right: 20,
                bottom: 150
            } 
        }    
    });
    myMap.controls.add(zoomControl);

    var myPlacemark1 = new ymaps.Placemark([55.740249, 37.528370], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/point.png',
        iconImageSize: [96, 96],
        iconImageOffset: [-3, -90]
    });
    var myPlacemark2 = new ymaps.Placemark([55.768522, 37.680490], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/point.png',
        iconImageSize: [96, 96],
        iconImageOffset: [-3, -90]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.container.fitToViewport();
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);

}
