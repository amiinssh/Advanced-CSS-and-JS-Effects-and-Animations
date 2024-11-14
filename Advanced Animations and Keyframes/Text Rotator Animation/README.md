# CSS Animations Project

This project showcases CSS animations through a series of custom text and background effects. Each animation is designed to demonstrate how CSS can be used to bring dynamic, engaging movements to the screen with no reliance on JavaScript for key effects. The primary focus is on smooth transitions, text manipulations, and background animations.

## Project Structure

- **HTML**: The HTML structure consists of headings, spans, and containers that serve as the animation canvas.
- **CSS**: CSS is used extensively to create animations and transitions, focusing on transformations, text switching, background animations, and rotation effects.

### Key Features and Animations

1. **Background Animation**
   - The `.background` class creates a moving background image effect by using the `@keyframes` animation named `driving`. This animation shifts the background horizontally, creating an illusion of movement. 
   - **Code Snippet**:
     ```css
     .background {
         background: url(images/bg.jpg);
         animation: driving 10s linear infinite;
     }

     @keyframes driving {
         from { background-position: bottom left; }
         to { background-position: bottom right; }
     }
     ```

2. **Loading Animation**
   - A cube animation simulates a rotating loader using the `perspective` and `transform` properties. The keyframes `loading` animation rotates the cube along both the X and Y axes to create a smooth 3D effect.
   - **Code Snippet**:
     ```css
     @keyframes loading {
         0% { transform: rotateX(0deg) rotateY(0deg); }
         50% { transform: rotateX(0deg) rotateY(180deg); }
         100% { transform: rotateX(180deg) rotateY(180deg); }
     }
     ```

3. **Text Float Animation**
   - The `float` keyframes animation causes the text to slightly rotate from side to side, giving a buoyant effect. Shadows enhance this by simulating depth.
   - **Code Snippet**:
     ```css
     @keyframes float {
         from { transform: rotate(5deg); }
         to { transform: rotate(-5deg); }
     }
     ```

4. **Word Switch Animation**
   - To simulate changing words in a text, we use multiple `<span>` elements with an `@keyframes` animation that cycles through different states by adjusting their opacity and delay.
   - **Code Snippet**:
     ```css
     @keyframes word-switch {
         0%, 100% { opacity: 0; }
         25%, 75% { opacity: 1; }
     }
     ```

