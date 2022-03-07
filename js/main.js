'use strict';

{
  // ハンバーガーメニュー実装

  $(".header_logo2_sp").click(function () {
      $(this).toggleClass('active');
  });

  document.querySelector('.header_logo2_sp').addEventListener('click', function(){
  document.querySelector('.header_menu_sp').classList.toggle('is-active');
  });

  const closed = document.querySelector('.header_menu_sp');
  closed.addEventListener('click', () => {
  document.querySelector('.header_menu_sp').classList.toggle('is-active');
  document.querySelector('.header_logo2_sp').classList.toggle('active');
  });


  // ヒーロエリアのスライドショー

  function move() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if(currentIndex > images.length -1) {
        currentIndex = 0;
      }


      images[currentIndex].classList.add('current');
      move();
    },5000)

  }
  
  const images = document.querySelectorAll('.top_wrapper li');
  let currentIndex = 0;
  move();

  
  // Intersection Observer API
  
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });


    // アコーディオンメニューの実装

    const dts = document.querySelectorAll('dt');

    dts.forEach(dt => {
      dt.addEventListener('click', () => {
        dt.parentNode.classList.toggle('appear');
  
        dts.forEach(el => {
          if (dt !== el) {
            el.parentNode.classList.remove('appear');
          }
        });
      });
    });
    

    // scrolle smooth

  window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  
    anchorLinksArr.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      });
    });
  });

}