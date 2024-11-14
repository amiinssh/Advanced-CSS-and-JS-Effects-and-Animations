
```css
/* Body styles with background image */
body {
    padding: 0;
    margin: 0;
    background: url(images/bg.jpg) no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
}

/* Rain overlay container */
.rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(images/rain.png) repeat;
    animation: raining 0.5s linear infinite;
    pointer-events: none; /* Ensures it doesn’t interfere with other content */
}

/* Keyframes for rain movement */
@keyframes raining {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 100%;
    }
}
```

### Explanation:
1. **Background Image for Body**: The main background image is applied to the `body` and set to cover the screen, creating a full-page effect.
2. **Rain Overlay**: The `.rain` div covers the viewport and uses a rain texture (`rain.png`). It moves continuously downward via the `raining` keyframes.
3. **Animation**: The `raining` keyframes shift the background position from top to bottom, giving the illusion of falling rain. The `0.5s` timing makes the animation smooth and seamless.