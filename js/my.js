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

/* Calculates Home Page Hight And Image Map For Desktop*/
window.addEventListener('load', () => {
let  rect = document.getElementById('header').getBoundingClientRect();

  document.getElementById("home").style.setProperty('height', "calc(100vh - "+ rect.height +"px)");

  let  recte = document.getElementById('home').getBoundingClientRect();

  let  xpos = recte.width * 0.28 +"px";
  let  ypos = recte.height * 0.28 +"px";

  let  xpos1 = recte.width * 0.26 +"px";
  let  ypos1 = recte.height * 0.62 +"px";
  let  xpos11 = recte.width * 0.43 +"px";
  let  ypos11 = recte.height +"px";

  let  xpos2 = recte.width * 0.52 +"px";
  let  ypos2= recte.height * 0.54 +"px";
  let  xpos22 = recte.width * 0.70 +"px";
  let  ypos22 = recte.height  +"px";

  let  xpos3 = recte.width * 0.74 +"px";
  let  ypos3= recte.height * 0.28 +"px";
  let  xpos33 = recte.width * 0.88 +"px";
  let  ypos33 = recte.height * 0.68 +"px";

  let  xpos4 = recte.width * 0.74 +"px";
  let  xpos44 = recte.width +"px";
  let  ypos44 = recte.height * 0.26 +"px";

  let  xpos5 = recte.width * 0.08 +"px";
  let  ypos5= recte.height * 0.33 +"px";
  let  xpos55 = recte.width * 0.32 +"px";
  let  ypos55 = recte.height * 0.63 +"px";

  let img = document.getElementById("home");
  let map = document.createElement("map");
  map.name = "myMap";

  let area = document.createElement("area");
  area.shape = "rect";
  area.coords = "0,0,"+xpos+","+ypos;
  area.href="events.html";
  area.id="area0";

  let area2 = document.createElement("area");
  area2.shape = "rect";
  area2.coords = xpos1+","+ypos1+","+xpos11+","+ypos11;
  area2.href="events.html";
  area2.id="area1";

  let area3 = document.createElement("area");
  area3.shape = "rect";
  area3.coords = xpos2+","+ypos2+","+xpos22+","+ypos22;
  area3.href="arcade.html";
  area3.id="area2";

  let area4 = document.createElement("area");
  area4.shape = "rect";
  area4.coords = xpos3+","+ypos3+","+xpos33+","+ypos33;
  area4.href="board.html";
  area4.id="area3";

  let area5 = document.createElement("area");
  area5.shape = "rect";
  area5.coords = xpos4+",0,"+xpos44+","+ypos44;
  area5.href="events.html";
  area5.id="area4";

  let area6 = document.createElement("area");
  area6.shape = "rect";
  area6.coords = xpos5+","+ypos5+","+xpos55+","+ypos55;
  area6.href="parties.html";
  area6.id="area5";


  map.appendChild(area);
  map.appendChild(area2);
  map.appendChild(area3);
  map.appendChild(area4);
  map.appendChild(area5);
  map.appendChild(area6);
  home.appendChild(map);

  img.setAttribute('usemap', "#myMap");
});

/* Calculates Home Page Hight And Image Map For Mobile*/
window.addEventListener('load', () => {
  let  rect = document.getElementById('header').getBoundingClientRect();
  
    document.getElementById("homemobile").style.setProperty('height', "calc(100vh - "+ rect.height +"px)");
  
    let  recte = document.getElementById('homemobile').getBoundingClientRect();
  
    let  xpos = recte.width * 0.50 +"px";
    let  ypos = recte.height * 0.14 +"px";
  
    let  xpos1 = recte.width * 0.63 +"px";
    let  ypos1 = recte.height * 0.52 +"px";
    let  xpos11 = recte.width  +"px";
    let  ypos11 = recte.height * 0.77 +"px";
  
    let  xpos2 = recte.width * 0.10 +"px";
    let  ypos2= recte.height * 0.65 +"px";
    let  xpos22 = recte.width * 0.42 +"px";
    let  ypos22 = recte.height * 0.92 +"px";
  
    let  xpos3 = recte.width * 0.65 +"px";
    let  ypos3= recte.height * 0.09 +"px";
    let  xpos33 = recte.width * 0.92 +"px";
    let  ypos33 = recte.height * 0.31 +"px";
  
    let  xpos4 = recte.width * 0.56 +"px";
    let  ypos4 = recte.height * 0.82 +"px";
    let  xpos44 = recte.width +"px";
    let  ypos44 = recte.height +"px";
  
    let  xpos5 = recte.width * 0 +"px";
    let  ypos5= recte.height * 0.24 +"px";
    let  xpos55 = recte.width * 0.42 +"px";
    let  ypos55 = recte.height * 0.43 +"px";
  
    let img = document.getElementById("homemobile");
    let map = document.createElement("map");
    map.name = "myMap2";
  
    let area = document.createElement("area");
    area.shape = "rect";
    area.coords = "0,0,"+xpos+","+ypos;
    area.href="events.html";
    area.id="area0m";
  
    let area2 = document.createElement("area");
    area2.shape = "rect";
    area2.coords = xpos1+","+ypos1+","+xpos11+","+ypos11;
    area2.href="events.html";
    area2.id="area1m";
  
    let area3 = document.createElement("area");
    area3.shape = "rect";
    area3.coords = xpos2+","+ypos2+","+xpos22+","+ypos22;
    area3.href="arcade.html";
    area3.id="area2m";
  
    let area4 = document.createElement("area");
    area4.shape = "rect";
    area4.coords = xpos3+","+ypos3+","+xpos33+","+ypos33;
    area4.href="board.html";
    area4.id="area3m";
  
    let area5 = document.createElement("area");
    area5.shape = "rect";
    area5.coords = xpos4+","+ypos4+","+xpos44+","+ypos44;
    area5.href="events.html";
    area5.id="area4m";
  
    let area6 = document.createElement("area");
    area6.shape = "rect";
    area6.coords = xpos5+","+ypos5+","+xpos55+","+ypos55;
    area6.href="parties.html";
    area6.id="area5m";
  
  
    map.appendChild(area);
    map.appendChild(area2);
    map.appendChild(area3);
    map.appendChild(area4);
    map.appendChild(area5);
    map.appendChild(area6);
    home.appendChild(map);
  
    img.setAttribute('usemap', "#myMap2");
  });

