let a = 1
let b = 2
let c = 3

console.log(a + b + c)

let student = {
    name: "Andrew",
    surname: "Martinek",
    dateOfBirth: "1994-07-15"
}

console.log(student.name)

let nr = 42;
let str = "";
console.log(Boolean(nr));
console.log(Boolean(str));

console.log("42" !== 42);
console.log("----------------------------")
console.log(false == [[[]]]);
console.log(true == [1]);
console.log([4, 2] == "4,2");
console.log([42] == 42);


let name = "Arthur";
let greeting = "Hello";
console.log(`${greeting} ${name}!`);

let nr1 = 30;
let nr2 = 12;
console.log(`Answer is ${nr1 + nr2}.`);
console.log(42 % 9);
let answer = 42;
++answer;
console.log(answer);
console.log(true || false && !true);
console.log((true || false) && !true);
console.log(answer || name);

let pocitadlo = 0;
while(pocitadlo < 3) {
  pocitadlo++;
  if (pocitadlo === 1) {
    continue;
  }
  console.log("ahoj");
}

let counter = 0;
cyklus: while(counter < 3) {
  let nextCounter = 0;
  while(nextCounter < 3) {
    if (nextCounter === 2) {
      break cyklus;
    }
    console.log("hello");
    nextCounter++;
  }
  counter++;
}


let a = 1
let b = 2
let c = 3

console.log(a + b + c)

let student = {
    name: "Andrew",
    surname: "Martinek",
    dateOfBirth: "1994-07-15"
}

console.log(student.name)

function generateBirthdate(minAge, maxAge) {
    const today = new Date();
    const minYear = today.getFullYear() - maxAge;
    const maxYear = today.getFullYear() - minAge;
    const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1; // Zde by se ještě hodilo dodělat podmínky na délku měsíců
    const date = new Date(year, month, day);
    return date.toISOString();
  }

  console.log(generateBirthdate(19, 65))