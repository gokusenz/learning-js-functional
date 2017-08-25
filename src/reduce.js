const numbers = [10, 20, 30, 40]
const result = numbers.reduce((sum, number) => {
    return sum + number
}, 0)
console.log(result) // 100