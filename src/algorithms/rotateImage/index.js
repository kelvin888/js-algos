// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

function rotate(matrix, degrees) {
    const n = matrix.length;

    // Validate degrees: must be a multiple of 90
    if (degrees % 90 !== 0) {
        console.error("Invalid rotation degrees. Please provide a multiple of 90.");
        return;
    }

    const rotations = degrees / 90 % 4; // Calculate number of 90-degree rotations

    if (rotations === 0) return; // No rotation needed

    for (let r = 0; r < rotations; r++) {
        transpose(matrix);
        reverseRows(matrix);
    }
}

function transpose(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}

function reverseRows(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

export { rotate };
