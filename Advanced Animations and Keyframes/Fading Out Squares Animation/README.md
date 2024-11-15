# Animated Grid Loader

This project showcases a **minimalist animated grid loader** using HTML and CSS. The animation creates a shrinking and expanding effect on square elements within a grid, providing a visually engaging loading indicator.

---

## Features

- **Dynamic Animation:** Squares shrink to the center and re-expand seamlessly in a repeating loop.
- **Responsive Design:** Centered loader adjusts gracefully to the screen size.
- **Grid Layout:** A 3x3 grid of squares with staggered animations for a flowing effect.
- **Customizable Animation Timing:** Different squares animate with delays for a cohesive pattern.

---

## Code Breakdown

### HTML Structure

The loader consists of a `div` element containing nine `span` elements, each representing a square in the 3x3 grid.

```html
<div class="loader">
    <span class="s1"></span>
    <span class="s2"></span>
    <span class="s3"></span>
    <span class="s4"></span>
    <span class="s5"></span>
    <span class="s6"></span>
    <span class="s7"></span>
    <span class="s8"></span>
    <span class="s9"></span>
</div>
```

### CSS Styling

The animation and styling are achieved with the following CSS:

#### General Layout
```css
body {
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a3d62;
}

.loader {
    position: relative;
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

span {
    width: 30px;
    height: 30px;
    position: relative;
}
```

#### Animation
The shrinking and expanding effect is created using the `:before` pseudo-element for each `span` and the `@keyframes` rule:

```css
span:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    animation: load 1s linear infinite;
}

@keyframes load {
    0% {
        width: 100%;
        height: 100%;
    }
    100% {
        width: 0;
        height: 0;
    }
}
```

#### Staggered Animation Delays
To achieve a flowing effect, delays are added to specific squares:

```css
.s4:before,
.s5:before,
.s6:before {
    animation-delay: 0.1s;
}

.s7:before,
.s8:before,
.s9:before {
    animation-delay: 0.2s;
}
```

---

## Customization

### Colors
- Change the `background-color` property of the `span:before` pseudo-element to adjust the color of the squares.

### Timing
- Modify the `1s` duration in the `@keyframes` and `animation` properties to speed up or slow down the animation.
- Adjust `animation-delay` values for finer control of the staggered effect.

### Size
- Adjust the `width` and `height` of `.loader` and `span` elements to scale the grid.

---

## How to Use

1. Copy the HTML and CSS code into a file and save it as `index.html` and `styles.css`.
2. Link the CSS file to the HTML using a `<link>` tag in the `<head>`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. Open the HTML file in a browser to view the animated grid loader.

---

