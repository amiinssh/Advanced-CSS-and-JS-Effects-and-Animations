# Animated Loading Text Effect

This project showcases an elegant loading animation using pure CSS. The effect displays a centered "LOADING..." text, where an overlay animates from left to right, creating a smooth loading effect that cycles infinitely. The animation is designed to provide a visually appealing indication of loading or progress.

## Demo

The animation presents a fullscreen dark background with the word "LOADING..." centered in white. A golden overlay animates across the text, simulating a typewriter or loading bar effect.

## Files

- `index.html`: Contains the HTML structure.
- `style.css`: Defines all CSS styling, including font styling, colors, layout, and animations.

## Installation

To view the animation, clone the repository and open `index.html` in a web browser.

```bash
git clone https://github.com/username/animated-loading-text.git
cd animated-loading-text
open index.html
```

## CSS Structure and Animations

### Main Elements

1. **Body Styling**:
   - Fullscreen with `height: 100vh`, a centered layout using `display: flex`, `justify-content: center`, and `align-items: center`.
   - Background color is a deep gray (`#2c3a47`) to contrast with the animated text.

2. **Heading Element** (`h1`):
   - White, uppercase text with wide letter-spacing and a modern sans-serif font.
   - Positioned relative to enable an absolute-positioned overlay for the animation effect.

### Animation Effect

#### Loading Overlay (`h1:before`)

The key animation occurs on the `h1:before` pseudo-element, which simulates the loading effect by animating the text overlay.

```css
h1:before {
    content: "loading...";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #f6b93b;
    overflow: hidden;
    border-right: 4px solid #f6b93b;
    animation: animate 5s linear infinite;
}
```

- **Overlay Text**: The overlay displays the same "LOADING..." text but with a contrasting golden color (`#f6b93b`).
- **Animation Style**: A `border-right` property creates a typewriter-style cursor effect.
- **Infinite Loop**: `animation: animate 5s linear infinite;` makes the animation cycle continuously.

#### Keyframes (`@keyframes animate`)

The `animate` keyframes define the left-to-right sliding effect of the "LOADING..." overlay.

```css
@keyframes animate {
    0% { width: 0; }
    50% { width: 100%; }
    100% { width: 0; }
}
```

- **Duration**: The animation lasts 5 seconds in a continuous loop.
- **Effect**: The width of the overlay expands from 0% to 100% (fully covering the text), then contracts back to 0%, creating a looping "loading" effect.

### Colors Used

- **Background**: Dark slate color (`#2c3a47`) that highlights the text.
- **Text Colors**: 
  - Primary text color: White.
  - Overlay color: Golden yellow (`#f6b93b`) for the animated effect.

## Customization

- **Animation Speed**: Adjust the `animation-duration` in `animate` to make the effect faster or slower.
- **Text and Background Colors**: Modify the `color` properties of `h1` and `h1:before` to customize the appearance.
- **Font Style**: Customize the font family and `letter-spacing` for a unique text style.

