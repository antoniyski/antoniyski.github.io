/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Phone from "./Phone.js";

const blackSamsung = new Phone("Samsung", "black");
const redSamsung = new Phone("Samsung", "red");
const whiteApple = new Phone("Apple", "white")

console.log(blackSamsung);

blackSamsung.setPhoneCOlor("green");

console.log(blackSamsung);