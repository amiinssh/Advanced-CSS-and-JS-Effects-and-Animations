# Animated Image Slider README

This project showcases a CSS-only animated image slider, creating a smooth background transition effect between multiple images. The animation cycles through each image automatically, offering a visually dynamic display that’s perfect for hero sections, galleries, or background sliders.

## Project Overview

This CSS animation-based slider leverages keyframes to alternate between images in a seamless loop. Each image is displayed for a set duration, and the transition effect gives the impression of a rotating background. The entire animation is achieved purely with CSS, avoiding JavaScript and keeping performance efficient and lightweight.

## Features

- **Automatic Image Transition**: The slider cycles through multiple images in a loop, each appearing and transitioning smoothly.
- **Background Animation**: CSS keyframes are used to manage the transitions between different background images, giving the effect of a continuously shifting background.
- **Customizable Speed and Sequence**: The slider’s duration, order, and images are easily adjustable in the CSS.

## Code Explanation

### HTML Structure

The slider effect is applied to a single `.slider` container element, which serves as the background container for the images. 

### CSS Styling and Animation

#### Base Styling

- **Slider Container**: `.slider` is styled with a set width and height, which defines the visible area of the image slider. The initial background is set to the first image in the sequence.

#### Keyframe Animation

The `@keyframes change-bg` animation manages the transition between images. Different percentages in the animation timeline correspond to each background image, allowing for controlled intervals between transitions.

```css
@keyframes change-bg {
    0% { background: url(images/img-1.jpg); }
    20% { background: url(images/img-1.jpg); }
    25% { background: url(images/img-2.jpg); }
    45% { background: url(images/img-2.jpg); }
    50% { background: url(images/img-3.jpg); }
    70% { background: url(images/img-3.jpg); }
    75% { background: url(images/img-4.jpg); }
    100% { background: url(images/img-4.jpg); }
}
```

Each step in the `@keyframes` rule represents a background image change at a particular interval, with images held for a few seconds before transitioning to the next.

#### Key CSS Properties

- **Background**: The background of `.slider` changes over time as defined by the keyframes.
- **Animation Duration**: Set to `10s`, the entire cycle runs continuously every 10 seconds.
- **Transition**: The `transition: all 0.5s` smoothens the visual switch between images.

## Customization Tips

- **Adjust Image Sequence and Duration**: Modify the `@keyframes` timeline to hold images longer or switch them more frequently.
- **Add or Remove Images**: Additional images can be added by adding extra keyframe percentages and URLs.
- **Slider Dimensions**: Modify the `.slider` width and height to fit the desired space on your webpage.

