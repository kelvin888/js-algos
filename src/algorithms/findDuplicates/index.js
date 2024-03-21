function findDuplicates(arr) {
    // let charCount = new Map()

    // for (let i = 0; i < arr.length; i++) {
    //     charCount.set(arr[i], (charCount.get(arr[i]) || 0) + 1)
    // }
    // console.log("char count", charCount);

    // let duplicated = []

    // charCount.forEach((value, key) => {
    //     if (value > 1) {
    //         duplicated.push(key)
    //     }
    // })
    // console.log("duplicated", duplicated)
    // return duplicated

    let charCount = {}

    for (let i = 0; i < arr.length; i++) {
        charCount[arr[i]] = (charCount[arr[i]] || 0) + 1
    }

    let duplicates = []
    for (const key in charCount) {
        if (charCount[key] > 1) {
            duplicates.push(parseInt(key))
        }
    }
    return duplicates
}
export { findDuplicates }