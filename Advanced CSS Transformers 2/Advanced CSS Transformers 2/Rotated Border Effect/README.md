# CSS Border Animation Project

This project demonstrates a box element with layered, animated borders that activate on hover. The combination of transformations, delays, and scale effects creates a dynamic and engaging animation when the user hovers over the box. 

## Features and Effects

### 1. **Border Animation on Hover**
   - **Top/Bottom Borders**:
     - The `.box:before` pseudo-element initially has its borders scaled to `0`, creating an invisible line. When hovered, it scales up along the X-axis (`scaleX(1)`) to reveal a bright green (`#58c747`) border on the top and bottom edges.
     - **Transition**: Smooth and timed at `0.5s`, making the effect appear gradually.
     
   - **Left/Right Borders**:
     - The `.box:after` pseudo-element controls the left and right borders and initially scales to zero along the Y-axis. When hovered, it scales up vertically, revealing the green borders.
     - **Transition Delay**: A delay of `0.5s` after the initial border effect, creating a staggered effect.

### 2. **Rotated Overlay Animation**
   - **Effect**: The `.rotated` element, rotated 45 degrees, adds an additional layer of animation with diagonal borders.
   - **Top/Bottom Borders**: Activated with a delayed animation, these borders (`.rotated:before`) scale along the X-axis with a delay of `1s`.
   - **Left/Right Borders**: `.rotated:after` completes the effect with a vertical animation, scaling along the Y-axis with a `1.5s` delay.

### 3. **Layered Timing and Staggered Transitions**
   - Each border effect is activated in sequence using `transition-delay`, giving a cascade effect:
      - First, the outer top/bottom borders appear.
      - Next, the outer left/right borders appear with a slight delay.
      - Finally, the rotated layer adds additional border animations, enhancing depth and visual interest.

## Code Summary

- **Container Styling**: The `.box` element is centered on the screen, with its dimensions and alignment set through flexbox properties on the body.
- **Typography**: A centrally positioned `h1` element inside the box, displaying text in a bold and uppercase style.
- **Color Scheme**: Soft gray background with vibrant green borders create a modern aesthetic.

## How to Use

1. **Clone this project** or copy the CSS into your own stylesheet.
2. Link the `Raleway` font from Google Fonts.
3. Add a `div` element with the class `box` and a nested `h1` for the text display.

This project is excellent for showcasing creative hover effects on borders, ideal for interactive UI elements or as a visual addition to landing pages or portfolios. 

## License

This project is open-source for educational or personal use.