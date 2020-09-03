var _window$popmotion = window.popmotion,
keyframes = _window$popmotion.keyframes,
easing = _window$popmotion.easing,
styler = _window$popmotion.styler;

var bodyStyler = styler(document.querySelector('.colors'));

keyframes({
  values: ['#FF1C68', '#14D790', '#198FE3', '#FF1C68'],
  duration: 10000,
  ease: easing.linear,
  loop: Infinity
}).start(bodyStyler.set('background'));


/*
for other sections in the page (if you enable it and not specify am id to work with will return a lot of errors in the browser js console)
var bodyStyler2 = styler(document.querySelector('.colors2'));

keyframes({
  values: ['#FF1C68', '#14D790', '#198FE3', '#FF1C68'],
  duration: 10000,
  ease: easing.linear,
  loop: Infinity
}).start(bodyStyler.set('background'));*/