// Grains and chessBoard problem ==========================================================================

// Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.
// There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant
// could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat.
// One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.
// There are 64 squares on a chessboard.
// Write code that shows:
// how many grains were on each square, and
// the total number of grains

const grainsInEachSquare = (num) => {
  return 2 ** (num - 1);
};

console.log(grainsInEachSquare(10));

// the total  of grains
const chessBoardOfGrains = () => {
  let chessBoard = [];
  for (i = 1; i < 64; i++) {
    chessBoard.push(2 ** (i - 1));
  }
  const totalGrains = chessBoard.reduce((a, b) => a + b, 0);
  return totalGrains;
};
console.log(chessBoardOfGrains());

// Hamming Distance=========================================================================================
// Calculate the Hamming Distance between two DNA strands.
// Your body is made up of cells that contain DNA. Those cells regularly wear out and need replacing,
// which they achieve by dividing into daughter cells.
// In fact, the average human body experiences about 10 quadrillion cell divisions in a lifetime!
// When cells divide, their DNA replicates too.
// Sometimes during this process mistakes happen and single pieces of DNA get encoded with the incorrect information.
// If we compare two strands of DNA and count the differences between them we can see how many mistakes occurred.
// This is known as the "Hamming Distance".
// We read DNA using the letters C,A,G and T. Two strands might look like this:
// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^
// They have 7 differences, and therefore the Hamming Distance is 7.
// The Hamming Distance is useful for lots of things in science, not just biology,
// so it's a nice phrase to be familiar with :)

const first = "GAGCCTACTAAGGG";
const second = "AGACTCATAAGGCA";
const arr1 = first.split("");
const arr2 = second.split("");
const dna = (arr1, arr2) => {
  let distance = 0;
  for (let i = 0; i < first.length; i++) {
    if (first.length !== second.length) {
      return false;
    }
    if (arr1[i] !== arr2[i]) {
      distance++;
    }
  }
  return distance;
};

console.log(dna(arr1, arr2));
// =========================================================================

// SPACE AGE==============================================================================================

// Given an age in seconds, calculate how old someone would be on:
//    - Mercury: orbital period 0.2408467 Earth years
//    - Venus: orbital period 0.61519726 Earth years
//    - Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
//    - Mars: orbital period 1.8808158 Earth years
//    - Jupiter: orbital period 11.862615 Earth years
//    - Saturn: orbital period 29.447498 Earth years
//    - Uranus: orbital period 84.016846 Earth years
//    - Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should
// be able to say that they're 31.69 Earth-years old.
const second = (ageInSecond) => {
  return ageInSecond / 60 / 60 / 24 / 365.25;
};
console.log(second(23839849289));

const plantes = {
  mercury: 0.24,
  venus: 0.61,
  mars: 1.88,
  jupiter: 11.86,
  saturn: 29.01,
  uranus: 84.01,
  neptune: 164.79,
};

const ageInOtherPlantes = (planet, second) => {
  return age(((second / plantes[planet]) * 31557660).toFixed(2));
};
let newArr = ageInOtherPlantes();
console.log(newArr);

// ==========================================================================================================

// RAINBOW DROPS================================================================================================
// Convert a number to a string, the contents of which depend on the number's factors.
// If the number has 3 as a factor, output 'Pling'.
// If the number has 5 as a factor, output 'Plang'.
// If the number has 7 as a factor, output 'Plong'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// In raindrop-speak, this would be a simple "Plong".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has four factors:  21,, 17, and 34.
// In raindrop-speak, this would be "34".

const numbera = (number) => {
  if (number % 3 == 0 && number % 5 !== 0) {
    return "Pling";
  } else if (number % 3 == 0 && number % 5 == 0) {
    return "PlingPlang";
  } else if (number % 5 == 0 && number % 3 !== 0) {
    return "Plang";
  } else if (number % 7 == 0) {
    return "Plong";
  } else number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0;
  return number;
};
console.log(numbera(65));
// ==========================================================================================================

