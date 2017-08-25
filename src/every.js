const members = [
    { name: "Eve", age: 24 },
    { name: "Adam", age: 48 },
    { name: "Chris", age: 18 },
    { name: "Danny", age: 30 }
]

// Every Method
const everyResult = members.every((member) => {
    return member.age > 25
})
console.log(everyResult) // false