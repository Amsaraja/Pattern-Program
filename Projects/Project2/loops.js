//loop
// for, while, do-while

//for syntax
// for(initialization; condition; increment/decrement){
//     //code to be executed
// }

for(let i=1; i<=5; ++i){
    console.log(i);
}

//while loop
//while(condition){
//    //code to be executed
//}

let j=1;
while(j<=5){
    console.log(j);
    j++;
}

let countdown=3;
while(countdown>0){
    console.log("Countdown:", countdown);
    countdown--;
}
//do-while loop
//do{
//   //code to be executed
//}while(condition);
let password="1234";
let entered="0000";
do{
    console.log("Checking password...");
    entered="1234"; //simulating user input
}while(entered!==password);
console.log("Access granted!");