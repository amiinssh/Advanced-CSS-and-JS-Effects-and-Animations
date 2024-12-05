# Expanding Navigation Menu with Icon Animation

This project presents an expanding navigation menu with smooth transitions and dynamic icon animations. It is a perfect demonstration of CSS transformations, hover effects, and JavaScript interactivity for modern user interfaces.

---

## Features

### **1. Dynamic Expanding Navigation**
- **Default State**:
  - A compact, square navigation box with a red background.
- **Active State**:
  - The box expands into a large circular menu when clicked.
  - Animated size changes are achieved with a `0.5s` smooth transition.

### **2. Animated Elements (Dots and Icons)**
- **Default State**:
  - Small white dots (`span` elements) are positioned near the center of the navigation box using CSS variables (`--x` and `--y`).
- **Active State**:
  - Dots grow into larger circles and move outward to form a circular menu layout.
  - Each dot contains an icon (`ion-icon`) that appears with a smooth transition.
  - Hovering over the icons changes their color to a visually striking shade of pink.

### **3. Smooth Transitions**
- Transitions include:
  - Size and position changes for the navigation box and dots.
  - Icon size growth and color change on hover.
  - Staggered animations using `transition-delay` for a cascading effect.

---

## How It Works

### **HTML Structure**
- A single `navigation` element containing multiple `span` elements for dots.
- Each `span` is styled to align its position dynamically based on CSS variables (`--x`, `--y`, `--i`).
- Optional icons (`ion-icon`) inside each dot.

### **CSS Styling**
- **Navigation Box**:
  - A square box with rounded corners that expands into a circle when active.
- **Dots and Icons**:
  - Positioned with CSS variables for flexibility.
  - Animated size, color, and font adjustments.

### **JavaScript Interaction**
- A `click` event toggles the `.active` class on the `navigation` element:
  - Expands the menu.
  - Activates animations for the dots and icons.

---

## Usage

### **1. Setup**
1. Include the HTML, CSS, and JavaScript in your project.
2. Add the required `ion-icon` library for icons.

### **2. Run the Application**
- Open the HTML file in your browser.
- Click the navigation box to expand the menu and reveal animated icons.

---

## Customization

### **1. Colors**
- Change the `background` color of the navigation box (`#c22c15`) or the hover effect color (`#f87966`) to match your theme.

### **2. Icons**
- Replace the `ion-icon` names to use different icons:
  ```html
  <span style="--x:1; --y:0; --i:1;"><ion-icon name="home-outline"></ion-icon></span>
  ```

### **3. Animation Timing**
- Modify `transition-delay` and `transition` durations to control the speed of animations.

### **4. Dot Layout**
- Update `--x` and `--y` variables for custom dot arrangements.

---

