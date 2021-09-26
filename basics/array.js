const ages = [21,22,23,45,55]

// for ( const age of ages){
//     console.log(age)
// }

ages.forEach(age => {console.log(age)})
//insert last
ages.push(1)
//insert 1st
ages.unshift(33)
//remove last
ages.pop(1)
//remove first
ages.shift(ages)
 console.log(ages)