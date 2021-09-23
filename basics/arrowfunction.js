//normal func with default param
function add(a,b=5){
    const sum = a+b
    return sum
}
console.log(add(10))

//arraw func without param
const zog = () => {
    return "No param"
}
console.log(zog())

//arraw func single param

const substraction = x => {
    let a = 50;
    let sub = a-x
    return sub
}
console.log(substraction(10))

//arraw func using multiple param

const multiplication = (x,y) => {
    let mul = x*y
    return mul
}
console.log(multiplication(10,5))





