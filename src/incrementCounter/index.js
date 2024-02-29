// Question:
// Create a function called counter that returns another function. 
// The returned function, when called, should increment a counter
//  variable each time it is invoked and return the updated 
// value of the counter.

function counter(initialCount = 0) {
    let count = initialCount; // Initialize count with the provided initial value

    return () => {
        return ++count; // Increment count before returning
    }
}

export { counter };

