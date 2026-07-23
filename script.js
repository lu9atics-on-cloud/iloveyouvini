/* ============================================================
   Happy First Anniversary — Aman ❤ Vini
   All interactive behaviour lives here.
   ============================================================ */

/* ============================ CONTENT ============================ */
const START_DATE = new Date('2025-07-25T00:00:00'); // <-- set your real "together since" date/time here

const TIMELINE = [
  { title: 'First Meeting',      photo: 'FirstMeet.mp4',     text: 'The day our paths crossed for the very first time, without either of us knowing what it would become.' },
  { title: 'First Conversation', photo: 'FirstConvo.jpeg',   text: 'Hours felt like minutes. We talked about everything and nothing, and I didn\'t want it to end.' },
  { title: 'First Date',         photo: 'FirstDate.mp4',     text: 'Nervous hands, shy smiles, and a night I still remember in perfect detail.' },
  { title: 'First Selfie',       photo: 'FirstSelfie.jpeg',  text: 'Proof that even our silliest, unplanned moments turned into memories worth keeping.' },
  { title: 'First Beach Visit',  photo: 'FirstBeach.jpeg',   text: 'New places, same us — that\'s when I knew home wasn\'t a place, it was you.' },
  { title: 'First Trek',         photo: 'FirstTrek.jpeg',    text: 'Three hundred and sixty five days later, and I\'d choose you in every single one of them again.' },
];

const GALLERY_PHOTOS = [
  'FirstMeet.mp4', 'FirstConvo.jpeg', 'FirstDate.mp4', 'FirstSelfie.jpeg', 'FirstBeach.jpeg', 'FirstTrek.jpeg',
  'YourBday.mp4', 'RandomVdo.mp4',
  'RandomPhoto1.jpeg', 'RandomPhoto2.jpeg', 'RandomPhoto3.jpeg', 'RandomPhoto4.jpeg', 'RandomPhoto5.jpeg',
  'RandomPhoto6.jpeg', 'RandomPhoto7.jpeg', 'RandomPhoto8.jpeg', 'RandomPhoto9.jpeg', 'RandomPhoto10.jpeg',
];

function isVideo(filename) { return /\.(mp4|mov|webm)$/i.test(filename); }

const LETTER_TEXT = "Happy Anniversary, Vini. ❤️ One year ago, neither of us truly knew what the future would look like. We just took a chance on each other, and looking back now, I realize that was the best decision I've ever made. You didn't just become my girlfriend—you became the person I want to tell everything to, the first name that comes to my mind when something good happens, and the only place where my heart feels completely at peace. You've seen me at my happiest, my weakest, my most stubborn, and my most uncertain, yet you stayed. You loved me through every version of me, and I'll spend my whole life being grateful for that. Every laugh, every late-night conversation, every hug, every 'I miss you,' and every memory we've created has become part of my favorite story—our story. If I had to live this life a thousand times, I'd still choose you every single time. Thank you for loving me, believing in me, and making every ordinary day feel extraordinary. This is only our first anniversary, but I know it's just the beginning of a lifetime of memories, adventures, and dreams together. I don't promise a perfect life, but I promise you'll never have to question where my heart belongs. It has always been yours, and it always will be. I love you today, tomorrow, and every tomorrow after that. Happy First Anniversary, my Vini. Always you. Forever us. ❤️";
const SECRET_MESSAGE = "You found it. Five taps of the heart, just to reach five more words: I love you more today.";
/* ============================ END CONTENT ============================ */


/* ---------------- Loader & Music Selection ---------------- */
window.addEventListener('load', () => {
  // Wait for the progress bar animation (3s) to finish, then show the music selector
  setTimeout(() => {
    document.getElementById('loader-progress').style.display = 'none';
    const musicSelection = document.getElementById('music-selection');
    musicSelection.style.display = 'flex';
  }, 3500); 
});

const confirmMusicBtn = document.getElementById('confirmMusicBtn');
const bgAudio = document.getElementById('bgAudio');

confirmMusicBtn.addEventListener('click', () => {
  // Get the selected song and set it to the audio player
  const selectedMusic = document.querySelector('input[name="bg-music"]:checked').value;
  bgAudio.src = selectedMusic;
  
  // Hide loader and show gift screen
  document.getElementById('loader').classList.add('hidden');
  playSound('click');
});

