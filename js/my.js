/* Strict Javascript */
"use strict";

/* Back to Top */
let totop = document.querySelector('.totop')
if (totop) {
  const toggletotop = () => {
    if (window.scrollY > 100) {
      totop.classList.add('active')
    } else {
      totop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggletotop)
  document.addEventListener('scroll', toggletotop)
}

/** Mobile Navbar Toggle*/
document.querySelector('.mobile-nav-toggle').addEventListener('click', function(e) {
  document.querySelector('#navbar').classList.toggle('navbar-mobile')
  this.classList.toggle('bi-list')
  this.classList.toggle('bi-x')
})

/* Enable Scroll on Load */
window.addEventListener('load', () => {
  document.getElementsByTagName("body")[0].style.overflow = "auto";
});

/* Loading Screen*/
let loader = document.querySelector('#loader');
if (loader) {
  window.addEventListener('load', () => {
    loader.remove()
  });
}

/* Scroll Trigger */
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".scrolltrig").forEach(scrolltrig => {
  ScrollTrigger.create({
    trigger: scrolltrig,
    onEnter: function() {
      document.getElementById(scrolltrig.id).classList.add("is-animated");
      scrolltrig.addEventListener("animationstart", function() {
        document.getElementById(scrolltrig.id).childNodes[1].classList.remove("isloaded");
      });
      scrolltrig.addEventListener("animationend", function() {
        document.getElementById(scrolltrig.id).childNodes[1].classList.add("isloaded");
      });
    }
  });
});

/* Games Hover Box */
Array.prototype.forEach.call(document.getElementsByClassName("game-box"), function(box) {
  box.addEventListener('mouseover', function() {
    if (box.classList.contains("isloaded")) {
      box.style.border = "4px solid #34b7a7";
      box.style.minWidth = box.getBoundingClientRect().width + "px";
      box.style.minHeight = box.getBoundingClientRect().height + "px";
      document.getElementById(box.childNodes[3].id).style.display = "none";
      document.getElementById(box.childNodes[5].id).style.display = "inline";
    }
  });
  let timer;
  box.onmouseout = function() {
    box.onmouseover = function() {
      if (timer) {
        clearTimeout(timer);
      }
    };
    timer = setTimeout(function() {
      box.style.border = "0px solid #34b7a7";
      box.style.minWidth = "auto";
      box.style.minHeight = "auto";
      document.getElementById(box.childNodes[3].id).style.display = "inline";
      document.getElementById(box.childNodes[5].id).style.display = "none";
    }, 200);
  };
});

/* Menus Hover Box */
Array.prototype.forEach.call(document.getElementsByClassName("menu-box"), function(box) {
  box.addEventListener('mouseover', function() {
      box.style.border = "4px solid #34b7a7";

  });
  let timer;
  box.onmouseout = function() {
    box.onmouseover = function() {
      if (timer) {
        clearTimeout(timer);
      }
    };
    timer = setTimeout(function() {
      box.style.border = "0px solid #34b7a7";
    }, 200);
  };
});

/* Enable Tooltips */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
