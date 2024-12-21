/*
Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. 

Consonants are any letters of the alphabet except "aeiou".
We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c".
"zodiac" -> 26
The consonant substrings are: "z", "d" and "c" with values "z" = 26, "di" = 4 
and "c" = 3. The highest is 26.

"strength" -> 57
The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 
and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/


// Solution

function solve(s) {
  let highest = 0
  let sum = 0
  
  for (const char of s) {
    if (isConsonant(char)) {
      sum += getValue(char)
      
      if (highest < sum) {
          highest = sum
      }
    } else {
      sum = 0
    }
  }  
  
  return highest
};

function getValue(char) {
  return char.charCodeAt(0) - 97 + 1
}

function isConsonant(char) {
  return !'aeiou'.includes(char)
}

// or

function solve(s) {
  let alph = ' abcdefghijklmnopqrstuvwxyz';
        let x = s.split(/[aeiou]/g);
        let res = x.map(el => el.split('').reduce((a,b)=>a+alph.indexOf(b),0))
        return Math.max(...res);
}