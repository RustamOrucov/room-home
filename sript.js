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
  let slidesImg = document.getElementsByClassName("mySlidesimg");
  
  if (n > slides.length && n>slidesImg.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    slidesImg[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  
  slidesImg[slideIndex-1].style.display = "block";  
  
}
function Hide(){
  let menuHide=document.querySelector('.menulist')
  menuHide.style.visibility='visible'
  document.querySelector('.bar').style.visibility='hidden'
  document.querySelector('.navmenu').style.backgroundColor='white'
  document.querySelectorAll('.link').forEach(el => {
     el.style.color='black'
     document.querySelector('.close').style.visibility='visible'
    });
  }
  function Close(){
    let menuH=document.querySelector('.menulist')
    document.querySelector('.close').style.visibility='hidden'
  menuH.style.visibility='hidden'
  document.querySelector('.bar').style.visibility='visible'
  
  document.querySelector('.navmenu').style.backgroundColor='transparent'

}