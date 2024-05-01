// write functions to solve following problems.

//  a)   Return the length of a given string.
/*
const str = "JavaScript";
function strLength(){
    return str.length;
}
console.log(strLength())
*/


//  b)   Concatenate two strings together.
/*
const str1 = "Java";
const str2 = "Script";
function ConcatStr() {
    return str1 + str2;
}
ConcatStr()
*/



//  c)   Determine if a given string is empty.
/*
const strGiven = " ";
function chekEmptyStr() {
    if (strGiven === " {
       console.log("Empty");
    }
    else {
        console.log("Non Empty");
    }
}
chekEmptyStr();
*/


//  d)   Count the number of vowels in a string.
/*
const str = "Education".toLowerCase();
let countt = 0;
function countVowels() {
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === a || str[i] === e || str[i] === i || str[i] === o || str[i] === u) {
            countt++;
        }
    }
     console.log(countt);
}
countVowels();
*/



//  e)   Reverse a given string.
/*
const strGiven = "JavaScript";
function reverseStr() {
    let revStr = "";
    for (let i = strGiven.length - 1; i >= 0; i--) {
        revStr += strGiven[i];
    }
    console.log(revStr);
}
reverseStr()
*/


//  f)   Check if a string is a palindrome.
/*
const givenString = "civic";
function palidromeChek() {
    let palidrome = "";
    for (let i = givenString.length - 1; i >= 0; i--) {
        palidrome += givenString[i];
    }
    if (palidrome === ienString) {
        console.log("The string is palidrome")
    }
    else {
        console.log("The string is not palidrome")
    }
}
palidromeChek()
*/


//  g)   Convert a string to uppercase.
/*
function upperCase(str) {
    let upperCasedStr = str.toUpperCase();
    return upperCasedStr;
}
const strGiven = "HEllo World This is best assignment";
console.log(upperCase(strGiven));
*/





//  h)   Find the first occurrence of a given character in a string.
/*
function chekOccurrence(str,char) {
    return str.indexOf(char);
}
const String = "HEllo World This is best assignment";
const targetChar = "e";
console.log(chekOccurrence(String,targetChar));
*/



//  i)   Replace all occurrences of a given character in a string with another character.
/*
function chekOccurrence(str,oldChar,newChar) {
    return str.replaceAll(oldChar, newChar);
}
const String = "HEllo World This is best assignment";
const oldChar = "a";
const newChar = "W";
console.log(chekOccurrence(String,oldChar,newChar));
*/





//  j)   Trim leading and trailing whitespace from a string.
/*
function removingSpace(Remove) {
    return Remove.trim();
}
const str = "     Hello My name:    ";
console.log(removingSpace(str));
*/



//  k)   Count the number of words in a string.
/*
function wordCount(strGiven) {
    let count = 1;
    for (let i = 0; i < strGiven.length; i++) {
        if (strGiven[i] === " " ) {
            count++;
        }
    }
    return count;
}
const str = "HEllo World This is best assignment.";
console.log(wordCount(str));
*/




//  l)   Check if a string contains only numeric characters.
/*
function chekStrONlyNumeric(strGiven) {
    let strInt = parseInt(strGiven);
    if (strInt == strGiven) {
        return "This string only contain numbers";
    }
    else {
        return NaN;
    }  
}
let string = "333889939";
console.log(chekStrONlyNumeric(string));
let strContainStr = "333889939 gel";
console.log(chekStrONlyNumeric(strContainStr));
*/



//  m)   Check if a string is a valid email address.
/*
function chekValidEmail(email) {
    const validEmail = email.slice(email.indexOf("@"), email.lastIndexOf("m") +1 )
    if (validEmail == "@gmail.com") {
        return email + " is a valid email address";
    }
    else {
        return false;
    }
}
const emailGiven = "JavaScript@gmail.com";
console.log(chekValidEmail(emailGiven));
*/




//  n)   Extract the domain name from a URL string.

/*
function extractDomainName(domain) {
    const domainName = domain.slice(domain.indexOf(".") + 1, domain.lastIndexOf("."))
    return domainName ;
}
const domainGiven = "https://www.amazon.com";
console.log(extractDomainName(domainGiven));
const domainGivenTwo = "https://www.w3schools.com";
console.log(extractDomainName(domainGivenTwo));
*/




//  o)   Convert a string into title case (the first letter of each word capitalized).
/*
function titleCase(strGiven) {
    strGiven = strGiven.trim();
    
    let reqStr = "";
    let capitalizeNext = true; 
  
    for (let i = 0; i < strGiven.length; i++) {
      if (strGiven[i] === " ") {
        reqStr += " "; 
        capitalizeNext = true; 
      } else {
        if (capitalizeNext) {
          reqStr += strGiven[i].toUpperCase(); 
          capitalizeNext = false;
        } else {
          reqStr += strGiven[i].toLowerCase(); 
        }
      }
    }
    return reqStr;
  }
  
  const str = "HEllo World This is best assignment.";
  console.log(titleCase(str)); // Output: "HEllo World This is best assignment."
  */





//  p)   Remove all non-alphabetic characters from a string.
/*
function removeNonAlphabetic(str) {
    return str.replace(/[^a-z A-Z]/g, ''); // Removes all non-alphabetic characters
  }
  
  const example = "Hello, 498684  World! 123";
  const cleanedString = removeNonAlphabetic(example);
  
  console.log(cleanedString);
  */


//  q)   Check if a string is a valid palindrome permutation (ignoring spaces).
//  r)   Check if a string is an anagram of another string.
//  s)   Find the longest word in a string.
//  t)   Perform string compression by replacing repeated characters with the character followed by the count.
