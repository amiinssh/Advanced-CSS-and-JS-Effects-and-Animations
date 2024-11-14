# CSS Animated Lighting Text Effect

This project demonstrates a creative lighting animation effect applied to text using only CSS. It creates a sequential, glowing animation across each letter, mimicking a neon lighting effect that brings an engaging, modern aesthetic to any web page.

## Project Overview

This project utilizes keyframe animations and staggered delays to achieve a lighting effect on a list of characters, cycling each letter through a dark-to-light transformation. The result is a pulsing, synchronized animation that makes text appear as though it's lighting up in sequence.

### Features and Techniques

- **CSS Keyframe Animation**: The `@keyframes lighting` animation gradually transitions the color of each letter from a neutral gray to a bright yellow, adding an illuminated effect with `text-shadow`.
- **Sequential Timing**: Each letter has a unique `animation-delay` to create a cascading light-up effect, giving the appearance of a continuous flow of lighting.
- **No JavaScript**: All animations and effects are achieved purely with CSS, making this project lightweight and easy to integrate.

### How the Code Works

1. **HTML Structure**: The text is represented as individual list items (`<li>`) within an unordered list (`<ul>`), allowing for per-letter control in the animation.
2. **CSS Styling**:
   - `body`: Sets a dark background color and centers the text on the screen.
   - `ul`: Displays the list items inline.
   - `li`: Each letter starts with a base color and shadow, which transforms based on the `@keyframes lighting` animation.
3. **Keyframe Animation**:
   - The animation begins with each letter in a dim state (`color: #484848`) and then flashes bright yellow (`color: #fff900`) with a neon-style `text-shadow`.
   - Each list item (`li`) has a staggered `animation-delay`, so the light effect appears to move across the text.

### Code Snippet

```css
ul li {
    list-style: none;
    color: #484848;
    font-size: 80px;
    letter-spacing: 15px;
    animation: lighting 1.4s linear infinite;
}

@keyframes lighting {
    0%, 90% {
        color: #484848;
        text-shadow: none;
    }
    100% {
        color: #fff900;
        text-shadow: 0 0 7px #fff900, 0 0 50px #ff6c00;
    }
}

ul li:nth-child(1) { animation-delay: 0s; }
ul li:nth-child(2) { animation-delay: 0.1s; }
/* ... continued for each letter */
```

### Usage

1. **Clone** or download the repository.
2. **Open** the `index.html` file in your browser to view the animated lighting text effect.

### Customization Options

- **Adjust Animation Speed**: Modify the `1.4s` value in `animation: lighting 1.4s linear infinite;` to make the lighting effect slower or faster.
- **Color Scheme**: Experiment with different colors in the keyframe definitions to create various lighting effects, like a neon blue or a soft white glow.
- **Text Size**: Change `font-size` in `ul li` to scale the text up or down.

