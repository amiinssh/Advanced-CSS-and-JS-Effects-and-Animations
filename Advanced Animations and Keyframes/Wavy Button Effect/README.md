# Animated Button Hover Effect README

This project demonstrates a stylish button hover effect with wave animations, combining CSS transitions and keyframes for an engaging visual impact. The design is built with simplicity in mind but leverages unique animation techniques to achieve an interactive and eye-catching effect. 

## Features

- **Wave Overlay Animation**: A wave element appears on hover, moving from the bottom to fully overlay the button background, creating a dynamic and visually interesting effect.
- **Smooth Color Transition**: The button's text color transitions to white upon hover, complementing the wave animation and enhancing readability.
- **Customizable Wave Movement**: The background image in the wave element animates continuously, adding a realistic "wave" effect to the animation.

## Code Breakdown

### HTML Structure

The button consists of an `<a>` element styled to look like a button, containing a child `<span>` with the `wave` class. This `wave` element creates the animated overlay effect.

### CSS Styling and Animation

#### Base Styling

- **Button Appearance**: The button is styled with a border and text color matching the wave color, ensuring a cohesive look.
- **Wave Positioning**: Positioned absolutely within the button, the `wave` element is initially hidden below the button (`top: calc(100% + 22px);`), ready to animate upwards on hover.

#### Hover Effects

- **Color Transition**: On hover, the button text color changes to white.
- **Wave Movement**: The `wave` element animates upwards to cover the button, creating a "flooding" effect.

#### Keyframe Animations

The `wavy` keyframes create a continuous background movement within the wave overlay, simulating the natural motion of water.

```css
@keyframes wavy {
    0% {
        background-position-x: 0;
    }
    100% {
        background-position-x: 118px;
    }
}
```

#### Key CSS Properties Used

- **Transition**: Smooth transitions for color and wave movement create a polished, interactive feel.
- **Overflow**: `overflow: hidden;` ensures the wave element animates cleanly within the button's boundaries.
- **Positioning**: Absolute positioning is used for the wave element, allowing it to animate independently of the button text.

### Example CSS Snippet

```css
a {
    text-decoration: none;
    padding: 15px 30px;
    color: #00aeff;
    font-size: 18px;
    letter-spacing: 3px;
    border: 2px solid #00aeff;
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
}

a:hover {
    color: white;
}

.wave {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: calc(100% + 22px);
    background-color: #00aeff;
    transition: all 1s;
    z-index: -1;
}
```

## Usage Instructions

1. **Clone or Download**: Clone the repository to your local machine.
2. **Run in Browser**: Open the HTML file in a browser to see the button animation in action.
3. **Customization**: Modify colors, timing, or wave images in the CSS for personalized styling.

## Customization Tips

- Change the **`background-color`** of `.wave` for different color themes.
- Adjust **animation duration** in `@keyframes` or transition times for a faster or slower effect.
- Replace the `wave.png` image to experiment with other textures for unique background effects.

