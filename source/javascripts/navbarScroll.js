window.onscroll = function() {myFunction()};

  // var banner = document.querySelector(".banner")
  var navbar = document.querySelector(".navbar-van-gorsel")
  var navbarLogo = document.querySelector("#navbar-logo")
  var navbarTextH5 = document.querySelector(".navbar-logo-text").children[0]
  var navbarTextP = document.querySelector(".navbar-logo-text").children[1]
  var hamburgerMenu = document.querySelector(".navbar-van-gorsel-item.hidden-md.hidden-lg")

  // var sticky = banner.offsetHeight - 50;
  var sticky = 100;

  function myFunction() {
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
      navbar.classList.remove("navbar-invisible")
      navbar.classList.add("navbar-visible")
    } else {
      navbar.classList.remove("navbar-visible")
      navbar.classList.add("navbar-invisible")
    }
  }
