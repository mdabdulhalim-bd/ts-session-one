
// this is the syntax of object type
// const person:{} = {}

// const student: {               
//     name: string, 
//     age: number, 
//     class: string, 
//     session: string, 
//     isPresent: boolean
//  } = {
//     name: "John Doe",
//     age: 20,
//     class: "BSc",
//     session: "2023-2024",
//     isPresent: true
// }


const employees:{
    empName: string,
    empId: string,
    empSalary: number,
    empDesignation: string,
    empDepartment: string,
} ={
    empName: "John Doe",
    empId: "E12345",
    empSalary: 50000,
    empDesignation: "Software Engineer",
    empDepartment: "IT"
}

employees.empSalary = 60000; // OK
employees.empDepartment= "dkdk";
