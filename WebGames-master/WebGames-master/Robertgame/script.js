document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const gameContainer = document.querySelector('.game-container');
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const playerSize = 50; // Width and height of the player

    let playerX = 0;
    let playerY = 0;

    function movePlayer(x, y) {
        playerX += x;
        playerY += y;

        // Ensure the player does not move out of the container
        playerX = Math.max(0, Math.min(containerWidth - playerSize, playerX));
        playerY = Math.max(0, Math.min(containerHeight - playerSize, playerY));

        player.style.left = `${playerX}px`;
        player.style.top = `${playerY}px`;
    }

    document.addEventListener('keydown', (event) => {
        const step = 10; // Number of pixels to move

        switch (event.key) {
            case 'ArrowUp':
                movePlayer(0, -step);
                break;
            case 'ArrowDown':
                movePlayer(0, step);
                break;
            case 'ArrowLeft':
                movePlayer(-step);
                break;
            case 'ArrowRight':
                movePlayer(step);
                break;
            default:
                break;
        }
    });
});