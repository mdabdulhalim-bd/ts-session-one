
var rect = { x: 0, y: 10, width: 15, height: 20 };

// Destructuring assignment
var {x, y, width, height} = rect;
console.log(x, y, width, height);


// BAsic destructuring

interface Book {
    title:string,
    author:string,
    pages:number,
    publisher:string,
}

const book:Book = {
    title:'TypeScript',
    author:'Halim',
    pages:234,
    publisher:'Halim Publication'
}

const {title, publisher} = book;
console.log(publisher);


// Rename property name of object
const {title:bookTitle, publisher:bookPublication} = book;
console.log(bookTitle);


// Optional chining and properties with default value

interface Login {
    fullName?:string,
    email?:string
}

const login:Login = {
    fullName:'abcd'
}

const {fullName = 'full_here', email:userEmail = 'halim@gmail.com'} = login;
console.log(fullName , userEmail);


// Nested Object destructuring

interface User{
    name:string,
    address:{
        city:string,
        country:string
    }
}

const user:User = {
    name: 'Rupayan',
    address:{
        city:"Dhaka",
        country:"Bangladesh"
    }
}

const {address:{city, country}} = user;
console.log(country);



/// function parameter destructuring

interface Options {
  color: string;
  size?: "sm" | "md" | "lg"; // this is optional chaining
}

function createButton({color, size = 'md'}:Options) {
  console.log(`Color: ${color}, Size: ${size}`);
}

createButton({ color: "blue" }); // "Color: blue, Size: md"



/// Array Destructuring

const scores:number[] = [23, 43, 45];
const [score1, score2] = scores;
console.log(score1);


/// skip unwanted element in an array

const rgb: [number, number, number] = [255, 128, 64];
const [red, , blue] = rgb; // Skip green (second element)
console.log(red); // 255
console.log(blue); // 64



/// Rest operator in array

const languages: string[] = ["TypeScript", "Python", "Rust"];
const [firstLang, ...otherLangs] = languages;
console.log(otherLangs); 


/// Tuple destructuring

type Httpresponse = [number, string];  // specifiying type
const responses:Httpresponse = [200, 'ok'];

const [statusCode, statusMessage] = responses;
console.log(statusCode);


/// destructuring array of object 

const team = [
  { name: "Alice", role: "dev" },
  { name: "Bob", role: "manager" }
];

const [{ name: firstMember }, ...rest] = team;
console.log(firstMember); 
console.log(rest); 