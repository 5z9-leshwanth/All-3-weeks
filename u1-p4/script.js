// script.js - Adaptive Landing Page Functionality

function detectDevice() {
    const deviceTypeElement = document.getElementById('deviceType');
    const featureList = document.getElementById('featureList');

    if (window.innerWidth < 768) {
        // Mobile
        deviceTypeElement.textContent = "You are using a mobile device.";
        featureList.innerHTML = `
            <div class="feature bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-semibold mb-2 text-lg">Mobile Feature 1</h3>
                <p class="text-sm text-gray-600">Optimized for touch interactions.</p>
            </div>
            <div class="feature bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-semibold mb-2 text-lg">Mobile Feature 2</h3>
                <p class="text-sm text-gray-600">Fast loading on mobile networks.</p>
            </div>
        `;
    } else if (window.innerWidth < 1024) {
        // Tablet
        deviceTypeElement.textContent = "You are using a tablet.";
        featureList.innerHTML = `
            <div class="feature bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-semibold mb-2 text-lg">Tablet Feature 1</h3>
                <p class="text-sm text-gray-600">Landscape support.</p>
            </div>
            <div class="feature bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-semibold mb-2 text-lg">Tablet Feature 2</h3>
                <p class="text-sm text-gray-600">Split-screen mode.</p>
            </div>
            <div class="feature bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-semibold mb-2 text-lg">Tablet Feature 3</h3>
                <p class="text-sm text-gray-600">Stylus support.</p>
            </div>
        `;
    } else {
        // Desktop
        deviceTypeElement.textContent = "You are using a desktop.";
        featureList.innerHTML = `
            <div class="feature bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-semibold mb-2 text-lg">Desktop Feature 1</h3>
                <p class="text-sm text-gray-600">Full keyboard shortcuts.</p>
            </div>
            <div class="feature bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-semibold mb-2 text-lg">Desktop Feature 2</h3>
                <p class="text-sm text-gray-600">Multi-monitor support.</p>
            </div>
            <div class="feature bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-semibold mb-2 text-lg">Desktop Feature 3</h3>
                <p class="text-sm text-gray-600">Advanced customization.</p>
            </div>
            <div class="feature bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-semibold mb-2 text-lg">Desktop Feature 4</h3>
                <p class="text-sm text-gray-600">Power user tools.</p>
            </div>
        `;
    }
}

// Event listeners
window.onload = detectDevice;
window.onresize = detectDevice;

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
});
