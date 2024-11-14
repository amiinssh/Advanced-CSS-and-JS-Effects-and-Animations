# CSS Text Scrolling Effect with Background Images

This project demonstrates a **CSS-based text scrolling effect** that combines animated text and background images, creating an engaging, modern visual experience. It’s ideal for web projects that need dynamic section transitions or visually striking headings with animated scrolling effects.

## Features

1. **Text Background Images**:
   - Each section's heading (`h2`) displays text with a background image clip. 
   - The text dynamically changes background images as you scroll through different sections, showcasing unique visuals for each heading.

2. **Smooth Transitions**:
   - A subtle transition effect on the page background color enhances the scroll experience.
   - The layout adjusts smoothly to window resizing, maintaining the layout consistency across different screen sizes.

3. **Minimalist Layout**:
   - The layout is designed with minimal styling, focusing on typography and color for a clean, uncluttered look.
   - Each section is aligned centrally with flexible padding to fit all viewports.

4. **Customizable**:
   - Change images by replacing the URLs in CSS, or update colors for the body and text.
   - Adapt the `font-size` of the heading to fine-tune the visual hierarchy on your page.

## Project Structure

- **HTML**: Contains four main sections, each with a unique heading and content block. Each section can have its content, and headings will reflect different background images.
- **CSS**: Manages the scrolling effect, text clipping, color transitions, and responsiveness.

### Code Highlights

#### HTML Structure:
```html
<section>
    <div class="content">
        <h2>City Name</h2>
        <p>Your descriptive content here.</p>
        <a href="#">Read More</a>
    </div>
</section>
```

#### Key CSS Styling:
```css
section h2 {
    font-size: 20vw;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    background-size: cover;
    background-position: center;
}
```

## Setup Instructions

1. **Images**: Place images in an `images` directory and ensure CSS paths match.
2. **HTML**: Update each section’s content and heading to fit your project needs.
3. **CSS**: Customize colors, font sizes, and image URLs as needed.

## Compatibility

This project uses CSS properties like `background-clip` and `-webkit-text-fill-color`, which are compatible with modern browsers. Test across browsers to ensure consistent rendering.