// Reverse a string=========================================================
// For example: input: "cool" output: "looc"

const reverseString = (ibrahim) => {
  return ibrahim.split("").reverse().join("");
};

console.log(reverseString("my name is ibrahim"));

// ==========================================================================

// Triangles==============================================================================================

// I want to be able to make Triangles and define the length of each of their sides.
// I want to be able to check whether the triangle is equilateral, isosceles or scalene.
// Please write the code to allow me to do this.
// HINTS: - equilateral means 3 sides of the same length
//        - isosceles means 2 sides of the same length, and one different
//        - scalene means 3 sides of different length

// STEP 1: write the function. Input 3 numbers, Output a string
// STEP 2: make one Triangle
class Triangles {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  check() {
    if (this.a === this.b && this.b === this.c) {
      return "equilateral";
    } else if (this.a === this.b && this.b !== this.c) {
      return "isosceles";
    } else this.a !== this.b && this.b !== this.c;
    return "scalene";
  }
}
const triangel = new Triangles(10, 10, 10);
console.log(triangel.check());

// =========================================================================================================

// D&D Character =============================================================================================
// For a game of [Dungeons & Dragons][DND], each player starts
// by generating a character they can play with.
// This character has, among other things, six abilities;
// strength, dexterity, constitution, intelligence, wisdom and charisma.
// These six abilities have scores that are determined randomly.
// You do this by rolling four 6-sided dice and record the sum of the largest three dice.
// You do this six times, once for each ability.
// Your character's initial hitpoints are 10 + your character's constitution modifier.
// You find your character's constitution modifier by subtracting 10 from your character's constitution,
// divide by 2 and round down.
// Write a random character generator that follows the rules above.

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let dice3 = Math.floor(Math.random() * 6) + 1;
let dice4 = Math.floor(Math.random() * 6) + 1;

let allDice = [dice1, dice2, dice3, dice4];

let TheBiggestThree = allDice.sort().splice(1);
console.log(TheBiggestThree);

let total = TheBiggestThree.reduce((a, b) => a + b, 0);
console.log(total);

const constitutionModifier = (total) => {
  return Math.floor((total - 10) / 2);
};
let newParamater = constitutionModifier(total);
console.log(newParamater);

const HitPoint = (newParamater) => {
  return newParamater + 10;
};
console.log(HitPoint(newParamater));

// =======================================================================================================

// anagram-
// Tech-test
// How do you check if two strings are anagrams of each other?

const CheckIsAnagram = (word1, word2) => {
  const newWord1 = word1.split("").sort().join("").toLowerCase();
  const newWord2 = word2.split("").sort().join("").toLowerCase();
  return newWord1 === newWord2
    ? `${newWord1} and ${newWord2} are anagrams!`
    : `${newWord1} and ${newWord2} are not anagrams.`;
};
console.log(CheckIsAnagram("bobo", "obob"));

// ==========================================================================================================

// ROMAN NUMBERS
// Write a function to convert from normal numbers to Roman Numerals.

// The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years.
// They invented concrete and straight roads and even bikinis. One thing they never discovered
// though was the number zero. This made writing and dating extensive histories of their exploits
// slightly more challenging, but the system of numbers they came up with is still in use today.
// For example the BBC uses Roman numerals to date their programmes.

// The Romans wrote numbers using letters - I, V, X, L, C, D, M.
// (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

//  1  => I
// 10  => X
//  7  => VII
// There is no need to be able to convert numbers larger than about 3000.
// (The Romans themselves didn't tend to go any higher)

// Wikipedia says: Modern Roman numerals ... are written by expressing
// each digit separately starting with the left most digit and skipping
// any digit with a value of zero.

// To see this in practice, consider the example of 1990.

// In Roman numerals 1990 is MCMXC:

// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII

