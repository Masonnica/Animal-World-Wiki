const images = [
    "assets/images/bg1.jpg",
    "assets/images/bg2.jpg",
    "assets/images/bg3.jpg",
    "assets/images/bg4.jpg",
    "assets/images/bg5.jpg",
    "assets/images/bg6.jpg",
    "assets/images/bg7.jpg",
];
const INTERVAL = 8000;
const DURATION = 1600;

let current = 0;
let transitioning = false;

const elCurrent = document.getElementById('slideCurrent');
const elNext = document.getElementById('slideNext');
const dotsWrap = document.getElementById('dots');
const counterEl = document.getElementById('counterText');

/* Init first image */
elCurrent.style.cssText += `background-image:url('${images[0]}');background-size:cover;background-position:center`;

const dots = images.map((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(d);
    return d;
});

function pad(n) { return String(n + 1).padStart(2, '0'); }

function updateDots(idx) {
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    counterEl.textContent = `${pad(idx)} / ${pad(images.length - 1)}`;
}

function nextSlide() {
    if (transitioning) return;
    transitioning = true;
    const next = (current + 1) % images.length;
    elNext.style.cssText += `background-image:url('${images[next]}');background-size:cover;background-position:center`;
    elCurrent.classList.add('transitioning');
    setTimeout(() => {
        elCurrent.classList.remove('transitioning');
        elCurrent.style.backgroundImage = `url('${images[next]}')`;
        elCurrent.style.clipPath = '';
        current = next;
        updateDots(current);
        transitioning = false;
    }, DURATION);
}

setInterval(nextSlide, INTERVAL);

const backdrop = document.getElementById('searchBackdrop');
const searchInput = document.getElementById('searchInput');

function openSearch() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 50);
}

function closeSearch() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    searchInput.value = '';
}

function handleBackdropClick(e) {
    if (e.target === backdrop) closeSearch();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
});
