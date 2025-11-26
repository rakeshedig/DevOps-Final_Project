console.log('Frontend loaded successfully');

const backendImageUrl = 'http://backend:5000/image';

fetch(backendImageUrl)
    .then(response => {
        if (response.ok) {
            console.log('✓ Backend image is accessible!');
        } else {
            console.log('✗ Failed to access backend image');
        }
    })
    .catch(error => {
        console.log('✗ Backend not available:', error);
    });

document.getElementById('colorBtn').addEventListener('click', function () {
    const container = document.querySelector('.container');
    const currentOpacity = window.getComputedStyle(container).backgroundColor;

    if (currentOpacity.includes('0.95')) {
        container.style.background = 'rgba(255, 255, 255, 0.85)';
        document.getElementById('status').textContent = 'More transparent!';
    } else if (currentOpacity.includes('0.85')) {
        container.style.background = 'rgba(255, 255, 255, 0.7)';
        document.getElementById('status').textContent = 'Even more transparent!';
    } else {
        container.style.background = 'rgba(255, 255, 255, 0.95)';
        document.getElementById('status').textContent = 'Back to normal!';
    }

    setTimeout(() => {
        document.getElementById('status').textContent = '';
    }, 2000);
});