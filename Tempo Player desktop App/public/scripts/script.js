document.getElementById("playBtn").addEventListener("click", playSound);
document.getElementById("pauseBtn").addEventListener("click", pauseSound);
document.getElementById("stopBtn").addEventListener("click", stopSound);
document.getElementById("incr").addEventListener("click", incrHandler);
document.getElementById("decr").addEventListener("click", decrHandler);

const sound = new Howl({
  src: ["audio/test4.mp3"],
});

let playing = false;

let miniTime = 100;
document.getElementById("bpm-counter").innerText = miniTime;
let _intv;

function updateText() {
  document.getElementById("bpm-counter").innerText = miniTime;
}

function incrHandler() {
  if (miniTime + 10 <= 500) {
    clearInterval(_intv);
    miniTime += 10;
    updateText();
    if (playing) {
      __playSound();
    }
  }
}

function decrHandler() {
  if (miniTime > 10) {
    clearInterval(_intv);
    miniTime -= 10;
    updateText();
    if (playing) {
      __playSound();
    }
  }
}

function flip_play_pause(state) {
  if (!state) {
    document.getElementById("playBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "block";
  } else {
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("pauseBtn").style.display = "none";
  }
}

function __playSound() {
  playing = true;
  flip_play_pause(false);
  // let t = (60 * 1000) / miniTime;
  // _intv = setInterval(() => {
  //   sound.play();
  // }, t);
  sound.play();
}

function playSound() {
  clearInterval(_intv);
  updateText();
  __playSound();
}

function pauseSound() {
  sound.pause();
  playing = false;
  clearInterval(_intv);
  flip_play_pause(true);
}

function stopSound() {
  sound.stop();
  playing = false;
  clearInterval(_intv);
  flip_play_pause(true);
  miniTime = 100;
  updateText();
}

flip_play_pause(true);
