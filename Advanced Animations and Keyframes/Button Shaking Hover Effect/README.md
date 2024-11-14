# CSS Hover Button Animation

This project demonstrates a hover animation effect for a button using pure CSS. When the button is hovered over, it changes color and shakes to create a dynamic and engaging interaction.

## Project Overview

- **HTML Structure**: Contains a single button element wrapped in an anchor (`<a>`) tag.
- **CSS Styling**: Defines a centered layout with a dark background to highlight the button, along with hover and shake animations for enhanced visual feedback.

### Key Features

- **Button Animation**:
  - **Hover Transition**: The button changes color and border color smoothly when hovered, creating an interactive effect.
  - **Shake Effect**: A shake animation is triggered on hover, adding a subtle but eye-catching effect that draws user attention.

### Code Breakdown

- **Button Styling**:
  - The button has a `3px` white border, large padding, and a clean sans-serif font. 
  - The hover effect changes the button’s color and border to a red hue (`#F44336`) with a `0.3s` transition for a smooth color change.

- **Shake Animation**:
  - Using `@keyframes shake`, the button rotates back and forth in small angles (10 degrees) over `0.3s`, creating a brief shake effect.
  - The shake effect only activates on hover and provides a dynamic, tactile response for users.

- **Code Snippet**:
    ```css
    body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #222;
    }

    a {
        text-decoration: none;
        color: white;
        font-family: sans-serif;
        font-size: 40px;
        border: 3px solid white;
        padding: 40px 80px;
        transition: all 0.3s;
    }

    a:hover {
        border: 3px solid #F44336;
        color: #F44336;
        animation: shake 0.3s linear 1;
    }

    @keyframes shake {
        33% {
            transform: rotate(10deg);
        }
        66% {
            transform: rotate(-10deg);
        }
        100% {
            transform: rotate(10deg);
        }
    }
    ```

