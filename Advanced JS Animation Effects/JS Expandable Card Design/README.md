# Expandable Card Design with Interactive Animations

This project showcases a **modern expandable card design** with elegant animations, built using **HTML**, **CSS**, and **JavaScript**. The card expands and collapses smoothly when toggled, offering a sleek and engaging user experience.

---

## Features

### 1. **Expandable Card Animation**
- The card starts in a compact state and expands when the toggle button is clicked.
- Smooth transitions and transformations create a visually appealing interaction.

### 2. **Toggle Button Effect**
- The toggle button animates between two states, with the arrow icon rotating to indicate the card's status.
- Subtle hover and click animations enhance the user experience.

### 3. **Responsive Design**
- The card layout and animations are responsive, ensuring compatibility across devices and screen sizes.

### 4. **Content Showcase**
- The expanded card reveals:
  - A title with a subheading.
  - A prominent image styled with borders and shadows.
  - A **"Hire Me"** button for actionable interaction.

---

## Code Overview

### HTML
The **HTML** structure includes:
- A `card` element with a `content` section to hold the title, image, and button.
- A `toggle` button for expanding and collapsing the card.

Key HTML snippet:
```html
<div class="card">
    <div class="content">
        <div class="contentBox">
            <h2>paul rosenburg <br><span>creative developer</span></h2>
            <div class="imgBx">
                <img src="images/img.jpg" alt="">
            </div>
            <button>hire me</button>
        </div>
    </div>
    <div class="toggle">
        <span></span>
    </div>
</div>
```

### CSS
The **CSS** styles and animates the card:
1. **Initial State**:
   - The card is compact (`height: 85px`) with a hidden content area.
2. **Expanded State**:
   - When the card gains the `active` class, its height grows to `420px`, revealing the full content.
3. **Toggle Button**:
   - The toggle button includes a rotating arrow (`span`) to indicate the card's state.
4. **Image Styling**:
   - The image is styled with a border, shadows, and responsive scaling.

Key CSS snippet:
```css
.card {
    position: relative;
    width: 350px;
    height: 85px;
    background: #192a56;
    border-radius: 20px;
    transition: 0.5s;
}

.card.active {
    height: 420px;
}

.toggle span {
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%) rotate(45deg);
    transition: 0.5s;
}

.card.active .toggle span {
    transform: translate(-50%, -70%) rotate(225deg);
}
```

### JavaScript
The **JavaScript** adds interactivity by toggling the `active` class on the card:
1. Selects the `.card` and `.toggle` elements.
2. Adds an event listener to the `toggle` button.
3. Toggles the `active` class on the card to switch between expanded and collapsed states.

Key JavaScript snippet:
```javascript
let card = document.querySelector('.card');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    card.classList.toggle('active');
});
```

---

## How It Works
1. **Initial Load**:
   - The card appears in its collapsed state.
   - The toggle button shows a downward arrow.
2. **User Interaction**:
   - Clicking the toggle button expands the card, revealing the content inside.
   - The toggle button rotates its arrow to point upward.
3. **Smooth Transition**:
   - The height of the card animates using a `transition` for seamless expansion and collapse.

---

## How to Use
1. Clone or copy the project files.
2. Place an image in the `images` folder and reference it in the `img` tag.
3. Link the `style.css` and `script.js` files in the `index.html`.
4. Open the `index.html` file in a browser to see the interactive card in action.

---

## Customization
- **Card Size**: Adjust the width, height, and border-radius in the `.card` CSS.
- **Animation Speed**: Modify the `transition` duration (currently `0.5s`) for faster or slower effects.
- **Content Styling**: Update fonts, colors, and button styles to match your branding.
- **Interactivity**: Extend functionality by adding click events to the button (e.g., opening a contact form).

---

## Example Animations and Effects
1. **Card Expansion**:
   - Smooth height animation with hidden overflow for clean transitions.
2. **Arrow Rotation**:
   - The toggle arrow rotates seamlessly to indicate the expanded/collapsed state.
3. **Image Styling**:
   - Box shadows and borders enhance the visual appeal of the image.
4. **Button Design**:
   - A modern button with hover effects and drop shadows for emphasis.

---

This expandable card design is perfect for portfolios, interactive sections, or product showcases. It demonstrates the power of **CSS animations** combined with **JavaScript interactivity** for a delightful user experience. ✨