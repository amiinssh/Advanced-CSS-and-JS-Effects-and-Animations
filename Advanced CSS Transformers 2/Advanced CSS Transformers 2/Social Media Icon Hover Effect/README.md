# Animated Social Media Icons

This project showcases animated social media icons with hover effects, giving a sleek, interactive experience as each icon responds to the user’s cursor. The animations create a smooth color transition and scaling effect, making the icons visually engaging.

## Features

### 1. **Icon Scaling on Hover**
   - **CSS Class**: `.icon:hover i`
   - **Effect**: On hover, each icon's inner element (`i`) scales up by 1.3x, creating an enlarged look.
   - **Transition**: This effect is achieved using `transform: scale(1.3);` and `transition: all 0.2s;`.

### 2. **Background Color Transition**
   - **CSS Class**: `.icon:before` and `.icon:hover:before`
   - **Effect**: A hidden element (`:before`) behind each icon animates into view upon hover. It changes the background to a color that matches the text color of the icon (`#10ac84`).
   - **Keyframes**: The `@keyframes` animation `animation` moves the background color from the bottom left corner to the center of the icon on hover.

### 3. **Smooth Keyframe Animation**
   - **CSS Animation**: `@keyframes animation`
   - **Effect**: Controls the movement of the `.icon:before` background element, which starts from outside the icon and animates to cover it smoothly.
   - **Transition Steps**:
      - `0%`: Starts off-screen, positioned to the lower left of the icon.
      - `50%`: Moves to a central position.
      - `100%`: Fully covers the icon background, giving it a complete color overlay.

## Code Summary

- **Container**: `.container` centers all icons horizontally.
- **Icon Styles**: `.icon` is styled with rounded edges and shadows, with a color overlay effect on hover.
- **Animations**: `@keyframes` creates a seamless background animation, giving the effect of a sweeping overlay when each icon is hovered.

## Example Usage

This animation effect is perfect for a variety of web applications, such as:
- Social media buttons on landing pages.
- Interactive icon sets in portfolios.
- Animated icon groups for any website footer.

## Installation

To use this code:
1. Link Font Awesome for the icons (or use custom icons if preferred).
2. Include the provided CSS in your stylesheet.
3. Add the HTML structure with `div.container > a.icon > i` format for each icon.

## Requirements
- **Font Awesome** (optional, for icons).
- Basic HTML and CSS setup.

