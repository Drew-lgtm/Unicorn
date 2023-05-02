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