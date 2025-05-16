
// Normal function declaration in JavaScript
// function add(){

// }


// Arrow function declaration in JavaScript
// const doSomething = () =>{

// }

// function HelloWorld():string{
//     return "Hello World";
// }


// function add(a:number, b:number){
//     let sum = a + b;
//     console.log("Sum is: " + sum);
   
// }
// add(5, 10); // OK


// const add = (a: number, b: number): number =>  a + b;
// const subtract = (a: number, b: number): number => a - b;


const CSEDepartment = {
    dep_name: "Computer Science",
    dep_code: "CSE",
    admin(){},
    faculty(){},
    students(){},
    courses():string{
        return "CSE Courses";
    },
    dep_events: "CSE Events",
 
}

const doubleNumber:number[] = [2,3,4];

const  double = doubleNumber.map((n:number) => n * n);
console.log(double)



const doubleNumber2 = doubleNumber.map((n) => n * n);
