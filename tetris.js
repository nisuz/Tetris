const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

// Adjust canvas to fit the screen
const resizeCanvas = () => {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    scale = canvas.width / 240; // Base width for Tetris grid
    context.scale(scale, scale);
};

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const grid = createMatrix(12, 20);
const player = {
    pos: { x: 5, y: 5 },
    matrix: createPiece("T"),
};

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function createPiece(type) {
    switch (type) {
        case "T":
            return [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0],
            ];
        case "O":
            return [
                [2, 2],
                [2, 2],
            ];
        case "L":
            return [
                [0, 3, 0],
                [0, 3, 0],
                [0, 3, 3],
            ];
        // Additional pieces here...
    }
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = "red";
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width / scale, canvas.height / scale);
    drawMatrix(grid, { x: 0, y: 0 });
    drawMatrix(player.matrix, player.pos);
}

function playerMove(dir) {
    player.pos.x += dir;
}

function playerRotate() {
    const transposed = player.matrix[0].map((_, i) =>
        player.matrix.map(row => row[i]).reverse()
    );
    player.matrix = transposed;
}

function playerDrop() {
    player.pos.y++;
}

document.getElementById("left").addEventListener("click", () => playerMove(-1));
document.getElementById("right").addEventListener("click", () => playerMove(1));
document.getElementById("rotate").addEventListener("click", () => playerRotate());
document.getElementById("drop").addEventListener("click", () => playerDrop());

function update() {
    draw();
    requestAnimationFrame(update);
}
update();
