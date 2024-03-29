function countSameVotes(inputString) {
    //input is string separated by line break
    const inputArray = inputString.trim().split("\n")
    // console.log("inputArray", inputArray)

    const userOneVotes = inputArray[0]
    const userTwoVotes = inputArray[1]
    let sameVoteCount = 0;

    for (let i = 0; i < userOneVotes.length; i++) {
        if (userOneVotes[i] === userTwoVotes[i]) {
            console.log("index" + i, userOneVotes[i], userTwoVotes[i])
            sameVoteCount++
        }
    }

    return sameVoteCount
}

export { countSameVotes }