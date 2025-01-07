let center = [46.672205, 38.267018];

function init() {
  let map = new ymaps.Map("map-test", {
    center: center,
    zoom: 10,
  });

  // let placemark = new ymaps.Placemark(
    // center,
    // {
      // balloonContentHeader: "Хедер балуна",
      // balloonContentBody: ",Боди балуна",
      // balloonContentFooter: ",Подвал",
    // },
    // {
      // iconLayout: "default#image",
      // iconImageHref: "https://cdn-icons-png.flaticon.com/256/2776/2776067.png",
      // iconImageSize: [50, 50],
      // iconImageOffset: [0, 0],
    // }
  // );

  let placemark = new ymaps.Placemark(
    center,
    {
      balloonContent: `
    
    <div class ="balloon">      
<div class ="balloon__address">ул.Высоцкого 24</div>
<div class ="balloon__contacts">
<a href="tel:+79180000000">+79180000000</a>
</div>
    </div>   `,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "https://cdn-icons-png.flaticon.com/256/2776/2776067.png",
      iconImageSize: [50, 50],
      iconImageOffset: [0, 0],
    }
  );

  // map.controls.remove("geolocationControl"); // удаляем геолокацию
  // map.controls.remove("searchControl"); // удаляем поиск
  // map.controls.remove("trafficControl"); // удаляем контроль трафика
  // map.controls.remove("typeSelector"); // удаляем тип
  // map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  // map.controls.remove("rulerControl"); // удаляем контрол правил
  // map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)


  map.geoObjects.add(placemark);
  placemark.balloon.open();
}

ymaps.ready(init);
