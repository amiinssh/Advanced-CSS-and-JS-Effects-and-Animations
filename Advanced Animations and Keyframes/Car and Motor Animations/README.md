# Animated Driving Scene

This project features an animated driving scene that creates a looped background effect to simulate movement. It includes two main elements: a car and a motorbike, each positioned on the screen to add depth and a realistic feeling of driving. The animation primarily uses CSS keyframes to move the background image continuously from left to right.

## Features

- **Background Animation**: The main background simulates movement by using a background image that scrolls horizontally in an infinite loop.
- **Object Placement**: Both a car and a motorbike are positioned within the scene to add realism and visual interest.
- **CSS Keyframes**: Animations are created with CSS `@keyframes` to achieve smooth, continuous movement.

## Code Breakdown

### 1. Background Animation
The `.background` div animates from left to right, giving the illusion of the car and motorbike driving along a road. This is achieved by changing the `background-position` from left to right in a loop.

```css
.background {
    height: 100vh;
    background: url(images/bg.jpg);
    background-position: bottom left;
    animation: driving 10s linear infinite;
}
@keyframes driving {
    from {
        background-position: bottom left;
    }
    to {
        background-position: bottom right;
    }
}
```

### 2. Car and Motorbike
Two vehicles—a car and a motorbike—are added as individual images. Their absolute positioning and varied widths simulate different depths, adding a dynamic effect to the scene.

```css
.car {
    position: absolute;
    left: 300px;
    bottom: -50px;
    width: 150px;
}

.motorbike {
    position: absolute;
    left: 700px;
    bottom: 55px;
    width: 200px;
}
```

## Installation and Usage

1. Clone the repository.
2. Place your desired background image in an `images` folder, naming it `bg.jpg`.
3. Add images of the car and motorbike in the same `images` folder.

**Run locally**: Open the HTML file in any browser to see the animation in action.

## Customization

- **Animation Speed**: Adjust the `10s` duration in the `driving` animation to speed up or slow down the background movement.
- **Positioning**: Modify the `left` and `bottom` values of the `.car` and `.motorbike` classes to change the position of the vehicles.

