# Animated Navigation Links

This project creates an elegant and interactive **animated navigation bar** where hover effects transform the appearance of links. The animations feature a sliding underline that expands into a background, enhancing the visual feedback for users.

---

## Features

- **Interactive Hover Effects:** Links animate with a sliding underline that grows into a full background upon hover.
- **Smooth Transitions:** All animations are fluid and visually appealing, creating a professional design.
- **Minimalistic Style:** Clean typography and simple hover effects focus on usability and aesthetics.

---

## Code Breakdown

### HTML Structure

The navigation bar is built using an unordered list (`<ul>`), where each list item (`<li>`) contains an anchor (`<a>`).

```html
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

### CSS Styling

#### General Layout
The navigation is centered on the screen with a clean, sans-serif font.

```css
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
}

ul {
    margin: 0;
    padding: 0;
    display: flex;
}

li {
    list-style: none;
}
```

#### Links
The links are styled with uppercase text, padding for spacing, and a `transition` for smooth effects:

```css
a {
    position: relative;
    display: block;
    margin: 0 10px;
    padding: 5px 10px;
    color: #333;
    font-size: 30px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    overflow: hidden;
}
```

#### Hover Effect
The hover effect is created using the `:before` pseudo-element. It begins as a thin line and transforms into a background:

```css
a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    top: 50%;
    transform: translateY(-50%);
    left: -100%;
    background-color: #d63031;
    transition: 0.5s;
}

a:hover:before {
    animation: line 0.5s linear forwards;
}

a:hover {
    color: white;
}
```

---

### Animations

#### Sliding Line to Background
The `@keyframes line` animation defines how the underline transforms into a background:

```css
@keyframes line {
    0% {
        left: -100%;
        height: 4px;
    }
    50% {
        left: 0%;
        height: 4px;
    }
    100% {
        left: 0%;
        height: 100%;
        z-index: -1;
    }
}
```

---

## Customization

### Colors
- Modify the `background-color` in `a:before` for a different hover color.
- Adjust the `color` in `a:hover` for varied text colors during hover.

### Font
- Change the `font-family` and `font-size` of the `a` element to fit your design style.

### Animation Timing
- Adjust the `0.5s` duration in the `@keyframes` and `transition` properties to speed up or slow down the effect.

---

## How to Use

1. Copy the HTML and CSS code into separate files (`index.html` and `styles.css`).
2. Link the CSS file to the HTML using the following `<link>` tag:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. Open the `index.html` file in your browser to view the navigation bar.

---

