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

     var leftContent = new Swiper(".left-content .swiper", {
          mousewheel: true,
          slidesPerView: "auto",
          freeMode: true,
          breakpoints: {
               768: {
                    direction: "horizontal"
               },
               1024: {
                    direction: "vertical"
               }
          }
     });

     var rightContent = new Swiper(".right-content .swiper", {
          direction: "vertical",
          slidesPerView: "auto",
          freeMode: true,
          mousewheel: true,
     });
});