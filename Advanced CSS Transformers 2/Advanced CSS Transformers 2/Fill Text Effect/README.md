# CSS Hover Text Reveal Effect

A minimal CSS project showcasing a smooth text reveal effect on hover.

## Features

- **Hover Reveal**: On hover, a hidden layer of text animates into view over the main text, creating a sliding reveal effect.
- **Transition**: The animation is powered by a `transition` effect on the `width` property, providing a smooth, 0.5-second reveal.

## Core Code

```css
h1:before {
    content: "text";
    position: absolute;
    top: 0;
    left: 0;
    color: #262626;
    width: 0%;
    overflow: hidden;
    transition: all 0.5s;
}

h1:hover:before {
    width: 100%;
}
```

## How It Works

- The `h1:before` pseudo-element overlays the primary text with a second color and starts with `width: 0%`.
- On hover, `width` expands to 100%, revealing the overlay text.

## Usage

1. Clone this repository.
2. Open the HTML file in a browser.
3. Hover over the text to see the effect in action.

--- 

A sleek, minimal effect to add style to any header text.