// Write a function called maxProfit that takes an array of stock prices as input, where each element represents the price of a given stock on a particular day. The function should return the maximum profit that can be achieved by buying and selling one share of the stock multiple times, with the constraint that you must sell the stock before you buy again. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

//Note: this is a twoPointer problem

function maxProfit(priceArray) {
    let maximumProfit = 0;

    if (priceArray.length <= 1) return 0

    for (let i = 0; i < priceArray.length; i++) {
        let buyDayPrice = priceArray[i - 1]
        let sellDayPrice = priceArray[i]

        let currentProfit = sellDayPrice - buyDayPrice
        if (currentProfit > 0) {
            maximumProfit += currentProfit
        }
    }

    return maximumProfit
}


export { maxProfit }