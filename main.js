function knightMoves(start, end) {
    const directions = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];

    // Queue for BFS: [current_position, path_taken]
    let queue = [[start, [start]]];
    let visited = new Set([start.toString()]);

    // BFS loop
    while (queue.length > 0) {
        const [currentPos, path] = queue.shift();
        const [x, y] = currentPos;

        // If the current position is the destination, return the path
        if (x === end[0] && y === end[1]) {
            console.log(
                `You made it in ${path.length - 1} moves! Here's your path:`
            );
            return path;
        }

        // Explore all possible knight moves
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            const newPos = [newX, newY];

            // Only consider valid board positions that haven't been visited yet
            if (isValid(newX, newY) && !visited.has(newPos.toString())) {
                queue.push([newPos, [...path, newPos]]);
                visited.add(newPos.toString());
            }
        }
    }
}

// Helper function to check if a position is within the board boundaries
function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// Example Usage
const result = knightMoves([0, 0], [7, 7]);
console.log(result);
