# Wave Animation Loader

This project features a visually captivating wave animation applied to text using CSS's `@keyframes` and `clip-path`. The animation creates a dynamic ripple effect over the text, providing a modern, fluid motion perfect for loaders or attention-grabbing titles.

---

## Features

### 1. **Wave Animation**
- The secondary text creates a flowing wave-like motion with changing shapes using `clip-path`.
- The animation loops infinitely, simulating the effect of water rippling over the text.

### 2. **Layered Text Effect**
- Two overlapping layers of text:
  - The **static base text** for stability and readability.
  - The **animated text** for dynamic, engaging motion.

### 3. **Customizable Styling**
- Adjustable text size, colors, and wave intensity.
- Works with any font and layout.

---

## How It Works

### HTML Structure
```html
<div class="wave">
  <h2>Wave</h2>
  <h2>Wave</h2>
</div>
```
- The container `.wave` holds two `<h2>` elements:
  - The **first child** remains static, serving as the base layer.
  - The **second child** is animated with the wave effect.

---

### CSS Styling

#### Body
- Center-aligned content with a dark background to highlight the animation.

```css
body {
  background-color: #2f2f2f;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### Wave Container and Text
- A fixed-sized `.wave` container ensures consistent positioning and dimensions.
- Large, bold, uppercase text for maximum visual impact.

```css
.wave {
  position: relative;
  width: 500px;
  height: 500px;
}

h2 {
  position: absolute;
  text-align: center;
  line-height: 500px;
  font-size: 170px;
  text-transform: uppercase;
}
```

#### Layered Text
- The **first `h2`** is styled with a light blue color and remains static.
- The **second `h2`** (animated layer) has a darker blue color and is animated with the wave effect.

```css
h2:nth-child(1) {
  color: #7efff5;
}

h2:nth-child(2) {
  color: #03a9f4;
  animation: wave 2s ease-in-out infinite;
}
```

---

### Wave Animation
The wave effect is achieved using `@keyframes` and `clip-path`:
- **`clip-path`** dynamically defines the visible area of the text, changing its shape over time.
- A smooth, cyclical animation transitions between the defined polygon shapes.

```css
@keyframes wave {
  0% {
    clip-path: polygon(0% 38%, 21% 40%, 38% 51%, 54% 57%, 75% 57%, 100% 52%, 100% 100%, 0% 100%);
  }

  50% {
    clip-path: polygon(0 49%, 16% 56%, 33% 55%, 55% 50%, 75% 42%, 100% 40%, 100% 100%, 0% 100%);
  }

  100% {
    clip-path: polygon(0% 38%, 21% 40%, 38% 51%, 54% 57%, 75% 57%, 100% 52%, 100% 100%, 0% 100%);
  }
}
```

#### Keyframe Details:
- **0% and 100%:** The animation starts and ends with the same shape, ensuring a seamless loop.
- **50%:** Midpoint shape varies significantly, creating the illusion of dynamic motion.

---

