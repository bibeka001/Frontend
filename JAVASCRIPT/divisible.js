

// let value = 121;
// if (value % 11 === 0) {
//     console.log("Divisible by 11");
// } else {
//     console.log("Not divisible by 11");

// }

let value = 27;
if (value % 2 == 0) {
    console.log("This is a even number");
} else if (value % 3 == 0) {
    console.log("This is a odd number");
} else {
    console.log("not divisible");
}

// let value= 21;
// console.log((value % 7 == 0) ? "Divisible by 7" : "Not divisible by 7");
// let value =51;
// console.log((value % 2 == 0 + value % 3 == 0)? "divisible by 2" : "divisible by 3");


// debugger
// let value = 24;
// if (value % 7 == 2) {
//     console.log("Divisible by 7");
// } else {
//     console.log(" Not divisible by 7");
// }

// var num= 36;
// if(num % 5 == 0){
//     console.log("Divisible by 7");
// }else{
// console.log("Not Divisible by 7");
// }

// var num= 56;
// if(num % 8 == 0){
//     console.log("Divisible by 8");
// }else{
//     console.log(" not Divisible by 8");

// }
const divi = (did) => {
    let add;
    if (did % 7 === 0) {
        console.log("divisible by 7")
    }
    else {
        console.log(" not divisible by 7")

    }
    add = did + 5
    return add
}
let result = divi(60)
console.log(result)
// var did= 63;
// if(did % 7 == 0){
//     console.log("Divisible by 7");
// }else{
//     console.log("not Divisible by 7");

// }  


// var num = 35;
// if(num % 7 == 0){
// console.log("This number is not divisible by 7");
// }else{
// console.log("This number is divisible by 7");
// }