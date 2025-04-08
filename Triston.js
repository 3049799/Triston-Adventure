const player = document.getElementById('player');
const items = document.querySelectorAll('.item');
let playerX = 0;
let playerY = 0;
let collectedItems = 0;

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'w':
            playerY -= 5;
            break;
        case 'a':
            playerX -= 5;
            break;
        case 's':
            playerY += 5;
            break;
        case 'd':
            playerX += 5;
            break;
    }
    updatePlayerPosition();
    checkCollision();
});

function updatePlayerPosition() {
    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
}

function checkCollision() {
    items.forEach(item => {
        const rect1 = player.getBoundingClientRect();
        const rect2 = item.getBoundingClientRect();
        
        if (!(rect1.right < rect2.left || 
              rect1.left > rect2.right || 
              rect1.bottom < rect2.top || 
              rect1.top > rect2.bottom)) {
            item.style.display = 'none'; // Hide collected item
            collectedItems++;
            console.log(`Items collected: ${collectedItems}`);
        }
    });
}
