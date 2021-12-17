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

      var main = document.querySelector(".main");
      main.addEventListener("click", function () {
           if (screen.width <= 768) {
                main.style.display = "none";
           }
      });
      
      var btn_up = document.querySelectorAll(".btn-up");
      if (screen.width > 768) {
           for (let i = 0; i < btn_up.length; i++) {
                btn_up[i].style.display = "none";
           }
      }

      var swiper = new Swiper(".mySwiper", {
           slidesPerView: "auto",
      });
 });