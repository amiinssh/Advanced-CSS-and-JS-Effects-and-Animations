# Interactive Animated Link with Border Animation

This project demonstrates a **modern animated hyperlink effect** using pure CSS. The animation involves dynamic borders that draw around the link upon hover, creating a visually appealing and interactive design element. The effect is further enhanced with smooth transitions and a drawing animation for an icon.

---

## Features

### Dynamic Hover Animation

- **Border Expansion**: Four borders (top, bottom, left, and right) smoothly scale from 0 to 100% on hover, with staggered transitions for a refined effect.
- **Background Reveal**: The background of the link fills in gradually, timed to follow the border animation.
- **Icon Animation**: An icon placed above the link animates around the edges in a continuous motion upon hover.
- **Color Inversion**: The text color changes to white on hover for a striking contrast.

---

## Code Breakdown

### HTML Structure

A single `<a>` tag is used for the link. It contains spans to represent the borders and additional pseudo-elements for background and icon effects.

```html
<a href="#">
    Hover Me
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</a>
```

### CSS Styling

#### General Layout

The layout centers the link on the screen using a flexbox.

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #fff;
}
```

#### Border Animation

Each border (`span:nth-child(1)` to `span:nth-child(4)`) scales on hover:

- **Horizontal Borders (Top and Bottom)**:
  - Scale horizontally from `0` to `100%`.
  - Use different `transform-origin` values to control the direction of the animation.
  
  ```css
  span:nth-child(1), span:nth-child(3) {
      position: absolute;
      width: 100%;
      height: 3px;
      background: #262626;
  }

  span:nth-child(1) {
      top: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
  }

  a:hover span:nth-child(1) {
      transform: scaleX(1);
      transition: 0.2s;
  }
  ```

- **Vertical Borders (Left and Right)**:
  - Scale vertically from `0` to `100%`.
  - Delayed using `transition-delay` for a cascading effect.
  
  ```css
  span:nth-child(2), span:nth-child(4) {
      position: absolute;
      width: 3px;
      height: 100%;
      background: #262626;
  }

  span:nth-child(2) {
      top: 0;
      right: 0;
      transform: scaleY(0);
      transform-origin: top;
  }

  a:hover span:nth-child(2) {
      transform: scaleY(1);
      transition: 0.2s;
      transition-delay: 0.2s;
  }
  ```

#### Background and Text Animation

The background scales in after the borders, creating a smooth reveal:

```css
a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #262626;
    transform: scale(0);
    z-index: -1;
    transform-origin: top left;
}

a:hover:before {
    transform: scale(1);
    transition: 0.5s;
    transition-delay: 0.8s;
}

a:hover {
    color: white;
    transition: 0.2s;
    transition-delay: 0.8s;
}
```

#### Icon Animation

The icon (`a:after`) animates in a path around the link when hovered:

- Uses a `@keyframes` rule (`draw`) to define the movement around the edges.
- Sequential motion across the top, right, bottom, and left borders.

```css
a:after {
    content: "\f303"; /* Example FontAwesome icon */
    font-family: FontAwesome;
    position: absolute;
    top: -22px;
    left: 0;
    color: #262626;
}

a:hover:after {
    animation: draw 1s linear forwards;
}

@keyframes draw {
    0% {
        top: -22px;
        left: 0%;
    }
    20% {
        top: -22px;
        left: 100%;
    }
    40% {
        top: calc(100% - 22px);
        left: 100%;
    }
    60% {
        top: calc(100% - 22px);
        left: 0%;
    }
    80% {
        top: -22px;
        left: 0%;
    }
    100% {
        top: calc(100% - 22px);
        left: 100%;
    }
}
```

---

## Customization

- **Border Width**: Adjust the thickness of the borders by changing the height or width of the spans.
- **Colors**: Change the background, border, and text colors to match your design:
  ```css
  span:nth-child(1), span:nth-child(3), span:nth-child(2), span:nth-child(4) {
      background: #333; /* New border color */
  }

  a:hover {
      color: #fff; /* New hover text color */
  }
  ```
- **Icon**: Replace the FontAwesome icon in `a:after` with another character or custom content.
- **Animation Speed**: Modify the speed of transitions or animations by adjusting `transition` and `animation-duration` properties.

---

