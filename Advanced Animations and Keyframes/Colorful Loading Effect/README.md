# Animated Box Spinner

This project is a visually engaging CSS animation that creates a colorful rotating box effect. The animation is built with HTML and CSS, using `@keyframes` animations to rotate and resize elements in a continuous loop. Each corner of the main square has a smaller, differently colored square that rotates and scales, creating a dynamic, captivating effect.

## Files

- `index.html`: HTML file to structure the animation container.
- `style.css`: Contains all CSS styles and animations.

## Installation

Clone the repository and open `index.html` in your browser to view the animation.

```bash
git clone https://github.com/username/animated-box-spinner.git
cd animated-box-spinner
open index.html
```

## CSS Structure and Animations

### Container and Span Elements

1. **Container**:
   - A centered box of `100x100px` set with a `rotate(45deg)` transformation.
   - Positioned to fill the viewport with `display: flex`, aligning items to the center.

2. **Span Elements**:
   - Four colored squares positioned at each corner of the container.
   - Set at `50x50px`, with each square assigned a unique color.
   - Each `span` element has an absolute position and `animation: rotate` for rotation.

### Animations

#### 1. Rotate Animation (`@keyframes rotate`)

This animation is applied to each `span` element, creating the rotational effect:

```css
@keyframes rotate {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(0deg); }
    50% { transform: rotate(90deg); }
    90% { transform: rotate(90deg); }
    100% { transform: rotate(90deg); }
}
```

- **Duration**: 1 second, infinite loop
- **Effect**: The span elements rotate from 0° to 90°.

#### 2. Size Animation (`@keyframes animate`)

This animation applies to the `.container`, creating a pulsing effect by resizing the box:

```css
@keyframes animate {
    0%, 10%, 90%, 100% { width: 100px; height: 100px; }
    50% { width: 150px; height: 150px; }
}
```

- **Duration**: 1 second, infinite loop
- **Effect**: The container grows from `100x100px` to `150x150px`, giving a pulse effect in sync with the rotation.

### Colors Used

Each `span` has a distinct color for visual contrast:

- Top left: `#FCEBA7` (light yellow)
- Top right: `#55ddb9` (aqua green)
- Bottom left: `#FD6C64` (coral red)
- Bottom right: `#1F78B0` (blue)

## Customization

To adjust animation speed, modify the `animation` duration:

- **Rotate speed**: Adjust in `span { animation: rotate ...; }`.
- **Pulse speed**: Adjust in `.container { animation: animate ...; }`.

