// Write a function called createCounter that creates a counter with two methods: increment and decrement. The counter should start at 0 and be able to increment and decrement its value. Additionally, the function should accept an optional parameter step that determines the amount by which the counter is incremented or decremented (default value is 1).

function counterWithStep(step = 1) {
    let count = 0;
    const increment = () => {
        return count += step
    }

    const decrement = () => {
        return count -= step
    }

    const getValue = () => {
        return count;
    }

    return { increment, decrement, getValue }
}

export { counterWithStep }