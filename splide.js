//splide code for futurall.com

document.addEventListener("DOMContentLoaded", function () {
  function imageSlider() {
    let splides = document.getElementsByClassName("splide image__slider");

    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      let showArrows = true;
      let slideCount = splides[i].getElementsByClassName("splide__slide")
        .length;
      if (slideCount < 2) {
        showArrows = false;
      }

      new Splide(splides[i], {
        type: "slide",
        autoWidth: true,
        focus: 0,
        pagination: false,
        trimSpace: false,
        //omitEnd: true,
        drag: "free",
        waitForTransition: false,
        updateOnMove: true,
        speed: 600,
        snap: true, ///snaps to position
        arrows: showArrows,
        flickMaxPages: 0,
        flickPower: 300,
        lazyLoad: "nearby",
        classes: {
          arrow: "splide__arrow gallery__arrow"
        }
        //If mobile, set max flick to one
      }).mount();
    }
  }

  imageSlider();
});
