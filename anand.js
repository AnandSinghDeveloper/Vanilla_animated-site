// locomotive 

const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

// gsap to animate 
gsap.from('.nlink', {
  stagger: .2,
  y:20,
  duration: 1,
  ease: Power2,
  opacity: 0

});

Shery.textAnimate(".headings h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from('#anim2', {
  stagger: .2,
  y:20,
  duration: 1,
  ease: Power2,
  opacity: 0

});