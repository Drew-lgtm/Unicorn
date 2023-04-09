class Employee {
    constructor(name, surname, gender, birthdate, workload) {
      this.name = name;
      this.surname = surname;
      this.gender = gender;
      this.birthdate = birthdate;
      this.workload = workload;
    }
  }
  
  function generateRandomName() {
    // funkce pro generování náhodného jména
  }
  
  function generateRandomSurname() {
    // funkce pro generování náhodného přijmení
  }
  
  function generateRandomGender() {
    // funkce pro generování náhodného pohlaví
  }
  
  function generateRandomBirthdate(ageRange) {
    // funkce pro generování náhodného data narození v daném věkovém pásmu
  }
  
  function generateRandomWorkload() {
    // funkce pro generování náhodného úvazku
  }
  
  function generateEmployees(count, ageRange) {
    let employees = [];
    for (let i = 0; i < count; i++) {
      const name = generateRandomName();
      const surname = generateRandomSurname();
      const gender = generateRandomGender();
      const birthdate = generateRandomBirthdate(ageRange);
      const workload = generateRandomWorkload();
      employees.push(new Employee(name, surname, gender, birthdate, workload));
    }
    return employees;
  }
  
  function main(dtoIn) {
    const { count, ageRange } = dtoIn;
    const employees = generateEmployees(count, ageRange);
    const dtoOut = { employees };
    return dtoOut;
  }