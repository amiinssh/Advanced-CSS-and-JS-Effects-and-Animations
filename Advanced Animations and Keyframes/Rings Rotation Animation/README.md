# Animated Loader

This project demonstrates a responsive and visually appealing animated loader using HTML and CSS. The focus is on smooth animations to create a dynamic circular spinner composed of multiple rotating layers.

## Features

- **Nested Circular Layers:** Three concentric circles with different colors and animations.
- **Smooth Rotation:** Each layer rotates in a distinct direction for a seamless effect.
- **Minimal Design:** Clean and simple styling, ensuring the loader is the main focus.
- **Responsive Layout:** The loader is vertically and horizontally centered on the page.

## How It Works

The loader consists of:
- **Outer Circle:** Rotates clockwise.
- **Middle Circle:** Rotates counter-clockwise.
- **Inner Circle:** Rotates clockwise.
- **Central Dot:** A stationary white dot at the center.

Animations are achieved using the `@keyframes` rule and `transform: rotate()` to create a smooth spinning effect.

## Code Breakdown

### HTML Structure
```html
<div class="loader">
  <div class="outer"></div>
  <div class="middle"></div>
  <div class="inner"></div>
  <div class="dot"></div>
</div>
```

### CSS Styling
```css
body {
    height: 100vh;
    font-family: sans-serif;
    background-color: #222D3E;
    display: flex;
    justify-content: center;
    align-items: center;
}

* {
    box-sizing: border-box;
}

.loader {
    width: 200px;
    height: 200px;
    position: relative;
}

.outer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-left: 5px solid #eb4d4b;
    border-right: 5px solid #eb4d4b;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
}

.middle {
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    border-left: 5px solid #218c74;
    border-right: 5px solid #218c74;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-radius: 50%;
    animation: rotate 1s linear infinite reverse;
}

.inner {
    position: absolute;
    top: 60px;
    left: 60px;
    right: 60px;
    bottom: 60px;
    border-left: 5px solid #ccae62;
    border-right: 5px solid #ccae62;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
}

.dot {
    position: absolute;
    top: 90px;
    left: 90px;
    right: 90px;
    bottom: 90px;
    background-color: white;
    border-radius: 50%;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

## Usage

1. Copy the HTML and CSS code into a `.html` file and a `.css` file, respectively.
2. Link the CSS file to the HTML file using a `<link>` tag in the `<head>`.
3. Open the HTML file in any modern browser to view the animated loader.

## Customization

- **Colors:** Change the `border-left` and `border-right` colors of `.outer`, `.middle`, and `.inner` to customize the loader's appearance.
- **Speed:** Adjust the `1s` duration in the `animation` property to speed up or slow down the rotation.
- **Size:** Modify the `width` and `height` of `.loader` and the `top`, `left`, `right`, and `bottom` values for the nested elements to resize the loader.

