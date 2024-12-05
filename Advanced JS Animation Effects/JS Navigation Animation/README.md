# Animated Toggle Navigation Menu

This project demonstrates a visually engaging toggle-based navigation menu with smooth animations and transitions. The design and functionality focus on user interaction, making it a perfect fit for modern web applications seeking an elegant and dynamic menu system.

---

## Features

### **1. Animated Toggle Button**
- **Default State**: A circular toggle button with a plus (`+`) sign.
- **Active State**:
  - The `+` rotates to form an `×`, signaling the menu activation.
  - The transformation is smooth, utilizing a 1.5-second animation for the rotation.

### **2. Expanding Menu Animation**
- The menu expands horizontally and vertically upon toggle activation:
  - **Default State**: A small circular menu icon.
  - **Active State**:
    - Expands to a wide horizontal bar.
    - The animation transitions width, height, and position with a delay sequence for a polished effect.

### **3. Staggered Menu Items**
- Menu items inside the navigation bar appear with a staggered animation:
  - **Default State**: Positioned above their final placement and fully transparent.
  - **Active State**:
    - Gradually slide into view, aligning horizontally.
    - Opacity transitions from 0 to 1.
    - Custom `--i` delays create a cascading effect.

### **4. Hover Effects**
- Interactive hover effect on menu links:
  - Default: Menu link text is styled with a neutral color.
  - Hover: Text changes to a vibrant accent color (`#ff4886`), adding a responsive feel.

---

## Technologies Used

- **HTML**: Semantic structure for the navigation and menu items.
- **CSS**: Advanced animations and transitions.
  - `transition` for smooth property changes.
  - `transform` for translations and rotations.
  - `transition-delay` and custom CSS variables for staggered animations.
- **JavaScript**: Handles toggle functionality using event listeners.

---

## How It Works

### HTML Structure
- A central `navigation` div wraps:
  - A `toggle` button for interaction.
  - A `menu` container housing a list of menu items (`ul` and `li`).

### CSS Animations
- **Toggle Button**:
  - Rotates the `+` sign on activation using `transform: rotate(225deg)` with a `1.5s` transition.
- **Menu Expansion**:
  - Width and height grow with `0.5s` transitions, including custom delays for seamless animations.
- **Menu Items**:
  - Staggered animation using `transition-delay` with custom properties (`--i`).

### JavaScript
- Toggles an `.active` class on the `toggle` button, which:
  - Expands the menu.
  - Activates animations for menu items.

---

## Usage

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd animated-nav-menu
   ```

2. **Open the HTML File**:
   Launch `index.html` in your browser.

3. **Interact**:
   - Click the circular toggle button to activate the menu.
   - Hover over menu items for additional effects.

---

## Customization

1. **Menu Items**:
   - Add or remove `<li>` elements in the `menu` to adjust the number of menu items.
   - Use the CSS variable `--i` to manage the staggered animation delays.

2. **Colors and Sizes**:
   - Adjust the colors (`#ff4886`, `#20415c`, etc.) and dimensions (e.g., width, height) in the CSS to fit your theme.

3. **Animation Timings**:
   - Modify `transition` and `transition-delay` values in the CSS for faster or slower animations.

---

