process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    // Call the function to find the common votes
    const result = findCommonVotes(input.trim().split("\n"));
    // process.stdout.write(result + "\n");       // Writing output to STDOUT
}

// Write your code here
function findCommonVotes(votes) {
    // Extract votes of both users
    const user1Votes = votes[0];
    const user2Votes = votes[1];

    // Initialize a variable to store the count of common votes
    let commonVotesCount = 0;

    // Loop through each vote
    for (let i = 0; i < user1Votes.length; i++) {
        // Check if the votes at the current index are the same
        if (user1Votes[i] === user2Votes[i]) {
            // If they are the same, increment the count of common votes
            commonVotesCount++;
        }
    }

    // Return the count of common votes
    console.log(commonVotesCount);
}