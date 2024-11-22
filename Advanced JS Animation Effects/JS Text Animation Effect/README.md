# JavaScript Text Animation Effect

This project demonstrates a visually appealing text animation effect using **HTML**, **CSS**, and **JavaScript**. The animation focuses on creating an engaging hover effect and dynamic color transitions on individual letters.

## Features
### 1. **Dynamic Letter Animation**
- JavaScript is used to split the text into individual letters.
- Each letter is wrapped in a `<span>` element with unique inline styles.
- The `transition-delay` and `filter: hue-rotate` properties create a staggered animation effect.

### 2. **Hover Effects**
- When the user hovers over the text, CSS transitions change the letter color to neon green.
- A glowing effect is applied using `text-shadow` for an eye-catching hover animation.

## Code Breakdown

### HTML
The HTML structure is minimal:
```html
<h2 class="text">JavaScript Text</h2>
```
This is the main text where animations will be applied.

### CSS
The **CSS** styles define the look and feel of the text:
- The base `h2` style sets font size, letter spacing, and alignment.
- Each letter (`span`) has a default gray color (`#555`) and a smooth `transition` effect.
- On hover, `span` elements turn neon green (`#00ff2a`) with a glowing effect created by `text-shadow`.

Key CSS:
```css
h2 span {
    color: #555;
    transition: 0.25s;
}

h2:hover span {
    color: #00ff2a;
    text-shadow: 0 0 5px #0f0, 0 0 15px #0f0, 0 0 30px #0f0;
}
```

### JavaScript
The **JavaScript** dynamically manipulates the text:
1. The script selects the target text (`.text`).
2. It splits the string into an array of individual letters.
3. Each letter is wrapped in a `<span>` with inline styles for `transition-delay` and `filter: hue-rotate`.
4. Finally, the modified string is reinserted into the DOM.

Key JavaScript:
```javascript
let text = document.querySelector(".text");
let spans = text.innerText
  .split("")
  .map((letter, i) => {
    return `<span style="transition-delay: ${i * 40}ms; filter: hue-rotate(${i * 30}deg);">${letter}</span>`;
  })
  .join("");

text.innerHTML = spans;
```

### Animation Highlights
- **Transition Delay**: Adds a staggered effect, where each letter animates sequentially.
- **Hue Rotate**: Applies a color rotation effect, giving a vibrant, dynamic appearance.

## How It Works
1. When the page loads:
   - JavaScript processes the text, wrapping each character in `<span>` with unique styles.
2. On hover:
   - The CSS hover effect changes the color and adds a glowing effect.

## How to Use
1. Clone the repository or copy the code.
2. Include the CSS in `style.css` and JavaScript in `script.js`.
3. Open the `index.html` file in your browser.

## Customization
- **Text Color**: Modify the `color` and `text-shadow` properties in the CSS.
- **Animation Speed**: Adjust `transition-delay` in the JavaScript for faster or slower animations.
- **Hue Rotate Effect**: Change the multiplier (`i * 30`) in the `filter: hue-rotate` property.

## Demo
Hover over the text to see the dynamic animations in action! 🎨

This project is a great starting point for experimenting with **text-based animations** and **JavaScript-powered interactivity**. Have fun customizing! 🚀