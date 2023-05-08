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

//funkce na random vytváření zaměstnanců
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
  const employeeCount = dtoIn.numEmployees;

const workloadCounts = dtoOut.employees.reduce((acc, cur) => {
  acc.set(cur.workload, (acc.get(cur.workload) || 0) + 1);
  return acc;
}, new Map());



  // Průměrný věk
  const employees = dtoOut.employees;
  const now = new Date();
  let totalAge = 1;
  for (let i = 0; i < employees.length; i++) {
    const birthdate = new Date(employees[i].birthdate);
    const age = now.getFullYear() - birthdate.getFullYear();
    totalAge += age;
  }
  const averageAge = totalAge / employees.length;
  console.log(averageAge);
  
// Medián věku + Minimální a maximální věk
function median(values) {
  values.sort(function(a, b) {
    return a - b;
  });

  const half = Math.floor(values.length / 2);

  if (values.length % 2 === 0) {
    return (values[half - 1] + values[half]) / 2;
  } else {
    return values[half];
  }
}

const ages = dtoOut.employees.map(employee => {
  const birthDate = new Date(employee.birthdate);
  const ageInMilliseconds = Date.now() - birthDate.getTime();
  const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
  return ageInYears;
});

//upravit do jednoho
const minAge2 = Math.min(...ages);
const minAge = Math.floor(minAge2)
const maxAge2 = Math.max(...ages);
const maxAge = Math.floor(maxAge2) 
const medianAge2 = median(ages);
const medianAge = Math.floor(medianAge2);
  
  

  // Medián výše úvazku
  const medianwork = arr => {
    const mid = Math.floor(arr.length / 2),
          nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  
  const workloads = dtoOut.employees.map(employee => employee.workload);
  const medianWorkload = medianwork(workloads);

  // Průměrná výše úvazku v rámci žen - pokud nejsou vrátí 0
  const femaleEmployees = dtoOut.employees.filter(employee => employee.gender === 'female');
  const totalWorkload = femaleEmployees.reduce((sum, employee) => sum + employee.workload, 0);
  const averageWomenWorkload = femaleEmployees.length > 0 ? totalWorkload / femaleEmployees.length : 0;

  // Seznam zaměstnanců setříděných dle výše úvazku od nejmenšího po největší
  const sortedEmployees = dtoOut.employees.sort((a, b) => a.workload - b.workload);


  return {
    employeeCount,
    workloadCounts,
    averageAge,
    minAge,
    maxAge,
    medianAge,
    medianWorkload,
    averageWomenWorkload,
    sortedEmployees,
  };
}
//definování funkce main
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

// testování typu
console.log(typeof dtoOut)

const employeeList = Object.values(dtoOut);
const stats = getEmployeeStatistics(employeeList);
console.log(stats);
//console.log(dtoOut);