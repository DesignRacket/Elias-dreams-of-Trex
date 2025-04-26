# Interactive Children's Book

An interactive storybook web application designed for children, featuring images and sounds.

## Features

- Displays book pages one at a time with smooth transitions
- Audio narration for each page with play/pause controls
- Navigation buttons and keyboard controls
- Swipe gestures for mobile devices
- Responsive design that works on any device
- Fun confetti animations
- Child-friendly interface with playful colors and fonts

## How to Use

### Viewing in a Browser

Simply open `index.html` in any web browser to use the interactive book.

### Running with a Local Server

If you have Node.js installed, you can run a local server:

1. Open a terminal/command prompt in the project directory
2. Run `npm start` or `node serve.js`
3. Open your browser and navigate to `http://localhost:3000`

This method is useful if you want to view the book from other devices on your network.

## Navigation

- Move through the book using:
  - The "Previous" and "Next" buttons
  - Left and right arrow keys on keyboard
  - Swipe left or right on touch devices
- Play the audio narration for each page by clicking the green sound button
- Enjoy the confetti animation at the beginning and end of the book

## Technical Information

- No server required - runs entirely in the browser
- Responsive design works on desktop, tablet, and mobile devices
- Uses HTML5 audio for sound playback
- Font Awesome icons for button graphics
- CSS animations for visual effects

## Directory Structure

- `index.html` - The main application file
- `images/` - Contains all book page images (PNG format)
- `sounds/` - Contains audio narration files (MP3 format)
- `serve.js` - Simple Node.js server for local hosting
- `package.json` - Node.js package configuration

## Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers 