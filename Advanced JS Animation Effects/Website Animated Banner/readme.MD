# Floating Stars Animation with Skewed Text

This project demonstrates a beautiful animation featuring floating text, glowing stars, and a dynamic background with CSS and JavaScript. The animation focuses on creating a visually captivating celestial effect, with stars randomly generated and text floating up and down smoothly.

---

## Features and Effects

### 1. **Floating Text Animation**
   - The main header text (`h2`) features a dynamic floating effect, moving up and down seamlessly using CSS `@keyframes`:
     - Text skews slightly on the Y-axis for a slanted look.
     - A smooth `5s ease-in-out infinite` animation creates a natural floating illusion.
     - Layered text-shadow effects simulate depth and light.

### 2. **Randomly Generated Stars**
   - Using JavaScript, stars are dynamically created as `i` elements:
     - **Random Positioning**: Each star is placed at a random `left` and `top` position within the viewport.
     - **Dynamic Sizing**: Stars have random sizes to create a sense of perspective and depth.
     - **Glowing Effect**: Stars glow with multiple layers of box shadows and an opacity pulsation animation controlled by the `stars` keyframe.

### 3. **Background Design**
   - The background features a large glowing circular element (`section:before`) with:
     - Multiple layered borders and box-shadows.
     - A subtle contrast between orange and dark blue for a space-like feel.

---

## Implementation

### **HTML Structure**
```html
<section>
  <h2>
    Floating <span>Stars</span>
  </h2>
</section>
```
- A single `section` acts as the container for the animated elements.
- The `h2` holds the animated text, and additional `i` elements (stars) are dynamically created by JavaScript.

---

### **CSS Highlights**
- **Text Animation (`h2`)**:
  ```css
  @keyframes floating {
    0%, 100% {
      transform: skewY(-7deg) translateY(-20px);
    }
    50% {
      transform: skewY(-7deg) translateY(20px);
    }
  }
  ```
- **Star Glow Animation**:
  ```css
  @keyframes stars {
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
  }
  ```
- **Circular Background (`section:before`)**:
  ```css
  section:before {
    content: "";
    position: absolute;
    width: 30vw;
    height: 30vw;
    border: 5vw solid #ff9100;
    border-radius: 50%;
    box-shadow: 0 0 0 1vw #0d172e, 0 0 0 1.3vw #fff;
  }
  ```

---

### **JavaScript Functionality**
- **Star Creation**:
  - JavaScript dynamically generates 200 stars and appends them to the `section`.
  - Stars are given random positions, sizes, and glowing animations.
  ```javascript
  let section = document.querySelector("section");
  let j = 0;

  while (j < 200) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    let size = Math.random() * 4;
    star.style.width = `${1 + size}px`;
    star.style.height = `${1 + size}px`;

    section.appendChild(star);
    j++;
  }
  ```

---

## How to Use
1. **Setup**:
   - Add the HTML, CSS, and JavaScript code to your project.
   - Ensure the `bg.png` image and any other required assets are in the correct directory.

2. **Customization**:
   - Adjust the number of stars by changing the loop count in the JavaScript code.
   - Modify the `floating` keyframe or star animations to tweak the movement and timing.

3. **Run**:
   - Open the project in a modern browser, and scroll to experience the animations.

---

## Technologies Used
- **HTML**: Structure for the text and dynamic star placement.
- **CSS**: Keyframe animations, glowing effects, and responsive design.
- **JavaScript**: Randomized creation and styling of stars.

---

## Visual Highlights
- A glowing background and smooth floating text animation.
- Pulsating stars with randomized positioning and dynamic glow.
- Responsive design for seamless experience across devices.