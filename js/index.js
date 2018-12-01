function rot13(str) { // LBH QVQ VG!
  let strArr = str.split("");
  console.log(strArr)

  for (let i = 0; i < strArr.length; i++){
    if (strArr[i] === "A"){
      strArr[i] = "N"
    }else if (strArr[i] === "B"){
      strArr[i] = "O"
    }else if (strArr[i] === "C"){
      strArr[i] = "P"
    }else if (strArr[i] === "D"){
      strArr[i] = "Q"
    }else if (strArr[i] === "E"){
      strArr[i] = "R"
    }else if (strArr[i] === "F"){
      strArr[i] = "S"
    }else if (strArr[i] === "G"){
      strArr[i] = "T"
    }else if (strArr[i] === "H"){
      strArr[i] = "U"
    }else if (strArr[i] === "I"){
      strArr[i] = "V"
    }else if (strArr[i] === "J"){
      strArr[i] = "W"
    }else if (strArr[i] === "K"){
      strArr[i] = "X"
    }else if (strArr[i] === "L"){
      strArr[i] = "Y"
    }else if (strArr[i] === "M"){
      strArr[i] = "Z"
    }else if (strArr[i] === "N"){
      strArr[i] = "A"
    }else if (strArr[i] === "O"){
      strArr[i] = "B"
    }else if (strArr[i] === "P"){
      strArr[i] = "C"
    }else if (strArr[i] === "Q"){
      strArr[i] = "D"
    }else if (strArr[i] === "R"){
      strArr[i] = "E"
    }else if (strArr[i] === "S"){
      strArr[i] = "F"
    }else if (strArr[i] === "T"){
      strArr[i] = "G"
    }else if (strArr[i] === "U"){
      strArr[i] = "H"
    }else if (strArr[i] === "V"){
      strArr[i] = "I"
    }else if (strArr[i] === "W"){
      strArr[i] = "J"
    }else if (strArr[i] === "X"){
      strArr[i] = "K"
    }else if (strArr[i] === "Y"){
      strArr[i] = "L"
    }else if (strArr[i] === "Z"){
      strArr[i] = "M"
    }
  }
  console.log(strArr.join(""))
  return strArr.join("");
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");


/*
Use:
ABCDEFGHIJKLM
NOPQRSTUVWXYZ
*/
