# Animated Circular Loader

This project demonstrates a **rotating abstract loader animation** using CSS. It features dynamic shapes with randomized borders and smooth rotational motion, making it perfect for loading indicators in modern web designs.

---

## Features

- **Circular Rotations**: Multiple layered circular spans rotate in synchronized and reversed directions.
- **Abstract Shapes**: Unique border-radius values create irregular, blob-like shapes.
- **Customizable Speed and Direction**: Each span can have different animation speeds and directions for variety.
- **Minimal Design**: Clean, dark background with a focus on the loader.

---

## Code Overview

### HTML Structure

The loader is structured using a `.loader` container with three nested `<span>` elements. Each span rotates independently.

```html
<body>
    <div class="loader">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <h2>Loading...</h2>
</body>
```

### CSS Styling

#### General Setup

The base styling includes a reset for consistency, a centered layout, and a dark background for contrast:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #111;
}
```

#### Loader Animation

The `.loader` container uses `position: relative` to position each `<span>` absolutely within it. Each span has:

1. **Border Radius**: Irregular shapes defined by `border-radius`.
2. **Rotation Animation**: Infinite `@keyframes` for smooth 360° rotation.
3. **Custom Animations**: Unique properties for speed and direction.

```css
.loader {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid white;
    animation: rotate 5s linear infinite;
}
```

#### Customizing Each Span

- **Unique Shapes**: Each span uses different `border-radius` values to create organic, blob-like designs.
- **Directional Variation**: `animation-direction` adds reversed rotation for certain spans.
- **Speed Control**: `animation-duration` changes the rotation speed for each span.

```css
.loader span:nth-child(1) {
    border-radius: 32% 68% 59% 41% / 52% 33% 67% 48%;
}

.loader span:nth-child(2) {
    border-radius: 64% 36% 43% 57% / 68% 66% 34% 32%;
    animation-direction: reverse;
}

.loader span:nth-child(3) {
    border-radius: 42% 58% 52% 48% / 72% 31% 69% 28%;
    animation-duration: 3s;
}
```

#### Keyframes

The `rotate` animation smoothly rotates each span around its center:

```css
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

---

## Customization

### Shape Variation
Modify `border-radius` for each `<span>` to create new abstract shapes:

```css
border-radius: 45% 55% 60% 40% / 50% 35% 65% 45%;
```

### Speed and Direction
Adjust `animation-duration` and `animation-direction` for each `<span>`:

```css
animation-duration: 4s; /* Change rotation speed */
animation-direction: reverse; /* Reverse direction */
```

### Size
Change the `.loader` dimensions to scale the animation:

```css
.loader {
    width: 150px;
    height: 150px;
}
```

---

