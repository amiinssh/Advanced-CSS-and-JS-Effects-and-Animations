# Animated Bar Loader

This project demonstrates a **colorful bar animation loader** using pure HTML and CSS. The loader features vertical bars scaling up and down in a smooth sequence, creating a vibrant and dynamic loading effect.

---

## Features

- **Dynamic Animation:** Bars stretch and contract vertically in an infinite loop, mimicking a pulsing motion.
- **Staggered Timing:** Each bar is offset with a delay, creating a cascading effect.
- **Colorful Design:** Bars are individually styled with unique colors for a modern look.
- **Responsive Layout:** Loader is centered and adapts to any viewport.

---

## Code Breakdown

### HTML Structure

The loader consists of a `div` container with six `span` elements, each representing a vertical bar.

```html
<div class="loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

### CSS Styling

#### General Layout
The loader container and bars are styled to center them on the page:

```css
body {
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #272727;
}

.loader {
    width: 70px;
    display: flex;
}
```

#### Bar Styling
Each bar (`span`) is styled to have consistent size and initial color, with smooth animations applied:

```css
span {
    width: 10px;
    height: 60px;
    margin: 0 1px;
    background-color: white;
    animation: loading 0.8s ease-in-out infinite;
}
```

#### Color and Delay
Each bar has a unique color and a slight animation delay for a cascading effect:

```css
span:nth-child(1) {
    background-color: #2eeca8;
    animation-delay: 0.2s;
}

span:nth-child(2) {
    background-color: #55acee;
    animation-delay: 0.3s;
}

span:nth-child(3) {
    background-color: #ec902e;
    animation-delay: 0.4s;
}

span:nth-child(4) {
    background-color: #09b7bf;
    animation-delay: 0.5s;
}

span:nth-child(5) {
    background-color: #ea3d8c;
    animation-delay: 0.6s;
}

span:nth-child(6) {
    background-color: #e5ff00;
    animation-delay: 0.7s;
}
```

#### Animation
The animation is achieved with the `@keyframes` rule, which controls the scale of each bar:

```css
@keyframes loading {
    0% {
        transform: scaleY(0.1);
    }
    35% {
        transform: scaleY(1);
    }
    60%, 100% {
        transform: scaleY(0.1);
    }
}
```

---

## Customization

### Colors
- Modify the `background-color` in `nth-child` selectors to set your preferred color scheme.

### Timing
- Adjust the `animation` duration (currently `0.8s`) to speed up or slow down the animation.
- Change the `animation-delay` values to experiment with different cascade effects.

### Size
- Adjust the `width` and `height` of `span` elements to make the bars larger or smaller.

---

## How to Use

1. Copy the HTML and CSS code into a file and save it as `index.html` and `styles.css`.
2. Link the CSS file to the HTML using a `<link>` tag in the `<head>`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. Open the HTML file in a browser to view the animated bar loader.

---

