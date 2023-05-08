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


function generateEmployee(min, max, maleNames, femaleNames, maleSurnames, femaleSurnames) {
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
    const employee = generateEmployee(min, max, maleNames, femaleNames, maleSurnames, femaleSurnames);
    employees.push(employee);
  }
  
  const dtoOut2 = { employees };
    //All
  //const employees = dtoOut2.employees;
  const nameCounts = {};

  for (const employee of employees) {
    const firstName = employee.name;
    if (nameCounts[firstName]) {
      nameCounts[firstName]++;
    } else {
      nameCounts[firstName] = 1;
    }
  }
  //male
  const maleNamesCount = dtoOut2.employees.reduce((count, employee) => {
    if (employee.gender === 'male') {
      const name = employee.name;
      count[name] = (count[name] || 0) + 1;
    }
    return count;
  }, {});



  //female
  const femaleNamesCount = dtoOut2.employees.reduce((count, employee) => {
    if (employee.gender === 'female') {
      const name = employee.name;
      count[name] = (count[name] || 0) + 1;
    }
    return count;
  }, {});

  //female parttime
  const femalePartTimeCount = dtoOut2.employees.reduce((count, employee) => {
    if (employee.gender === 'female' && employee.workload <= 30) {
      const name = employee.name;
      count[name] = (count[name] || 0) + 1;
    }
    return count;
  }, {});

  //male fulltime
  const maleFullTimeCount = dtoOut2.employees.reduce((count, employee) => {
    if (employee.gender === 'male' && employee.workload === 40) {
      const name = employee.name;
      count[name] = (count[name] || 0) + 1;
    }
    return count;
  }, {});
  
    //Funkce na chart content
    function getEmployeeChartContent(dtoOut) {
      const chartData = {};
      for (const key in dtoOut2.names) {
        const data = dtoOut2.names[key];
        chartData[key] = Object.entries(data)
          .map(([label, value]) => ({ label, value }))
          .sort((a, b) => b.value - a.value);
      }
      return { ...dtoOut, chartData };
    }

  const dtoOut = {
    //employees: employees,
    nameCounts: nameCounts,
    maleNamesCount: maleNamesCount,
    femaleNamesCount: femaleNamesCount,
    femalePartTimeCount: femalePartTimeCount,
    maleFullTimeCount: maleFullTimeCount,
    chartData:getEmployeeChartContent()
  };


  console.log(dtoOut);
}


// Testovací dtoIn
const dtoIn = {
  numEmployees: 50,
  min: 19,
  max: 35
};

// definice dtoOut a spuštění
const dtoOut = main(dtoIn);
//console.log(dtoOut);






