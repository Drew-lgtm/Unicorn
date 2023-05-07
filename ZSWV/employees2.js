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


function getEmployeeStatistics(employeeList) {
  // Počet zaměstnanců
  const employeeCount = employeeList.length;

  // Počet zaměstnanců podle výše úvazku
  const hoursMap = new Map();
  employeeList.forEach(employee => {
    if (!hoursMap.has(employee.hoursPerWeek)) {
      hoursMap.set(employee.hoursPerWeek, 0);
    }
    hoursMap.set(employee.hoursPerWeek, hoursMap.get(employee.hoursPerWeek) + 1);
  });

  // Průměrný věk
  const ageSum = employeeList.reduce((sum, employee) => sum + employee.age, 0);
  const averageAge = Math.round((ageSum / employeeCount) * 10) / 10;

  // Minimální a maximální věk
  const sortedAges = employeeList.map(employee => employee.age).sort((a, b) => a - b);
  const minAge = sortedAges[0];
  const maxAge = sortedAges[sortedAges.length - 1];

  // Medián věku
  const middle = Math.floor(sortedAges.length / 2);
  const medianAge = sortedAges.length % 2 !== 0 ? sortedAges[middle] : (sortedAges[middle - 1] + sortedAges[middle]) / 2;

  // Medián výše úvazku
  const sortedHours = employeeList.map(employee => employee.hoursPerWeek).sort((a, b) => a - b);
  const medianHours = sortedHours.length % 2 !== 0 ? sortedHours[middle] : (sortedHours[middle - 1] + sortedHours[middle]) / 2;

  // Průměrná výše úvazku v rámci žen
  const femaleEmployees = employeeList.filter(employee => employee.gender === "female");
  const femaleHoursSum = femaleEmployees.reduce((sum, employee) => sum + employee.hoursPerWeek, 0);
  const femaleAverageHours = femaleEmployees.length > 0 ? femaleHoursSum / femaleEmployees.length : 0;

  // Seznam zaměstnanců setříděných dle výše úvazku od nejmenšího po největší
  const sortedEmployees = employeeList.sort((a, b) => a.hoursPerWeek - b.hoursPerWeek);

  return {
    employeeCount,
    hoursMap,
    averageAge,
    minAge,
    maxAge,
    medianAge,
    medianHours,
    femaleAverageHours,
    sortedEmployees,
  };
}

function main(dtoIn) {
  const employeeList = generateEmployeeData(dtoIn);
  const dtoOut = getEmployeeStatistics(employeeList);
  return dtoOut;
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

console.log(typeof dtoOut)

/*let employeeList = {}
employeeList = dtoOut

console.log(typeof employeeList)*/
const employeeList = Object.values(dtoOut);
const stats = getEmployeeStatistics(employeeList);
console.log(stats);
