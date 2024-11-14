# Animated Chase Loader

This project creates an eye-catching animated loader effect using CSS animations. The animation features a "chasing" effect where three squares move sequentially in a square path. The loader's design is modern and minimal, using a colorful background and smooth movement transitions.

## Demo

The loader consists of three white squares moving in a square path within a centered container on a vibrant red background. Each square follows the same path, but with a delay to create a "chase" effect.

## Files

- `index.html`: The HTML structure for the loader animation.
- `style.css`: The CSS styling and keyframe animations for the effect.

## Installation

Clone the repository and open `index.html` in your browser to view the animation.

```bash
git clone https://github.com/username/animated-chase-loader.git
cd animated-chase-loader
open index.html
```

## CSS Structure and Animations

### Container and Span Elements

1. **Loader Container** (`.loader`):
   - A centered `150x150px` square that houses the animation.
   - Positioned to fill the viewport using `display: flex` with centered alignment.

2. **Span Elements**:
   - Each `span` is a `50x50px` white square with rounded corners (`border-radius: 4px`).
   - Positioned absolutely within the `.loader` container.
   - Each square has an `animation-delay` set to stagger the movement, creating the chase effect.

### Animations

#### Chase Animation (`@keyframes chase`)

The `chase` keyframes define the movement path for each square. The animation creates a sequence in which each square moves to each corner of the container in steps, then returns to the start.

```css
@keyframes chase {
    0% { top: 0; left: 0; }
    12.5% { top: 0; left: 50%; }
    25% { top: 0; left: 50%; }
    37.5% { top: 50%; left: 50%; }
    50% { top: 50%; left: 50%; }
    62.5% { top: 50%; left: 0; }
    75% { top: 50%; left: 0; }
    87.5% { top: 0; left: 0; }
    100% { top: 0; left: 0; }
}
```

- **Duration**: 2 seconds, infinite loop
- **Effect**: Each square moves around a 2x2 grid path, starting from the top left corner, moving clockwise to each corner, then returning to the start.
- **Delay**: `nth-child` delay settings make each square appear to "chase" the previous one in a continuous loop.

### Colors

- **Background**: The background is set to `#ee5253`, a vibrant red that complements the white squares.
- **Squares**: Each square (`span`) is white for a clean, minimal contrast against the background.

## Customization

- **Square Size**: Adjust the size by modifying the `span` width and height.
- **Speed**: Modify the animation speed by adjusting the `animation-duration` in the `chase` animation.
- **Color Scheme**: Change the background color of the `body` or the `background-color` of the `span` elements for a customized look.

