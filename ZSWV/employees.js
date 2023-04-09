

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
function generateName(gender) {
  const femaleNames = ['Jana', 'Marie', 'Eva', 'Tereza', 'Lucie', 'Petra', 'Iveta', 'Kateřina', 'Barbora', 'Simona', 'Veronika', 'Monika', 'Lenka', 'Kristýna', 'Adéla', 'Denisa', 'Aneta', 'Karolína', 'Markéta', 'Jitka'];
  const maleNames = ['Petr', 'Jan', 'Jiří', 'Tomáš', 'Jakub', 'Martin', 'Lukáš', 'Josef', 'Václav', 'David', 'Marek', 'Pavel', 'Filip', 'Adam', 'Ondřej', 'František', 'Daniel', 'Michal', 'Radek', 'Robert'];
  const names = gender === 'female' ? femaleNames : maleNames;
  return names[Math.floor(Math.random() * names.length)];
}

// Generování náhodného příjmení
function generateSurname(gender) {
  const femaleSurnames = ['Nováková', 'Svobodová', 'Novotná', 'Dvořáková', 'Černá', 'Procházková', 'Kučerová', 'Veselá', 'Benešová', 'Fialová', 'Horáková', 'Kratochvílová', 'Vlčková', 'Linhartová', 'Havelková', 'Šťastná', 'Růžičková', 'Konečná', 'Kubíková', 'Štěpánová'];
  const maleSurnames = ['Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Beneš', 'Fiala', 'Horák', 'Kratochvíl', 'Vlček', 'Linhart', 'Havel', 'Šťastný', 'Růžička', 'Konečný', 'Kubík', 'Štěpánek'];
  const surnames = gender === 'female' ? femaleSurnames : maleSurnames;
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
  //console.log(workloads.length);
  return workloads[Math.floor(Math.random() * 4)];
}

// Spojovaci funkce main
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
  numEmployees: 1,
  minAge: 18,
  maxAge: 65
};

const dtoOut = main(dtoIn);
console.log(dtoOut);

