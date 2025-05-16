
// Tuple is an array with fixed number of elements whose types are known.

// let employees: [string, number] = ['Alice', "bob"]; 
// : Type 'string' is not assignable to type 'number'.



let skills: [string, number];
skills = ['typescript', 5]; // OK
// skills = [5, 'typescript']; // Error: Type 'number' is not assignable to type 'string'.


let color:[number, number, number];
color = [255, 0, 0]; // OK
// color = [255, 0]; // Error: Type 'number' is not assignable to type 'number'.


let bgColor, headerColor: [number, number, number, number?];
bgColor = [255, 255, 255, 0.2]; // OK
headerColor = [0, 0, 0]; // OK

