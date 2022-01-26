var num1 = 10;
var num2 = 20;

// =========solution for 1========


if (num1 > num2) {
    console.log("10 is bigger than 20");
} else {
    console.log("10 is smaller than 20");
}

// ================ solution for number 2 question ===========

if (num1 % num2 === 0) {
    console.log("I am an even number");
} else {
    console.log("I am an odd number");
}

// ================ solution for number 3 question ===========

if (num1 % 10 === 0) {
    console.log(" I am divisible by 10");

} else {
    console.log("I am not divisible by 10");
}

// ================ solution for number 4 question ==============


console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);


// ============ solution for number 5 question ============

var year = 2003;

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log("This year is a leap year")
} else {
    console.log("This is not a leap year")
}


//  ========== End Assignment =======

// check the vowels in a sentence . 
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
let sentence = "i love bangladesh"

let Array = sentence.split('')
console.log(Array)

let count = 0;
for (let i = 0; i < Array.length; i++) {
    if (vowels.includes(Array[i])) {
        count++;
    }
}
console.log(count)



// return duplicate number from an array 
const numbers = [1, 3, 4, 5, 6, 5, 7, 8, 2, 23, 4, 5, ]


const duplicates = numbers.filter((value, index, array) => {
    return array.indexOf(value) !== index;
})
console.log(duplicates);

// return unique numbers from an array 

const uniqueNumbers = numbers.filter((value, index, array) => {
    return array.indexOf(value) === index;
})
console.log(uniqueNumbers)


// search the word in sentence 

// we can search it by string.search() method or by regular expression method
let declaration =
    "This is problem solving part2. we are now being easier with our Javascript. If you solve more problem then yoy will feel more comfortable with this . In the next session we will try out more problem so that we can solve the problem more easily"

let matchedItem = declaration.match(/problem/g)
console.log(" New Q")
console.log(matchedItem)
let position = declaration.search(/problem/i)
// using turnery operator 
position = position >= 0 ? position : "not found"
console.log(position)


console.log("New Q");

// write a function will take an array and target
// if target matched with arrray then print the target index.
let option = [1, 3, 4, 5, 6, 67]

function linearsearch(array, target) {
    const length = option.length;
    for (let i = 0; i < length; i++) {
        if (array[i] === target) {
            console.log(array[i])
        }
    }
}
linearsearch(option, 6)
console.log("New Q")

// write a function to check the largest value in an array .
names = ["hasim", "rahim", "titlika", "choncolaa"]
let bigElement = '';

function largestStr() {
    for (let name of names) {
        if (bigElement.length < name.length) {
            bigElement = name;
        }
    }
    return [bigElement, names.indexOf(bigElement)]
}
console.log(largestStr(names))

console.log("New Q")



// write a function that will check the number divided by three and five within 1-100 

function checker() {
    for (let i = 0; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log(i + " Divided BY 3 and 5")
        } else if (i % 3 === 0) {
            console.log(i + " Divided BY 3 ")

        } else if (i % 5 === 0) {
            console.log(i + " Divided BY 5 ")
        } else {
            console.log(i)
        }
    }
}
checker()


console.log("New Q")

// write a function that will check the value of undefined and  remove it form the array ;

const mixedArray = [
    "lws",
    "learn with arshat ",
    false,
    true,
    undefined,
    "apple",
    NaN

]

const trueArray = mixedArray.filter((el) => {
    if (el) {
        return true;
    }
    return false;

})
console.log(trueArray)

// another method ;
const rightArray = mixedArray.filter(Boolean)
console.log(rightArray)


const obj = {
    a: "lws",
    b: "learn with arshat ",
    c: false,
    d: true,
    e: undefined,
    f: "apple",
    j: NaN


}


for (let key in obj) {
    if (!obj[key]) {
        delete obj[key]
    }
}
console.log(obj)


// check whether a string a palindrom or not;

function palindromCheker(str) {

    let newStr = str.split("")
    newStr.reverse()
    let mystr = newStr.join("")
    if ((mystr[0] || mystr.length - 1) == (str[0] || str.length - 1)) {
        return true;
    }
    return false;

}
console.log(palindromCheker("rishat"));

// Q.1. Write a JavaScript Function to calculate the multiplication and division of two numbers .

// =========== solution 01 ========

function isMultiply(num1, num2) {
    return `${ num1 * num2} is the result of multiplication 
    and ${num1 / num2} is the result of division `
}
console.log(isMultiply(2, 3));
// ==================== finish ===================


// Q.02.Write a JavaScript program to convert temperatures from Celsius to Fahrenheit or Vice Versa (Fahrenheit to Celsius).

// ============== solution ============

var celcious = 22;
var fahrenhite = 32;

function tempInDegreeCelcious() {
    var celciousValue = (((fahrenhite - 32) / 9) * 5) + " degree celcious";
    var fahrenhiteValue = ((celcious / 5) * 9) + 32 + " degree fahrenhite";
    if (fahrenhite == undefined) {
        console.log(fahrenhiteValue)
    }
    if (celcious == undefined) {
        console.log(celciousValue);
    }
    if ((fahrenhite != undefined) && (celcious != undefined)) {
        console.log(celciousValue)
        console.log(fahrenhiteValue)
    }


}
tempInDegreeCelcious();
// =========================== finish =======================



// Q.3Write a JavaScript function to check from two given integers, whether one is positive and another one is negative.

// ================= solution ==================



function numberChecker(num1, num2) {
    if ((num1 < 0) || (num2 < 0)) {
        return true;
    } else {
        return false;
    }

}
console.log(numberChecker(2, 3));
// ==================== finish =================

// Q.4 Write a JavaScript function to check whether the number is positive or negative.

// ==================== solution ==============

function valueCheker(number) {
    if (number < 0) {
        return `${number} is negative`;
    } else {
        return `${number} is positive`;
    }
}
console.log(valueCheker(5))

// ==================== finish =================

// Q.5 Write a JavaScript program to remove a character at the specified position of a given string and return a new string

// =========== solution ===========

function removelastCharacter(String) {
    newStr = String.substr(5)
    return newStr;
}
console.log(removelastCharacter("tuhin is a good boy"));



// === === === = finish === === =


// Q.6 Write a JavaScript function to reverse a given string
// ========= solution ============



function reverseStr(string) {
    const myArray = string.split("");
    const newArray = myArray.reverse();
    const newStr = newArray.join("")
    return newStr;

}
console.log(reverseStr("hello"))