// var a=3;

// function Outer() {
//     console.log(a)
//     var b = 9;
//     // console.log(x)
//     function Inner() {
//         var x = 8
//         console.log(b)
//     }

//     Inner()

// }
// Outer()

// function closuresDemo() {
//     var x = 10;
//     return x
//  }
//  var d = closuresDemo()
//  console.log(d)

function closuresDemo(x) {
    var x = x;
    return function(y) {
       var y = y;
       console.log('Sum: ' + (x + y));
    }
 }
 closuresDemo(56)(4);
