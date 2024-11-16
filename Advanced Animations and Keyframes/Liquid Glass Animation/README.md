# Animated Liquid Motion in Glass Containers

This project features a **realistic liquid animation effect** inside glass containers, designed to mimic liquid rising and falling in a loop. The animation creates a visually appealing representation of fluid dynamics, making it perfect for creative web designs, loading screens, or data visualizations.

---

## Features

- **Glass Effect**: Semi-transparent containers with a frosted glass appearance.
- **Liquid Animation**: Smooth rising and falling motion of liquid, simulating realistic fluid behavior.
- **Customizable Colors**: Each container can have unique liquid colors, providing visual variety.
- **Responsive Layout**: Containers are flexibly aligned, adapting seamlessly to different viewport sizes.

---

## Code Breakdown

### HTML Structure

The layout includes a section with multiple `.glass` elements, each containing the animated liquid inside.

```html
<section>
    <div class="glass">
        <div class="inner">
            <div class="liquid"></div>
        </div>
    </div>
    <div class="glass">
        <div class="inner">
            <div class="liquid"></div>
        </div>
    </div>
</section>
```

### CSS Styling

#### General Styling

The basic reset ensures consistent styling across browsers, while the `section` provides a centered layout with a dark background:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #222;
    gap: 40px;
}
```

#### Glass Containers

The `.glass` and `.inner` classes create the visual structure for the glass containers:

- **Glass Effect**: Achieved using `rgba` for a frosted appearance.
- **Details**: The `:before` pseudo-element adds a top ring, while the `:after` element creates a subtle inner effect.

```css
.glass .inner {
    position: relative;
    width: 200px;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    border: 8px solid transparent;
}

.inner:before {
    content: "";
    position: absolute;
    width: 175px;
    height: 30px;
    border: 10px solid #444;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    top: -15px;
    box-shadow: 0 15px 0 #222;
}
```

#### Liquid Animation

The `.liquid` class creates the animated liquid effect:

- **Dynamic Motion**: The `@keyframes` rule animates the `top` property, causing the liquid to rise and fall smoothly.
- **Wave Effect**: The `:before` pseudo-element adds a rounded surface for realism.

```css
.liquid {
    position: absolute;
    top: 50px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: #41c1fb;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    animation: animateLiquid 5s linear infinite;
}

.liquid:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    border-radius: 50%;
    background: #1fa4e0;
    top: -10px;
}
```

#### Animation

The `@keyframes animateLiquid` rule defines the motion:

- The liquid starts at the base, rises to the top, then falls back to the original position.
- The motion loops infinitely with smooth transitions.

```css
@keyframes animateLiquid {
    0%, 20% {
        top: 50px;
    }
    50%, 70% {
        top: 320px;
    }
    100% {
        top: 50px;
    }
}
```

---

## Customization

### Liquid Colors
To differentiate containers, change the `background` and `:before` properties of the `.liquid` element:

```css
.glass:nth-child(2) .liquid {
    background: #e0bd1f;
    animation-delay: 2.5s;
}

.glass:nth-child(2) .liquid:before {
    background: #bb9e1b;
}
```

### Animation Timing
Adjust the animation duration (`5s` in this case) or delay (`animation-delay`) for different effects.

### Glass Container Size
Modify the `width`, `height`, or `border-radius` of `.inner` for various container shapes and sizes.

---

## How to Use

1. **Add the Code**:
   - Copy the HTML and CSS into separate files (`index.html` and `styles.css`).
   - Link the CSS file in the HTML:
     ```html
     <link rel="stylesheet" href="styles.css">
     ```

2. **Run the Project**:
   - Open `index.html` in any modern web browser to view the animation.

3. **Customize**:
   - Experiment with colors, sizes, and animation settings to tailor the design to your project.

---