/* Calculates Home Page Hight And Image Map on Resize For Desktop*/
window.addEventListener('resize', function(event) {
  let  rect = document.getElementById('header').getBoundingClientRect();

  document.getElementById("home").style.setProperty('height', "calc(100vh - "+ rect.height +"px)");

  let  recte = document.getElementById('home').getBoundingClientRect();

  let  xpos = recte.width * 0.28 +"px";
  let  ypos = recte.height * 0.28 +"px";

  let  xpos1 = recte.width * 0.26 +"px";
  let  ypos1 = recte.height * 0.62 +"px";
  let  xpos11 = recte.width * 0.43 +"px";
  let  ypos11 = recte.height +"px";

  let  xpos2 = recte.width * 0.52 +"px";
  let  ypos2= recte.height * 0.54 +"px";
  let  xpos22 = recte.width * 0.70 +"px";
  let  ypos22 = recte.height  +"px";

  let  xpos3 = recte.width * 0.74 +"px";
  let  ypos3= recte.height * 0.28 +"px";
  let  xpos33 = recte.width * 0.88 +"px";
  let  ypos33 = recte.height * 0.68 +"px";

  let  xpos4 = recte.width * 0.74 +"px";
  let  xpos44 = recte.width +"px";
  let  ypos44 = recte.height * 0.26 +"px";

  let  xpos5 = recte.width * 0.08 +"px";
  let  ypos5= recte.height * 0.33 +"px";
  let  xpos55 = recte.width * 0.32 +"px";
  let  ypos55 = recte.height * 0.63 +"px";


  let area = document.getElementById("area0");
  area.coords = "0,0,"+xpos+","+ypos;

  let area2 = document.getElementById("area1");
  area2.coords = xpos1+","+ypos1+","+xpos11+","+ypos11;


  let area3 = document.getElementById("area2");
  area3.coords = xpos2+","+ypos2+","+xpos22+","+ypos22;

  let area4 = document.getElementById("area3");
  area4.coords = xpos3+","+ypos3+","+xpos33+","+ypos33;


  let area5 = document.getElementById("area4");
  area5.coords = xpos4+",0,"+xpos44+","+ypos44;

  let area6 = document.getElementById("area5");
  area6.coords = xpos5+","+ypos5+","+xpos55+","+ypos55;
 
 
}, true);

/* Calculates Home Page Hight And Image Map on Resize For Mobile */
window.addEventListener('resize', function(event) {
  let  rect = document.getElementById('header').getBoundingClientRect();

  document.getElementById("homemobile").style.setProperty('height', "calc(100vh - "+ rect.height +"px)");

  let  recte = document.getElementById('homemobile').getBoundingClientRect();

  let  xpos = recte.width * 0.50 +"px";
  let  ypos = recte.height * 0.14 +"px";

  let  xpos1 = recte.width * 0.63 +"px";
  let  ypos1 = recte.height * 0.52 +"px";
  let  xpos11 = recte.width  +"px";
  let  ypos11 = recte.height * 0.77 +"px";

  let  xpos2 = recte.width * 0.10 +"px";
  let  ypos2= recte.height * 0.65 +"px";
  let  xpos22 = recte.width * 0.42 +"px";
  let  ypos22 = recte.height * 0.92 +"px";

  let  xpos3 = recte.width * 0.65 +"px";
  let  ypos3= recte.height * 0.09 +"px";
  let  xpos33 = recte.width * 0.92 +"px";
  let  ypos33 = recte.height * 0.31 +"px";

  let  xpos4 = recte.width * 0.56 +"px";
  let  ypos4 = recte.height * 0.82 +"px";
  let  xpos44 = recte.width +"px";
  let  ypos44 = recte.height +"px";

  let  xpos5 = recte.width * 0 +"px";
  let  ypos5= recte.height * 0.24 +"px";
  let  xpos55 = recte.width * 0.42 +"px";
  let  ypos55 = recte.height * 0.43 +"px";


  let area = document.getElementById("area0m");
  area.coords = "0,0,"+xpos+","+ypos;

  let area2 = document.getElementById("area1m");
  area2.coords = xpos1+","+ypos1+","+xpos11+","+ypos11;


  let area3 = document.getElementById("area2m");
  area3.coords = xpos2+","+ypos2+","+xpos22+","+ypos22;

  let area4 = document.getElementById("area3m");
  area4.coords = xpos3+","+ypos3+","+xpos33+","+ypos33;


  let area5 = document.getElementById("area4m");
  area5.coords = xpos4+","+ypos4+","+xpos44+","+ypos44;

  let area6 = document.getElementById("area5m");
  area6.coords = xpos5+","+ypos5+","+xpos55+","+ypos55;
 
 
}, true);


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
