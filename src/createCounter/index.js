// Question:
// Create a function called createCounter that returns an object with two methods: increment and decrement.These methods should be used to increment and decrement a counter variable, respectively.The counter variable should be private and accessible only through these methods.

function createCounter() {
    let count = 0;
    const getCounter = () => {
        return count;
    }

    const increment = () => {
        count++
    }
    const decrement = () => {
        count--
    }
    return { getCounter, increment, decrement }
}

export { createCounter }