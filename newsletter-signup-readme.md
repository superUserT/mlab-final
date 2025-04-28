# Newsletter Signup Form

## Project Overview

This project features a responsive newsletter signup form with email validation and a thank you modal. It was designed to provide a modern, user-friendly interface for collecting email subscriptions.

## Features

- Clean, responsive design that works on various screen sizes
- Email validation with visual feedback
- Thank you modal that appears after successful submission
- Minimal and intuitive user interface

## Project Structure

```
newsletter-signup/
│
├── index.html                # Main HTML file with form and modal
├── src/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── assets/
│   │   └── images/
│   │       └── illustration-sign-up-desktop.svg  # Illustration image
│   └── index.js              # JavaScript functionality (if separated)
└── README.md                 # This file
```

## Installation

1. Clone the repository or download the files
2. Open `index.html` in your web browser

## Usage

1. Enter a valid email address in the input field
2. Click the "Subscribe to monthly Newsletter" button
3. If the email is valid, a thank you modal will appear
4. Click "Dismiss message" to close the modal

## Email Validation

The form validates email addresses using the following criteria:
- Must contain a username (characters before @)
- Must contain an @ symbol
- Must contain a domain name
- Must have a valid domain extension (.com, .org, etc.)

## Customization

You can customize the design by modifying the CSS styles in `style.css`. The colors, fonts, and spacing can be adjusted to match your brand identity.

## Browser Compatibility

This form is compatible with modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is available for personal and commercial use.
