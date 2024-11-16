# Expanding Rotating Boxes Animation

This project features a visually engaging animation of **expanding and rotating boxes** set against a dark blue background. The animation involves multiple boxes that start small, grow in size, rotate rapidly, and fade out as they expand. A central heading adds focus to the design, making it suitable for intros, loaders, or decorative elements.

---

## Features

- **Expanding Boxes:** Boxes grow from a small scale to a large size while rotating and fading out.
- **Smooth Transitions:** Animations include easing for natural motion and flow.
- **Dynamic Positioning:** Each box starts at a different position and delays for staggered animation.
- **Customizable Design:** Easily adjust colors, sizes, and animation timing.

---

## Code Breakdown

### HTML Structure

The layout consists of a container holding a centered heading and multiple animated boxes.

```html
<div class="container">
    <h2>Animated Boxes</h2>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
```

### CSS Styling

#### General Layout
The background and font settings create a clean and professional look:

```css
body {
    font-family: sans-serif;
    background-color: #192a56;
}
```

The container ensures the boxes are positioned relative to the viewport:

```css
.container {
    position: relative;
    height: 100vh;
    overflow: hidden;
}
```

#### Heading
The heading is centered both horizontally and vertically and layered above the animation:

```css
h2 {
    margin: 0;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 45px;
    text-transform: uppercase;
    z-index: 1;
}
```

#### Boxes
The `.box` elements are styled to appear as small squares with varying start positions and colors. Each box has a unique animation delay:

```css
.box {
    position: absolute;
    top: 80%;
    left: 45%;
    width: 10px;
    height: 10px;
    border: 1px solid #003298;
    animation: boxes 12s ease-in infinite;
    transform: scale(0);
}
```

---

### Animations

#### Expanding and Rotating Animation
The `@keyframes boxes` animation drives the motion, scaling the boxes from `scale(0)` to `scale(20)`, rotating them `960deg`, and fading them out (`opacity: 0`):

```css
@keyframes boxes {
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: scale(20) rotate(960deg);
        opacity: 0;
    }
}
```

---

## Customization

### Colors
- Change the `border-color` of the `.box` or add gradient borders for more visual interest.
- Adjust the `background-color` in the `body` for different themes.

### Animation Timing
- Modify the `12s` duration in the `@keyframes` or individual delays (`animation-delay`) for faster or slower animations.

### Sizes and Shapes
- Adjust the `width` and `height` of `.box` for larger or smaller elements.
- Add more or fewer `.box` elements for varying density.

### Text
- Replace the `h2` content with your desired text or logo.
- Adjust the font size, color, and style for better branding.

---

## How to Use

1. Copy the HTML and CSS code into separate files (`index.html` and `styles.css`).
2. Link the CSS file to the HTML using:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. Open the `index.html` file in a browser to view the animation.

---

