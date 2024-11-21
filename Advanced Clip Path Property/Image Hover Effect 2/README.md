# CSS Card Animation Effects

This project demonstrates a visually engaging card design that leverages CSS animations and transitions for dynamic hover effects. The focus is on manipulating the `clip-path` property for image transitions and button hover effects.

---

## Effects Overview

### 1. **Image Hover Effect**
- **Default State:** The image fills the card with a standard rectangular clip path (`polygon(0 0, 100% 0, 100% 100%, 0 100%)`).
- **Hover State:** The clip path transforms, creating a dramatic diagonal reveal (`polygon(0 0, 100% 0, 100% 100%, 100% 0)`).
- **Result:** A seamless transition that creates a sliding effect when the card is hovered over.

```css
img {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: 0.5s;
}

img:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 0);
}
```

### 2. **Button Hover Effect**
- **Default State:** Buttons are styled with a border and white text on a transparent background.
- **Hover State:** The background changes to white, and the text color inverts to black, creating a smooth and interactive highlight effect.

```css
a {
    border: 1px solid white;
    color: white;
    transition: 0.5s;
}

a:hover {
    color: black;
    background-color: white;
}
```

### 3. **Centered Content**
- Content (`h2`, `p`, and `a`) is perfectly centered using CSS transforms:
  - Positioned at the center of the card with `top: 50%; left: 50%`.
  - Adjusted into place with `transform: translate(-50%, -50%)`.

---

## How It Works

1. **Card Layout:**
   - The `.card` element acts as the container for the content and the image.
   - It is styled with a fixed width and height and positioned centrally using Flexbox.

2. **Image Animation:**
   - The `clip-path` property defines the visible area of the image.
   - On hover, the `clip-path` changes, creating the illusion of a diagonal wipe transition.

3. **Interactive Button:**
   - The buttons respond to hover with a clean transition effect, providing an interactive visual cue.

---

## Code Structure

### HTML

```html
<div class="card">
    <img src="your-image.jpg" alt="Card Image">
    <div class="content">
        <h2>Card Title</h2>
        <p>Some descriptive text about the card.</p>
        <a href="#">Learn More</a>
    </div>
</div>
```

### CSS

#### **Body Styling**
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

#### **Card Styling**
```css
.card {
    position: relative;
    width: 400px;
    height: 400px;
    background-color: black;
}

img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

img:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 0);
}
```

#### **Content Styling**
```css
.content {
    position: absolute;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
    text-transform: capitalize;
}

p {
    margin-bottom: 30px;
    text-transform: capitalize;
}

a {
    display: inline-block;
    padding: 10px 10px;
    border: 1px solid white;
    text-decoration: none;
    color: white;
    transition: 0.5s;
    text-transform: capitalize;
}

a:hover {
    color: black;
    background-color: white;
}
```

---

