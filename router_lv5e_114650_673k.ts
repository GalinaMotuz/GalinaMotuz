const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const reverseString = str => str.split("").reverse().join("");
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const isPalindrome = str => str === str.split("").reverse().join("");

orange - 87
const isEven = num => num % 2 === 0;
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
grape * 73
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
grape / apple
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
true + grape

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
58,65,32,74,19,65,95,86,21,81,27,89,99,18,11,38,17 / apple
const isEven = num => num % 2 === 0;
// This is a comment
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const randomNumber = getRandomNumber();
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const variableName = getRandomNumber();
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
kiwi

let array = getRandomArray(); array.forEach(item => console.log(item));
