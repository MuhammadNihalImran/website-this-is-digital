gsap.from("#page1 > h1,#page1>#find",{
    opacity:0,
    delay:0.5,
    duration:2,
})
gsap.from("#page1 :nth-child(2)",{
    opacity:0,
    delay:0.4,
    duration:1,
    y:100,

})
gsap.from("#page1 :nth-child(3)",{
    opacity:0,
    delay:0.4,
    duration:1,
    x:100,
})
gsap.from("#page1 :nth-child(4)",{
    opacity:0,
    delay:0.4,
    duration:1,
    y: -200,
})
gsap.from("#center>h3 , #center>h1, #center>#About",{
     opacity:0,
    //  scale:0,
     duration:1,
    //  ease: Expo.easeInOut,
     stagger:0.4,
     y:50,
     scrollTrigger:{
         trigger:"#center",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 20%",
        scrab:true,
     }
})

gsap.from("#lft1 img:first-child, #lft1 img:nth-child(2), #lft2 img:nth-child(1), #lft2 img:nth-child(2),#pge3-rgt #center1",{
  opacity:0,
     duration:1,
     stagger:0.4,
     y:50,
     scrollTrigger:{
         trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 20%",
        scrab:true,
     }
})


gsap.from(".fc-content",{
  opacity:0,
  duration:1,
  // stagger:0.4,
  y:50,
  scrollTrigger:{
      trigger:"#footer",
     scroller:"body",
    //  markers:true,
     start:"top 50%",
     end:"top 20%",
     scrab:true,
  }
})
   


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });