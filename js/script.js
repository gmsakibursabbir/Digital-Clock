const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// time
function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById("session");

  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}

setInterval(displayTime, 10);

// full screen touggle

if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
  const toggleBtn = document.querySelector(".js-toggle-fullscreen-btn");

  const styleEl = document.createElement("link");
  styleEl.setAttribute("rel", "stylesheet");
  styleEl.setAttribute("href", "https://codepen.io/tiggr/pen/poJoLyW.css");
  styleEl.addEventListener("load", function () {
    toggleBtn.hidden = false;
  });
  document.head.appendChild(styleEl);

  toggleBtn.addEventListener("click", function () {
    if (document.fullscreen) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      document.webkitCancelFullScreen();
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.documentElement.webkitRequestFullScreen();
    }
  });

  document.addEventListener("fullscreenchange", handleFullscreen);
  document.addEventListener("webkitfullscreenchange", handleFullscreen);

  function handleFullscreen() {
    if (document.fullscreen || document.webkitFullscreenElement) {
      toggleBtn.classList.add("on");
      toggleBtn.setAttribute("aria-label", "Exit fullscreen mode");
    } else {
      toggleBtn.classList.remove("on");
      toggleBtn.setAttribute("aria-label", "Enter fullscreen mode");
    }
  }
}
