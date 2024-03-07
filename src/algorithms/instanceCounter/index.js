class InstanceCounter {
    static count = 0; // Static property to keep track of instance count

    constructor() {
        InstanceCounter.count++; // Increment count each time an instance is created
    }

    static getInstanceCount() {
        return InstanceCounter.count; // Return the current count of instances
    }
}

export { InstanceCounter };