const romanNumberConverter = (num) => {
  let romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";

  Object.keys(romanNumbers).forEach((key) => {
    while (num >= romanNumbers[key]) {
      roman += key;
      num -= romanNumbers[key];
    }
  });
  return roman;
};
romanNumberConverter();

console.log(romanNumberConverter(2987));

// ======================================================================================================================

// HIGH SCORES
// Manage a game player's High Score list.

// Your task is to build a high-score component of the classic Frogger game,
// one of the highest selling and addictive games of all time, and a classic
// of the arcade era. Your task is to write methods that return the
// highest score from the list,
// the last added score and the three highest scores.

const scores = [3, 5, 1, 8, 78, 54, 23, 56, 7, 9, 23];

const lastOne = scores.pop();
console.log(lastOne);
const topOne = scores.sort((a, b) => b - a).splice(0, 1);
console.log(topOne);
const topThree = scores.sort((a, b) => b - a).splice(0, 3);
console.log(topThree);

// ====================================================================================================

// LONGEST WORD IN AN ARRAY

const longestWord = (ben) => {
  const wordArr = ben.toLowerCase().match(/[a-z0-9]+/g);

  const sortedWords = wordArr.sort((a, b) => b.length - a.length);
  const longestArr = sortedWords.filter(
    (word) => word.length === sortedWords[0].length
  );
  if (longestArr.length === 1) {
    return longestArr[0];
  } else {
    return longestArr;
  }
};

console.log(longestWord("ibrahiim kurhannnnn jdhdhddbdb"));

// ===========================================================================================================

// capitalize specific character

// first method

const cap = (str) => {
  const newS = str.toLowerCase().split(" ");

  for (let i = 0; i < newS.length; i++) {
    newS[i] = newS[i].substring(0, 1).toUpperCase() + newS[i].substring(1);
  }
  return newS.join(" ");
};
console.log(cap("ibrahim kurhan"));
// secondMethod

const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};
console.log(capitalize("ibrahim kurhan"));

// ======================================================================================================================

// 1.How do you find all pairs of an integer array whose sum is equal to a given number?

const intArray = [2, 11, 8, 3, 9, 4, 5, 10, 29, 30, 52];
const givenNumber = 13;
let result = [];

for (let i = 0; i < intArray.length; i++) {
  for (let j = 0; j < intArray.length; j++) {
    if (j != i && intArray[i] + intArray[j] == givenNumber) {
      result.push(intArray[i], intArray[j]);
    }
  }
}
const lastResult = result.filter(
  (item, index) => result.indexOf(item) == index
);
console.log(lastResult);

// ================================================================================================================================
// 2.How do you remove duplicates from an array in place?
const numbers = ["a", "c", "d", "s", "s", "w", "w", "a"];
const newNumbers = numbers.filter(
  (item, index) => numbers.indexOf(item) == index
);

console.log(newNumbers);

// ===========================================================================================================================

// AGE CONVERTER

// write a function to convert your age from years to days

const ageInDays = () => {
  let birthYear = prompt("when were you born...");
  let convertTheAge = (2020 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let answer = document.createTextNode(convertTheAge);
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(answer);
  document.getElementById("A").appendChild(h1);
};
ageInDays();

const reset = () => {
  document.getElementById("ageInDays").remove();
};

// ========================================================================================================================
// 3.How do you find all permutations of a string?
const factorial = (n) => {
  return n != 1 ? n * factorial(n - 1) : 1;
};
console.log(factorial(5));

// ==========================================================================================================================

// 4.How do you print the first non-repeated character from a string?

const words = "ibrahibm";
const last = words.split("");
const newWords = words
  .split("")
  .filter((item, index) => words.indexOf(item) !== index);
const final = [];
for (let i = 0; i < last.length; i++) {
  let match = false;
  for (let j = 0; j < newWords.length; j++) {
    if (last[i] == newWords[j]) {
      match = true;
      break;
    }
  }
  if (!match) {
    final.push(last[i]);
  }
}

console.log(final[0]);

// ==================================================================================================================================

//  5-How do you print duplicate characters from a string?

const dublicatePrinter = () => {
  const sentence = "print the diblicate words from the sentence";
  const senArr = sentence.split(" ");
  const filteredSenArr = senArr.filter(
    (item, index) => senArr.indexOf(item) !== index
  );
  return filteredSenArr;
};
console.log(dublicatePrinter());
// =======================================================================================================================

// 6.How do you check if two strings are a rotation of each other?

const checkRoation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let doubleTheString = str1.concat(str1);
  return doubleTheString.includes(str2) !== -1;
};

