# CSS Heartbeat Animation

This project showcases a heartbeat animation using CSS, creating a pulsing heart shape purely with HTML and CSS. This animated heart is styled to mimic a beating motion, scaling in size to simulate a realistic heartbeat effect.

## Project Overview

The animation centers on a heart shape made by combining two rotated squares with rounded corners. Using CSS keyframe animations, the heart pulses, gradually scaling up and down to simulate a heartbeat. This effect is lightweight and can be used in a variety of web projects.

### Features and Techniques

- **CSS Keyframe Animation**: Keyframe rules in CSS control the heart's scaling to create a rhythmic beat.
- **Pseudo-elements for Shape Creation**: CSS `:before` and `:after` pseudo-elements add circles at the top-left and bottom-right corners to transform the square into a heart shape.
- **No JavaScript Required**: The heartbeat effect is achieved entirely through CSS, making it easy to integrate without any extra scripting.

### How the Code Works

1. **HTML Structure**: The heart is created as a single `div` with the class `.heart`.
2. **CSS Styling**:
   - `body`: Centers the heart in the viewport, with a neutral dark background.
   - `.heart`: Uses rotation and pseudo-elements to form the heart shape.
3. **Animation**:
   - Keyframe animations in `@keyframes heartbeat` cycle through different scales.
   - The heart enlarges at specific intervals (e.g., at 30% and 70%) to simulate the contraction and relaxation of a heartbeat.

### Code Snippet

```css
@keyframes heartbeat {
    0%, 25% {
        transform: rotate(45deg) scale(1);
    }
    30%, 70% {
        transform: rotate(45deg) scale(1.4);
    }
    50% {
        transform: rotate(45deg) scale(1.2);
    }
    100% {
        transform: rotate(45deg) scale(1);
    }
}
```

### Usage

1. **Clone** or download the repository.
2. Open the `index.html` file in your browser to see the heartbeat animation.

### Customization Options

- **Animation Speed**: Modify the animation duration (`1.4s`) to make the heart beat slower or faster.
- **Color**: Change the `background-color` in `.heart` to set a different heart color.
- **Size**: Adjust the `width` and `height` of `.heart` to make it larger or smaller.

