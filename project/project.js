const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true, // Enable smooth scrolling
});

function firstpage() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInout
  })
  .to(locoScroll.scroll.instance, {
    scrollTo: ".projectDetails", // Scroll to the project details section
    duration: 0.6,
    ease: Expo.easeInout,
    delay: -1,
  });
}



var timeout;

function circleflat() {
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function(dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(1.4, 1.9, dets.clientX - xprev);
    yscale = gsap.utils.clamp(1.4, 1.9, dets.clientY - yprev);

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

// "Read More"  project 1
document.getElementById("readMore1").addEventListener("click", function(e) {
  e.preventDefault();
  var additionalContent = document.getElementById("additionalContent1");
  additionalContent.style.display = additionalContent.style.display === "block" ? "none" : "block";
});


