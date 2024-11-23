# Clip Path Animation with Scroll Interaction

This project demonstrates a visually captivating animation effect using the CSS `clip-path` property, dynamically updated through JavaScript as the user scrolls. The effect involves two circles that expand based on the scroll position, creating a smooth and engaging visual transformation.

---

## Features

### 1. **Dynamic Scroll-Based Animations**
- **Circle Expansion**: Two divs, `.circle1` and `.circle2`, expand their circular clipping areas as the user scrolls down the page.
- **Scroll Position Mapping**: The `clip-path` property dynamically adjusts to the user's vertical scroll (`window.scrollY`).

### 2. **Clip Path Transition**
- **Initial State**:
  - `.circle1` starts as a small circle at the top-left corner.
  - `.circle2` starts as a small circle at the bottom-right corner.
- **Scroll Effect**:
  - The circles grow in size, revealing the content beneath.

### 3. **Stylized Typography**
- Large, centered `h2` elements with **outline stroke text** (`-webkit-text-stroke`) provide an aesthetic enhancement to the visual experience.

---

## How It Works

### HTML Structure
- A single `section` contains:
  - A large `h2` text element for the main label.
  - Two absolutely positioned divs (`.circle1` and `.circle2`) responsible for the animated circular clipping.

```html
<section>
    <h2>scroll</h2>
    <div class="circle1"><h2>scroll</h2></div>
    <div class="circle2"><h2>scroll</h2></div>
</section>
```

### CSS Styling
- **Clip Path Animation**:
  - `clip-path: circle(...)` is used to define circular clipping areas.
  - Initial clipping areas are defined to be small, revealing more as the user scrolls.
- **Colors and Layout**:
  - `.circle1` has a background color of `#22e7c0`.
  - `.circle2` has a background color of `#ffb62e`.
- **Typography**:
  - Transparent `h2` text is styled with a stroke effect for a unique visual appearance.

```css
.circle1 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #22e7c0;
    clip-path: circle(150px at 0 0);
}

.circle2 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffb62e;
    clip-path: circle(150px at 100% 100%);
}

.circle1 h2, .circle2 h2 {
    color: transparent;
    -webkit-text-stroke: 5px #333;
}
```

### JavaScript Logic
- The `scroll` event listener triggers an update of the `clip-path` sizes of `.circle1` and `.circle2`.
- The size of the circles grows proportionally to the vertical scroll position.

```javascript
let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;
  circle1.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 0 0)`;
  circle2.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 100% 100%)`;
});
```

---

