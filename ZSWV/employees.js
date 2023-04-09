// Definice datové struktury Employee
class Employee {
  constructor(name, surname, gender, birthdate, workload) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.birthdate = birthdate;
    this.workload = workload;
  }
}

// Generování náhodného jména
function generateName() {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Gina', 'Harry', 'Irene', 'Jack', 'Kate', 'Liam', 'Mia', 'Noah', 'Olivia', 'Peter', 'Rachel', 'Steve', 'Tina', 'Zoe'];
  return names[Math.floor(Math.random() * names.length)];
}

// Generování náhodného příjmení
function generateSurname() {
  const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Miller', 'Davis', 'Wilson', 'Moore', 'Anderson', 'Jackson', 'Garcia', 'Martinez', 'Hernandez', 'Lopez', 'Clark', 'Lewis', 'Young', 'Allen', 'King', 'Wright'];
  return surnames[Math.floor(Math.random() * surnames.length)];
}

// Generování náhodného pohlaví
function generateGender() {
  return Math.random() < 0.5 ? 'male' : 'female';
}

// Generování náhodného data narození
function generateBirthdate(minAge, maxAge) {
  const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  const date = new Date();
  date.setFullYear(date.getFullYear() - age);
  date.setHours(0, 0, 0, 0);
  return date.toISOString();
}

// Generování náhodného pracovního úvazku
function generateWorkload() {
  const workloads = [10, 20, 30, 40];
  return workloads[Math.floor(Math.random() * workloads.length)];
}

// Hlavní funkce programu
function main(dtoIn) {
  const numEmployees = dtoIn.numEmployees;
  const minAge = dtoIn.minAge;
  const maxAge = dtoIn.maxAge;

  const employees = [];

  for (let i = 0; i < numEmployees; i++) {
    const name = generateName();
    const surname = generateSurname();
    const gender = generateGender();
    const birthdate = generateBirthdate(minAge, maxAge);
    const workload = generateWorkload();

    employees.push(new Employee(name, surname, gender, birthdate, workload));
  }

  const dtoOut = {
    employees: employees
  };

  return dtoOut;
}

// Testování programu
const dtoIn = {
  numEmployees: 10,
  minAge: 18,
  maxAge: 65
};

const dtoOut = main(dtoIn);
console.log(dtoOut);
