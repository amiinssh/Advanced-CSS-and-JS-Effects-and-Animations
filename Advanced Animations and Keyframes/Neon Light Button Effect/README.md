# Animated Link Border Effect

This project demonstrates a visually stunning **animated link hover effect** using HTML and CSS. The animation adds dynamic glowing borders that travel around the link, creating an eye-catching neon aesthetic.

---

## Features

### Core Functionalities
1. **Interactive Hover Effect**:
   - When hovering over the link, the background changes, and the text becomes illuminated with a glowing shadow.
   - The animation creates a fluid motion of four borders, sequentially moving around the link.

2. **Neon Glow Aesthetic**:
   - The glowing borders use gradients and box shadows to emulate a neon light effect.

3. **Reflection Effect**:
   - The text reflection below the link is achieved using the `-webkit-box-reflect` property.

---

## Key Animation Details

### Animation Overview
The animation leverages `@keyframes` and CSS properties to control the movement of the glowing borders around the link. Here's a breakdown:

1. **Top Border**:
   - Moves horizontally from left to right across the top of the link.
   - Uses the animation `animate1` with a 1-second duration.

2. **Right Border**:
   - Moves vertically from top to bottom along the right side.
   - Includes a delay (`animation-delay: 0.25s`) to synchronize with the other animations.
   - Defined by the `animate2` keyframes.

3. **Bottom Border**:
   - Moves horizontally from right to left across the bottom.
   - Includes a delay of `0.5s` using `animation-delay`.
   - Controlled by `animate3`.

4. **Left Border**:
   - Moves vertically from bottom to top along the left side.
   - Delayed by `0.75s` for smooth sequencing.
   - Uses `animate4`.

---

## Code Explanation

### HTML
```html
<a href="#">
  Hover Me
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</a>
```
- The `<a>` element contains the text "Hover Me."
- Four `<span>` elements represent the moving borders.

### CSS Highlights

#### Link Styles
- Neon glow effect is applied to the link on hover:
  ```css
  a:hover {
    background: #03e9f4;
    color: #051130;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
  }
  ```

#### Border Animations
- Each `<span>` is styled to represent a side of the border with individual animations.

Example for the top border:
```css
span:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
}
```

#### Keyframes
The keyframes control the movement of each border. For instance:
```css
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}
```
This animation moves the top border from left to right across the link.

---

## How It Works
1. **Initial Setup**:
   - The spans are positioned absolutely around the link to form the borders.
   - Each span has a unique animation with staggered delays to create the seamless motion.

2. **On Hover**:
   - The link's background changes, text glows, and the animated borders become visible.

---

## Installation & Usage
1. Copy the HTML and CSS into your project.
2. Open the file in a modern browser.
3. Hover over the link to see the animated effect.

---

## Browser Compatibility
- Tested on modern browsers like Chrome, Edge, and Safari.
- Requires WebKit for the reflection effect (`-webkit-box-reflect`).

---

