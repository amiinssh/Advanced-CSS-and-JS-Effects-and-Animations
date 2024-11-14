# Loading Bar Animation

This project creates a dynamic loading bar animation using CSS. The animation features a line that expands from the left, fills to its maximum width, then retracts from the right, creating a sleek, oscillating loading effect. This minimalist loading bar can be integrated into various web applications to indicate loading or progress.

## Demo

The animation displays:
- A single, centered white bar that grows and shrinks horizontally within a dark background.
- Smooth transitions from left to right, giving a subtle and engaging loading effect.

## Files

- `index.html`: Contains the HTML markup for the loading bar.
- `style.css`: Provides the CSS styles and animation keyframes for the loading bar effect.

## Installation

To view the animation, clone the repository and open `index.html` in a web browser.

```bash
git clone https://github.com/username/loading-bar-animation.git
cd loading-bar-animation
open index.html
```

## CSS Structure and Animations

### Main Elements

1. **Body Styling**:
   - Uses `display: flex` with full viewport height (`height: 100vh`) to center the loading bar on the page.
   - The background color is a dark gray (`#262626`) for contrast against the loading bar.

2. **Loading Bar** (`.loading`):
   - A slim, white bar (`height: 3px` and `width: 300px`) that acts as the loading indicator.
   - The `animation: line 2s infinite alternate` property controls the bar’s alternating growth and shrinkage.

### Animation Details

#### Line Animation (`@keyframes line`)

The `line` keyframes define the stretching and shrinking of the loading bar.

```css
@keyframes line {
    0% {
        transform: scaleX(0);
        transform-origin: left;
    }
    45% {
        transform: scaleX(1);
        transform-origin: left;
    }
    50% {
        transform: scaleX(1);
        transform-origin: right;
    }
    100% {
        transform: scaleX(0);
        transform-origin: right;
    }
}
```

- **Stages**:
  - **0%**: The bar starts with a scale of 0, growing from the left side.
  - **45%**: The bar scales to full width, still expanding from the left.
  - **50%**: The transformation origin shifts to the right, pausing at full width.
  - **100%**: The bar scales back to zero from the right side.

- **Effect**: Creates a smooth, oscillating loading bar that grows and shrinks horizontally across the screen.

### Colors

- **Background**: Dark gray (`#262626`) to provide contrast and highlight the loading bar.
- **Loading Bar**: White to ensure visibility and focus on the animated bar.

## Customization

- **Bar Width and Height**: Adjust the `.loading` `width` and `height` for different bar dimensions.
- **Animation Speed**: Change `animation: line 2s` to control the loading bar’s pace.
- **Background and Bar Colors**: Modify `background-color` for both `.loading` and `body` to match your application’s design.

