
document.addEventListener('DOMContentLoaded', () => {
    // 1. Create a container for the Vanta background
    // We make it fixed so it stays in place while scrolling, covering the whole viewport.
    // If you want it to scroll with the page, change position to 'absolute' and height to '100%'.
    const vantaContainer = document.createElement('div');
    vantaContainer.id = 'vanta-bg';
    vantaContainer.style.position = 'fixed';
    vantaContainer.style.top = '0';
    vantaContainer.style.left = '0';
    vantaContainer.style.width = '100%';
    vantaContainer.style.height = '100%';
    vantaContainer.style.zIndex = '-1'; // Behind everything
    vantaContainer.style.pointerEvents = 'none'; // Allow clicking through to content
    document.body.appendChild(vantaContainer);

    // 2. Initialize Vanta.js
    // Ensure the libraries (Three.js and Vanta) are loaded before this runs
    if (window.VANTA) {
        window.VANTA.DOTS({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x2f468b,
            color2: 0x3e58ca,
            size: 4.30,
            spacing: 54.00,
            showLines: false
            // Optimization: Destroy vanta effect if it gets too heavy, 
            // though DOTS is generally lightweight.
        });
    } else {
        console.error("Vanta.js not found. Make sure the script tags are included in index.html");
    }
});
