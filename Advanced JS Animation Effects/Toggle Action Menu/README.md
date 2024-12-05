# Interactive Expanding Navigation Menu

This project showcases a modern, interactive navigation menu with smooth animations and responsive user elements. The menu transforms dynamically on user interaction, offering a compact design that expands into a detailed layout.

---

## Features

### **1. Compact Navigation Button**
- **Default State**:
  - A slim, rectangular navigation bar with circular dots (`span` elements) aligned vertically.
  - Designed for a minimalistic and clean appearance.
- **Active State**:
  - The bar expands horizontally to reveal a larger interactive area.
  - The dots grow into clickable circular buttons that animate outward.

### **2. Animated Dots with Hover Effects**
- The three dots transition smoothly:
  - Move outward horizontally on expansion.
  - Increase in size with a hover effect that changes their background color.

### **3. User Card Layout**
- A user card (`.user`) styled with:
  - **Image Container**: Displays user avatars within a styled box (`.imgBx`).
  - **Details Section**: Contains user information (`h3` for names and `p` for descriptions or roles).

### **4. Elegant Hover and Click Interactions**
- Hovering over navigation buttons changes their color for a tactile feel.
- Clicking toggles the menu expansion with a seamless `0.5s` transition effect.

---

## How It Works

### **HTML Structure**
1. **Navigation Section**:
   - A `navigation` div contains three dots (`span` elements) and clickable links.
2. **Menu Section**:
   - A `menu` div with user cards (`.user`), each containing:
     - Image container (`.imgBx`) for avatars.
     - User details with names and descriptions.

### **CSS Animations**
- **Transitions**:
  - Smooth expansion of the navigation bar and animated movement of the dots.
- **Hover Effects**:
  - Background and size changes on hover for interactive feedback.
- **Responsive Layout**:
  - Flexible design using `flexbox` ensures consistent spacing and alignment.

### **JavaScript Interaction**
- A `click` event listener toggles the `.active` class on the `navigation` element:
  - Expands the navigation bar and animates the dots.
  - Toggles the visibility of link text inside the navigation bar.

---

## Usage

### **1. Setup**
- Include the provided HTML, CSS, and JavaScript in your project.

### **2. Run the Application**
- Open the HTML file in your browser.
- Interact with the navigation bar by clicking to expand and hovering over the animated elements.

---

## Customization

### **1. Colors and Styles**
- Modify colors (e.g., `#222`, `#273c75`, etc.) in the CSS for a custom theme.
- Adjust font sizes and weights for user details in `.details h3` and `.details p`.

### **2. Navigation Behavior**
- Add or remove dots (`span` elements) for a customized menu structure.
- Update the JavaScript click logic to toggle additional features if needed.

### **3. User Card**
- Replace placeholder avatars in `.imgBx img` with actual user images.
- Update user names and roles in the `.details` section.

---

