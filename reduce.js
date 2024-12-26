// sumOf([1, 2, 3, 4]) => 10
const sum = (num1, num2) => num1 + num2;

const sumOf = (numbers) => numbers.reduce(sum);

console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const product = (num1, num2) => num1 * num2;

const productOf = (numbers) => numbers.reduce(product);

console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = (numbers) => sumOf(numbers) / numbers.length;

console.log(averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const min = (num1, num2) => Math.min(num1, num2);

const minOf = (numbers) => numbers.reduce(min);

console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const max = (num1, num2) => Math.max(num1, num2);

const maxOf = (numbers) => numbers.reduce(max);

console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isPositive = (number) => number > 0;

const sumPositiveNumbers = (numbers) => numbers.filter(isPositive).reduce(sum);

console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const square = (number) => number * number;

const sumOfSquares = (numbers) => numbers.map(square).reduce(sum);

console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = (number) => (number & 1) === 1;

const sumOfOddNumbers = (numbers) => numbers.filter(isOdd).reduce(sum);

console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegative = (count, number) =>
  isPositive(number) ? count : (count += 1);

const countNegativeNumbers = (numbers) => numbers.reduce(countNegative, 0);

console.log(countNegativeNumbers([1, -2, 3, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const isEven = (number) => number % 2 === 0;

const findSumOfEvenSquares = (numbers) =>
  numbers.filter(isEven).map(square).reduce(sum);

console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concat = (e1, e2) => e1.concat(e2);

const concatenateWords = (words) => words.reduce(concat);

console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longerWord = (word1, word2) =>
  word1.length >= word2.length ? word1 : word2;

const longestWord = (words) => words.reduce(longerWord);

console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shorterWord = (word1, word2) =>
  word1.length <= word2.length ? word1 : word2;

const shortestWord = (words) => words.reduce(shorterWord);

console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinComma = (init, word) => init + "," + word;

const joinWithComma = ([firstWord, ...rest]) =>
  firstWord + rest.reduce(joinComma, "");

console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const reverse = (reversedText, text) => {
  reversedText.unshift(text);

  return reversedText;
};

const reverseWords = (words) => words.reduce(reverse, []).join(" ");

console.log(reverseWords(["hello", "world"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinSpaces = (init, word) => init + " " + word;

const joinWordsWithSpace = ([firstWord, ...rest]) =>
  firstWord + rest.reduce(joinSpaces, "");

console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = (names) => names.reduce(concat, "");

console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const isVowel = (char) => {
  const vowels = "aeiouAEIOU";
  return vowels.includes(char);
};

const getAllVowels = (init, word) => init + [...word].filter(isVowel).join("");

const countVowelsInWords = (words) => words.reduce(getAllVowels, "");

console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const getCamelCase = (init, [firstChar, ...restChars]) =>
  init + firstChar.toUpperCase() + restChars.join("");

const makeCamelCase = ([firstWord, ...rest]) =>
  firstWord + rest.reduce(getCamelCase, "");

console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = (words) =>
  words.map((word) => [...word].reduce(reverse, []).join("")).join("");

console.log(reverseString(["apple", "banana", "cherry"]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicate = (init, element) => {
  init.push(element, element);

  return init;
};

const duplicateNumbers = (numbers) => numbers.reduce(duplicate, []);

console.log(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = (arrays) => arrays.reduce(concat, []);

console.log(
  concatenateArrays([
    [1, 2],
    [3, 4],
  ])
);

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = (arrays) => arrays.reduce(concat, []);

console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const getUniqueNums = (init, number) => {
  if (init.includes(number)) {
    return init;
  }

  init.push(number);
  return init;
};

const uniqueNumbers = (numbers) => numbers.reduce(getUniqueNums, []);

console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const makeGroups = (object, text) => {
  if (!(text.length in object)) {
    object[text.length] = [];
  }

  object[text.length].push(text);
  return object;
};

const groupByLength = (strings) => strings.reduce(makeGroups, {});

console.log(groupByLength(["apple", "banana", "cherry", "date"]));
