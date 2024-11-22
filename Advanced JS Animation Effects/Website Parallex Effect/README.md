# Parallax Scrolling Website

This project demonstrates a visually appealing **parallax scrolling effect** built using **HTML**, **CSS**, and **JavaScript**. Parallax scrolling creates a sense of depth and immersion as the background and foreground images move at different speeds when the user scrolls the page.

---

## Features

### 1. **Parallax Animation**
- Multiple layers of images, including hills, leaves, and plants, are positioned at varying depths.
- JavaScript dynamically adjusts their positions based on scroll input to create a realistic depth effect.

### 2. **Smooth Navigation**
- A clean, responsive navigation bar with hover effects ensures intuitive user interaction.

### 3. **Dynamic Text Movement**
- The main text ("Parrallax Website") smoothly transitions in position as the user scrolls, amplifying the visual appeal.

---

## Code Overview

### HTML
The structure includes:
- A `header` with a logo and navigation links.
- A `parrallax` section containing layered images and text.
- A content section with sample text to demonstrate scroll functionality.

Key HTML snippet:
```html
<section class="parrallax">
    <img src="images/hill1.png" id="hill1">
    <img src="images/hill2.png" id="hill2">
    <img src="images/hill3.png" id="hill3">
    <img src="images/hill4.png" id="hill4">
    <img src="images/hill5.png" id="hill5">
    <img src="images/tree.png" id="tree">
    <img src="images/leaf.png" id="leaf">
    <h2 id="text">Parrallax Website</h2>
</section>
```

### CSS
The **CSS** ensures proper layout and styling:
- **Navigation Bar**: Styled for simplicity with hover animations.
- **Parallax Section**:
  - Images are absolutely positioned for layering.
  - Background text is styled with `text-shadow` to create a glowing effect.
- **Content Section**: A visually distinct area for additional page content.

Key CSS snippet:
```css
#text {
    position: absolute;
    font-size: 5em;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.parrallax img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
}
```

### JavaScript
The **JavaScript** dynamically manipulates the positions of images and text based on scroll values:
1. Retrieves elements by their IDs.
2. Listens for the `scroll` event to calculate `scrollY` (vertical scroll offset).
3. Updates positions using inline styles.

Key JavaScript snippet:
```javascript
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = `${value * 2.5}px`;
    leaf.style.top = `${value * -1.5}px`;
    leaf.style.left = `${value * 1.5}px`;
    hill5.style.left = `${value * 1.5}px`;
    hill4.style.left = `${value * -1.5}px`;
    hill1.style.top = `${value * 1}px`;
});
```

---

## How It Works
1. As the user scrolls, the `scrollY` value updates.
2. JavaScript calculates new positions for each element based on `scrollY` and their respective speeds (multipliers).
3. The `style` property dynamically changes the `top`, `left`, or `marginTop` values, giving the illusion of depth.

### Parallax Depth Explained
- **Foreground elements** (e.g., leaves): Move faster in relation to scroll to simulate closeness.
- **Background elements** (e.g., hills): Move slower to appear farther away.

---

## How to Use
1. Clone or copy the project files.
2. Add the required images in an `images` folder.
3. Include `style.css` and `script.js` in the HTML file.
4. Open `index.html` in a browser to see the parallax effect.

---

## Customization
- **Speed of Elements**: Adjust the multipliers in JavaScript to change the relative speed of each layer.
- **Text Effects**: Modify the CSS for `#text` to create unique styles like color transitions or additional animations.
- **Image Layers**: Replace the images with your own assets to personalize the scene.

---

## Example Effects
1. **Leaf Movement**: Scroll causes the leaf to move diagonally, adding dynamism to the scene.
2. **Text Scrolling**: The main text moves downward with a multiplier effect for emphasis.
3. **Layer Depth**: Background hills shift slowly to reinforce the parallax illusion.

---

