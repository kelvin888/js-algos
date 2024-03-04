import { rotate } from '.';

describe('Rotate Image', () => {
    // Existing test cases with adjustments
    test('Test Case 2: 4x4 Matrix Rotation', () => {
        const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        rotate(matrix, 90);
        expect(matrix).toEqual([
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4],
        ]);
    });

    test('Edge Case 3: 2x2 Matrix Rotation', () => {
        const matrix = [
            [1, 2],
            [3, 4],
        ];
        rotate(matrix, 90);
        expect(matrix).toEqual([
            [3, 1],
            [4, 2],
        ]);
    });

    test('Edge Case 4: 3x3 Matrix Rotation (180 degrees)', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        rotate(matrix, 180);
        expect(matrix).toEqual([
            [9, 8, 7],
            [6, 5, 4],
            [3, 2, 1],
        ]);
    });

    test('Edge Case 5: Rotate 3x3 Matrix by 270 degrees', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        rotate(matrix, 270);
        expect(matrix).toEqual([
            [3, 6, 9],
            [2, 5, 8],
            [1, 4, 7],
        ]);
    });


});
