# Image Animation Project

This project features a dynamic **hover-triggered animation** applied to layered images, creating a seamless and visually captivating transition effect. The animation leverages **CSS `clip-path`** to reshape and reveal images on hover, providing a modern and interactive design.

---

## Features

### 1. **Layered Image Display**
- Three overlapping images dynamically clipped using `clip-path` to create unique shapes.
- Each layer contributes to a visually distinct composition.

### 2. **Hover Animation**
- Hovering over the container triggers a smooth animation that transitions all image layers.
- Hovering on a specific image animates its clip path to fully display the image.

### 3. **Customizable Clip Paths**
- `clip-path` is used to define polygonal shapes for each image layer.
- Shapes can be customized for unique layouts and effects.

---

## How It Works

### HTML Structure
```html
<div class="container">
  <div class="clip clip1"></div>
  <div class="clip clip2"></div>
  <div class="clip clip3"></div>
</div>
```
- The `.container` holds three `.clip` divs, each representing a layer with an image.
- Layers are styled and animated independently.

---

### CSS Styling

#### Body
- The content is centered on the screen with a neutral gray background to enhance the visual contrast.

```css
body {
  margin: 0;
  padding: 0;
  background-color: #555;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### Container and Layers
- The `.container` serves as the parent element, housing all three image layers.
- Each `.clip` is styled with a `clip-path` to define its shape and positioning.

```css
.container {
  position: relative;
  width: 800px;
  height: 500px;
  background-color: #222;
}

.clip {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}
```

#### Individual Layers
- Each `.clip` is assigned:
  - A unique image as its background.
  - A polygonal `clip-path` for its initial shape.

```css
.clip1 {
  background: url(Images/1.jpg);
  background-size: cover;
  background-position: center;
  clip-path: polygon(0% 0%, 17% 0%, 49% 100%, 0% 100%);
}

.clip2 {
  background: url(Images/2.jpg);
  background-size: cover;
  background-position: center;
  clip-path: polygon(13% 0%, 81% 0%, 59% 100%, 36% 100%);
}

.clip3 {
  background: url(Images/3.jpg);
  background-size: cover;
  background-position: center;
  clip-path: polygon(79% 0%, 100% 0, 100% 100%, 59% 100%);
}
```

---

### Hover Animations
- **Container Hover:** When hovering over the `.container`, all layers animate their clip paths to move out of view.
- **Individual Layer Hover:** Hovering over a specific `.clip` fully reveals the image by expanding its `clip-path`.

```css
.container:hover .clip {
  clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
}

.container .clip:hover {
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0 100%);
}
```

---

## Key Animations

### Transition Details
- **Smooth Animation:** Achieved using the `transition` property with a duration of `0.5s`.
- **Clip Path Transformation:**
  - The initial and final states of the `clip-path` polygons define the animated shape transitions.
  - On hover, the polygons expand or collapse smoothly.

---

