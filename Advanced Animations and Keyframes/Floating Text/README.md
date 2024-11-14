# Floating Text Animation

This project features a large floating text animation, creating a gentle, swinging effect. With a colorful background, shadow effects, and subtle rotation, this effect is perfect for an eye-catching title or banner.

## Features

- **Centered Layout**: The text is centered in the viewport, both horizontally and vertically.
- **Floating Animation**: The `@keyframes float` animation adds a swinging motion to the text.
- **Stylized Text Shadow**: Layers of shadows add a dimensional effect, making the text appear to rise off the page.

## Code Breakdown

### 1. Background Styling

The body is styled with a green background and centered layout for the animated heading.

```css
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #26de81; /* Green background */
}
```

### 2. Text Styling and Animation

The `h1` text uses a white color with a custom shadow stack to create a subtle 3D effect. The text floats by rotating between 5 and -5 degrees.

```css
h1 {
    text-align: center;
    color: white;
    font-family: Arial, sans-serif;
    font-size: 90px;
    line-height: 90px;
    letter-spacing: 15px;
    text-shadow: 
        0 1px 0 #efefef,
        0 2px 0 #efefef, 
        0 3px 0 #efefef, 
        0 4px 0 #efefef,
        0 30px 5px rgba(0, 0, 0, 0.1); /* Layered shadows for depth */
    animation: float 3s linear infinite alternate;
}
```

### 3. Floating Animation

The `@keyframes float` animation alternates rotation between 5 and -5 degrees, creating a gentle rocking effect.

```css
@keyframes float {
    from {
        transform: rotate(5deg);
    }
    to {
        transform: rotate(-5deg);
    }
}
```



