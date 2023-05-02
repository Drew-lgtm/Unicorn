//seznam ženských jmen a příjmení pro random generování
const femaleNames = ['Adéla', 'Alena', 'Božena', 'Dagmar', 'Daniela', 'Eliška', 'Emma', 'Hana', 'Jana', 'Jiřina', 'Kamila', 'Karla', 'Kateřina', 'Lenka', 'Linda', 'Lucie', 'Marie', 'Martina', 'Míša', 'Nikola', 'Olga', 'Petra', 'Renata', 'Simona', 'Šárka', 'Tereza', 'Vanda', 'Veronika', 'Věra', 'Vlasta', 'Zdeňka', 'Zuzana'];
const femaleSurnames = ['Nováková', 'Svobodová', 'Novotná', 'Dvořáková', 'Černá', 'Procházková', 'Kučerová', 'Veselá', 'Horáčková', 'Němcová', 'Kratochvílová', 'Benešová', 'Krejčí', 'Králová', 'Jelínková', 'Vávrová', 'Růžičková', 'Bartošová', 'Fialová', 'Hájková', 'Sedláčková', 'Matějíčková', 'Křížová', 'Hlaváčková', 'Dušková', 'Blahová', 'Šimková', 'Vondráčková', 'Malíková', 'Roubalová', 'Musilová'];

//seznam mužkých...
const maleNames = ['Adam', 'Bohumil', 'David', 'Dominik', 'Filip', 'Jakub', 'Jan', 'Jiří', 'Josef', 'Lukáš', 'Martin', 'Matěj', 'Michal', 'Petr', 'Radek', 'Rudolf', 'Šimon', 'Tomáš', 'Václav', 'Vít', 'Zbyněk', 'Zdeněk'];
const maleSurnames = ['Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Horáček', 'Němec', 'Kratochvíl', 'Beneš', 'Krejčí', 'Královský', 'Jelínek', 'Vávra', 'Růžička', 'Bartoš', 'Fiala', 'Hájek', 'Sedláček', 'Matějíček', 'Kříž', 'Hlaváček', 'Dušek', 'Blaha', 'Šimek', 'Vondráček', 'Malý', 'Roubal', 'Musil'];

//  Classa Employee
class Employee {
  constructor(name, surname, gender, birthdate, workload) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.birthdate = birthdate;
    this.workload = workload;
  }
}

//generování random #stackoverflow
function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

// Generování náhodného data narození
function generateBirthdate(min, max) {
  const today = new Date();
  const minYear = today.getFullYear() - max;
  const maxYear = today.getFullYear() - min;
  const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1; // Zde by se ještě hodilo dodělat podmínky na délku měsíců
  const date = new Date(year, month, day);
  return date.toISOString();
}


function generateEmployeeData(min, max, maleNames, femaleNames, maleSurnames, femaleSurnames) {
  const isMale = Math.random() < 0.5; // náhodně určíme pohlaví
  const name = isMale ? randomItem(maleNames) : randomItem(femaleNames); // náhodně vybereme jméno podle pohlaví
  const surname = isMale ? randomItem(maleSurnames) : randomItem(femaleSurnames); // náhodně vybereme příjmení podle pohlaví
  const gender = isMale ? 'male' : 'female'; // výběr pohlaví
  const birthdate = generateBirthdate(min, max); // generování háhodného data narození
  const workload = randomItem([10, 20, 30, 40]); // náhodný výběr

  return new Employee(name, surname, gender, birthdate, workload);
}



function main(dtoIn) {
  const numEmployees = dtoIn.numEmployees;
  const min = dtoIn.min;
  const max = dtoIn.max;

  const employees = [];

  for (let i = 0; i < numEmployees; i++) {
    const employee = generateEmployeeData(min, max, maleNames, femaleNames, maleSurnames, femaleSurnames);
    employees.push(employee);
  }

  const dtoOut = { employees };
  return dtoOut;
}


// Testovací dtoIn
const dtoIn = {
  numEmployees: 50,
  min: 19,
  max: 35
};

// definice dtoOut a spuštění
const dtoOut = main(dtoIn);
console.log(dtoOut);
