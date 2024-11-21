# Animated Loader with Split Text Animation

This project demonstrates a visually appealing animated loader using CSS animations and `@keyframes`. The loader features text that splits into two halves (top and bottom), each moving in opposite directions to create a dynamic and seamless looping effect.

---

## Features

### 1. **Split Text Animation**
- The text inside the loader is divided into two parts: **top half** and **bottom half**.
- Each half has its own animation, moving horizontally in opposite directions to create a visually striking split effect.

### 2. **Dynamic Clipping**
- Utilizes `clip-path` to define specific regions for the top and bottom halves of the text, allowing each section to move independently.
- This technique ensures a clean and seamless transition as the text moves across the loader.

### 3. **Smooth Infinite Loop**
- The animation is smooth, with defined `keyframes` controlling the movement.
- The effect loops infinitely, making it perfect for use as a loading screen or indicator.

---

## How It Works

### HTML Structure
```html
<div class="loader">
  <span class="top-half">Loading</span>
  <span class="bottom-half">Loading</span>
</div>
```
- The `loader` container holds two `span` elements:
  - `top-half` for the upper part of the text.
  - `bottom-half` for the lower part of the text.

### CSS Styling
#### Body
- The body is styled to center the loader both vertically and horizontally, creating a minimalist background for better focus on the animation.

```css
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}
```

#### Loader Container
- The loader is styled with a rectangular shape, border, and rounded corners.

```css
.loader {
  width: 300px;
  height: 60px;
  border: 3px solid #0a3d62;
  border-radius: 10px;
  text-align: center;
  line-height: 60px;
  position: relative;
  overflow: hidden;
}
```

#### Split Text Animation
- **Top Half:**
  - Styled with a vibrant color (`#ee5253`).
  - Animated with a left-to-right movement using `translateX`.

- **Bottom Half:**
  - Styled with a contrasting color (`#0a3d62`).
  - Animated with a reverse movement (right-to-left) to complement the top half.

```css
span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 600;
}

.top-half {
  color: #ee5253;
  animation: split 4s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}

.bottom-half {
  color: #0a3d62;
  animation: split 4s linear infinite reverse;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
}
```

#### Keyframes
- Controls the movement of the text halves:
  - Moves the text across the loader’s width from right to left (or vice versa).
  - Pauses briefly in the center for readability.

```css
@keyframes split {
  0% {
    transform: translateX(100%);
  }
  40% {
    transform: translateX(0);
  }
  60% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
```

---

