# Animated Light Bar and Moving Layers Effect

This project showcases a stunning CSS animation featuring a glowing light bar sweeping across text and dynamic overlay layers moving across the screen. The design combines smooth animations, vibrant neon effects, and responsive layouts for a visually captivating experience.

---

## Features

### **1. Glowing Neon Text**
- The `h2` element displays glowing, neon-style text with a blue hue.
- The glow is achieved through the `text-shadow` property, creating a vibrant effect with multiple layers of illumination.

### **2. Light Bar Animation**
- A glowing vertical light bar (`lightbar`) moves horizontally across the container box.
- The animation is seamless, repeating every 5 seconds.
- The effect is achieved using the `@keyframes lightbar` rule, which:
  - Grows the bar vertically at the start (`scaleY(1)`).
  - Moves the bar horizontally across the box.
  - Shrinks the bar vertically at the end of its journey.

### **3. Moving Overlay Layer**
- An overlay layer (`toplayer`) sweeps across the screen, adding dynamic background movement.
- The animation repeats every 10 seconds using the `@keyframes topLayer` rule, which:
  - Moves the layer from left to right (`translateX(100%)`).
  - Resets to the starting position for smooth looping.

---

## Animation Details

### Keyframes: **Light Bar**
```css
@keyframes lightbar {
    0% {
        transform: scaleY(0) translateX(0);
    }
    10% {
        transform: scaleY(1) translateX(0);
    }
    90% {
        transform: scaleY(1) translateX(calc(600px - 10px));
    }
    100% {
        transform: scaleY(0) translateX(calc(600px - 10px));
    }
}
```

1. **`0%` & `10%`**: The bar scales vertically and appears at the starting position.
2. **`90%`**: The bar moves horizontally across the box.
3. **`100%`**: The bar shrinks vertically at the endpoint.

### Keyframes: **Top Layer**
```css
@keyframes topLayer {
    5% {
        transform: translateX(0);
    }
    45%, 50% {
        transform: translateX(100%);
    }
    50.0001%, 55% {
        transform: translateX(-100%);
    }
    95% {
        transform: translateX(0%);
    }
}
```

1. **`5%`**: The overlay layer is stationary at its initial position.
2. **`45%–50%`**: The layer moves off-screen to the right.
3. **`50.0001%–55%`**: The layer resets and moves from left to right.
4. **`95%`**: The layer returns to its starting position.

---

## Project Structure

### **HTML**
```html
<body>
    <div class="box">
        <h2>Glowing Text</h2>
        <div class="lightbar"></div>
        <div class="toplayer"></div>
    </div>
</body>
```

### **CSS**

#### Global Styles
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
```

#### Background and Layout
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
    background: #061b31;
}

.box {
    position: relative;
    width: 600px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

#### Glowing Text
```css
h2 {
    color: white;
    font-size: 5em;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff, 0 0 80px #00b3ff, 0 0 120px #00b3ff;
}
```

#### Light Bar
```css
.lightbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff, 0 0 80px #00b3ff, 0 0 120px #00b3ff;
    animation: lightbar 5s linear infinite;
}
```

#### Top Layer
```css
.toplayer {
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;
    height: 300px;
    background: #061b31;
    animation: topLayer 10s linear infinite;
}
```

---

## Customization

1. **Animation Speed**:
   - Adjust the `animation-duration` in the `lightbar` and `topLayer` animations to speed up or slow down the effects.
   ```css
   animation: lightbar 3s linear infinite; /* Faster light bar */
   animation: topLayer 15s linear infinite; /* Slower layer */
   ```

2. **Colors**:
   - Modify `text-shadow`, `background`, or `box-shadow` to experiment with different glow effects.

3. **Size**:
   - Scale the dimensions of the `box`, `lightbar`, and `h2` to create a larger or smaller animation.

---

