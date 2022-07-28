///////////////////////////////////////////////////
/////////////////내비게이션 기능 구현하기////////////
///////////////////////////////////////////////////
var aTags = document.querySelectorAll('header a');
//var aTags = document.getElementsByClassName('header a');
for(var i=0; i<aTags.length; i++){
  aTags[i].onclick = function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    //var target = document.getElementById(this.getAttribute("href"))
    console.log(target);

    window.scrollTo ({
      'behavior' : 'smooth',
      'top' : target.offsetTop
    })   
  }
}
///////////////////////////////////////////////////
////////이미지 슬라이드기능 구현하기 (1)////////////
///////////////////////////////////////////////////
var slider = document.querySelector('#slider');
//var slider = document.getElementById('slider');
var slides = document.querySelector('.slides');
//var slides = document.getElementsByClassName('slides');
var slide = document.querySelectorAll('.slide');
//var slide = document.getElementsByClassName('slide');
var currentSlide = 0; 

// setInterval(함수, 시간(ms))
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
    //console.log('from :' + from, 'to:' + to);
    currentSlide++;
    if (currentSlide === (slide.length - 1)) {
        currentSlide = 0;
    }
}, 3000);

///////////////////////////////////////////////////
/////////////////탭 버튼 기능 구현하기////////////
///////////////////////////////////////////////////

var links = document.querySelectorAll(".tabs-list li a");
var items = document.querySelectorAll(".tabs-list li")
for(var i=0; i<links.length; i++){
  links[i].onclick = function(e) {
    e.preventDefault();
  }
}

for(var i=0; i<items.length; i++){
  items[i].onclick = function(){
    var tabID = this.querySelector("a").getAttribute("href"); 
    console.log(this.classList);
    document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item){
      item.classList.remove("active");
      //console.log('>>>', document.querySelectorAll(".tabs-list li, .tabs div.tab"));
    });
    document.querySelector(tabID).classList.add("active");
    this.classList.add("active");
  }
}

///////////////////////////////////////////////////
////////이미지 슬라이드 기능 구현하기(2)////////////
///////////////////////////////////////////////////
// 4) Click Image Slider
document.querySelector(".right-arrow").onclick = function () {
  var currentSlide = document.querySelector("#photo .slide.active");
  var nextSlide = currentSlide.nextElementSibling;
  if (nextSlide === null) {
      nextSlide = currentSlide.parentElement.firstElementChild;
  }
      currentSlide.animate({
      opacity: [1, 0]
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both"
  });
  currentSlide.classList.remove("active");
  nextSlide.animate({
      opacity: [0, 1]
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both"
  });
  nextSlide.classList.add("active");
}

//왼쪽 이미지 슬라이드 기능 구현
document.querySelector(".left-arrow").onclick = function () {
  var currentSlide = document.querySelector("#photo .slide.active");
  var preSlide = currentSlide.previousElementSibling;
  if (preSlide === null) {
      preSlide = currentSlide.parentElement.lastElementChild;
  }
      currentSlide.animate({
      opacity: [1, 0]
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both"
  });
  currentSlide.classList.remove("active");
  preSlide.animate({
      opacity: [0, 1]
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both"
  });
  preSlide.classList.add("active");
} 

