if (window.innerWidth <= 1024) {
  $(".overlay-menu").height(window.innerHeight);
}

window.addEventListener("resize", () => {
  $(".overlay-menu").height(window.innerHeight);
});

//Sticky nav bar start
var mainNav = $(".navbar-wrapper");
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
//Sticky nav bar end

//Burger menu control start
const burger = document.querySelector(".burger-menu");
var timesClicked = 0;
var scrollTop1 = 0;
var scrollTop2 = 0;

$(".burger-menu").click(function () {
  var scrollTop1 = $(window).scrollTop();
  if (timesClicked % 2 != 0) {
    burger.classList.toggle("burger-menu-animation");
    burger.classList.toggle("burger-active");
    $(".menu-item").addClass("animation-reverse");
    $(".overlay-menu-wrapper").addClass("overlay-menu-invisible");
    $(".overlay-menu-wrapper").removeClass("overlay-menu-visible");

    window.setTimeout(function () {
      $(".social-media-icons").removeClass("transition-delay");
    }, 1000);

    $(".website-wrapper").removeClass("scroll-disabled");
    document.getElementById("empty-section").style.marginTop = "0px";
    window.scrollTo(0, scrollTop2);
  } else {
    $(".overlay-menu-wrapper").removeClass("overlay-menu-invisible");
    $(".overlay-menu").addClass("keyframes-forward");
    $(".menu-item").removeClass("animation-reverse");
    $(".overlay-menu").removeClass("keyframes-reverse");
    burger.classList.toggle("burger-active");
    burger.classList.toggle("burger-menu-animation");
    $(".menu-item").addClass("menu-item-display");
    $(".overlay-menu-wrapper").addClass("overlay-menu-visible");

    window.setTimeout(function () {
      $(".social-media-icons").addClass("transition-delay");
    }, 1000);

    window.setTimeout(function () {
      document.getElementById("empty-section").style.marginTop =
        -scrollTop1 + "px";
      $(".website-wrapper").addClass("scroll-disabled");
      mainNav.addClass("burger-menu-inView");
    }, 1000);
  }
  timesClicked++;
  if (timesClicked > 1) {
    timesClicked = 0;
  }
  scrollTop2 = scrollTop1;
});
//Burger menu control end

//Parallax effect start
var parallax = document.querySelectorAll("[data-speed]");

window.addEventListener("scroll", myscrollfunction);

function myscrollfunction() {
  for (let p_element of parallax) {
    var position = -window.scrollY * p_element.dataset.speed + 50;
    if (p_element.classList.contains("background-image")) {
      p_element.style.backgroundPositionY = -position + "%";
    } else {
      p_element.style.backgroundPositionY = position + "%";
    }
  }
}

//Parallax effect end

//Testimonial section carousel start
$(".carousel-dot").click(function () {
  let number = this.id;
  var wordLength = number.length;
  number = number.substring(wordLength - 1, wordLength);
  for (i = 0; i <= 4; i++) {
    if (number != i) {
      $(".carousel-dot" + i).removeClass("carousel-dot-active");
      $(".testimonial" + i).removeClass("testimonial-visible");
    } else {
      $(".carousel-dot" + number).addClass("carousel-dot-active");
      $(".testimonial" + number).addClass("testimonial-visible");
    }
  }
});
//Testimonial section carousel end

//Menu list choice start
$(".menu-list-type").click(function () {
  let number = this.id;
  var wordLength = number.length;
  number = number.substring(wordLength - 1, wordLength);
  for (i = 0; i <= 3; i++) {
    if (number != i) {
      $(".menu-list-type" + i).removeClass("item-underline");
      $(".menu-container" + i).removeClass("menu-container-visible");
    } else {
      $(".menu-list-type" + number).addClass("item-underline");
      $(".menu-container" + number).addClass("menu-container-visible");
    }
  }
});
//Menu list choice end

//Choose us section control start
$(".reason-header").click(function () {
  let number = this.id;
  var wordLength = number.length;
  number = number.substring(wordLength - 1, wordLength);
  const element = document.querySelector("#reason" + number);
  if (element.matches(".reason-open")) {
    $(".reason" + number).addClass("reason-closed");
    $(".reason" + number).removeClass("reason-open");
  } else {
    for (i = 0; i <= 3; i++) {
      if (number != i) {
        $(".reason" + i).addClass("reason-closed");
        $(".reason" + i).removeClass("reason-open");
      } else {
        $(".reason" + number).addClass("reason-open");
        $(".reason" + number).removeClass("reason-closed");
      }
    }
  }
});
//Choose us section control end

//On scroll animation start
if (!$(".column-guarantees").hasClass("animate-section-forward")) {
  $(".column-guarantees").addClass("animate-section-reverse");
}

$(window).on("scroll", function () {
  var sectionSelected = $(".animate-section-start");
  var sectionHeight = sectionSelected.outerHeight();
  var winTop = $(this).scrollTop();
  var windowHeight = $(window).height();
  var distance = 100;
  sectionSelected.each(function () {
    var sectionTop = $(this).offset().top;
    if ($(this).hasClass("transform-position")) {
      if (winTop >= sectionTop - windowHeight + distance) {
        $(this).addClass("animate-section-forward");
        $(this).removeClass("animate-section-reverse");
      }
      if (winTop < sectionTop - windowHeight + distance) {
        $(this).removeClass("animate-section-forward");
        $(this).addClass("animate-section-reverse");
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
//On scroll animation end