console.log(checkRoation("ibrahim", "birahim"));

// ==========================================================================================================================

// 7.How do you check if a string contains only digits?

const first = "buy";
const checker = () => {
  if ((first.length > 0) & (first.length < 2)) {
    return true;
  } else return false;
};
checker();

console.log(checker());

// =============================================================================================================================

// 8.How do you swap two numbers without using a third variable?

let a = 1;
let b = 2;

a = a + b;
// 1. a = 1+2 new value of a changed to 3
b = a - b;
// 2. b = 3-2 new value of b changed to 1
a = a - b;
// 3. a= 3-1 new value of a changed to 2

let a = 2;
let b = 1;
// ==========================================================================================

// 9.How do you find the missing numbers in a given integer array?
const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];
let number = [];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] - numbers[i - 1] != 1) {
    let x = numbers[i] - numbers[i - 1];
    let j = 1;
    while (j < x) {
      number.push(numbers[i - 1] + j);
      j++;
    }
  }
}
console.log(number);
// ===============================================================================================
// 10.How can a given string be reversed using recursion?

const reverseString = (str) => {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
};
console.log(reverseString("hello"));
// ======================================================================================================
// 11-How do you check if two strings are anagrams of each other?

const anagram = (word1, word2) => {
  const newWord1 = word1.split("").sort().join("").toLowerCase();

  const newWord2 = word2.split("").sort().join("").toLowerCase();

  if (newWord1 === newWord2) {
    return `${newWord1} and ${newWord2} are anagram`;
  } else {
    `${newWord1}and ${newWord2} arent anagram`;
  }
};

console.log(anagram("boob", "bobo"));
// ===========================================================================================
// 12.How do you reverse the words in a sentence?
const words = "ibragim kurhan ibrahim kurhan";
const tek = words.split(" ").reverse();
console.log(tek);
// ===================================================================================================
// 13.How do you find duplicate numbers in an array if it contains multiple duplicates?
const numbers = ["5", "5", "4", "3", "2", "6", "7", "7", "2"];
const newNumbers = numbers.filter(
  (item, index) => numbers.indexOf(item) !== index
);
console.log(newNumbers);

// =========================================================================================================

// 14.How do you find the duplicate number on a given integer array?

const numbers = ["5", "5", "4", "3", "2", "6", "7", "7", "2"];
const newNumbers = numbers.filter(
  (item, index) => numbers.indexOf(item) !== index
);
console.log(newNumbers);

// ======================================================================================================
// 15.How do you find the largest and smallest number in an unsorted integer array?
numbers = [2, 4, 9, 2, 0, 16, 24];

const smallest = Math.min(...numbers);
const largest = Math.max(...numbers);

console.log(smallest);
console.log(largest);
// ===========================================================================================================
// 13.find intersection

const findIntersection = (strArr) => {
  const new1 = strArr[0].split(",");
  const new2 = strArr[1].split(",");
  let matchArr = [];
  new1.forEach((element) => {
    if (new2.includes(element)) {
      matchArr.push(element);
    }
  });
  return matchArr;
};
console.log(findIntersection(["2,3,6", "5,6,7"]));

// =============================================================================
// 12.check numbers

const checkNumbers = (num1, num2) => {
  if (num1 > num2) {
    return true;
  } else if (num1 < num2) {
    return false;
  } else if (num1 == num2) {
    return -1;
  }
};
console.log(checkNumbers(21, 22));

