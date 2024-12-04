# Video Navigation Animation README

This project demonstrates a dynamic, visually engaging webpage featuring a full-screen video background with a navigation bar that includes hover effects and responsive transitions. 

---

## Features

### **1. Full-Screen Video Background**
- A video is displayed as the background of the webpage:
  - Covers the full width and height of the viewport using `object-fit: cover`.
  - Positioned to fill the entire section.

### **2. Interactive Navigation Bar**
- A navigation menu is located at the bottom center of the screen:
  - **Navigation Items**:
    - Each item is represented as a thumbnail or button styled with a hover effect.
    - Clicking or hovering changes the size and opacity dynamically.
  - **Hover Effects**:
    - Images expand smoothly when hovered (`width` increases from `120px` to `200px`).
    - Navigation item opacity increases for a focused effect.

### **3. Smooth Transitions**
- All hover and focus effects are equipped with CSS transitions (`0.5s`) to ensure a seamless user experience.

---

## Technologies Used

1. **HTML**:
   - Defines the structure of the section with a video element and navigation bar.

2. **CSS**:
   - **Animations**:
     - `transition` properties enable smooth size and opacity changes.
     - Hover states for navigation items and images.
   - **Layout**:
     - The video background and navigation bar are positioned absolutely to ensure consistent layout control.

3. **Responsive Design**:
   - The navigation adapts dynamically to various screen sizes via relative positioning (`transform: translateX(-50%)`).

---

## How It Works

### **HTML Structure**
```html
<section>
    <video autoplay muted loop>
        <source src="videos/background.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <ul class="navigation">
        <li><img src="images/thumb1.jpg" alt="Thumbnail 1"></li>
        <li><img src="images/thumb2.jpg" alt="Thumbnail 2"></li>
        <li><img src="images/thumb3.jpg" alt="Thumbnail 3"></li>
    </ul>
</section>
```

### **CSS Animations**
#### Full-Screen Video
```css
section video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```
- Ensures the video fills the viewport while maintaining aspect ratio.

#### Navigation Hover Effects
```css
.navigation img {
    width: 120px;
    transition: 0.5s;
}

img:hover {
    width: 200px;
}

.navigation li {
    opacity: 0.7;
    transition: 0.5s;
}

li:hover {
    opacity: 1;
}
```
- Images expand and become more prominent when hovered.
- Navigation items increase in opacity when focused.

---

## Customization

1. **Background Video**:
   - Replace the video source (`videos/background.mp4`) with your own video file.

2. **Navigation Thumbnails**:
   - Update the `<img>` `src` attributes to point to your own image files.

3. **Hover Effects**:
   - Adjust the `width` in the hover effect for a more or less dramatic expansion.
   - Change the `opacity` values for a subtler or more prominent hover effect.

4. **Fonts**:
   - The project uses the [Poppins font](https://fonts.google.com/specimen/Poppins) via Google Fonts. Modify or replace this as desired in the `@import` statement.

---

## Usage

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd video-navigation-animation
   ```

2. **Set Up Assets**:
   - Place your background video in the `videos/` folder.
   - Place your navigation thumbnail images in the `images/` folder.

3. **Open the HTML File**:
   - Open `index.html` in your browser to view the animation.

---

## Project Directory Structure
```
project-folder/
│
├── index.html
├── style.css
├── videos/
│   └── background.mp4
└── images/
    ├── thumb1.jpg
    ├── thumb2.jpg
    └── thumb3.jpg
```

---

