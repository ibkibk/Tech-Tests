// Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.
// There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant 
// could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. 
// One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.
// There are 64 squares on a chessboard.
// Write code that shows:
// how many grains were on each square, and
// the total number of grains




class Chessboard {
    constructor(squares) {
        this.squares = squares;
        this.grainsObj = this.buildGrainsObject();
    }

    selectedSquare(squareNumber) {
        return `On square ${squareNumber} you have ${this.grainsObj[squareNumber]} grains.`;
    }

    totalGrains() {
        // Object.values(this.grainsObj).reduce((t, n) => t + n);
        Object.keys(this.grainsObj).map(key => this.grainsObj[key]).reduce((previous, current) => previous + current);
    }

    buildGrainsObject() {
        let grainsObj = {};
        for (let i = 1; i <= this.squares; i++) {
            grainsObj[i] = Math.pow(2, i - 1);
        }
        return grainsObj;
    }
}

const squares = new Chessboard(64);
// console.log(squares.selectedSquare(5));
// console.log(squares.buildGrainsObject());
console.log(squares.totalGrains());


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
}
console.log(second(23839849289));

const plantes = {
    mercury: 0.24,
    venus: 0.61,
    mars: 1.88,
    jupiter: 11.86,
    saturn: 29.01,
    uranus: 84.01,
    neptune: 164.79
}

const ageInOtherPlantes = (planets) => {
    return
}

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
        return 'Pling';
    } else if (number % 3 == 0 && number % 5 == 0) {
        return 'PlingPlang';
    } else if (number % 5 == 0 && number % 3 !== 0) {
        return 'Plang';
    } else if (number % 7 == 0) {
        return 'Plong';
    } else (number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0)
        return number;
}
console.log(numbera(65));
// ==========================================================================================================

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


let TheBiggestThree = allDice.filter(num => num != Math.min(...allDice));
console.log(TheBiggestThree);

let total = TheBiggestThree.reduce((a, b) => a + b, 0);
console.log(total);

const constitutionModifier = (total) => {
    return Math.floor((total - 10) / 2);
}
let newParamater = constitutionModifier(total);
console.log(newParamater);

const HitPoint = (newParamater) => {
    return newParamater + 10;
}
console.log(HitPoint(newParamater));


// =======================================================================================================




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
        } else (this.a !== this.b && this.b !== this.c)
        return "scalene";
    }
}
const triangel = new Triangles(10, 10, 10);
console.log(triangel.check());


// ================================================================================================================