// ====================================================================================
// 11.word count
const wordCount = (str) => {
  const newStr = str.split(" ").length;
  return newStr;
};
console.log(wordCount("ibrahim kurhan 38 22"));
// ==========================================================================================
// 9.time converter

const timeConverter = (num) => {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  // let time = hours + ":" + minutes;
  return `saat ${hours} : ${minutes}`;
};
// ==============================================================================
// Introduction
// Given a person's allergy score, determine whether or not they're allergic to a given item,
//  and their full list of allergies.

// An allergy test produces a single numeric score which contains the information about all the allergies
// the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

// Now, given just that score of 34, your program should be able to say:

// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.
// Note: a given score may include allergens not listed above (i.e. allergens that score 256, 512, 1024, etc.).
// Your program should ignore those components of the score. For example, if the allergy score is 257, your program
//  should only report the eggs (1) allergy.
const alerigi = (num) => {
  const alergiesObject = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };
  const newOne = Object.keys(alergiesObject);
  for (let i = 0; i < newOne.length; i++) {
    if (num == newOne[i]) {
      console.log(Object.entries(newOne[i]));
    }
  }
};
console.log(alerigi(32));
// ===========================================================================================
// D&D Character =============================================================================================
// For a game of [Dungeons & Dragons][DND], each player starts
// by generating a character they can play with.
// This character has, among other things, six abilities;
// strength, dexterity, constitution, intelligence, wisdom and charisma.
// These six abilities have scores that are determined randomly.
// You do this by rolling four 6-sided dice and record the sum of the largest three dice.
// You do this six times, once for each ability.
// Your character's initial hitpoints are 10 + your character's constitution modifier.
// You find your character's constitution modifier by subtracting 10 from your character's constitution,
// divide by 2 and round down.
// Write a random character generator that follows the rules above.

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let dice3 = Math.floor(Math.random() * 6) + 1;
let dice4 = Math.floor(Math.random() * 6) + 1;

let allDice = [dice1, dice2, dice3, dice4];

let TheBiggestThree = allDice.sort().splice(1);
console.log(TheBiggestThree);

let total = TheBiggestThree.reduce((a, b) => a + b, 0);
console.log(total);

const constitutionModifier = (total) => {
  return Math.floor((total - 10) / 2);
};
let newParamater = constitutionModifier(total);
console.log(newParamater);

const HitPoint = (newParamater) => {
  return newParamater + 10;
};
console.log(HitPoint(newParamater));

// =======================================================================================================
const type = document.getElementsByClassName("typeinput");

const letters = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  " ": " ",
};
const convert = (letter) =>
  Object.values(letters).find((value) => value === letters[letter]);

const mapToMorseCode = () => {
  const userInput = type[0].value.toLowerCase();
  const letterArray = userInput.split("");
  const convertedLetterArray = letterArray.map(convert);
  const resulted = convertedLetterArray.join("");
  document.getElementById("result").innerHTML = resulted;
};
document.getElementById("convert").addEventListener("click", mapToMorseCode);
// ======================================================================================
// RAINBOW DROPS================================================================================================
// Convert a number to a string, the contents of which depend on the number's factors.
// If the number has 3 as a factor, output 'Pling'.
// If the number has 5 as a factor, output 'Plang'.
// If the number has 7 as a factor, output 'Plong'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// In raindrop-speak, this would be a simple "Plong".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has four factors:  21,, 17, and 34.
// In raindrop-speak, this would be "34".

