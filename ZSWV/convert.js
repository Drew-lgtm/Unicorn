// funkce
function tenToThree(number) {
    let result = "";
    let iserror = false;
    
// validace (selekce)
    if (number === "") { // ověřuje, jestli vstup není prázdná hodnota
      iserror = true;
      return {iserror};
    }
    
    if (isNaN(number)) { // ověří zda je vstup číslo
      iserror = true;
      return {iserror};
    }
    
    number = Number(number); // převede řetězec na číslo (pro jistotu)
    
    if (number < 0) { // kontrola, jestli čístlo není záporné. Tento algoritmus zpracovává pouze kladná čísla na vstupu
      iserror = true;
      return {iserror};
    }
    
    while (number > 0) { // samotný převod čísla do trojkové soustavy
      let remain = number % 3;
      result = remain + result;
      number = Math.floor(number / 3);
    }
    
    return {result};
  }
  
  // testovací hodnoty (přidal jsem i errorové)
  let dtoIn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "asdf", "-1234"];
  
  // test správnosti převodu pro každé číslo, které tam vstupuje
  for (let i = 0; i < dtoIn.length; i++) {
    let tenNumber = dtoIn[i];
    let {result, iserror} = tenToThree(tenNumber);
    if (iserror === true) {
      console.log("Error: neplatné číslo");
    } else {
      console.log("Desítkové číslo:", tenNumber, "Trojkové číslo:", result);
    }
  }
  