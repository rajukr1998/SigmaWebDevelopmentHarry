let random = Math.random()
console.log(random)
let a = prompt("Enter First Number")
let c = prompt("Enter Operation")
let b = prompt("Enter Second Number")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    //Perform correct calculate
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${evel(`${a} ${c} ${b}`)}`)
    
}
else {
    //Perform Wrong calculation
    c = obj[c]
    alert(`The result is ${evel(`${a} ${c} ${b}`)}`)
}