const numbera = (number) => {
  if (number % 3 == 0 && number % 5 !== 0) {
    return "Pling";
  } else if (number % 3 == 0 && number % 5 == 0) {
    return "PlingPlang";
  } else if (number % 5 == 0 && number % 3 !== 0) {
    return "Plang";
  } else if (number % 7 == 0) {
    return "Plong";
  } else number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0;
  return number;
};
console.log(numbera(65));
// ==========================================================================================================
// RAINBOW DROPS================================================================================================
// Convert a number to a string, the contents of which depend on the number's factors.
// If the number has 3 as a factor, output 'Pling'.
// If the number has 5 as a factor, output 'Plang'.
// If the number has 7 as a factor, output 'Plong'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// In raindrop-speak, this would be a simple "Plong".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has four factors:  21,, 17, and 34.
// In raindrop-speak, this would be "34".

const numbera = (number) => {
  if (number % 3 == 0 && number % 5 !== 0) {
    return "Pling";
  } else if (number % 3 == 0 && number % 5 == 0) {
    return "PlingPlang";
  } else if (number % 5 == 0 && number % 3 !== 0) {
    return "Plang";
  } else if (number % 7 == 0) {
    return "Plong";
  } else number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0;
  return number;
};
console.log(numbera(65));
// ==========================================================================================================
// 7.How do you check if a string contains only digits?

const first = "buy";
const checker = () => {
  if ((first.length > 0) & (first.length < 2)) {
    return true;
  } else return false;
};
checker();

console.log(checker());

// Reverse every other word in the string

const reverse = (str) => {
  const newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    if (i % 2 != 0) {
      newStr[i] = newStr[i].split("").reverse().join("");
    }
  }
  return newStr.join(" ");
};

console.log(reverse("ibrahim kurhan baba kadir aba"));
//  ===========================================
//rot13
const rot13 = (message) => {
  const alph = "abcdefghijklmnopqrstuvwxyz".split("");
  const splitedMessage = message.split("");
  for (i = 0; i < splitedMessage.length; i++) {
    let m = alph.indexOf(splitedMessage[i].toLowerCase());
    if (m >= 0) {
      if (m + 13 > 25) {
        m = m - 26;
      }
      if (splitedMessage[i] === splitedMessage[i].toUpperCase()) {
        splitedMessage[i] = alph[m + 13].toUpperCase();
      } else {
        splitedMessage[i] = alph[m + 13];
      }
    }
  }
  return splitedMessage.join("");
};
// ================================================
// RGB To Hex Conversion
const rgbToHex = (r, g, b) => {
  const deximall = (x) => {
    if (x < 0) {
      return "00";
    } else if (x > 255) {
      return "FF";
    } else {
      return x.toString(16).padStart(2, 0).toUpperCase();
    }
  };

  return "#" + deximall(r) + deximall(g) + deximall(b);
};

console.log(rgbToHex(12, 221, 32));

// Hex To RGB   Conversion

const hexToRgb = (x) => {
  const a = x.slice(0, 2);
  const b = x.slice(2, 4);
  const c = x.slice(4);
  return (
    "RBG(" +
    parseInt(a, 16) +
    "," +
    parseInt(b, 16) +
    "," +
    parseInt(c, 16) +
    ")"
  );
};
console.log(hexToRgb("342211"));
// ================================================
// Human Readable Time
const humanReadable = (number) => {
  const hours = Math.floor(number / 3600);
  const minutes = Math.floor((number % 3600) / 60);
  const seconds = number % 60;

  return `time ${padd(hours)} : ${padd(minutes)} : ${padd(seconds)}`;
};

const padd = (number) => {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};

console.log(humanReadable(12345));

// =============================================================================
const zerosMoves = (arr) => {
  const zeros = arr.filter((item) => item === 0);
  const notZeros = arr.filter((item) => item !== 0);

  return notZeros.concat(zeros);
};

console.log(zerosMoves(["a", 0, 0, 3, false, 2]));

const zerosMoves = (arr) => {
  const zeros = [];
  const notZeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else if (arr[i] !== 0) {
      notZeros.push(arr[i]);
    }
  }
  return notZeros.concat(zeros);
};

console.log(zerosMoves(["a", 0, 0, 3, false, 2]));
// =========================================================================================
