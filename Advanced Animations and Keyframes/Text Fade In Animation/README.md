# Animated Fading Text Effect with CSS

This project demonstrates a dynamic fading animation applied to a heading using pure CSS. The animation creates an eye-catching visual effect where a background color sweeps across the text, revealing and hiding it in a seamless loop.

---

## Features

### **1. Smooth Fading Animation**
- The background moves continuously across the heading text, creating a smooth fading effect.
- The animation is controlled by the `@keyframes fading` rule, ensuring a fluid, looping motion.

### **2. Minimalistic Design**
- The animation works on a single `h2` element, keeping the design clean and simple.
- The vibrant background and text contrast makes the effect highly visible.

### **3. Infinite Loop**
- The animation runs infinitely with a duration of 10 seconds, ensuring uninterrupted visual appeal.

---

## Animation Details

### Keyframes Explanation
The animation is defined using the `@keyframes fading` rule:

```css
@keyframes fading {
    0% {
        left: -20%;
    }
    50% {
        left: 120%;
    }
    100% {
        left: -20%;
    }
}
```

1. **`0%`**: The background starts slightly to the left of the heading.
2. **`50%`**: The background completely passes over the text and exits to the right.
3. **`100%`**: The background resets to the starting position, ready for the next loop.

---

## Structure

### HTML
```html
<body>
    <h2>Animated Text</h2>
</body>
```

### CSS
#### Global Styling
```css
* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
```

#### Body Styling
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #9a0e0e;
}
```

#### Heading Styling
```css
h2 {
    position: relative;
    font-size: 3.7em;
    color: white;
}

h2:before {
    content: "";
    position: absolute;
    left: 0;
    width: 120%;
    height: 100%;
    background: #9a0e0e;
    animation: fading 10s linear infinite;
}
```

---

## Customization

### **1. Adjust Animation Speed**
Modify the `animation` property in the `h2:before` selector to change the duration:
```css
animation: fading 5s linear infinite; /* Faster */
animation: fading 15s linear infinite; /* Slower */
```

### **2. Change Colors**
- **Text Color**: Change the `color` property in the `h2` selector.
- **Background Color**: Adjust the `background` property in `h2:before` and `body`.

### **3. Resize Text**
Update the `font-size` property in the `h2` selector to scale the text.

---

