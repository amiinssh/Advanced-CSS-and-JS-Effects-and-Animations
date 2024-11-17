# Animated Loader with Rotating Dots

This project creates a visually stunning animated loader featuring rotating glowing dots that scale dynamically. The animation is implemented with pure CSS and designed for use in loading screens or similar scenarios.

## Features

- **Rotating Dots Animation**: Dots rotate around a central point, creating a mesmerizing visual effect.
- **Glowing Effect**: Each dot emits a neon-blue glow, enhancing the aesthetic appeal.
- **Smooth Scaling**: The dots scale in and out rhythmically, contributing to a fluid and continuous animation.
- **Customizable Layout**: The loader is lightweight, flexible, and can be easily customized to fit different themes or sizes.

## Animation Breakdown

### Key CSS Components

1. **Rotation with `transform`**:
   - Each dot (`span`) is rotated around the center using:
     ```css
     transform: rotate(calc(18deg * var(--i)));
     ```
   - The `--i` variable assigns an incremental rotation angle to each dot, creating an evenly spaced circular pattern.

2. **Glow Effect with `box-shadow`**:
   - The dots are given a glowing neon-blue effect using:
     ```css
     box-shadow: 0 0 10px #00c3ff, 0 0 20px #00c3ff, 0 0 40px #00c3ff, 0 0 60px #00c3ff, 0 0 80px #00c3ff, 0 0 100px #00c3ff;
     ```

3. **Scaling Animation with `@keyframes`**:
   - The scaling effect is achieved with the `animate` keyframes:
     ```css
     @keyframes animate {
         0% {
             transform: scale(1);
         }
         80%, 100% {
             transform: scale(0);
         }
     }
     ```
   - Dots shrink to disappear at the end of the animation cycle and reappear smoothly.

4. **Animation Delays**:
   - Each dot’s animation is slightly delayed to create a cascading effect:
     ```css
     animation-delay: calc(0.1s * var(--i));
     ```

### HTML Structure
The loader is defined using a simple and scalable structure:
```html
<section>
    <div class="loader">
        <span style="--i: 0;"></span>
        <span style="--i: 1;"></span>
        <span style="--i: 2;"></span>
        <span style="--i: 3;"></span>
        <span style="--i: 4;"></span>
        <span style="--i: 5;"></span>
        <span style="--i: 6;"></span>
        <span style="--i: 7;"></span>
        <span style="--i: 8;"></span>
        <span style="--i: 9;"></span>
    </div>
</section>
```

### Styling and Layout
The loader is centered within a full-screen section:
```css
section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #010f1f;
}
```

## How It Works

1. **Dot Placement**:
   - Each `span` represents a dot. Its position is calculated using `transform: rotate(calc(18deg * var(--i)));` to evenly distribute them in a circular pattern.

2. **Glow and Scaling**:
   - The glowing effect is applied using `box-shadow`, and the scaling animation alternates between `scale(1)` and `scale(0)` for a pulsating look.

3. **Infinite Loop**:
   - The animation is set to loop infinitely with `animation: animate 2s linear infinite;`.

## Customization

- **Color**: Update the glow and dot color by changing `background` and `box-shadow` values.
- **Size**: Modify the loader size by adjusting the `height` and `width` of `.loader` and `span`.
- **Speed**: Adjust the duration of the animation in the `@keyframes` or `animation` properties.

## Preview

Here’s an example of the animation:

- A circular arrangement of dots with neon-blue glow.
- Dots scale in and out in a rhythmic loop.
- Smooth rotation and delay effects create a dynamic, engaging animation.

This loader is ideal for modern web applications, games, or any project needing a sleek and interactive loading screen.