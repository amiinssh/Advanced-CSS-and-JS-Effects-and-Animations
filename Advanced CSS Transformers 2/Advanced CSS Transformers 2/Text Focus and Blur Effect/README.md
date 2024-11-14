# Hover Effects Showcase

This project demonstrates text-based hover effects for a minimalistic web design.

## Overview

This webpage applies animated hover effects to text, giving an engaging visual experience by combining blur and shadow transitions on a simple background.

### Key Effects

- **Text Blur**: The text blurs by default and sharpens when hovered over, creating a focus effect.
- **Shadow Animation**: Additional small shadow animations appear on hover for a dynamic, layered effect.
- **Smooth Transitions**: All hover states are animated with gradual transitions, providing a smooth visual flow.

### Styling

- **Monochrome Palette**: Uses a simple color palette with a two-tone linear gradient for the background.
- **Minimalistic Font**: Monospace font emphasizes simplicity.
- **Responsive Flex Layout**: Centered elements for an adaptable layout across screen sizes.

## Code Highlights

The main effects are handled in the CSS:
```css
h2 span {
    filter: blur(5px);
    transition: 0.5s;
}
h2 span:hover {
    filter: blur(0);
    transition: 0s;
}
h2 span i:before, h2 span i:after {
    box-shadow: ...;
    opacity: 0;
}
h2 span:hover i:before, h2 span:hover i:after {
    opacity: 1;
}
```

