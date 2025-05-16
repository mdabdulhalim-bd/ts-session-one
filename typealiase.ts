// 1. Basic Primitive Alias
// 2. Union Type Alias
// 3. Object Type Alias
// 4. Function Type Alias
// 5. Tuple Type Alias
// 6. Generic Type Alias
// 7. Intersection Type Alias
// 8. Recursive Type Alias
// 9. Mapped Type Alias
// 10. Conditional Type Alias


type Id = string | number; // type alias
 
function printUserId(userId:Id){
    console.log(`User id : ${userId}`);
}

printUserId('user-12')
printUserId(348345);

/// Union type
///Status is a union of literal strings.

type Status = 'pending' | 'success' | 'error';

function handleResponse(status:Status){
    if(status === 'pending'){
        console.log('pending');
    }
    else if(status === 'success'){
        console.log('success');
    }
    else{
        console.log('404 error found');
    }
}

handleResponse('pending')



/// Object type alias

type User = {
  id: number;
  name: string;
  email?: string; 
};

const alice: User = { id: 1, name: "Alice" }; 
// Valid (email is optional)
// const bob: User = { name: "Bob" }; // Error: Missing `id`



/// Function type alias

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

console.log(add(2, 3)); // 5
// multiply("2", 3); // Error: String not assignable to number


//// Tuple type alias

type Coordinates = [number, number];
const origine: Coordinates = [0, 0];
const point: Coordinates = [10, 20];
