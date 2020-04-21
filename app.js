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
