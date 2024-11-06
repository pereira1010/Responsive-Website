document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.addEventListener("mouseover", function() {
      video.play();
    });

    video.addEventListener("mouseout", function() {
      video.pause();
      video.currentTime = 0; // Reset the video to the start
    });
  });
});
window.addEventListener("scroll", function(){
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.screenY > 0)
})