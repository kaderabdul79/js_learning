const person = {
    name: "kader",
    age: 21,
    married: false,
    familyMember: {
        father: "mostafa", mother: "shirina", brothers : ["foyez","parvez","forhad"]
    }
}
//for of used on array
for (let brother of person.familyMember.brothers){
    console.log(brother)
}
if(person.married){
    console.log('good luck')
}else{
    console.log('wait plz')
}

console.log(person.name)
console.log(`I'm ${person.age}`)
console.log("my parents are "+ person.familyMember.father +" and "+ person.familyMember.mother)
console.log(`my brothers are ${person.familyMember.brothers[0]}, ${person.familyMember.brothers[1]}, ${person.familyMember.brothers[2]}`)
