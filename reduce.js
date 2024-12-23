// sumOf([1, 2, 3, 4]) => 10
const sum = function (num1, num2) {
  return num1 + num2;
}

const sumOf = function (numbers) {
  return numbers.reduce(sum);
}

console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const product = function (num1, num2) {
  return num1 * num2;
}

const productOf = function (numbers) {
  return numbers.reduce(product);
}

console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  const total = numbers.reduce(sum);

  return total / numbers.length;
}

console.log(averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const min = function (num1, num2) {
  return Math.min(num1, num2);
}

const minOf = function (numbers) {
  return numbers.reduce(min);
}

console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const max = function (num1, num2) {
  return Math.max(num1, num2);
}

const maxOf = function (numbers) {
  return numbers.reduce(max);
}

console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isPositive = function (number) {
  return number > 0;
}

const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isPositive).reduce(sum);
}

console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const square = function (number) {
  return number * number;
}

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(sum);
}

console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = function (number) {
  return (number & 1) === 1;
}

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(sum);
}

console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegative = function (count, number) {
  return isPositive(number) ? count : count += 1;
}

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(countNegative, 0);
}

console.log(countNegativeNumbers([1, -2, 3, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const isEven = function (number) {
  return number % 2 === 0;
}

const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(isEven).map(square).reduce(sum);
}

console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concat = function (text1, text2) {
  return text1 + text2;
}

const concatenateWords = function (words) {
  return words.reduce(concat);
}

console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longerWord = function (word1, word2) {
  return word1.length >= word2.length ? word1 : word2;
}

const longestWord = function (words) {
  return words.reduce(longerWord);
}

console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shorterWord = function (word1, word2) {
  return word1.length <= word2.length ? word1 : word2;
}

const shortestWord = function (words) {
  return words.reduce(shorterWord);
}

console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinComma = function (init, word) {
  return init + ',' + word;
}

const joinWithComma = function (words) {
  const [firstWord, ...rest] = [...words];
  return firstWord + rest.reduce(joinComma, '');
}

console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words;
}

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) { }

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) { }

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) { }

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) { }

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) { }

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) { }

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) { }

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) { }

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) { }

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) { }