
//
// We use tweens to animate "things"... in this case we are animating an svg element
//
TweenLite.fromTo(".circle-1", 1, {drawSVG:"0 5%"}, {drawSVG:"9% 100%"});




var tl = new TimelineMax({repeat:4, repeatDelay:0})


tl.to("#redBox", 1, {x:550})
  .to("#blueBox", 1, {x:550}, "-=0.5")
  .to(".circle-2", 1,  {drawSVG:"0 5%"}, {drawSVG:"9% 100%"})
  .to(".circle-3", 1,  {drawSVG:"0 5%"}, {drawSVG:"9% 100%"});
  

//
// We can animate svg elements along side anything else we want with gsap :) 
//