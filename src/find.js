const members = [
    { name: "Eve", age: 24 },
    { name: "Adam", age: 48 },
    { name: "Chris", age: 18 },
    { name: "Danny", age: 30 }
]
const result = members.find((member) => {
    return member.age > 25
})
console.log(result) // {name: "Adam", age: 48}

// const members = [
//     { name: "Eve", age: 24 },
//     { name: "Adam", age: 48 },
//     { name: "Chris", age: 18 },
//     { name: "Danny", age: 30 }
// ]
// let result
// for (let i = 0; i < members.length; i++) {
//     if (members[i].age > 25) {
//         result = members[i]
//         break
//     }
// }
// console.log(result)