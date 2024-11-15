# Animated Floating Squares

This project showcases a **dynamic floating square animation** with a central text element. The squares rise from the bottom of the screen, rotating and fading as they float upward. It's a visually engaging effect, perfect for modern web designs.

---

## Features

- **Smooth Animations:** Squares float upward with rotation and fade-out effects using the `@keyframes` animation.
- **Central Text Highlight:** A bold, bordered text element is centered on the screen for emphasis.
- **Staggered Effects:** Each square starts its animation with a delay, creating a flowing and randomized appearance.
- **Responsive Design:** Fully scalable and adapts seamlessly to any screen size.

---

## Code Overview

### HTML Structure

The animation is created with a container housing a `div` for the text and multiple `div` elements for the animated squares.

```html
<div class="container">
    <div class="text">Animated Squares</div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
</div>
```

### CSS Styling

#### General Layout
The entire animation is centered within the viewport with a dark background for contrast:

```css
body {
    margin: 0;
    height: 100vh;
    background-color: #333;
}

.container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
```

#### Central Text
The centered text is styled with bold borders and positioned at the center of the viewport:

```css
.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-transform: uppercase;
    font-size: 45px;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
}
```

#### Animated Squares
The squares are styled with absolute positioning, varying sizes, and random starting positions. Their animation properties include rotation, upward movement, and fading:

```css
.square {
    position: absolute;
    bottom: -100px;
    background-color: #f2f2f2;
    animation: boxes 10s infinite ease-in-out;
}

/* Example for staggered animation and random sizing */
.square:nth-child(1) {
    width: 75px;
    height: 75px;
    left: 7%;
}

.square:nth-child(2) {
    width: 65px;
    height: 65px;
    left: 15%;
    animation-delay: 4s;
}

/* Add similar styles for other squares */
```

#### Keyframe Animation
The animation moves each square upward while rotating and fading out:

```css
@keyframes boxes {
    0% {
        bottom: -100px;
    }
    100% {
        bottom: 100%;
        transform: rotate(180deg);
        opacity: 0;
    }
}
```

---

## Customization

### Colors
- Change the `background-color` of the squares for different themes.
- Modify the `background-color` of the `body` for a lighter or darker backdrop.

### Animation Timing
- Adjust the `10s` duration in the `@keyframes` to speed up or slow down the animation.
- Modify the `animation-delay` values in the `nth-child` styles to change the staggered effect.

### Size
- Customize the `width` and `height` of the squares for different proportions.
- Increase or decrease the font size of the `.text` element to suit your design.

---

## How to Use

1. Copy the HTML and CSS code into separate files (e.g., `index.html` and `styles.css`).
2. Link the CSS file to the HTML using the following `<link>` tag in the `<head>` section:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. Open the `index.html` file in a browser to view the animation.

---

