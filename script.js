let score = 0;
const ball = document.getElementById('ball');
const goalie = document.getElementById('goalie');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');

function shoot(playerDirection) {
    // 1. Reset classes
    ball.className = 'ball';
    goalie.className = 'goalie';
    message.innerText = "";

    // 2. Randomly pick goalie direction
    const directions = ['left', 'center', 'right'];
    const goalieDirection = directions[Math.floor(Math.random() * directions.length)];

    // 3. Animate the movement
    setTimeout(() => {
        ball.classList.add(`shoot-${playerDirection}`);
        goalie.classList.add(`goalie-${goalieDirection}`);

        // 4. Check for a goal
        if (playerDirection === goalieDirection) {
            message.innerText = "SAVED! 🧤";
            message.style.color = "red";
        } else {
            score++;
            scoreDisplay.innerText = score;
            message.innerText = "GOAL!! ⚽";
            message.style.color = "yellow";
        }
    }, 10);

    // 5. Reset ball after 2 seconds
    setTimeout(() => {
        ball.className = 'ball';
        goalie.className = 'goalie';
    }, 2000);
}
