ymaps.ready(init);    
function init(){ 
    var myMap = new ymaps.Map("mapy", {
        center: [55.76201170, 37.55397527],
        zoom: 16,
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

    var myPlacemark = new ymaps.Placemark([55.76224157, 37.55588500], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/point.png',
        iconImageSize: [96, 96],
        iconImageOffset: [-3, -90]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.container.fitToViewport();
    myMap.geoObjects.add(myPlacemark);
}
