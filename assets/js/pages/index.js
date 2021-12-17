 //sayfanın yüklemesini bitirdikten sonra 
 document.addEventListener('DOMContentLoaded', (event) => {

     var menuBtn = document.querySelector(".menu");
     menuBtn.addEventListener("click", function () {
         document.querySelector('.container').classList.toggle('toggle-menu');
     });

     var megaMenuBtn = document.querySelector(".mega-menu");
     megaMenuBtn.addEventListener("click", function () {
        document.querySelector('.container').classList.toggle('toggle-menu');
    });

     var swiper = new Swiper(".mySwiper", {
         direction: "vertical",
         mousewheel: true,
         slidesPerView: "auto",
         loop: true,
         centeredSlides: true,
     });
 });