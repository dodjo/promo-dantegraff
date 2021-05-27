document.addEventListener("DOMContentLoaded", function(event) {

  const burgerButton = document.querySelector(".burger");
  const burgerСontent = document.querySelector(".burger-menu");
  const burgerLinks = document.querySelector(".burger-menu__links").querySelectorAll('a');

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
  document.querySelectorAll(".modal__close").forEach((el) => {
    el.addEventListener('click', function () {
      document.querySelectorAll(".modal").forEach((el) => {
        el.style.display = 'none';
      })

    });
  })

  //Показать окно авторизации
  document.querySelectorAll(".nav-button--enter").forEach((el) => {
    el.addEventListener('click', function () {
      document.querySelector("#modal-enter").style.display = 'block';
    });
  })

  //Показать окно регистрации
  document.querySelectorAll(".nav-button--reg").forEach((el) => {
    el.addEventListener('click', function () {
      document.querySelector("#modal-reg").style.display = 'block';
    });
  })


  //Аккордион
  document.querySelectorAll(".accordion__title").forEach((el) => {
    el.addEventListener('click', function () {
      this.classList.toggle("active");
      const body = this.nextElementSibling;
      if (body.style.display === "block") {
        body.style.display = "none";
      } else {
        body.style.display = "block";
      }
    })
  });

  //Подсветка карточек в блоке "КАК ЭТО РАБОТАЕТ?"
  const card = document.querySelectorAll('.card')
  card.forEach((el) => {
    el.addEventListener('mouseenter', function () {
      el.classList.add('active');
    });
    el.addEventListener('mouseleave', function () {
      el.classList.remove('active');
    })
  });

});