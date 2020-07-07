const resizeWindow = () => {
  if (window.innerWidth <= 1024) {
    $(".overlay-menu").height(window.innerHeight);
  }

  window.addEventListener("resize", () => {
    $(".overlay-menu").height(window.innerHeight);
  });
};

resizeWindow();

var mainNav = $(".navbar-wrapper");

const stickyNavbar = () => {
  navbarHeight = $(".navbar").height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > navbarHeight * 2) {
      mainNav.addClass("burger-menu-sticky1");
    } else {
      mainNav.removeClass("burger-menu-sticky1");
    }

    if ($(window).scrollTop() > navbarHeight * 4) {
      mainNav.addClass("burger-menu-sticky2");
    } else {
      mainNav.removeClass("burger-menu-sticky2");
    }

    if ($(window).scrollTop() > navbarHeight * 6) {
      mainNav.addClass("burger-menu-inView");
    } else {
      mainNav.removeClass("burger-menu-inView");
    }
  });
};

stickyNavbar();

const burgerMenu = document.querySelector(".burger-menu");
var scrollTop1 = 0;
var scrollTop2 = 0;

$(burgerMenu).click(function () {
  var scrollTop1 = $(window).scrollTop();
  if ($(burgerMenu).hasClass("burger-active")) {
    $(burgerMenu).removeClass("burger-menu-animation burger-active");
    $(".overlay-menu-wrapper").addClass("overlay-menu-invisible").removeClass("overlay-menu-visible");
    $(".menu-item").addClass("animation-reverse");
    $(".website-wrapper").removeClass("black-background").removeClass("scroll-disabled");
    window.setTimeout(function () {
      $(".social-media-icons").removeClass("transition-delay");
    }, 1000);
    document.getElementById("empty-section").style.marginTop = "0px";
    window.scrollTo(0, scrollTop2);
  } else {
    $(burgerMenu).addClass("burger-menu-animation burger-active");
    $(".overlay-menu-wrapper").addClass("overlay-menu-visible").removeClass("overlay-menu-invisible");
    $(".overlay-menu").addClass("keyframes-forward").removeClass("keyframes-reverse");
    $(".menu-item").addClass("menu-item-display").removeClass("animation-reverse");
    $(".website-wrapper").addClass("black-background");
    window.setTimeout(function () {
      $(".social-media-icons").addClass("transition-delay");
    }, 1000);
    window.setTimeout(function () {
      document.getElementById("empty-section").style.marginTop = `${-scrollTop1}px`;
      $(".website-wrapper").addClass("scroll-disabled");
      mainNav.addClass("burger-menu-inView");
    }, 1000);
  }
  scrollTop2 = scrollTop1;
});

const parallaxEffect = () => {
  const parallax = document.querySelectorAll("[data-speed]");
  const myScrollFunction = () => {
    for (let parallaxElement of parallax) {
      var position = -window.scrollY * parallaxElement.dataset.speed + 50;
      if (parallaxElement.classList.contains("background-image")) {
        parallaxElement.style.backgroundPositionY = `${-position}%`;
      } else {
        parallaxElement.style.backgroundPositionY = `${position}%`;
      }
    }
  };
  window.addEventListener("scroll", myScrollFunction);
};

parallaxEffect();

//Testimonial section carousel start
$(".carousel-dot").click(function () {
  let number = this.id;
  let wordLength = number.length;
  number = number.substring(wordLength - 1, wordLength);
  for (i = 0; i <= 4; i++) {
    if (number != i) {
      $(`.carousel-dot${i}`).removeClass("carousel-dot-active");
      $(`.testimonial${i}`).removeClass("testimonial-visible");
    } else {
      $(`.carousel-dot${number}`).addClass("carousel-dot-active");
      $(`.testimonial${number}`).addClass("testimonial-visible");
    }
  }
});
//Testimonial section carousel end

//Menu list choice start
$(".menu-list-type").click(function () {
  let number = this.id;
  let wordLength = number.length;
  number = number.substring(wordLength - 1, wordLength);
  for (let i = 0; i <= 3; i++) {
    if (number != i) {
      $(`.menu-list-type${i}`).removeClass("item-underline");
      $(`.menu-container${i}`).removeClass("menu-container-visible");
    } else {
      $(`.menu-list-type${number}`).addClass("item-underline");
      $(`.menu-container${number}`).addClass("menu-container-visible");
    }
  }
});
//Menu list choice end

//Choose us section control start
$(".reason-header").click(function () {
  let number = this.id;
  let wordLength = number.length;
  number = number.substring(wordLength - 1, wordLength);
  const element = document.querySelector(`#reason${number}`);
  if (element.matches(".reason-open")) {
    $(`.reason${number}`).addClass("reason-closed").removeClass("reason-open");
  } else {
    for (let i = 0; i <= 3; i++) {
      if (number != i) {
        $(`.reason${i}`).addClass("reason-closed").removeClass("reason-open");
      } else {
        $(`.reason${number}`).addClass("reason-open").removeClass("reason-closed");
      }
    }
  }
});
//Choose us section control end

const animateSectionsOnScroll = () => {
  if (!$(".column-guarantees").hasClass("animate-section-forward")) {
    $(".column-guarantees").addClass("animate-section-reverse");
  }

  $(window).on("scroll", function () {
    let sectionSelected = $(".animate-section-start");
    let winTop = $(this).scrollTop();
    let windowHeight = $(window).height();
    let distance = 100;
    sectionSelected.each(function () {
      let sectionTop = $(this).offset().top;
      if ($(this).hasClass("transform-position")) {
        if (winTop >= sectionTop - windowHeight + distance) {
          $(this).addClass("animate-section-forward").removeClass("animate-section-reverse");
        }
        if (winTop < sectionTop - windowHeight + distance) {
          $(this).addClass("animate-section-reverse").removeClass("animate-section-forward");
        }
      } else {
        $(this).addClass("animate-opacity-none");
        if (winTop >= sectionTop - windowHeight + 80) {
          $(this).addClass("animate-opacity");
        } else {
          $(this).removeClass("animate-opacity");
        }
      }
    });
  });
};
animateSectionsOnScroll();
