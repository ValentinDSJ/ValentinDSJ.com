const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: '0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
tl.to('.intro', {y: '-100%', duration: 1}, '-=1.5');
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=1.5')
  .call(history.pushState({
    id: 'home'
  }, 'Home', '/'));

const homeBtn = document.querySelector('#btn-home');
homeBtn.addEventListener('click', function(event) {
  tl.fromTo('.about', {x: '0%', duration: 1.5}, {x: '100%', duration: 1.5});
  tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: .5});
  history.pushState({
    id: 'home'
  }, 'Home', '/');
});

const aboutBtn = document.querySelector('#btn-about');
aboutBtn.addEventListener('click', function(event) {
  tl.fromTo('.about', {x: '100%', duration: 1.5}, {x: 0, y: 0, duration: 1.5});
  tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: .5});
  history.pushState({
    id: 'about'
  }, 'About', '/about');
});

const skillsIcon = document.querySelectorAll('.skills img');
skillsIcon.forEach(function(elem, i) {
  elem.addEventListener('mouseenter', function(event) {
    tl.to(elem, {css: {scale: 2.5}, duration: .25}, '-=.5');
  });
  elem.addEventListener('mouseleave', function(event) {
    tl.to(elem, {css: {scale: 1}, duration: .25});
  });
});

window.addEventListener('popstate', function (event) {
  if (history.state && history.state.id === 'home') {
    tl.fromTo('.about', {x: '0%', duration: 1.5}, {x: '100%', duration: 1.5});
    tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: .5});
  } else if (history.state && history.state.id === 'about') {
    tl.fromTo('.about', {x: '100%', duration: 1.5}, {x: 0, y: 0, duration: 1.5});
    tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: .5});
  }
}, false);
