# Animated Card Layout

This project showcases a **dynamic card layout** featuring interactive hover effects and animations. The design focuses on layered 3D transformations, smooth transitions, and layered opacity effects for a visually engaging user experience.

## Features

### Background and Overlay Animation
- The **background color shifts** from purple (`#833471`) to yellow (`#FFC312`) via a circular clipping effect centered on the viewport, creating an animated backdrop when the page loads.
- The entire background and overlay elements respond to user interactions, transitioning smoothly in `0.5s`.

### 3D Card Transformation
- Each **card element** appears with a default rotation, skew, and scale, giving the layout a 3D stacked effect.
- On hover, the cards transform by moving horizontally to the left, becoming more prominent and shifting in layers to form a **carousel-like animation**.
- The card stacking uses the `z-index` and opacity adjustments, with the front-most card being fully opaque, and subsequent layers gradually decreasing in opacity.

### Smooth Content Reveal
- Each card contains a **content section** that stays hidden until the user hovers over the container. 
- On hover, the `content` within each card fades in with a staggered delay, creating a **seamless appearance** effect.

## Code Highlights

The core of the animations is controlled by CSS transitions, transformations, and pseudo-elements:

```css
body:before {
    clip-path: circle(250px at center);
    background: #FFC312;
    transition: 0.5s;
}

.card {
    transform: translateX(-50%) translateY(calc(50px * var(--i))) rotate(40deg) skew(-20deg, -10deg) scale(0.6);
    transition: 0.5s;
    z-index: calc(-1 * var(--i));
}

.container:hover .card {
    transform: translateX(calc(-50% + calc(350px * var(--i))));
}

.content {
    opacity: 0;
    transition: 0.5s;
}
.container:hover .content {
    opacity: 1;
    transition-delay: calc(0.2s * var(--j));
}
```

### Variables for Layering
Custom properties (`--i` and `--j`) are used to control layering and staggering effects across multiple elements. This allows for individual timing and positioning of each card during animation.

## Usage

This setup is ideal for creating **interactive product showcases** or **portfolio displays**, where each card highlights different items or information. Users experience a fluid, visually appealing interface with interactive feedback.

### Browser Compatibility
Ensure compatibility with modern browsers for full CSS variable support and smooth transitions. 

