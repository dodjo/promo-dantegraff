window.onload = function () {

  const burgerButton = document.querySelector(".burger");
  const burgerСontent = document.querySelector(".burger-menu");
  const burgerLinks = document.querySelector(".burger-menu__links").querySelectorAll('a');
  const btnEnter = document.querySelectorAll(".nav-button--enter");

  function BurgerToggle() {
    burgerButton.classList.toggle("active");
    burgerСontent.classList.toggle("active");
  }

  //Показать/скрыть меню бургер
  burgerButton.addEventListener('click', BurgerToggle);

  //Показать/скрыть меню бургер
  for (let i = 0; i < burgerLinks.length; i++) {
    burgerLinks[i].addEventListener('click', BurgerToggle);
  }

  //Скрыть окно авторизации
  document.querySelector(".modal__close").addEventListener('click', function () {
    document.querySelector(".modal").style.display = 'none';
  });

  //Показать окно авторизации
  for (let i = 0; i < btnEnter.length; i++) {
    btnEnter[i].addEventListener('click', function () {
      document.querySelector(".modal").style.display = 'block';
    });

  }


  $("#accordion").accordion({
    animate: 100,
    active: false,
    collapsible: true
  });

  let sliderIsLive = false;

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      if (sliderIsLive) {
        $('.cards-slider').slick('unslick');
        console.log("ok");
        sliderIsLive = false;
      }
    } else {
      if (!sliderIsLive) {

        $('.cards-slider').slick({
          arrows: false,
          infinite: false,
          centerMode: true,
          responsive: [{
              breakpoint: 576,
              settings: {
                centerPadding: '50px',
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: '30px',
              }
            }
          ]
        });

        $('.cards-slider').slick('slickGoTo', 1);
        sliderIsLive = true;
      }
    }
  });

};