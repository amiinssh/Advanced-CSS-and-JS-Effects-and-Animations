# Animated Day-Night Scene with Moving Cars

This project showcases a dynamic scene transitioning between day and night with cars driving along the horizon. The project emphasizes **smooth animations** and interactive effects, such as toggling between day and night by clicking the sun.

---

## Features

### 🌞 Day to Night Transition
- Click on the **sun** to toggle between day and night.
- The background gradient shifts smoothly, and the sun's position and appearance adapt to the time of day.
- Subtle lighting effects like the sun’s glow disappear during the night.

### 🚗 Moving Cars
- Cars traverse the scene at different speeds, creating a lively, animated environment.
- Car 1 moves from left to right, while Car 2 moves from right to left with mirrored rotation.

### 📜 Scrolling Background
- The horizon scrolls horizontally, giving the impression of a moving world.

---

## Technologies Used

- **HTML**: Structure for the scene elements.
- **CSS**: Styling for animations, effects, and transitions.
- **JavaScript**: Enables toggling between day and night.

---

## Animation Details

### 1. **Sun Toggle**
When clicking on the **sun**, the `night` class is toggled on the `.scene` element:
```javascript
sun.addEventListener('click', () => {
    scene.classList.toggle('night');
});
```
This modifies:
- **Background Gradient**: 
  - Day: `linear-gradient(#a6d8ff, #fff, #fff)` (soft blue-to-white transition).
  - Night: Solid dark color (`#222833`).
- **Sun's Glow**:
  - Day: Glows with `box-shadow: 0 0 50px #fff`.
  - Night: Loses the glow (`box-shadow: 0 0 0 #fff`) and moves slightly to the left.

---

### 2. **Background Animation**
The scrolling effect for the horizon is achieved with a CSS keyframe animation:
```css
@keyframes animateBG {
    0% {
        background-position-x: 0px;
    }
    100% {
        background-position-x: -1500px;
    }
}
```
- Applied to the `.bg` element.
- Creates a continuous horizontal scroll of the background image (`background: url(images/bg.png)`).

---

### 3. **Car Animations**
Two cars move at different speeds with seamless looping animations.

#### Car 1 (Left to Right):
```css
@keyframes car1 {
    0% {
        transform: translateX(0px);
    }
    90%, 100% {
        transform: translateX(calc(100vw + 200px));
    }
}
```
- Starts off-screen to the left (`left: -200px`) and ends off-screen to the right.

#### Car 2 (Right to Left):
```css
@keyframes car2 {
    0% {
        transform: translateX(0px) rotateY(180deg);
    }
    90%, 100% {
        transform: translateX(calc(-100vw - 200px)) rotateY(180deg);
    }
}
```
- Starts off-screen to the right and ends off-screen to the left.
- Rotates 180° horizontally (`rotateY(180deg)`), ensuring the car faces the correct direction.

---

### 4. **Transition Effects**
- **Smooth Transitions**: The `transition` property adds fluidity when switching between day and night.
  ```css
  .sun {
      transition: 0.2s;
  }
  ```
- Sun’s size, position, and glow adapt dynamically.

---

## How to Use

1. Clone or download the project files.
2. Place a repeating background image in the `images` directory and name it `bg.png`.
3. Open the HTML file in your browser.
4. Click on the **sun** to toggle between day and night.
5. Watch the cars move and the background scroll continuously.

---

## Customization

### Modify Car Speeds
Adjust the `animation-duration` for the cars:
```css
.car1 {
    animation: car1 18s linear infinite;
}

.car2 {
    animation: car2 12s linear infinite;
}
```

### Background Appearance
Replace the `images/bg.png` file with any custom pattern for a unique scrolling background.

### Sun Appearance
Edit the `.sun` styles to customize size, position, or glow intensity:
```css
.sun {
    width: 120px;
    height: 120px;
    box-shadow: 0 0 70px #fff;
}
```

---

