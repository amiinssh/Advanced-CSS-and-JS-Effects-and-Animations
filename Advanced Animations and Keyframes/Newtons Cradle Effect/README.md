# Animated Cradle Simulation

This project creates a minimalistic Newton's cradle animation using CSS, displaying a pendulum-like motion with two swinging arms.

## Features

- **Full-Screen Centered Layout**: The animation is centered both vertically and horizontally, with a dark background.
- **Newton's Cradle Animation**: Simulates a simplified Newton's cradle effect, with two "arms" swinging back and forth.
- **Smooth Motion**: Animations use CSS keyframes for continuous motion.

## Code Structure

- **`body`**:
  - Sets full viewport height and centers content.
  - Dark background color (`#2c3e50`) for contrast.

- **`.cradle`**:
  - Displays a flexbox container with a horizontal layout.
  - Includes a top white border to represent the cradle’s frame.

- **`.cradle span`**:
  - Each arm is a vertical line (`3px` width, `300px` height) with a white circle at the bottom, simulating the cradle’s balls.
  - Uses `transform-origin: top` for correct rotation around the top edge.

- **Animations**:
  - **`@keyframes left-arm`** and **`@keyframes right-arm`** simulate the swinging motion, with one arm swinging slightly before the other.
  - Animations create a back-and-forth pendulum effect:
    - **Left Arm**: Swings to `60deg` and returns to `0deg`.
    - **Right Arm**: Swings to `-60deg` with a slight delay for a realistic look.

