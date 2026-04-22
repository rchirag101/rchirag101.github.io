/* ── Typewriter ──────────────────────────────────────── */
const role = 'Software Engineer';
const el   = document.getElementById('typed-text');
let ci = 0;

const type = () => {
    if (ci < role.length) {
        el.textContent = role.slice(0, ++ci);
        setTimeout(type, 90);
    }
}
setTimeout(type, 1000);

/* ── Floating Particles ──────────────────────────────── */
const randomValue = (min, max) => Math.random() * (max - min) + min;
const container = document.getElementById('particles');

for (let i = 0; i < 18; i++) {
    const p = Object.assign(document.createElement('div'), { className: 'particle' });
    const size = randomValue(2, 7);
    Object.assign(p.style, {
        width:             `${size}px`,
        height:            `${size}px`,
        left:              `${randomValue(0, 100)}%`,
        animationDuration: `${randomValue(12, 30)}s`,
        animationDelay:    `${randomValue(0, 5)}s`,
        opacity:           randomValue(0.2, 0.8),
        background:        `hsl(${Math.random() > 0.5 ? 210 : 260}, 80%, 75%, 0.3)`,
    });
    container.appendChild(p);
}
