# Animated Sliding Panels with Parallax Effect

This project demonstrates a visually stunning animation of sliding panels using parallax effects that respond dynamically to user scrolling. The fixed layout and smooth transitions create a captivating interactive experience for modern web applications.

---

## Features

### **1. Parallax Scrolling Animation**
- **Dynamic Panel Movement**:
  - Two panels (`side1` and `side2`) slide horizontally in opposite directions based on the scroll position.
  - The panels utilize the `scrollY` property for fluid motion, creating a parallax effect.

### **2. Clip-Path Animation**
- Both panels use intricate `clip-path` polygons for unique geometric shapes:
  - Adds depth and complexity to the sliding animations.
  - Maintains responsiveness and visual interest as panels move.

### **3. Fullscreen Fixed Layout**
- A `section` element is fixed to the viewport, ensuring:
  - The sliding panels remain in place while the content scrolls beneath.
  - An immersive, layered animation effect.

### **4. Styled Content Area**
- A content section positioned below the animated panels:
  - Starts below the viewport (`padding-top: 150vh`) to allow ample scrolling space for the animation.
  - Includes a black background and contrasting white text for readability and a clean aesthetic.

---

## How It Works

### **HTML Structure**
1. **Two Sliding Panels**:
   - `side1` and `side2` elements styled with background images and `clip-path` shapes.
2. **Content Area**:
   - Positioned beneath the panels with placeholder text for demonstration.

### **CSS Effects**
- **Panel Styling**:
  - Panels are styled with full viewport height and custom shapes defined using `clip-path`.
- **Content Layout**:
  - Positioned with sufficient padding to allow scrolling beneath the animated panels.

### **JavaScript Interaction**
- The scroll event listener adjusts the `left` position of the panels:
  - `side1` moves left with negative `scrollY`.
  - `side2` moves right with positive `scrollY`.
- This synchronized movement produces the sliding parallax effect.

---

## Usage

### **1. Setup**
- Add the HTML, CSS, and JavaScript to your project.

### **2. Run the Application**
- Open the HTML file in any browser.
- Scroll down to observe the animation as the panels move horizontally across the screen.

---

## Customization

### **Images**
- Replace the `background` URL of the panels (`side1` and `side2`) with your preferred images.

### **Clip-Path Shapes**
- Modify the `clip-path` polygons for different geometric effects. Use a tool like [Clippy](https://bennettfeely.com/clippy/) to create custom shapes.

### **Scroll Speed**
- Adjust the JavaScript logic to modify the movement speed:
  ```javascript
  side1.style.left = -window.scrollY * 0.5 + 'px'; // Slower motion
  side2.style.left = window.scrollY * 0.5 + 'px';
  ```

### **Content Styling**
- Update the `content` section’s font size, colors, or padding to match your design aesthetic.

---

