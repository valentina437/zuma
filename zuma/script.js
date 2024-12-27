let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

let slideInterval = setInterval(function() {
    plusSlides(1);
}, 3000); // 3000 мс = 3 секунды

// Остановка автоматического переключения при наведении курсора
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
});
slideshowContainer.addEventListener('mouseout', function() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 3000);
});







