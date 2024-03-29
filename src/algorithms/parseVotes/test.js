import { countSameVotes } from '.';

describe('countSameVotes', () => {
    test('counts times when both users voted the same', () => {
        const input1 = '010101\n101101';
        const expected1 = 3;
        expect(countSameVotes(input1)).toBe(expected1);
    });

    test('returns 0 when there are no same votes', () => {
        const input2 = '010101\n101010';
        const expected2 = 0;
        expect(countSameVotes(input2)).toBe(expected2);
    });

    test('handles input with only one vote', () => {
        const input3 = '010101\n1';
        const expected3 = 0;
        expect(countSameVotes(input3)).toBe(expected3);
    });

    test('handles input with no votes', () => {
        const input4 = '\n';
        const expected4 = 0;
        expect(countSameVotes(input4)).toBe(expected4);
    });

    test('handles input with longer sequences', () => {
        const input5 = '0101010101010101\n1011011011011011';
        const expected5 = 7;
        expect(countSameVotes(input5)).toBe(expected5);
    });


    test('handles input with different lengths', () => {
        const input6 = '010101\n1011010';
        const expected6 = 3;
        expect(countSameVotes(input6)).toBe(expected6);
    });
});
