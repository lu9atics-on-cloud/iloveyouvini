# Happy First Anniversary — Aman ❤ Vini

A single-page, cinematic anniversary website: loader → gift opening → hero → story timeline →
gallery → memories → love letter → reasons → quotes → live counter → future dreams → surprise →
confetti finale.

## How to open it
Just double-click **index.html** (or open it in any browser). No build step, no server needed.

## Making it truly yours (do these 3 things first)

**1. Your real "together since" date**
Open `script.js`, find this line near the top, and set your actual date/time:
```js
const START_DATE = new Date('2025-07-23T00:00:00');
```

**2. Your photos**
Drop your own photos into `assets/photos/` (named `1.jpg`, `2.jpg`, … `30.jpg` works well).
Right now every photo slot — in the Story timeline and the 30-photo Gallery — shows a pink
placeholder card, since no photos were provided. In `script.js`, replace the placeholder
`<div class="ph-photo">...</div>` markup with `<img src="assets/photos/1.jpg">` etc. for each item.

**3. Your song**
Drop an MP3 into `assets/music/song.mp3` — the player is already wired up to that path (the 🎵
button bottom-right). Right now there's no real song, so the button will just show a paused icon
until you add the file.

## Also worth personalizing
- **Story timeline & memory cards** — real captions live in the `TIMELINE` and `MEMORIES` arrays
  at the top of `script.js`.
- **Love letter** — edit `LETTER_TEXT`.
- **Reasons I Love You / Future Dreams / Quotes** — edit the `REASONS`, `DREAMS` arrays, and the
  `.quote-slide` text directly in `index.html`.
- **Secret message** (unlocks after 5 taps on the heart in "One Last Thing") — edit `SECRET_MESSAGE`.
- **"Open when you're sad" hidden letter** — edit the text inside `#sadLetterPopup` in `index.html`.

## Notes
- Sound effects (gift, paper, click, confetti) are tiny synthesized tones generated in-browser —
  no extra files needed.
- The floating hearts/petals/sparkles, scroll reveals, masonry gallery + lightbox, envelope
  typewriter letter, live counter, quote carousel, and confetti finale are all fully functional.
- Fully responsive (mobile menu kicks in under 760px) and respects reduced-motion settings.
