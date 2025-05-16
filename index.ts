
// let fullName: string | null = null; // explicitly allow null;

// function search(query:string | null){

// }

// let age:number = null;


// interface Person {
//     name: string;
//     middleName: number | null;  
// }



// let value;
// if(value !== null){
//     console.log(value);
// }


function formatValue(value: string | null): string {
    if (value === null) {
        return "N/A";
    } else {
        return value.toUpperCase()
    }
}

const result1 = formatValue(null);
console.log(result1);

