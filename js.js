const timeDiv = document.createElement("div");
let timeSpeed = 1.0;

timeDiv.innerHTML = `speed : ${timeSpeed}`;
timeDiv.setAttribute("style", "position: absolute; bottom: 10px;left: 10px;");
document.body.appendChild(timeDiv);

document.addEventListener("keydown", function (event) {
  const vid = document.getElementsByTagName("video")[0];
  const videoTime = document.getElementsByTagName("video")[0].currentTime;
  const videoSpeed = document.getElementsByTagName("video")[0].playbackRate;

  switch (event.key) {
    case "ArrowLeft":
    case "h":
      vid.currentTime = videoTime - 10;
      break;

    case "ArrowRight":
    case "l":
      vid.currentTime = videoTime + 10;
      break;

    case "ArrowUp":
    case "k":
      timeSpeed += 0.5;
      timeDiv.innerHTML = `Player Speed : ${timeSpeed}`;
      vid.playbackRate = timeSpeed;

      break;

    case "ArrowDown":
    case "j":
      timeSpeed -= 0.5;
      timeDiv.innerHTML = `Player Speed : ${timeSpeed}`;
      vid.playbackRate = timeSpeed;
      break;

    case " ":
      if (vid.paused) vid.play();
      else vid.pause();
      break;
  }
});
