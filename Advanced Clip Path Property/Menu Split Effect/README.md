# Animated Text Hover Effect - README

## Overview

This project demonstrates an elegant and modern animated hover effect for text-based links using pure HTML and CSS. The animations are designed to create a visually striking interaction when the user hovers over the text. The project is fully responsive and adaptable for various use cases like navigation menus, landing pages, or aesthetic web design.

---

## Features

1. **Dynamic Text Hover Animation:**
   - Text is revealed in two layers (`before` and `after` pseudo-elements).
   - On hover, the text color changes and shifts diagonally for a dynamic effect.

2. **Stylish Divider Animation:**
   - A subtle horizontal line animation appears and slides across the link on hover.
   - Adds a clean, professional touch to the effect.

3. **Customizable Design:**
   - Fully adjustable colors, text sizes, and animation timings.
   - Text animations are driven by CSS transitions for smooth effects.

---

## Code Breakdown

### **1. HTML Structure**
- The core of the design is an unordered list `<ul>` containing list items `<li>`.
- Each list item wraps an `<a>` link with a `data-text` attribute to control the displayed text.

```html
<ul>
  <li>
    <a href="#" data-text="Home">Home</a>
  </li>
  <li>
    <a href="#" data-text="About">About</a>
  </li>
  <li>
    <a href="#" data-text="Services">Services</a>
  </li>
</ul>
```

---

### **2. CSS Styling**
#### **Body Styling**
- The container is centered both vertically and horizontally using `flexbox`.
- A light gray background (`rgb(236, 236, 236)`) provides a clean canvas for the animation.

```css
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    background-color: rgb(236, 236, 236);
}
```

#### **Link Animation**
- Text color transitions between transparent and visible using `clip-path` for a sliced effect.
- **`before` and `after` Pseudo-Elements:**
  - These layers display two halves of the text.
  - On hover, they transform diagonally while changing color.

```css
a:before {
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    color: #262626; /* Default Text Color */
}

a:hover:before {
    color: rgb(160, 0, 0); /* Highlight Color */
    transform: translate(10px, -3px);
}
```

- **Divider Line Animation:**
  - A horizontal line (`li:before`) slides from left to right on hover.
  - This is achieved with `transform` and `transition`.

```css
li:before {
    background-color: #262626; /* Default Divider Color */
    left: -100%; /* Start off-screen */
    transition: 0.5s;
}

li:hover:before {
    left: 100%; /* Move off-screen in the opposite direction */
}
```

---

## How It Works

1. **Hover State Activation:**
   - When hovering over a link, the `:hover` pseudo-class triggers `before` and `after` pseudo-elements to change color and position.

2. **Clip Path Animation:**
   - The `clip-path` property ensures only half of the text is visible for each pseudo-element, giving the sliced effect.

3. **Divider Animation:**
   - A thin horizontal line slides across the link, enhancing the interaction.

---

## Customization

- **Text and Colors:**
  - Adjust the text size in the `a` selector (`font-size` and `font-weight`).
  - Change colors for the text and hover effect in the `a:before` and `a:after` selectors.

- **Animation Speed:**
  - Modify `transition` durations in the `a` and `li:before` selectors for faster or slower animations.

---

