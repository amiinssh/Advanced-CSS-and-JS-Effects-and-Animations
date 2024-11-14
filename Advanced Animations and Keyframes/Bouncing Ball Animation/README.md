# CSS Jumping Ball Animation

This project demonstrates a bouncing ball animation using CSS only. Five white balls jump at staggered intervals, creating a rhythmic, dynamic loading effect against a dark background. This animation is achieved entirely with CSS keyframes, making it lightweight and easily adaptable for web projects.

## Project Overview

The animation arranges circular elements in a row, each of which jumps up and down in sequence. With each ball styled and animated separately, this effect adds a lively, energetic motion to the page that can serve as a loading indicator or engaging UI element.

### Features and Techniques

- **CSS Keyframe Animation**: CSS keyframes (`@keyframes jumping`) control each ball's vertical movement, producing a synchronized, bouncy effect.
- **Staggered Animation Timing**: Animation delays on each ball create a staggered motion, resulting in a smooth, wave-like effect.
- **Modern, Clean Styling**: Minimalistic design with rounded, white balls and a dark background creates a high-contrast, modern look.

### How the Code Works

1. **HTML Structure**: Each ball is represented by a `li` element within an unordered list (`ul`), giving a simple structure.
2. **CSS Styling**:
   - `body`: Centers the entire animation with a dark background.
   - `ul` and `li`: Styles the bouncing balls by setting their dimensions, color, and rounded corners.
3. **Animation**:
   - The `@keyframes jumping` animation creates the vertical bounce by moving each ball up and down.
   - `animation-delay` is applied to each ball (`li:nth-child`) to create a staggered effect, ensuring that the balls appear to jump in a continuous sequence.

### Code Snippet

```css
@keyframes jumping {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-150px);
    }
}
```

### Usage

1. **Clone** or download the repository.
2. Open the `index.html` file in your browser to view the jumping ball animation.

### Customization Options

- **Animation Speed**: Adjust the duration of `animation: jumping 0.8s` to control the bounce speed.
- **Ball Color**: Change the `background-color` of `ul li` to set the color of each ball.
- **Ball Count**: Add or remove `li` elements to modify the number of jumping balls.
- **Bounce Height**: Modify `transform: translateY(-150px)` in `@keyframes jumping` to control how high the balls jump.

### Compatibility

This CSS-only animation is compatible across modern browsers, providing a smooth, visually appealing effect for user interfaces without requiring any JavaScript.

---

