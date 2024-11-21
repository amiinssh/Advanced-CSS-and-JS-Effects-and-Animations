# Hover Effect with `clip-path`

This project demonstrates a creative hover effect using the CSS `clip-path` property. The interactive design showcases a dynamic text transformation that smoothly transitions between shapes when the user hovers over the text. The focus is on the layered text effects and smooth transitions.

---

## Features of the Animation

1. **Layered Text Animation:**
   - Two overlapping layers of text (`h1` elements) are styled differently to create a striking effect.
   - The first layer acts as the primary text, and the second layer transitions upon hover.

2. **Dynamic `clip-path`:**
   - The second text layer (`nth-child(2)`) utilizes the `clip-path` property to create a masking effect.
   - The shape transitions between a line and a full rectangle when hovered.

3. **Interactive Hover Effects:**
   - Hovering over the first text layer triggers a change in the `clip-path` for the second layer.
   - Smooth transitions are enabled using the `transition` property for a seamless user experience.

4. **Centralized Design:**
   - The layout is fully centered on the screen using `flexbox` properties for alignment.
   - A clean, minimal background color enhances focus on the animation.

---

## Code Overview

### CSS Breakdown

- **Body Styling:**
  - Centers the `.main` container vertically and horizontally.
  - Sets a subtle background color (`#c8d6e5`) to complement the white text.

```css
body {
    margin: 0;
    padding: 0;
    background-color: #c8d6e5;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;    
}
```

- **Text Styling:**
  - Both `h1` elements are centrally aligned with a large, uppercase font.
  - The `clip-path` property masks portions of the second `h1` element initially.

```css
h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    font-size: 220px;
    text-transform: uppercase;
}

h1:nth-child(2) {
    color: white;
    transition: 0.5s;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
    background-color: #c8d6e5;
}
```

- **Hover Effects:**
  - On hovering over the first text layer (`nth-child(1)`), the second layer's `clip-path` transitions to a full rectangle.
  - Hovering over the first layer also collapses the `clip-path` of the second layer to create a disappearing effect.

```css
h1:nth-child(2):hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

h1:nth-child(1):hover ~ h1 {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
```

---