/* ---------------- Gift opening ---------------- */
const giftScreen = document.getElementById('gift-screen');
const giftBox = document.getElementById('giftBox');
const openGiftBtn = document.getElementById('openGiftBtn');

openGiftBtn.addEventListener('click', () => {
  giftBox.classList.add('opening');
  spawnPetalBurst();
  playSound('gift');
  setTimeout(() => {
    giftScreen.classList.add('hidden');
    document.getElementById('navbar').classList.add('show');
    // start music after real user gesture
    bgAudio.volume = 0.5;
    bgAudio.play().catch(() => {});
    updateMusicIcon();
  }, 650);
}, { once: true });

/* ---------------- Navbar ---------------- */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const sectionIds = ['hero','story','gallery','letter','forever'];
const navAnchors = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar.classList.add('show');
  let current = sectionIds[0];
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY + 120 >= el.offsetTop) current = id;
  });
  navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});

/* ---------------- Scroll reveal ---------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .reveal-scale').forEach(el => revealObserver.observe(el));

/* ---------------- Ambient floating layers ---------------- */
const ambientLayer = document.getElementById('ambientLayer');
const AMBIENT_SYMBOLS = ['❤','🌸','✨','💗'];
function spawnFloatie() {
  const el = document.createElement('span');
  el.className = 'floatie';
  el.textContent = AMBIENT_SYMBOLS[Math.floor(Math.random() * AMBIENT_SYMBOLS.length)];
  const size = 12 + Math.random() * 18;
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = size + 'px';
  const duration = 8 + Math.random() * 10;
  el.style.animationDuration = duration + 's';
  ambientLayer.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000 + 200);
}
setInterval(spawnFloatie, 900);
for (let i = 0; i < 6; i++) setTimeout(spawnFloatie, i * 300);

function spawnPetalBurst() {
  for (let i = 0; i < 24; i++) {
    setTimeout(() => {
      const el = document.createElement('span');
      el.className = 'floatie';
      el.textContent = '🌸';
      el.style.left = (40 + Math.random() * 20) + 'vw';
      el.style.bottom = '40vh';
      el.style.fontSize = (14 + Math.random() * 16) + 'px';
      el.style.animationDuration = (2 + Math.random() * 2) + 's';
      ambientLayer.appendChild(el);
      setTimeout(() => el.remove(), 4200);
    }, i * 40);
  }
}

/* ---------------- Floating heart cursor ---------------- */
let lastCursorTime = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastCursorTime < 90) return;
  lastCursorTime = now;
  const heart = document.createElement('span');
  heart.className = 'cursor-heart';
  heart.textContent = '❤';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 900);
});

/* ---------------- Sound effects ---------------- */
let audioCtx;
function playSound(kind) {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    const freqs = { gift: 660, click: 520, paper: 440, confetti: 880 };
    o.frequency.value = freqs[kind] || 500;
    o.type = 'sine';
    g.gain.setValueAtTime(0.06, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.35);
    o.start();
    o.stop(audioCtx.currentTime + 0.35);
  } catch (e) { /* ignore */ }
}
document.addEventListener('click', (e) => {
  if (e.target.closest('button, a')) playSound('click');
});

/* ---------------- Build: Timeline ---------------- */
const timelineEl = document.getElementById('timeline');
TIMELINE.forEach((item, i) => {
  const div = document.createElement('div');
  div.className = 'tl-item reveal';
  const media = isVideo(item.photo)
    ? `<video src="assets/photos/${item.photo}" muted loop autoplay playsinline preload="metadata"></video>`
    : `<img src="assets/photos/${item.photo}" alt="${item.title}" loading="lazy">`;
  div.innerHTML = `
    <div class="tl-dot"></div>
    <div class="tl-card">
      <div class="tl-photo">${media}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>`;
  timelineEl.appendChild(div);
  revealObserver.observe(div);
});

