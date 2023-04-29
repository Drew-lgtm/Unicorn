let answer = 42;
answer %= 10;
console.log(answer);

let name = "Arthur";
let age = 30;
let planet = name === "Ford" ? "Betelgeuse VII"
  : name === "Trillian" || name === "Arthur" ? "Earth"
  : age < 0 ? "Magrathea"
  : "Vogsphere";

  for (let i = 0; i < 2; i++) {
    console.log("ahoj");
  }

  const person = {fname:"John", lname:"Doe", age:25};

let text = "";
let x;
for (x in person) {
  text += person[x];
}

console.log(text);

let pocitadlo = 0;
while (pocitadlo < 3) {
  pocitadlo++;
  console.log("ahoj");
}
console.log("-------------------------------")

let pocitadlo2 = 0;
while(pocitadlo2 < 10) {
  console.log("ahoj");
  if (pocitadlo2 === 2) {
    break;
  }
  pocitadlo2++;
}