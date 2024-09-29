// Primitive datatype :

// string, number, boolean, null, undefined, symbol, BigInt


/*const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const OutsideTemp = null;
let UserEmail;


const id = symbol('123');
const anotherId = symbol('123'); 
*/



const BigInt = 232455686432689964220n
//console.log(BigInt);

// Reference (Non primitive) :

// Array, Object, Function

const Heroes =["shaktiman","naagraj","doga"];

let myObj = {
    name: "Nityanshi",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack Memory (Primitive) - gets copy, Heap Memory (Non-Primitive) - changes in original value

let myYoutubename = "niti@01dotcom"

let anothername = myYoutubename;
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);


let userOne = {
    email : "something@google.com",
    upi: "123@ybl"
}

let userTwo = userOne

userTwo.email = "niti@google.com"

console.log(userOne.email);
console.log(userTwo.email);