/* ---------------- Build: Gallery ---------------- */
const galleryGrid = document.getElementById('galleryGrid');
const GALLERY_COUNT = GALLERY_PHOTOS.length;
GALLERY_PHOTOS.forEach((file, index) => {
  const div = document.createElement('div');
  const video = isVideo(file);
  div.className = 'gallery-item reveal-scale' + (video ? ' video-item' : '');
  div.innerHTML = video
    ? `<video class="gallery-image" src="assets/photos/${file}" muted loop playsinline preload="metadata"></video><span class="play-badge">▶</span>`
    : `<img src="assets/photos/${file}" alt="${file}" class="gallery-image" loading="lazy">`;
  div.addEventListener('click', () => openLightbox(index));
  if (video) {
    const vidEl = div.querySelector('video');
    div.addEventListener('mouseenter', () => vidEl.play().catch(() => {}));
    div.addEventListener('mouseleave', () => { vidEl.pause(); vidEl.currentTime = 0; });
  }
  galleryGrid.appendChild(div);
  revealObserver.observe(div);
});

/* ---------------- Lightbox ---------------- */
const lightbox = document.getElementById('lightbox');
const lightboxInner = document.getElementById('lightboxInner');
let currentPhoto = 0;
function renderLightbox() {
  const file = GALLERY_PHOTOS[currentPhoto];
  lightboxInner.innerHTML = isVideo(file)
    ? `<video src="assets/photos/${file}" controls autoplay playsinline style="width:100%;height:100%;object-fit:cover;"></video>`
    : `<img src="assets/photos/${file}" alt="${file}" style="width:100%;height:100%;object-fit:cover;">`;
}
function stopLightboxMedia() {
  const v = lightboxInner.querySelector('video');
  if (v) v.pause();
}
function openLightbox(i) { currentPhoto = i; renderLightbox(); lightbox.classList.add('open'); }
document.getElementById('lightboxClose').addEventListener('click', () => { stopLightboxMedia(); lightbox.classList.remove('open'); });
document.getElementById('lightboxPrev').addEventListener('click', () => { stopLightboxMedia(); currentPhoto = (currentPhoto - 1 + GALLERY_COUNT) % GALLERY_COUNT; renderLightbox(); });
document.getElementById('lightboxNext').addEventListener('click', () => { stopLightboxMedia(); currentPhoto = (currentPhoto + 1) % GALLERY_COUNT; renderLightbox(); });
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) { stopLightboxMedia(); lightbox.classList.remove('open'); } });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') { stopLightboxMedia(); lightbox.classList.remove('open'); }
  if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
});

/* ---------------- Envelope + typewriter letter ---------------- */
const envelope = document.getElementById('envelope');
const letterPaper = document.getElementById('letterPaper');
const typewriterText = document.getElementById('typewriterText');
let letterOpened = false;
envelope.addEventListener('click', () => {
  if (letterOpened) return;
  letterOpened = true;
  envelope.classList.add('open');
  playSound('paper');
  setTimeout(() => {
    letterPaper.classList.add('show');
    typewriteInto(typewriterText, LETTER_TEXT);
  }, 500);
});
function typewriteInto(el, text, speed = 28) {
  let i = 0;
  el.innerHTML = '<span class="typewriter-cursor">&nbsp;</span>';
  const cursor = el.querySelector('.typewriter-cursor');
  const interval = setInterval(() => {
    if (i >= text.length) { clearInterval(interval); cursor.remove(); return; }
    cursor.insertAdjacentText('beforebegin', text[i]);
    i++;
  }, speed);
}

document.getElementById('hiddenLetterTrigger').addEventListener('click', () => openPopup('sadLetterPopup'));

/* ---------------- Live relationship timer ---------------- */
function updateTimer() {
  const now = new Date();
  let diffMs = now - START_DATE;
  if (diffMs < 0) diffMs = 0;

  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();
  let days = now.getDate() - START_DATE.getDate();
  let hours = now.getHours() - START_DATE.getHours();
  let mins = now.getMinutes() - START_DATE.getMinutes();
  let secs = now.getSeconds() - START_DATE.getSeconds();

  if (secs < 0) { secs += 60; mins--; }
  if (mins < 0) { mins += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) { const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); days += prevMonth.getDate(); months--; }
  if (months < 0) { months += 12; years--; }

  document.getElementById('t-years').textContent = String(Math.max(years,0)).padStart(2, '0');
  document.getElementById('t-months').textContent = String(Math.max(months,0)).padStart(2, '0');
  document.getElementById('t-days').textContent = String(Math.max(days,0)).padStart(2, '0');
  document.getElementById('t-hours').textContent = String(Math.max(hours,0)).padStart(2, '0');
  document.getElementById('t-mins').textContent = String(Math.max(mins,0)).padStart(2, '0');
  document.getElementById('t-secs').textContent = String(Math.max(secs,0)).padStart(2, '0');
}
updateTimer();
setInterval(updateTimer, 1000);

