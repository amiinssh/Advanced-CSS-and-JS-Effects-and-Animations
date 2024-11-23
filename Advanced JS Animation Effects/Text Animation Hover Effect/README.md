# Text Animation Hover Effect

This project demonstrates a **hover effect** and dynamic animations applied to individual letters of text. The primary focus is on creating visually appealing animations using CSS keyframes and JavaScript to enhance user interaction.

---

## Features
- **Dynamic Letter Animations**: Each letter of the text is animated independently, with varying `animation-duration` for a randomized effect.
- **Hover Effects**: Smooth transitions that dynamically change text properties.
- **Custom Keyframe Animation**: A pulsing text effect is implemented using CSS keyframes, cycling through color transitions.
- **Responsive Design**: The text remains centered and visually engaging on all screen sizes.

---

## File Structure

- **HTML**: Provides the structure, including the text that will be animated.
- **CSS**: Defines animations, hover effects, and overall styling.
- **JavaScript**: Dynamically applies animation durations to each letter for a randomized effect.

---

## Code Breakdown

### HTML
The base structure includes an `h2` element for displaying the text.

```html
<h2 class="text">colorful text</h2>
```

### CSS
The animations and styles are defined here:
- **Keyframes**: `animateText` cycles through a color change effect.
- **Hover Effect**: Adds interactivity when hovering over the text.
- **Styling**: Centers the content and sets a background color.

```css
@keyframes animateText {
  0%, 20% {
    color: #fff2;
  }
  21%, 79% {
    color: #0f0;
  }
  80%, 100% {
    color: #fff2;
  }
}

h2 span {
  position: relative;
  animation: animateText 1s linear infinite;
}
```

### JavaScript
Each letter in the text is wrapped in a `<span>` tag, allowing individual animation control. The `animation-duration` for each letter is randomized for a unique effect.

```javascript
let text = document.querySelector('.text');

let htmlSpans = text.innerText.split('').map((letter, i) => {
    return `<span style="animation-duration: ${Math.random() * 5}s">${letter}</span>`;
}).join('');

text.innerHTML = htmlSpans;
```

---

## How It Works
1. **Splitting the Text**: The JavaScript code splits the text into individual letters.
2. **Dynamic Animation**: Each letter is wrapped in a `<span>` tag with a randomized animation duration.
3. **Keyframe Animation**: The `animateText` keyframe changes the color of each letter over time, creating a glowing effect.

---

