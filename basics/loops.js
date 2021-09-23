const ages = [10, 20, 30];
const infos = {name: 'kader',age: 22,year: 2021,married: false}

for (let age of ages){
    console.log(age)
}

for (let info in infos){
    console.log(`${info} : ${infos[info]}`)
}