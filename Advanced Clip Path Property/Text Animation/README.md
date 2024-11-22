## Overview

This project demonstrates a visually captivating full-page animation that uses smooth transitions and text sliding effects. The animation alternates text visibility by moving it vertically, creating a modern, attention-grabbing visual element perfect for splash screens or landing pages.

---

## Features

### **1. Seamless Vertical Text Animation**
- The text (`<h2>`) dynamically moves up and down using keyframe animations.
- The animation alternates between visible and hidden states smoothly.

### **2. Layered Background Effect**
- A second background layer (`.box2`) clips to a polygon shape and provides a contrasting color effect.
- The `clip-path` property ensures smooth shape transitions, making the background visually appealing.

### **3. Responsive and Lightweight**
- Fully responsive design for any viewport size.
- Clean and minimal code structure optimized for performance.

---

## Code Breakdown

### **1. HTML Structure**
- A simple section containing two overlapping boxes (`.box` and `.box2`) with a heading element (`<h2>`) for the animated text.

```html
<section>
  <div class="box">
    <h2>
      Welcome
      <span>to the future</span>
    </h2>
  </div>
  <div class="box box2">
    <h2>
      Welcome
      <span>to the future</span>
    </h2>
  </div>
</section>
```

---

### **2. CSS Styling**
#### **Global Styling**
- All margins and paddings are reset using `*`.
- The body overflow is set to `hidden` to prevent scrolling during animation.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    overflow: hidden;
}
```

---

#### **Section and Box Design**
- The `<section>` spans the full viewport height, creating a fullscreen effect.
- The `.box` layers are stacked and centered, allowing seamless animations.

```css
section {
    position: relative;
    width: 100%;
    height: 100vh;
}

.box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---

#### **Polygon Clipping for Layered Effect**
- The second box (`.box2`) has a green background clipped into a polygonal shape using `clip-path`.
- This creates a split-layered look, enhancing the visual appeal.

```css
.box2 {
    background: #4cb979;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
```

---

#### **Text Styling and Animation**
- The `<h2>` element slides vertically using the `@keyframes` animation.
- The animation alternates between moving the text upward (`-70%`) and downward (`70%`) to create a continuous loop.

```css
h2 {
    font-size: 45px;
    display: flex;
    flex-direction: column;
    transform: translateY(-70%);
    text-align: center;
    animation: animate 3s ease-in-out infinite;
    color: #4cb979;
}

.box2 h2 {
    color: #fff;
}
```

---

#### **Keyframe Animation**
- The animation is defined by `@keyframes`, which transitions the text's position:
  - Starts and ends at `-70%` (hidden above).
  - Moves to `70%` (hidden below) in the middle phase.
  
```css
@keyframes animate {
    0%, 45% {
        transform: translateY(-70%);
    }
    55%, 90% {
        transform: translateY(70%);
    }
    100% {
        transform: translateY(-70%);
    }
}
```

---

## Customization

- **Text Content:** Edit the `<h2>` and `<span>` elements to change the displayed text.
- **Colors:**
  - Modify `color` for text and `background` for the `.box2` layer.
- **Animation Timing:** Adjust the `3s` duration in `animation: animate` to control the animation speed.
- **Clipping Shape:** Experiment with the `clip-path` property in `.box2` to create unique shapes.

---

## Technologies Used

- **HTML5**
- **CSS3**

---

