// function showMe(){
//     console.log("Hello")
// }

// setInterval(showMe,1000)

// 
function showMe(){
    console.log("Hello")
}

let id = setInterval(showMe,1500)

function stopShowMe(){
    clearInterval(id)
}


