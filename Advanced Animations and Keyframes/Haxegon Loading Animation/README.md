# Hexagon Line Animation

This project demonstrates a **hexagon motion animation** with a dynamic line that sways back and forth. The hexagon moves along the line, spinning rapidly in a seamless loop, creating a visually appealing effect.

---

## Features

- **Hexagon Animation:** A hexagonal shape travels along a rotating line, creating an engaging and continuous motion.
- **Smooth Rotations:** Both the line and the hexagon incorporate fluid animations for a polished look.
- **Responsive Design:** The animation adapts to different screen sizes, staying perfectly centered on the page.

---

## Code Breakdown

### HTML Structure

The animation consists of a `div` element styled as a line and a child `div` styled as a hexagon. The hexagon is constructed using pseudo-elements.

```html
<div class="line">
    <div class="hexagon"></div>
</div>
```

### CSS Styling

#### General Layout
The entire animation is centered within the viewport, with a dark background to highlight the white elements.

```css
body {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #212121;
}
```

#### Line
The line is styled as a simple horizontal border with a rotating animation applied:

```css
.line {
    width: 300px;
    border-bottom: 4px solid white;
    position: relative;
    animation: animateline 2s linear infinite;
}
```

#### Hexagon
The hexagon is styled using a `div` for the base and two pseudo-elements (`:before` and `:after`) to create the top and bottom triangles:

```css
.hexagon {
    position: absolute;
    left: 0;
    bottom: 14px;
    width: 50px;
    height: 30px;
    background-color: white;
    animation: animatehaxegon 2s linear infinite;
}

.hexagon:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform: rotate(60deg);
}

.hexagon:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform: rotate(-60deg);
}
```

---

### Animations

#### Line Animation
The line sways back and forth in a smooth, infinite loop:

```css
@keyframes animateline {
    0% {
        transform: rotate(30deg);
    }
    25% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-30deg);
    }
    75% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(30deg);
    }
}
```

#### Hexagon Animation
The hexagon moves along the line, spinning 720° at its midpoint before returning to its starting position:

```css
@keyframes animatehaxegon {
    0% {
        left: 0;
    }
    50% {
        left: calc(100% - 50px);
        transform: rotate(720deg);
    }
    100% {
        left: 0;
    }
}
```

---

## Customization

### Colors
- Modify the `background-color` of the `body`, `line`, or `hexagon` to match your design needs.

### Animation Timing
- Adjust the `2s` duration in `@keyframes` to speed up or slow down the animation.
- Use different easing functions like `ease-in-out` or `linear` for varied effects.

### Size
- Change the `width` and `height` of the `.line` and `.hexagon` for larger or smaller elements.
- Modify the `border-bottom` thickness of the line for a bolder appearance.

---

## How to Use

1. Copy the HTML and CSS code into separate files (`index.html` and `styles.css`).
2. Link the CSS file to the HTML using:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. Open the `index.html` file in a browser to see the animation in action.

---

