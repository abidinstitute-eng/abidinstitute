// === Zoom Functionality === //
let currentZoomLevel = parseFloat(localStorage.getItem('preferredZoom')) || 1;

function adjustZoom(factor) {
    currentZoomLevel *= factor;
    if (currentZoomLevel > 2) currentZoomLevel = 2;
    if (currentZoomLevel < 0.8) currentZoomLevel = 0.8;
    applyZoom();
}

function resetZoom() {
    currentZoomLevel = 1;
    applyZoom();
}

function applyZoom() {
    document.body.style.zoom = currentZoomLevel;
    // Fallback for browsers that don't support zoom property
    if (typeof document.body.style.zoom === "undefined") {
        document.documentElement.style.transform = `scale(${currentZoomLevel})`;
        document.documentElement.style.transformOrigin = "top center";
    }
    // Save preference
    localStorage.setItem('preferredZoom', currentZoomLevel);
}

// Apply zoom immediately if saved
if (currentZoomLevel !== 1) {
    applyZoom();
}

// Inject Zoom Controls into the page
document.addEventListener('DOMContentLoaded', () => {
    // Check if controls already exist to avoid duplication
    if (document.querySelector('.zoom-controls')) return;

    const zoomDiv = document.createElement('div');
    zoomDiv.className = 'zoom-controls';
    zoomDiv.innerHTML = `
        <button class="zoom-btn" onclick="adjustZoom(1.1)" title="Zoom In">
            <i class="fa fa-search-plus"></i>
        </button>
        <button class="zoom-btn" onclick="adjustZoom(0.9)" title="Zoom Out">
            <i class="fa fa-search-minus"></i>
        </button>
        <button class="zoom-btn" onclick="resetZoom()" title="Reset Zoom">
            <i class="fa fa-refresh"></i>
        </button>
    `;
    document.body.appendChild(zoomDiv);
});
