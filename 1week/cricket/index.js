var aTags = document.querySelectorAll('header a');
for(var i=0; i<aTags.length; i++){
  aTags[i].onclick = function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));

    window.scrollTo ({
      'behavior' : 'smooth',
      'top' : target.offsetTop
    })
  }
}

var slider = document.querySelector('#slider');
var slides = document.querySelector('.slides');
var slide = document.querySelectorAll('.slide');

var currentSlide = 0;

setInterval(function() {
    var from = -(1024 * currentSlide);
    var to = from - 1024;
    slides.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide++;
    if (currentSlide === (slide.length - 1)) {
        currentSlide = 0;
    }
}, 3000);

// var links = document.querySelectorAll(".tabs-list li a");
// var items = document.querySelectorAll(".tabs-list li")
// for(var i=0; i<aTags.length; i++){
//   aTags[i].onclick = function(e) {
//     e.preventDefault();
//   }
// }

// for(var i=0; i<items.length; i++){
//   items[i].onclick
// }