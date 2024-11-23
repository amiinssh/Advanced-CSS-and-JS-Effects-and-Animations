# Background Scroll Animation

This project demonstrates a scrolling background effect using JavaScript and CSS. The background shifts vertically as the user scrolls, creating a dynamic and visually engaging experience. Additionally, a fixed background pattern contrasts with scrollable content for a clean and polished design.

---

## Features

- **Dynamic Background Movement**: The background image moves vertically based on the user's scroll position.
- **Fixed Background**: The background remains consistent and responsive while content scrolls over it.
- **Smooth User Experience**: Lightweight and efficient implementation ensures smooth scrolling.
- **Stylized Content Section**: A clean, centered content block overlaid on the background.

---

## Demo

### Scrolling Effect:
As you scroll down the page, the background's `y` position shifts dynamically, creating a parallax-like effect.

---

## Technologies Used

- **HTML**: For structuring the webpage.
- **CSS**: For styling the background and content.
- **JavaScript**: For dynamically updating the background position during scrolling.

---

## Code Explanation

### CSS

#### Background
```css
.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(images/bg.png);
    background-repeat: repeat;
    background-size: 700px;
}
```
- The background is set to cover the entire viewport (`width: 100%; height: 100%`).
- `background-repeat: repeat` ensures the pattern continues seamlessly.
- `background-size: 700px` resizes the background for optimal visibility.

#### Content Section
```css
.content {
    position: relative;
    width: 1000px;
    margin: 100px auto;
    z-index: 1;
    background: #fff;
    padding: 50px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```
- The content section is styled with a centered layout and a shadow effect to stand out from the background.
- `z-index: 1` ensures the content overlays the background.

### JavaScript
The scrolling animation is achieved with a `scroll` event listener that adjusts the background's position dynamically:
```javascript
let pattern = document.querySelector('.bg');

window.addEventListener('scroll', () => {
    pattern.style.backgroundPosition = `0 ${window.scrollY}px`;
});
```
- `window.scrollY` calculates the vertical scroll position.
- `pattern.style.backgroundPosition` updates the background's position in real-time, creating the scrolling effect.

---

## How to Use

1. **Download or Clone the Repository**.
2. Place your desired background image in the `images` directory and name it `bg.png`.
3. Open the HTML file in your browser.
4. Scroll to see the background animation in action!

---

## Customization

### Background Image
Replace `images/bg.png` with any pattern or image. Ensure `background-size` matches your desired look.

### Content Section
Modify the `.content` styles for font size, padding, or colors to fit your needs:
```css
.content h2 {
    font-size: 2.5em;
    color: #333;
}

.content p {
    font-size: 1.5em;
    color: #555;
}
```

---

