function desitkovaNaTrojkovou(cislo) {
    let vysledek = "";
    let iserror = false;
    
    if (cislo === "") { // ověřuje, jestli vstup není prázdná hodnota
      iserror = true;
      return {vysledek, iserror};
    }
    
    if (isNaN(cislo)) { // ověří, zda je číslo neplatné (obsahuje nepovolené znaky)
      iserror = true;
      return {vysledek, iserror};
    }
    
    cislo = Number(cislo); // převede řetězec na číslo
    
    if (cislo < 0) { // ověření, jestli čístlo není záporné. Tento algoritmus zpracovává pouze kladná čísla na vstupu
      iserror = true;
      return {vysledek, iserror};
    }
    
    while (cislo > 0) { // převod čísla
      let zbytek = cislo % 3;
      vysledek = zbytek + vysledek;
      cislo = Math.floor(cislo / 3);
    }
    
    return {vysledek, iserror};
  }
  
  // testovací hodnoty (přidal jsem i errorové)
  let dtoIn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "abc", "-123"];
  
  // test správnosti převodu pro každé číslo, které tam vstupuje
  for (let i = 0; i < dtoIn.length; i++) {
    let desitkoveCislo = dtoIn[i];
    let {vysledek, iserror} = desitkovaNaTrojkovou(desitkoveCislo);
    if (iserror === true) {
      console.log("Error: neplatné číslo");
    } else {
      console.log("Desítkové číslo:", desitkoveCislo, "Trojkové číslo:", vysledek);
    }
  }
  