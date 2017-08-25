const members = [
    { name: "Eve", age: 24 },
    { name: "Adam", age: 48 },
    { name: "Chris", age: 18 },
    { name: "Danny", age: 30 }
]

// Some Method
const someResult = members.some((member) => {
    return member.age > 25
})
console.log(someResult) // true