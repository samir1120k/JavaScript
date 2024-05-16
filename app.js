// for (let i = 0; i < 10; i++) {
//     console.log("hii");
// }

// console.log("loop ended");
// let i = 0;

// while (i < 10) {
//     console.log("hii")
//     i++;
// }

// let i = 0;
// do {
//     console.log("hii");
//     i++;
// }
// while (i < 5)

// let str = "ramlal";
// let size = 0;
// for (let i of str) {
//     console.log("i=", i)
//     size++
// }
// console.log("size of string is =", size)

// const test = {
//     marks: 35,
//     obtain: 25,
//     ispass: true,
// };

// for (let i in test) {
//     console.log("i=", i, "value=", test[i])
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }

// }

let n = 10;

let user = prompt("enter the guess number :");
while (n != user) {



    user = prompt("enter the guess:");

    console.log(user);
    if (user == n) {
        console.log("la lala");
        break;
    }
}
console.log("number guessed");



