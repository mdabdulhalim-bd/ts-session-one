
const student1:string[] = ['Ab.Halim', 'Karim', 'Jihad', "Fahad"];
const student2:string[] = ['a', 'b', 'c']

student1.push(...student2);
// console.log(student1);

const allStudent = [...student1, ...student2];
// console.log(allStudent);



const teacher1 = {
    name:'teacher1',
    age:23,
    designation: "IT Lecturer"
}

const teacher2 = {
    name:'teacher2',
    age:32,
    designation: "Programmer"
}

const mentorList = {
    ...teacher1,
    ...teacher2,
}
// console.log(mentorList);

function getTotal(...numbers:number[]):number{

    let total = 0;
    numbers.forEach((n:number) => total = total + n)
    return total;
}



function combine(...args: (number | string)[]): [number, string] {
  let total = 0;
  let str = '';
  args.forEach((arg) => {
    if (typeof arg === 'number') {
      total += arg;
    } else if (typeof arg === 'string') {
      str += arg;
    }
  });

  return [total, str];
}

const [total, str] = combine(3, 'Happy', 2, 1, ' New Year');

console.log({ total });
console.log({ str });
