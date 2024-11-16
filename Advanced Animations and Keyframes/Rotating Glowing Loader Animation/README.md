# Circular Rotating Loader Animation

This project showcases a **rotating circular loader** using pure CSS, designed to grab attention with its vibrant colors, smooth motion, and glowing effect. The loader is lightweight, visually appealing, and can be easily integrated into any project needing a dynamic loading animation.

---

## Features

- **Smooth Rotation**: A seamless circular rotation animation for engaging visuals.
- **Layered Design**: Multiple elements combined to create depth, including inner cutouts and glowing highlights.
- **Glowing Effect**: A pulsating, multi-layered glow using CSS box-shadow.
- **Customizable Colors**: Easily modify the gradient, glow, and background to fit any theme.

---

## Code Breakdown

### HTML Structure

The loader is structured with a single `.loader` div, enhanced using `:before` and `:after` pseudo-elements for additional styling:

```html
<section>
    <div class="loader"></div>
</section>
```

### CSS Styling

#### General Layout

The loader is centered on the screen using a flexbox layout. The background color provides a dark canvas to highlight the glowing effects:

```css
section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #001d30;
}
```

#### Loader Design

The main `.loader` uses:

- **Circular Shape**: Achieved with `border-radius: 50%`.
- **Gradient Background**: A radial gradient gives a glowing disk effect.
- **Rotation Animation**: Uses a `@keyframes` rule for infinite 360° rotation.

```css
.loader {
    position: absolute;
    width: 150px;
    height: 150px;
    background: linear-gradient(0deg, rgba(0, 29, 48, 1) 40%, rgba(81, 238, 238, 1) 100%);
    border-radius: 50%;
    animation: rotate 2s linear infinite;
}
```

#### Inner and Outer Elements

The pseudo-elements add details to the loader:

1. **Inner Cutout (`:before`)**:
   - Creates a smaller circle inside the loader for depth.
   - Positioned and sized using `inset`.

   ```css
   .loader:before {
       content: "";
       position: absolute;
       inset: 20px 20px 0 0;
       background: #001d30;
       border-radius: 50%;
   }
   ```

2. **Glowing Orb (`:after`)**:
   - A smaller, glowing circle positioned near the edge.
   - Glows dynamically using `box-shadow`.

   ```css
   .loader:after {
       content: "";
       position: absolute;
       width: 40px;
       height: 40px;
       background: #51eeee;
       border-radius: 50%;
       top: 50px;
       right: -8px;
       box-shadow: 0 0 5px #51eeee, 0 0 25px #51eeee, 0 0 50px #51eeee, 0 0 75px #51eeee;
   }
   ```

#### Animation

The `rotate` animation applies infinite 360° rotation to the loader:

```css
@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
```

---

## Customization

### Modify Colors
You can adjust the background gradient, glowing orb color, and shadow effect:

```css
background: linear-gradient(0deg, rgba(0, 29, 48, 1) 40%, rgba(100, 200, 255, 1) 100%);
box-shadow: 0 0 5px #aaffff, 0 0 25px #aaffff, 0 0 50px #aaffff;
```

### Resize Loader
Change the loader’s size by modifying its width and height:

```css
.loader {
    width: 200px;
    height: 200px;
}
```

### Adjust Speed
Change the animation speed by modifying `animation-duration`:

```css
.loader {
    animation: rotate 3s linear infinite;
}
```



