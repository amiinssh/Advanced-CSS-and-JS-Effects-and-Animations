# Vertical Bar Loading Animation

This project features a unique loading animation created with CSS, where multiple vertical bars sequentially scale up and down, creating a wave-like effect. This smooth, minimalist animation is ideal for loading screens or status indicators in web applications.

## Demo

The animation consists of:
- A series of 8 vertical bars, arranged in a line, each growing and shrinking in height in sequence.
- A smooth, continuous looping effect, creating the visual of a flowing wave.

## Files

- `index.html`: Contains the HTML structure for the animated loading bars.
- `style.css`: Holds the styling, layout, and keyframe animations for the loading effect.

## Installation

To view the animation, clone the repository, navigate to the project folder, and open `index.html` in a web browser.

```bash
git clone https://github.com/username/vertical-bar-loading-animation.git
cd vertical-bar-loading-animation
open index.html
```

## CSS Structure and Animations

### Main Elements

1. **Body Styling**:
   - The body is set to full viewport height (`height: 100vh`), centered with `display: flex`, and has a dark background (`#212121`) for contrast against the white loading bars.

2. **Loading Container** (`.loading`):
   - A flex container to horizontally align the animated bars.

3. **Animated Bars** (`.obj`):
   - Each `.obj` element represents a bar with a set width (`6px`), height (`40px`), and rounded corners (`border-radius: 10px`).
   - All bars are white for visibility and spaced evenly with `margin: 0 3px`.
   - The animation scales each bar vertically to create a pulsing effect.

### Animation Details

#### Loading Keyframes (`@keyframes loading`)

The `loading` keyframes define the scaling behavior for each bar.

```css
@keyframes loading {
    0% { transform: scaleY(0); }
    50% { transform: scaleY(1); }
    100% { transform: scaleY(0); }
}
```

- **Stages**:
  - **0%**: Each bar starts at a scaled height of 0.
  - **50%**: The bar reaches full height.
  - **100%**: The bar scales back down to height 0, completing a full pulsing cycle.

- **Effect**: This scaling pattern creates a pulsing animation that repeats, mimicking a wave that flows from left to right.

#### Sequential Animation Delay

Each `.obj` bar has a unique `animation-delay`:
- The delay gradually increases by `0.1s` for each subsequent bar.
- This staggered delay creates a cascading effect across the bars, making them appear to "flow" from left to right.

### Colors

- **Background**: Dark gray (`#212121`) for a sleek look and contrast.
- **Bars**: White to stand out clearly against the dark background.

## Customization

- **Bar Dimensions**: Adjust the `.obj` `width` and `height` to change the bar’s size.
- **Animation Speed**: Modify `animation: loading 0.8s` for faster or slower pulsing.
- **Bar Count**: Add or remove `.obj` elements to increase or decrease the number of bars in the sequence.
- **Color Scheme**: Change the `background-color` and `.obj` color to match your application’s design.

