let grandparent = document.getElementById('grandparent')
grandparent.addEventListener('click', () => {
    console.log("grandparent clicked")
},true)

let parent = document.getElementById('parent')
parent.addEventListener('click', () => {
    console.log("parent clicked")
},false)


let child = document.getElementById('child')
child.addEventListener('click', () => {
    console.log("child clicked")
},true)











