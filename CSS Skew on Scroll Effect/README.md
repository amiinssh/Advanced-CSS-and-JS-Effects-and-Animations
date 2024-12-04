# Skewed Scrolling Animation README

This project showcases a creative skewed scrolling animation effect, leveraging CSS transforms and JavaScript for dynamic interaction. As the user scrolls, the visual skew of a layered section changes dynamically, creating a smooth and engaging visual experience.

---

## Features

### **1. Dynamic Skew Effect**
- The core animation dynamically skews the `section` overlay based on the user's scroll position:
  - **Default State**: The overlay has a fixed skew angle of `-10deg`.
  - **On Scroll**: The skew angle adjusts dynamically as the user scrolls down or up, creating a sense of motion and depth.

### **2. Layered Background**
- The background image is set with a `cover` property to ensure it fills the section seamlessly, offering a clean and polished look.

### **3. Smooth Transition**
- The skew effect transitions smoothly, thanks to real-time updates via JavaScript.

---

## Technologies Used

1. **HTML**:
   - Simple structure with a `section` and a nested `div` for the skewed overlay.

2. **CSS**:
   - Uses `transform: skewY` to create the skewed overlay.
   - `transform-origin` ensures the skew transformation pivots from the top-left corner for a dynamic visual effect.

3. **JavaScript**:
   - Updates the skew angle dynamically based on the `scrollY` value using an event listener on the `window` object.

---

## How It Works

### **HTML Structure**
```html
<section>
    <div class="skewed"></div>
</section>
```
- The `section` contains a full-screen background image.
- A `div` with the class `skewed` acts as the overlay, responsible for the skew animation.

### **CSS Animation**
- **Initial Skew**:
  ```css
  .skewed {
      transform: skewY(-10deg);
  }
  ```
- The `skewY` transformation tilts the overlay at an angle.
- `transform-origin: top left` ensures the skew effect pivots from the top-left corner.

### **JavaScript Interaction**
- A `scroll` event listener dynamically modifies the skew angle:
  ```javascript
  window.addEventListener('scroll', () => {
      let value = -10 + window.scrollY / 60;
      skewed.style.transform = `skewY(${value}deg)`;
  });
  ```
  - The skew angle (`value`) decreases or increases based on the scroll position.
  - The formula `-10 + window.scrollY / 60` adjusts the skew incrementally for a smooth effect.

---

## Usage

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd skewed-scroll-animation
   ```

2. **Add Your Background Image**:
   - Replace the `url(images/istockphoto-1489860770-612x612.jpg)` in the CSS with your desired image path.

3. **Open the HTML File**:
   Open `index.html` in a browser to view the animation.

4. **Scroll**:
   - Scroll up and down the page to see the skewed overlay dynamically transform.

---

## Customization

1. **Adjust Skew Angle**:
   - Modify the initial skew value (`-10deg`) in the CSS for a more or less pronounced effect.
   - Change the scroll formula in the JavaScript for faster or slower transitions.

2. **Change Background**:
   - Use a different background image by updating the `background` property in the `section` CSS.

3. **Overlay Color**:
   - Update the `background` property of `.skewed` to use a color, gradient, or semi-transparent layer.

---

