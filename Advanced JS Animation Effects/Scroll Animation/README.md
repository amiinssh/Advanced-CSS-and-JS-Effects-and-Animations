# Scroll Animation Project

This project showcases dynamic animations triggered by scrolling. Each section features distinct visual effects that come alive as the user scrolls through the page. The animations include translation, scaling, rotation, and opacity changes for a visually engaging experience.

---

## Features

### 1. **Scroll-Based Animations**
- Animations activate as the user scrolls, with effects applied to text, images, and other elements.
- A smooth transition ensures that elements appear or transform seamlessly.

### 2. **Section-Specific Animations**
Each section (`sec1` to `sec5`) has unique animations:

- **Section 2**: Elements slide in horizontally from the right.
- **Section 3**: Elements scale up from a smaller size.
- **Section 4**: Elements rotate into position.
- **Section 5**: Images slide in while rotating for a dramatic reveal.

### 3. **Opacity and Blur Transitions**
- All elements start with `opacity: 0` and a blur effect.
- As the user scrolls to a section, the opacity transitions to `1` and the blur disappears.

### 4. **Color and Layout Design**
- Each section has a distinct background color.
- Consistent typography and layout provide a cohesive design.

---

## How It Works

### HTML Structure
The page is divided into sections, each containing animated elements:

```html
<section class="sec1 show-animate">
    <h1 class="animate">First Section</h1>
    <p class="animate">animation on scroll HTML, CSS and JS</p>
</section>
```

- The `show-animate` class is dynamically added when the section is scrolled into view.
- Elements inside the section use the `animate` class for targeted animations.

### CSS Styling
- **Default State**: Elements are hidden (`opacity: 0`) and blurred.
- **On Scroll**: When the `show-animate` class is added:
  - Opacity transitions to `1`.
  - Blur effect is removed (`filter: blur(0px)`).
  - Section-specific animations are triggered (e.g., translation, scaling, rotation).

Example animation transitions:

```css
.sec2 .animate {
    transform: translateX(100%);
}
.sec2.show-animate .animate {
    transform: translateX(0);
}
```

### JavaScript Logic
The `onscroll` event listens for scrolling and applies the `show-animate` class to sections based on their position relative to the scroll distance.

```javascript
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let scrollDistance = window.scrollY;
        let secDistance = sec.offsetTop;

        if (scrollDistance >= secDistance) {
            sec.classList.add('show-animate');
        }
    });
};
```

---

## Usage

1. **Open in Browser**: Open the `index.html` file in any modern browser.
2. **Scroll Through the Page**: Observe how each section animates as it comes into view.
3. **Customize Animations**:
   - Modify CSS properties (e.g., `transform`, `opacity`) in `style.css`.
   - Adjust the JavaScript logic to trigger animations differently (e.g., based on offsets or scroll speeds).

---

## Effects Breakdown

### Animation Types
1. **Translate**: Elements move horizontally (`translateX`).
2. **Scale**: Elements grow from a smaller size (`scale`).
3. **Rotate**: Elements rotate into position (`rotate`).
4. **Opacity**: Smoothly transition from hidden (`opacity: 0`) to visible (`opacity: 1`).
5. **Blur**: Gradually remove blur for a clear focus effect (`filter: blur(5px)` to `filter: blur(0px)`).

### Section Highlights
- **Section 1**: Static animation on page load (`show-animate` applied by default).
- **Section 2**: Horizontal slide-in (`translateX`).
- **Section 3**: Scaling animation (`scale`).
- **Section 4**: Rotational effect (`rotate`).
- **Section 5**: Combination of sliding and rotating for images.

---

