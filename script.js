const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function firstpage(){
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: '-10',
    opacity:0,
    duration:1.5,
    ease: Expo.easeInout
  })
  .to(".boundelem", {
    y: '0',
    duration:0.6,
    ease: Expo.easeInout,
    delay:-1,
    stagger:.2
    
    
  })
  .from("#footer", {
    y: '-40',
    duration:1.5,
    opacity:0,
    ease: Expo.easeInout,
    delay:-1
    
    
  })
}

var timeout;

function circleflat() {
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function(dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function() {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function(dets) {
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleflat();
firstpage();


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3, 
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

const projects = document.getElementsByClassName('project');

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', function() {
        window.location.href = 'project/project.html';
    });
}



  document.querySelector("#circle").addEventListener("click", function() {
    var aboutSection = document.getElementById("iconset");
    smoothScrollTo(aboutSection);
  });
  
  function smoothScrollTo(target) {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: target.offsetTop },
      ease: "power3.inOut"
    });
  }
  

  // Scroll to the footer
  function scrollToFooter() {
    
    window.scrollTo(0, document.body.scrollHeight);

    
    setTimeout(function() {
      window.onscroll = null;
    }, 1000);
  } 