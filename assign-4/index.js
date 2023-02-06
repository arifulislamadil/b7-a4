// First Problem 
// This function about simple math calculation with validation 
function mindGame(a) {
    if (isNaN(a) || a < 0) {
        return "please input a valid number"
    }
    const multiThree = a * 3;
    const addTeen = multiThree + 10;
    const dividedTwo = addTeen / 2;
    const minusFive = dividedTwo - 5;
    return minusFive;
}
const a = 5;
console.log(mindGame(a))
// output : 7.5 


//Second Problem 
/* Take a string as a input and how many string included in this string count that
if string number is even return "even" 
if string number is odd return "odd" */
function evenOdd(text) {
    if (typeof text !== "string") {
        return "input a string not number"
    }
    const totalLength = text.length;
    if (totalLength % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}
const text = "Bangladesh";
console.log(evenOdd(text))
// output : even

// Third Problem
/*  input a number and minus 7 from that input number 
 if total number less then 7 then return that number
 otherwise make double input number and return that */
function isLGSeven(num) {
    if (isNaN(num) || num < 0) {
        return "please input a valid number"
    }
    const minusSeven = num - 7;
    if (minusSeven < 7) {
        return minusSeven;
    } else if (minusSeven >= 7) {
        return num * 2;
    }
}
const num = 15;
console.log(isLGSeven(num))
//output: 30

// Fourth Problem
/* finding bad data from a array and how many bad data found just
return how many bad data you found */
function findingBadData(ageNumber) {
    if (typeof ageNumber == "number" || typeof ageNumber == "string") {
        return "please input age numbers not single number or string"
    }
    const badData = [];
    for (let i = 0; i < ageNumber.length; i++) {
        if (ageNumber[i] < 0) {
            badData.push(ageNumber[i])
        }
    }
    return badData.length;
}
const ageNumber = [10, 20, -30, -40, 50, 60, -70, -80];
console.log(findingBadData(ageNumber))
//output : 4
negative 

//Fifth Problem 
/* Take three input numbers from friends and multiple 1st friend with 21 
2nd friend with 32 and third friend 43 and then addition total result 
if total gems more then 2000 then minus 2000 from that after that return that
if les then 2000 then return total gems  */
function gemsToDiamond(friendOne, friendTwo, friendThree) {
    if ((isNaN(friendOne) || isNaN(friendTwo) || isNaN(friendThree))) {
        return "input a valid number"
    }
    const firstFriend = friendOne * 21;
    const secondFriend = friendTwo * 32;
    const thirdFriend = friendThree * 43;
    let totalGamsOfFriend = firstFriend + secondFriend + thirdFriend;
    if (totalGamsOfFriend >= 1000 * 2) {
        const total = totalGamsOfFriend - 2000;
        return total
    } else {
        return totalGamsOfFriend;
    }
}
const friendOneGems = 10;
const friendTwoGems = 20;
const friendThreeGems = 30;

console.log(gemsToDiamond(friendOneGems, friendTwoGems, friendThreeGems))
//output: 140