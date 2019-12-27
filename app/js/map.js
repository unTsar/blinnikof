ymaps.ready(init);   

function init(){
    if(document.getElementById('mapy').offsetWidth <= 767){
        var MapZoomVal = 11;
        var MapCenterVal = [55.754567, 37.614910];
    }
    if(document.getElementById('mapy').offsetWidth >= 768){
        var MapZoomVal = 13;
        var MapCenterVal = [55.7574454, 37.5471324];
    }
    var myMap = new ymaps.Map("mapy", {
        center: MapCenterVal,
        zoom: MapZoomVal,
        controls: ['typeSelector', 'trafficControl', 'fullscreenControl']

    }); 
    myMap.events.add('sizechange', function(e){ 
        if(document.getElementById('mapy').offsetWidth <= 767){
            myMap.setZoom(11);
            myMap.setCenter([55.754567, 37.614910], 11);
        }
        if(document.getElementById('mapy').offsetWidth >= 768){
            myMap.setZoom(13);
            myMap.setCenter([55.7574454, 37.5471324], 13);
        }
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
