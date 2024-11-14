# Rotating Ring Loader Animation

This project presents a clean, minimalist loading animation using CSS. The effect features a rotating ring with centered text, providing a smooth and visually appealing loading indicator. This animation is perfect for websites and applications that need a subtle, elegant loading effect.

## Demo

The animation consists of:
- A centered, circular ring rotating continuously.
- Text positioned at the center of the ring displaying a loading message.

## Files

- `index.html`: HTML structure for the loader.
- `style.css`: CSS styling and keyframe animations for the rotating ring and centered text.

## Installation

Clone the repository and open `index.html` in your browser to view the animation.

```bash
git clone https://github.com/username/rotating-ring-loader.git
cd rotating-ring-loader
open index.html
```

## CSS Structure and Animations

### Main Elements

1. **Body Styling**:
   - Full viewport height (`height: 100vh`), centered content using `display: flex`, and background styling with a simple, modern sans-serif font.
  
2. **Container** (`.container`):
   - A `200x200px` box that holds both the rotating ring and the centered text, positioned relative for easy alignment of nested elements.

3. **Rotating Ring** (`.ring`):
   - A fully circular border (`border-radius: 50%`), styled with a left-side border to create a partial ring.
   - The border uses a dark gray color (`#262626`) and a `4px` thickness.
   - An infinite, 1-second animation rotates the ring continuously.

4. **Text** (`.text`):
   - Positioned absolutely at the center of the container, using `text-align: center` and `line-height: 200px` to perfectly align with the ring’s diameter.
   - Uppercase, bold text that is easy to read and adds focus to the center.

### Animation Details

#### Rotate Keyframes (`@keyframes rotate`)

The `rotate` keyframes define a continuous rotation effect for the ring.

```css
@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

- **Duration**: The animation is set to 1 second.
- **Effect**: The `.ring` rotates from 0 to 360 degrees, creating a smooth, infinite spinning effect.

### Colors

- **Ring Border**: Dark gray (`#262626`) for a subtle yet visible spinning ring.
- **Text**: The centered text is bold and in a contrasting color to maintain visibility and readability.

## Customization

- **Ring Size**: Adjust the `.container` width and height to change the ring size.
- **Animation Speed**: Modify `animation: rotate 1s` in the `.ring` to increase or decrease the rotation speed.
- **Text Style**: Customize `font-size`, `font-weight`, or change the `text-transform` to adjust the text appearance.

