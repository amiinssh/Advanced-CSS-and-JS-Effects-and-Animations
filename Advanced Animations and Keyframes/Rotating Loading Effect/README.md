# 3D Rotating Loading Animation

This project showcases a dynamic, 3D rotating loading animation box, creating a seamless rotation on both X and Y axes.

## Features

- **3D Perspective**: The body’s perspective adds depth to the animation.
- **Rotating Box**: A square `.loading` box continuously rotates in 3D space, creating a visually engaging loading effect.
- **Smooth Animation**: The rotation is smooth and continuous due to the keyframes applied, making it ideal for loading screens.

## Code Overview

### 1. Setting up the Background and Perspective

The `perspective` property on the `body` applies depth, making the rotation of the `.loading` box appear three-dimensional.

```css
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #26de81; /* Green background */
    perspective: 200px; /* Adds depth to the rotation */
}
```

### 2. Rotating Box Styling and Animation

The `.loading` box has a basic square shape with rounded corners and a white background. The animation defined in the `@keyframes` provides a continuous rotation effect on both axes.

```css
.loading {
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 12px; /* Softens corners */
    animation: loading 2s linear infinite; /* Infinite rotation */
}
```

### 3. Keyframes Animation

The `@keyframes loading` animation rotates the box 180 degrees on both the X and Y axes over 2 seconds. The effect is that of a smooth, flipping animation that continues infinitely.

```css
@keyframes loading {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }
    50% {
        transform: rotateX(0deg) rotateY(180deg);
    }
    100% {
        transform: rotateX(180deg) rotateY(180deg);
    }
}
```