/* ---------------- Hero stat numbers reflect real elapsed days/months ---------------- */
(function syncHeroStats() {
  const now = new Date();
  const diffDays = Math.max(0, Math.floor((now - START_DATE) / 86400000));
  const diffMonths = Math.max(0, (now.getFullYear() - START_DATE.getFullYear()) * 12 + (now.getMonth() - START_DATE.getMonth()));
  const stats = document.querySelectorAll('.hero-stat b');
  if (stats[0]) stats[0].textContent = diffDays;
  if (stats[1]) stats[1].textContent = diffMonths;
})();

/* ---------------- Music player ---------------- */
const musicFab = document.getElementById('musicFab');
function updateMusicIcon() {
  musicFab.textContent = bgAudio.paused ? '🎵' : '⏸';
}
musicFab.addEventListener('click', () => {
  if (bgAudio.paused) { bgAudio.play().catch(() => {}); } else { bgAudio.pause(); }
  updateMusicIcon();
});
updateMusicIcon();

/* ---------------- Secret message: 5 heart taps ---------------- */
const surpriseHeart = document.getElementById('surpriseHeart');
let heartTaps = 0;
document.getElementById('secretMessageText').textContent = SECRET_MESSAGE;
surpriseHeart.addEventListener('click', () => {
  heartTaps++;
  surpriseHeart.style.transform = `scale(${1 + heartTaps * 0.08})`;
  if (heartTaps >= 5) {
    heartTaps = 0;
    surpriseHeart.style.transform = 'scale(1)';
    openPopup('secretPopup');
    launchConfetti(120);
    playSound('confetti');
    setTimeout(() => openPopup('thankYouPopup'), 1600);
  }
});

/* ---------------- Popups ---------------- */
function openPopup(id) { document.getElementById(id).classList.add('open'); }
function closePopup(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.popup-close').forEach(btn => {
  btn.addEventListener('click', () => closePopup(btn.dataset.close));
});
document.querySelectorAll('.popup-overlay').forEach(ov => {
  ov.addEventListener('click', (e) => { if (e.target === ov) ov.classList.remove('open'); });
});

/* ---------------- Confetti ---------------- */
const confettiCanvas = document.getElementById('confetti-canvas');
const ctx = confettiCanvas.getContext('2d');
function resizeCanvas() { confettiCanvas.width = window.innerWidth; confettiCanvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let confettiPieces = [];
const CONFETTI_COLORS = ['#FF4D8D', '#FFD6E7', '#F3C77A', '#FFFFFF'];
function launchConfetti(count = 150) {
  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * confettiCanvas.height * 0.5,
      w: 6 + Math.random() * 6,
      h: 10 + Math.random() * 8,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      speed: 2 + Math.random() * 3,
      drift: (Math.random() - 0.5) * 2,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      life: 0,
    });
  }
}
function confettiLoop() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach(p => {
    p.y += p.speed; p.x += p.drift; p.rot += p.rotSpeed; p.life++;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot * Math.PI / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
  });
  confettiPieces = confettiPieces.filter(p => p.y < confettiCanvas.height + 40 && p.life < 500);
  requestAnimationFrame(confettiLoop);
}
confettiLoop();

/* Trigger big confetti finale when the final screen comes into view */
const finalObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      launchConfetti(200);
      playSound('confetti');
      finalObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
finalObserver.observe(document.getElementById('forever'));

/* ---------------- Footer year ---------------- */
document.querySelector('footer').textContent =
  document.querySelector('footer').textContent.replace('{YEAR}', new Date().getFullYear());
