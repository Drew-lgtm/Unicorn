function desitkovaNaTrojkovou(cislo) {
    let result = "";
    let iserror = false;
    
    if (cislo === "") { // ověřuje, jestli vstup není prázdná hodnota
      iserror = true;
      return {result, iserror};
    }
    
    if (isNaN(cislo)) { // ověří zda je vstup číslo
      iserror = true;
      return {result, iserror};
    }
    
    cislo = Number(cislo); // převede řetězec na číslo
    
    if (cislo < 0) { // kontrola, jestli čístlo není záporné. Tento algoritmus zpracovává pouze kladná čísla na vstupu
      iserror = true;
      return {result, iserror};
    }
    
    while (cislo > 0) { // převod čísla
      let zbytek = cislo % 3;
      result = zbytek + result;
      cislo = Math.floor(cislo / 3);
    }
    
    return {result, iserror};
  }
  
  // testovací hodnoty (přidal jsem i errorové)
  let dtoIn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "asdf", "-1234"];
  
  // test správnosti převodu pro každé číslo, které tam vstupuje
  for (let i = 0; i < dtoIn.length; i++) {
    let desitkoveCislo = dtoIn[i];
    let {result, iserror} = desitkovaNaTrojkovou(desitkoveCislo);
    if (iserror === true) {
      console.log("Error: neplatné číslo");
    } else {
      console.log("Desítkové číslo:", desitkoveCislo, "Trojkové číslo:", result);
    }
  }
  