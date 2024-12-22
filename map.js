// squares of [1, 2, 3] => [1, 4, 9] 1
const square = function (element) {
  return element * element;
}

const squaresOf = function (numbers) {
  return numbers.map(square);
};

console.log(squaresOf([1, 2, 3, 4]));

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4] 2
const getLength = function (text) {
  return text.length;
}

const lengthsOf = function (strings) {
  return strings.map(getLength);
};

console.log(lengthsOf(["apple", "banana", "kiwi"]));

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"] 3
const uppercase = function (text) {
  return text.toUpperCase();
}

const uppercaseOf = function (strings) {
  return strings.map(uppercase);
};

console.log(uppercaseOf(["hello", "world", "SORROW"]));

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"] 4
const extractCharacter = function (index) {
  return function (text) {
    return text[index];
  }
}

const firstCharactersOf = function (strings) {
  return strings.map(extractCharacter(0));
};

console.log(firstCharactersOf(["apple", "banana", "kiwi"]));

// truth values of [0, 1, 2, 3] => [false, true, true, true] 5
// Assume non-zero numbers are true, and zero is false
const isTruthy = function (number) {
  return number !== 0;
}

const truthValuesOf = function (numbers) {
  return numbers.map(isTruthy);
};

console.log(truthValuesOf([0, 1, 2, 3]));

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"] 6
const reverse = function ([...element]) {
  return element.reverse();
}

const textReverse = function (element) {
  return reverse(element).join('');
}

const reversedStringsOf = function (strings) {
  return strings.map(textReverse);
};

console.log(reversedStringsOf(["hello", "world"]));

// double letters of ["cat", "dog", "bat"] => ["ccaatt", "ddoogg", "bbaatt"] 7
const repeat = function (times) {
  return function (element) {
    return element.repeat(times)
  }
}

const doubleLetter = function (element) {
  return [...element].map(repeat(2)).join('');
}

const doubleLettersOf = function (strings) {
  return strings.map(doubleLetter);
};

console.log(doubleLettersOf(["cat", "dog", "bat"]));

// boolean negation of [true, false, true] => [false, true, false] 8
const invertBool = function (bool) {
  return !bool;
}

const negatedBooleansOf = function (booleans) {
  return booleans.map(invertBool);
};

console.log(negatedBooleansOf([true, false, true]));

// character codes of ["a", "b", "c"] => [97, 98, 99] 9
// Use the `charCodeAt` method on each string
const getCharCode = function (char) {
  return char.charCodeAt();
}

const charCodesOf = function (strings) {
  return strings.map(getCharCode);
};

console.log(charCodesOf(["a", "b", "c"]));

// extract domain names from  10
// ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const spliting = function (splitChar) {
  return function (text) {
    return text.split(splitChar);
  }
}

const getDomainName = function (email) {
  const domainName = spliting('@')(email);

  return domainName[1];
}

const domainNamesOf = function (emails) {
  return emails.map(getDomainName);
};

console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));

// split words in  11
// ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map(spliting(' '));
};

console.log(splitWordsOf(["hello world", "goodbye moon"]));

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"] 12
const joinArray = function (array) {
  return array.join('');
}

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(joinArray);
};

console.log(joinedArraysOf([["a", "b"], ["c", "d"]]));

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"] 13
const repeatedStringsOf = function (strings) {
  return strings.map(repeat(2));
};

console.log(repeatedStringsOf(["hi", "bye"]));

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2] 14
const isVowel = function (char) {
  const vowels = 'aeiouAEIOU';

  return vowels.includes(char);
}

const countVowel = function (text) {
  const filterVowel = [...text].filter(isVowel);

  return filterVowel.length;
}

const countVowelsOf = function (strings) {
  return strings.map(countVowel);
};

console.log(countVowelsOf(["apple", "banana", "grape"]));

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]] 15
const reversedArraysOf = function (arrays) {
  return arrays.map(reverse);
};

console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"] 16
const isConsonent = function (char) {
  return !isVowel(char);
}

const withoutVowel = function (text) {
  return [...text].filter(isConsonent).join('');
}

const withoutVowelsOf = function (strings) {
  return strings.map(withoutVowel);
};

console.log(withoutVowelsOf(["apple", "banana", "grape"]));

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]] 17
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const getRunningSum = function (array) {
  let sum = 0;
  return array.map(function (element) {
    return sum += element;
  });
}

const cumulativeSumsOf = function (arrays) {
  return arrays.map(getRunningSum);
};

console.log(cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));

// reverse words in  18
// ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reverseText = function (text) {
  return reverse(text).join('');
}

const reverseWord = function (element) {
  const text = element.split(' ');

  return text.map(reverseText).join(' ');
}

const reversedWordsOf = function (strings) {
  return strings.map(reverseWord);
};

console.log(reversedWordsOf(["hello world", "goodbye moon"]));

// extract unique characters from  19
// ["apple", "banana", "grape"] => ["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string
const uniqueCharacters = function (text) {
  let unique = '';
  return [...text].map(function (element) {
    if (unique.includes(element)) {
      return '';
    }

    unique += element;
    return element;
  }).join('');
}

const uniqueCharactersOf = function (strings) {
  return strings.map(uniqueCharacters);
};

console.log(uniqueCharactersOf(["apple", "banana", "grape"]));

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]] 20
const range = function (from, to, step) {
  const numbers = [];

  for (let i = 0; i <= to; i += step) {
    numbers.push(i);
  }

  return numbers;
}

const getRange = function (number) {
  return range(0, number - 1, 1);
}

const rangesOf = function (numbers) {
  return numbers.map(getRange);
};

console.log(rangesOf([3, 5, 2]));