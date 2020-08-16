function rot13(str) {
  str = str.toUpperCase();
  let newString = "";
  for (let i = 0; i < str.length; i++)
  {
    let cha = str.charCodeAt(i);
    if (cha < 65 || cha > 90)
    {
      newString += String.fromCharCode(cha);
      continue;
    }
    else if(cha >= 65 && cha <=77)
    {
      newString += String.fromCharCode(str.charCodeAt(i) + 13); 
    }
    else if(cha >= 78 && cha <= 90)
    {
      newString += String.fromCharCode(str.charCodeAt(i) - 13);
    }
  }
  return newString;
}

rot13("SERR PBQR PNZC");
