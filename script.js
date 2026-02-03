const yes = document.getElementById("yes");
const no = document.getElementById("no");
const msg = document.getElementById("message");
const hearts = document.getElementById("hearts");
const music = document.getElementById("music");
const box = document.getElementById("box");
const question = document.getElementById("question");

let noClicks = 0;

no.onclick = () => {
  noClicks++;
  no.classList.add("shrink");
  setTimeout(() => no.classList.remove("shrink"), 300);
  if (noClicks >= 3) {
    no.style.display = "none";
    const resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Try Again? 😊";
    resetBtn.onclick = () => location.reload();
    document.getElementById("buttons").appendChild(resetBtn);
  }
};

yes.onclick = () => {
  // Fade out the question
  question.style.opacity = 0;
  setTimeout(() => question.style.display = "none", 1000);

  // Play music with error handling
  music.volume = 0.8;
  music.play().catch(e => console.log("Audio failed to play:", e));

  box.classList.add("shake");
  setTimeout(() => box.classList.remove("shake"), 400);

  document.getElementById("buttons").style.display = "none";

  msg.style.opacity = 1;
  msg.classList.add("glow");
  msg.innerHTML = "💖 I LOVE YOU JILUU UMMMAHHH 💓";

  startHearts();

  setTimeout(() => {
    msg.innerHTML += "<br><br>Under this same moon… always 🌙";
  }, 4000);

  // Added: More romantic text honoring Jesus, appearing after another 3 seconds
  setTimeout(() => {
    msg.innerHTML += "<br><br>May our love, guided by Jesus' light, shine forever in His grace.🫂 ";
  }, 7000);
};

function startHearts() {
  setInterval(() => {
    const h = document.createElement("span");
    h.innerHTML = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (7 + Math.random() * 4) + "s";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 11000);
  }, 500);
}
