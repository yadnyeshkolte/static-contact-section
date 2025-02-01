# Static Site Contact Form Email Integration (GitHub Pages)
## Using Google Forms for Static Websites Without Redirects

This guide demonstrates how to implement a contact form on a static website that sends emails without server-side code or redirects, using Google Forms as the backend.

🔗 [View Demo Contact Form](https://yadnyeshkolte.github.io/static-contact-section/) 

## Why This Approach?

- No backend server required
- Free to implement and maintain
- No third-party form service dependencies
- Works with static site hosting (GitHub Pages, Netlify, etc.)
- Reliable Google infrastructure
- Responses can be managed via Google Sheets
- Easy email notification setup

## Implementation Guide

### 1. Create Your HTML Form Structure

First, create your base HTML form structure that matches your design requirements:

```html
<form>
    <div class="form-group">
        <label>Name:</label>
        <input type="text" name="name">
    </div>
    <div class="form-group">
        <label>Email:</label>
        <input type="email" name="email">
    </div>
    <div class="form-group">
        <label>Message:</label>
        <textarea name="message"></textarea>
    </div>
    <button type="submit">Send Message</button>
</form>
```

### 2. Set Up Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form
3. Add fields that correspond to your HTML form

### 3. Get Field IDs from Google Form

To map your form fields to Google Form fields:

1. Open your Google Form
2. Click "Get pre-filled link"
3. Fill in any test data
4. Click "Get Link"
5. Analyze the URL to find field IDs:

```
https://docs.google.com/forms/d/e/[FORM-ID]/viewform?entry.123456789=nameexample&entry.987654321=emailexample&entry.987654321=messageexample
                                                               ↑                       ↑                            ↑  
                                                                        Field IDs are these numbers
```

### 4. Update Your HTML Form

Modify your form to integrate with Google Forms:

```html
<form
    id="contactForm"
    target="hidden_iframe"
    action="https://docs.google.com/forms/d/e/[FORM-ID]/formResponse?"
    method="post"
>
    <div class="form-group">
        <label>Name:</label>
        <input type="text" name="entry.123456789" required>
    </div>
    <div class="form-group">
        <label>Email:</label>
        <input type="email" name="entry.987654321" required>
    </div>
    <div class="form-group">
        <label>Message:</label>
        <textarea name="entry.456789123" required></textarea>
    </div>
    <button type="submit">Send Message</button>
</form>

<!-- Hidden iframe to prevent redirect -->
<iframe 
    name="hidden_iframe" 
    id="hidden_iframe" 
    style="display: none;" 
    onload="if(submitted) {handleSubmission()}"
></iframe>
```

### 5. Add JavaScript for Form Handling

```javascript
let submitted = false;

function handleSubmission() {
    // Hide form
    document.getElementById('contactForm').style.display = 'none';
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully.</p>
    `;
    
    document.getElementById('contactForm').parentNode.appendChild(successMessage);
}

// Optional: Add loading state
document.getElementById('contactForm').addEventListener('submit', function() {
    submitted = true;
    const button = this.querySelector('button[type="submit"]');
    button.disabled = true;
    button.innerHTML = 'Sending...';
});
```

### 6. Add Basic CSS Styling

```css
.success-message {
    text-align: center;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 0.5rem;
    margin: 2rem 0;
}

.success-message h3 {
    color: #28a745;
    margin-bottom: 1rem;
}
```

## Important Considerations

### Security
- Google Forms submissions are public by default
- Don't use for sensitive information
- Consider reCAPTCHA integration for spam prevention

### Limitations
- No direct file uploads
- Can't customize success/error responses from Google
- May need CORS consideration
- Form spam protection is limited

### Best Practices
1. Always validate inputs client-side
2. Implement rate limiting if possible
3. Add loading states for better UX
4. Test thoroughly across browsers
5. Consider accessibility features

## Troubleshooting

### Common Issues

1. **Form Redirects to Google Forms**
   - Check iframe implementation
   - Verify `target="hidden_iframe"`
   - Ensure form action ends with "formResponse?"

2. **Submissions Not Recording**
   - Verify field IDs match exactly
   - Check Google Form is accepting responses
   - Ensure form is public

3. **CORS Issues**
   - Add `mode: 'no-cors'` if using fetch
   - Check browser console for errors

## Advanced Customization

### Custom Success Messages
```javascript
function handleSubmission() {
    // Animate form fadeout
    const form = document.getElementById('contactForm');
    form.style.opacity = '0';
    form.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        form.style.display = 'none';
        showCustomSuccess();
    }, 500);
}

function showCustomSuccess() {
    // Add your custom success UI here
}
```

### Loading States
```javascript
function setLoadingState(isLoading) {
    const button = document.querySelector('button[type="submit"]');
    const loadingText = 'Sending...';
    const normalText = 'Send Message';
    
    button.disabled = isLoading;
    button.innerHTML = isLoading ? loadingText : normalText;
}
```

## License

This implementation guide is available under the MIT License. Feel free to use, modify, and distribute as needed.
