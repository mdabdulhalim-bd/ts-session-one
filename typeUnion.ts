
/// Primitive Union

let age: string | number;
age = 23,
age = 'ewre'


/// Function parameter union

function formatValue(value:string | number):string{
    return `${value} done`
}

console.log(formatValue('Hello world'));
console.log(formatValue(90));


/// Array with union type

const mixedArray:(string | number | boolean)[] = ['232', 343, true];


/// Literal Type Union

type TrafficLight = "red" | "yellow" | "green";
function changeLight(status: TrafficLight): void {
  console.log(`Light changed to ${status}`);
}
changeLight('red')



/// Object with nion type
type Shape = 
  | { kind: "circle"; radius: number } 
  | { kind: "square"; side: number };

function printArea(shape: Shape): void {
  if (shape.kind === "circle") {
    console.log(Math.PI * shape.radius ** 2); // Access `radius` safely
  } else {
    console.log(shape.side ** 2); // TypeScript knows `side` exists here
  }
}

printArea({ kind: "circle", radius: 5 }); // 78.54...


///  Union with type aliases

type ID = string | number;
type User = { id: ID; name: string };

const user1: User = { id: "abc123", name: "Alice" }; 
// ID as string
const user2: User = { id: 456, name: "Bob" }; 
// ID as number


/// Optional porperty in union type
type Person = 
  | { name: string; age: number } 
  | { name: string; age?: never }; 

const alice: Person = { name: "Alice", age: 30 }; 
const bob: Person = { name: "Bob" }; 


/// ype Guards with Union Types

function printLength(input: string | string[]): void {
  if (typeof input === "string") {
    console.log(input.length); // Type narrowed to `string`
  } else {
    console.log(input.length); // Type narrowed to `string[]`
  }
}

printLength("hello");      // 5
printLength(["a", "b"]);   // 2



/// Union with null or undefined

type MaybeString = string | null | undefined;

function safeUpperCase(str: MaybeString): string {
  return str?.toUpperCase() || "DEFAULT"; 
}

console.log(safeUpperCase("hello")); 
console.log(safeUpperCase(null));    


// more details

type Data = | string | number | { data: string; metadata: object } | (number | string)[];

function processData(data: Data): void {
  if (Array.isArray(data)) {
    console.log("Array:", data.join(", "));
  } else if (typeof data === "object") {
    console.log("Object:", data.data); 
  } else {
    console.log("Primitive:", data);
  }
}

processData([1, "two"]);
processData({ data: "info", metadata: {} }); 


// similarly  never, unknown, null, undefine