function rotateArray(arr, k) {
    const arrayLength = arr.length
    const rotations = k % arrayLength

    if (k === 0 || arrayLength === 0 || rotations === 0) {
        return arr;
    }

    //note that rotations could be negative, meaning rotation in opposite direction
    //rotate(-2) left === rotate(3) right
    const effectiveRotations = rotations < 0 ? rotations + arrayLength : rotations

    //slice off the rotated part
    const rotatedPart = arr.slice(-effectiveRotations)

    //slice the unchanged
    const unchangedPart = arr.slice(0, arrayLength - effectiveRotations)

    //join them
    const combinedArr = [...rotatedPart, ...unchangedPart]
    return combinedArr
}

export { rotateArray }