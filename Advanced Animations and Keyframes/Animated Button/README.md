# CSS Button Animation Effect

This project showcases a dynamic hover animation effect for a button using only CSS. The button features a red sliding background animation that reveals itself on hover, adding visual depth and interactivity to the design.

## Project Overview

- **HTML Structure**: Contains a single button in the form of an anchor (`<a>`) tag.
- **CSS Styling**: Applies a minimal dark theme and a complex button animation using pseudo-elements (`::before`) and keyframe animations.

### Key Features

- **Animated Background Slide**:
  - A red background element, positioned behind the text, slides from left to right in a looping animation.
  - On hover, the red background expands to cover the button completely, creating a smooth and stylish transition.

### Code Explanation

- **Background Setup**:
  - The background is created using the `::before` pseudo-element, allowing it to be styled independently from the button content.
  - Positioned absolutely within the button, it starts off with a `skew` effect for a dynamic entry and moves across the button in a looping keyframe animation.

- **Animation Logic**:
  - `@keyframes moving`: The `from` and `to` values set the red background to slide from the left edge of the button to the far right, creating an infinite horizontal movement.
  - On hover (`a:hover:before`), the background’s skew is reset, and the width expands to cover the full button, transitioning smoothly for a polished effect.

### Code Snippet:

```css
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
}

a {
    text-decoration: none;
    color: white;
    font-family: sans-serif;
    font-size: 40px;
    border: 3px solid white;
    padding: 40px 80px;
    position: relative;
    overflow: hidden;
}

a:before {
    content: "";
    background-color: red;
    top: 0;
    left: 0;
    width: 120px;
    height: 100%;
    position: absolute;
    z-index: -1;
    transform: skew(-15deg);
    animation: moving 1.2s linear infinite;
    transition: all 0.5s;
}

@keyframes moving {
    from {
        left: -120px;
    }
    to {
        left: 100%;
    }
}

a:hover:before {
    width: 100%;
    transform: skew(0deg);
    animation: none;
}
```

### Usage

1. Clone or download this repository.
2. Open the `index.html` file in a web browser to see the animated button effect.

## Customization

- **Animation Speed**: Adjust the duration in `animation: moving 1.2s linear infinite;` to change the speed of the sliding background.
- **Background and Text Colors**: Modify the color values in `background-color` for the pseudo-element and the `color` property in `a` to match different themes.
- **Border Style**: Customize the border thickness or color for unique button aesthetics.

