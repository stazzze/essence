// app.js

// Function to apply CSS styles
function applyStyles(css) {
  const styleElement = document.createElement('style');
  styleElement.textContent = css;
  document.head.appendChild(styleElement);
}

// Function to update content
function updateContent() {
  const contentElement = document.getElementById('content');
  if (contentElement) {
    contentElement.innerHTML = 'Hello, World! This content is updated by JavaScript.';
  }
}

// Execute the updateContent function when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Fetch and apply CSS styles
  fetch('style.css')
    .then(response => response.text())
    .then(css => {
      if (css) {
        applyStyles(css);
      }

      // Update content
      updateContent();
    })
    .catch(error => {
      console.error('Error fetching CSS:', error);
    });
});
