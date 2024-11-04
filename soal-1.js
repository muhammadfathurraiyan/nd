function shortCharacter(s) {
  // create object vowel and consonant to save the vowel and consonant
  const vowel = {};
  const consonant = {};

  // regex to test the character
  const reg = /[aiueo]/gi;

  // format the given string into a new string
  const newString = s.toLowerCase().replaceAll(" ", "");

  // looping through the newString
  for (let i = 0; i < newString.length; i++) {
    // check if the char mathc the regex
    if (reg.test(newString[i])) {
      if (vowel[newString[i]]) vowel[newString[i]].push(newString[i]); // check is the key char already exist in the object if yes then push the char
      else vowel[newString[i]] = [newString[i]]; // if not create new key and the value is array of the char
    } else {
      if (consonant[newString[i]]) consonant[newString[i]].push(newString[i]); // check is the key char already exist in the object if yes then push the char
      else consonant[newString[i]] = [newString[i]]; // if not create new key and the value is array of the char
    }
  }

  // create object result
  const result = {
    "Vowel Characters": Object.values(vowel)
      .map((c) => c.join(""))
      .join(""), // format the vowel object to string
    "Consonant Characters": Object.values(consonant)
      .map((c) => c.join(""))
      .join(""), // and also the consonant object to string
  };

  // return the result
  return result;
}

const tes = "Sample Case"
const tes2 = "Next Case"

console.log(shortCharacter(tes));
console.log(shortCharacter(tes2));
