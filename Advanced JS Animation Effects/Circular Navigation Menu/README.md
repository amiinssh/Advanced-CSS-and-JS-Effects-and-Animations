# Circular Menu Animation README

This project is a simple yet visually appealing web animation demonstrating a circular menu that expands and contracts with an interactive toggle button. The design uses modern CSS and JavaScript for smooth transitions and responsive effects.

---

## Features

### 1. **Interactive Circular Menu**
- **Toggle Button**: A circular button in the center serves as a toggle for the menu.
  - Default: Displays as a white circle with a plus (`+`) sign.
  - On Activation: Transforms into a rotated cross (`×`) to indicate the menu is open.

### 2. **Menu Items**
- **Positioning**: Menu items are arranged in a circular layout, positioned dynamically with CSS using `calc` and custom properties.
- **Animation**:
  - **Default State**: Menu items are stacked at the center, hidden from view.
  - **Active State**: Items animate outward in a circular pattern around the toggle button with a smooth transition.
  - Items rotate seamlessly while maintaining their orientation.

### 3. **Visual Design**
- **Background**: A vibrant gradient background that shifts between purple and pink for a dynamic look.
- **Menu Style**:
  - Each menu item is a circular button with a white background.
  - Uses `border-radius` for smooth edges and `transition` for hover and activation effects.
  
---

## How It Works

### **HTML Structure**
The core structure consists of:
1. A `container` div wrapping the toggle button and menu.
2. A `toggle` button for interaction.
3. A `menu` element containing six `<li>` elements, each representing a menu item.

### **CSS Styling**
- **Base Styling**: Ensures a clean slate with `box-sizing`, zero margins, and a sans-serif font.
- **Key Animations**:
  - **Toggle Button**:
    - Transitions its rotation using `transform` and `transition`.
  - **Menu Items**:
    - Positioned using `calc` to dynamically distribute them in a circular layout.
    - Transitions with `transform` and `top` for smooth entry/exit animations.

### **JavaScript Logic**
- Selects the `toggle` button and `container` div.
- Adds a click event listener to toggle the `.active` class on the `container`.
  - **Active Class**: Triggers CSS animations for the menu and button transformations.

---

## Usage

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd circular-menu-animation
   ```

2. **Open the HTML File**:
   Simply open `index.html` in any modern web browser.

3. **Interaction**:
   - Click the central toggle button to activate/deactivate the menu.
   - Watch the menu items animate in and out of view.

---

## Customization

- **Number of Menu Items**:
  - Adjust the number of `<li>` elements in `.menu`.
  - Update the `360deg / 6` calculation in the `CSS` to match the new number of items.

- **Styles**:
  - Modify `background`, `font-size`, or `colors` in the CSS for a personalized look.
  - Change `transition` durations for slower or faster animations.

- **Icons/Text**:
  - Replace the `innerHTML` of menu items with icons or custom text.

---

