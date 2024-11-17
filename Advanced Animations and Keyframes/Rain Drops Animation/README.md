# Animated Rain Cloud with CSS

This project demonstrates a beautifully animated rain cloud using pure CSS. The design focuses on the smooth motion of raindrops falling beneath a cloud, making it perfect for weather-themed websites or artistic web animations.

---

## Features

### 1. **Realistic Rain Animation**
   - Raindrops fall smoothly from the cloud, scaling down as they hit the ground to simulate perspective.
   - The animation is created using the `@keyframes` rule with varying speeds for individual raindrops.

### 2. **Dynamic Cloud Design**
   - The cloud is styled with a main base and rounded sections layered using pseudo-elements (`::before`) to give it a fluffy, realistic appearance.

### 3. **Customizable Durations**
   - Each raindrop's animation duration is dynamically controlled using a `var(--seconds)` variable, allowing flexibility in the rain speed.

---

## Animation Details

### **Raindrop Animation**
The animation of the raindrops is achieved with the following keyframes:

```css
@keyframes rain {
    0% {
        transform: translateY(0) scale(1);
    }
    70% {
        transform: translateY(288px) scale(1);
    }
    100% {
        transform: translateY(288px) scale(0);
    }
}
```

- **Initial State (`0%`)**: The raindrop starts at the top of the container.
- **Midpoint (`70%`)**: The raindrop reaches near the ground, maintaining its size.
- **End State (`100%`)**: The raindrop hits the ground and disappears by scaling down to zero.

### **Cloud Animation**
- The cloud is static but layered with a primary base and circular elements to give it a natural look.
- The `::before` pseudo-element adds extra fluffiness with:
  ```css
  box-shadow: 90px 0 0 30px white;
  ```

---

## Structure

### HTML
```html
<div class="container">
    <div class="cloud"></div>
    <div class="rain">
        <span style="--seconds: 1;"></span>
        <span style="--seconds: 2;"></span>
        <span style="--seconds: 3;"></span>
        <span style="--seconds: 4;"></span>
        <span style="--seconds: 5;"></span>
    </div>
</div>
```

### CSS
#### Cloud Styling
```css
.cloud {
    position: relative;
    height: 100px;
    width: 100%;
    top: 50px;
    background: white;
    border-radius: 100px;
}
.cloud:before {
    content: "";
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: white;
    top: -50px;
    left: 40px;
    box-shadow: 90px 0 0 30px white;
}
```

#### Raindrop Styling
```css
span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    margin: 0 2px;
    animation: rain 5s linear infinite;
    transform-origin: bottom;
    animation-duration: calc(15s / var(--seconds));
}
```

---

## Customization

1. **Raindrop Speed**:
   - Adjust the variable `--seconds` in each `<span>` to control the speed of individual raindrops.

2. **Raindrop Size**:
   - Modify the `width` and `height` properties in the `span` selector to make the raindrops larger or smaller.

3. **Cloud Size**:
   - Change the dimensions of `.cloud` and its `::before` pseudo-element for a larger or smaller cloud.

4. **Colors**:
   - Change the `background` color of `.cloud` and `span` to match your theme.

---

