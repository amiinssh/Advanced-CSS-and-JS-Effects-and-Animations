# Animated Rotating Loader with Pulsing Circles

This project demonstrates a creative CSS-only animated loader featuring a rotating design with pulsing circular elements. The animation is visually appealing and ideal for loading indicators or UI elements in modern web design.

---

## Features

### **1. Centralized Design**
- A clean and centered layout ensures the loader appears at the center of the viewport, making it suitable for loading screens.

### **2. Rotating Circles**
- The animation is composed of multiple circles (`span:before`) arranged symmetrically around the loader.
- The rotation is calculated dynamically using the CSS variable `--i`, allowing for easy customization of the number of circles.

### **3. Pulsing and Scaling Animation**
- Even-numbered circles pulse with a smooth scaling and rotation effect using the `@keyframes circle`.
- The animation transitions through key stages:
  - **Initial and Rest States (`0%, 25%, 75%, 100%`)**: The circles maintain their original size and orientation.
  - **Active State (`50%`)**: Circles scale up slightly (`scale(1.3)`) and rotate by 90 degrees.

### **4. Dynamic and Responsive**
- Circles are evenly distributed using `rotate(calc(45deg * var(--i)))`, ensuring a symmetrical design regardless of the number of elements.
- The loader scales gracefully with different screen sizes and resolutions.

---

## Animation Breakdown

### **Rotating Circles**
```css
span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(45deg * var(--i)));
}
```
- Each `span` rotates by a multiple of 45 degrees (or any desired angle), depending on its `--i` value.

### **Circle Animation**
```css
@keyframes circle {
    0%, 25% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(90deg) scale(1.3);
    }
    75%, 100% {
        transform: rotate(180deg) scale(1);
    }
}
```
1. **`0%, 25%`**: The circles start and remain at their original size.
2. **`50%`**: The circles rotate by 90 degrees and grow slightly larger.
3. **`75%, 100%`**: The circles complete a 180-degree rotation and return to their original size.

---

## Project Structure

### **HTML**
```html
<body>
    <div class="loader">
        <h3>Loading...</h3>
        <span style="--i: 0"></span>
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
        <span style="--i: 4"></span>
        <span style="--i: 5"></span>
        <span style="--i: 6"></span>
        <span style="--i: 7"></span>
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

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
}
```

#### Loader Container
```css
.loader {
    position: relative;
    width: 120px;
    height: 120px;
}

h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: #101a36;
}
```

#### Rotating Elements
```css
span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(45deg * var(--i)));
}

span:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #74baff72;
    transform-origin: 60px;
}

span:nth-child(even):before {
    background: #2980b9;
    animation: circle 1s linear infinite;
}
```

#### Keyframes
```css
@keyframes circle {
    0%, 25% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(90deg) scale(1.3);
    }
    75%, 100% {
        transform: rotate(180deg) scale(1);
    }
}
```

---

## Customization

1. **Number of Circles**:
   - Add or remove `span` elements in the HTML.
   - Adjust the angle calculation in `rotate(calc(45deg * var(--i)))` for even spacing.

2. **Animation Speed**:
   - Modify the `animation-duration` in the `@keyframes circle` rule for faster or slower rotations.

3. **Colors**:
   - Change the `background-color` of `span:before` to experiment with different color schemes.
   - Update the odd and even child styles for alternating colors.

4. **Size**:
   - Adjust the `loader`, `width`, `height`, and `transform-origin` properties to scale the animation up or down.

---

