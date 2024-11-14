# CSS Pattern Animation Project

This project demonstrates a continuous scrolling background effect using pure CSS. The animation simulates a moving background pattern, creating a visually dynamic effect ideal for banners or backgrounds.

## Project Structure

- **HTML**: Provides a basic structure with a `div` containing the `.banner` class.
- **CSS**: Implements the main animation effect using `@keyframes` and background properties to achieve the moving pattern.

### Key Feature: Scrolling Background Animation

The CSS code defines a `.banner` class with a background image that scrolls vertically, creating a continuous animated pattern effect.

- **`.banner` Class**: 
  - Sets up a full-page background with a static image, utilizing `background-position` and `animation` to create the movement.
  - The animation moves the background from its original position to a specified point, causing a seamless loop.

- **Animation Details**:
  - The `@keyframes animated-pattern` animation adjusts `background-position` from `0 0` to `0 600px`, creating a smooth, endless vertical scroll.

- **Code Snippet**:
    ```css
    .banner {
        height: 100vh;
        background: url(images/bg.png);
        background-position: 0 0;
        animation: animated-pattern 15s linear infinite;
    }

    @keyframes animated-pattern {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 0 600px;
        }
    }
    ```

## Usage

1. Clone or download the repository.
2. Add a background image (`bg.png`) inside an `images` folder.
3. Open the `index.html` file in a browser to view the background animation in action.

## Customization

- **Speed**: Adjust the `animation` duration (e.g., `15s`) to make the animation faster or slower.
- **Direction**: Modify `background-position` values to change the scrolling direction.

