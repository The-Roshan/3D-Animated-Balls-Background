// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.querySelector('.background-container');
    const sphereCount = 40; // Adjust the number of spheres here

    // Generate spheres
    for (let i = 0; i < sphereCount; i++) {
        const sphere = document.createElement('div');
        sphere.classList.add('sphere');

        // Random sizes between 50px and 200px
        const size = Math.random() * 150 + 50;
        sphere.style.width = `${size}px`;
        sphere.style.height = `${size}px`;

        // Random starting position
        const xStart = Math.random() * window.innerWidth - size / 2;
        const yStart = Math.random() * window.innerHeight - size / 2;
        const zStart = Math.random() * 1000 - 500;

        // Random ending position
        const xEnd = Math.random() * window.innerWidth - size / 2;
        const yEnd = Math.random() * window.innerHeight - size / 2;
        const zEnd = Math.random() * 1000 - 500;

        // Random duration between 20s and 40s
        const floatDuration = Math.random() * 20 + 20;

        // Random rotation duration between 10s and 30s
        const rotateDuration = Math.random() * 20 + 10;

        // Random color
        const colors = ['#ff6b6b', '#f06595', '#cc5de8', '#845ef7', '#5c7cfa', '#339af0', '#22b8cf', '#20c997', '#51cf66', '#94d82d', '#fcc419', '#ff922b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        sphere.style.background = `radial-gradient(circle at 30% 30%, ${color}, #000)`;

        // Set CSS variables for animation
        sphere.style.setProperty('--x-start', `${xStart}px`);
        sphere.style.setProperty('--y-start', `${yStart}px`);
        sphere.style.setProperty('--z-start', `${zStart}px`);

        sphere.style.setProperty('--x-end', `${xEnd}px`);
        sphere.style.setProperty('--y-end', `${yEnd}px`);
        sphere.style.setProperty('--z-end', `${zEnd}px`);

        sphere.style.animationDuration = `${floatDuration}s, ${rotateDuration}s`;

        backgroundContainer.appendChild(sphere);
    }
});
