# Card Hover Effects with `clip-path`

This project showcases an elegant hover effect using the CSS `clip-path` property and smooth transitions to create a dynamic and visually engaging card component.

---

## Features of the Effect

### 1. **Image Masking with `clip-path`**
- The `clip-path` property creates a circular mask around the card's image.
- **Default State:** The image is fully visible with a circular mask that covers 70.7% of the card.
- **Hover State:** The mask transitions to a smaller circle (18.2% of the card) centered slightly above the card's midpoint, focusing on the content.

### 2. **Content Reveal Animation**
- Content elements (`h2`, `p`, and `a`) are hidden initially (`opacity: 0`) and positioned slightly below the card.
- On hover:
  - The content fades in (`opacity: 1`).
  - Moves smoothly to its natural position (`translateY(0)`).
  - A slight delay (`transition-delay: 0.5s`) enhances the staggered animation effect.

### 3. **Smooth Transitions**
- A `0.5s` transition ensures fluid changes for the image and content.
- The combined use of `opacity`, `transform`, and `clip-path` creates a professional and engaging hover effect.

---

## Code Overview

### CSS Highlights

#### **Body Styling**
- The card is centered using `flexbox`, with a clean and minimal background.

```css
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
}
```

#### **Card and Image Effects**
- The `.card` acts as the container, with `.img` holding the image.
- `clip-path` defines the initial and hover shapes of the image mask.

```css
.img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    clip-path: circle(70.7% at 50% 50%);
}

.card:hover .img {
    clip-path: circle(18.2% at 50% 38%);
}
```

#### **Content Reveal**
- Text elements (`h2`, `p`, `a`) are styled for smooth entry:
  - Initially hidden (`opacity: 0` and `translateY(20px)`).
  - Hovering over the card reveals the content with a fade and slide-up animation.

```css
h2, p, a {
    opacity: 0;
    transition: 0.3s;
    transform: translateY(20px);
}

.card:hover h2,
.card:hover p,
.card:hover a {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
}
```

---

## How It Works

1. **Image Hover Mask:**
   - The `clip-path` property dynamically adjusts the visible portion of the image.
   - On hover, the mask shrinks, focusing on a specific area.

2. **Content Animation:**
   - The text and button are hidden until the card is hovered over.
   - When hovered, they smoothly fade in and slide up to create an engaging reveal effect.

---

