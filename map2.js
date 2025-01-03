// capitalize first letters of  21
// ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const firstLetterCapital = function ([firstLetter, ...rest]) {
  return [firstLetter.toUpperCase(), ...rest].join('');
}

const getFirstLettersCapital = function (text) {
  return text.split(' ').map(firstLetterCapital).join(' ');
}

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(getFirstLettersCapital);
};

console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]] 22
const getWordsLength = function (words) {
  return words.split(' ').map(function (word) {
    return word.length;
  });
}

const wordLengthsOf = function (strings) {
  return strings.map(getWordsLength);
};

console.log(wordLengthsOf(["apple pie", "banana split"]));

// flatten nested arrays of  23
// [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flatArrays = function (array) {
  return array.flat(Infinity);
}

const flattenedArraysOf = function (arrays) {
  return arrays.map(flatArrays);
};

console.log(flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));

// sort letters in 24
// ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sorting = function (element) {
  return [...element].sort().join('');
}

const sortedLettersOf = function (strings) {
  return strings.map(sorting);
};

console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"] 25
const wrap = function (element) {
  return '[' + element + ']';
}

const wrappedStringsOf = function (strings) {
  return strings.map(wrap);
};

console.log(wrappedStringsOf(["apple", "banana"]));

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) {
  return objects.map(function (person) {
    return person.name;
  });
};

console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30] 27
const extractAges = function (objects) {
  return objects.map(function (person) {
    return person.age;
  })
};

console.log(extractAges([{ age: 25 }, { age: 30 }]));

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"] 28
const firstLettersOfNames = function (objects) {
  return objects.map(function (person) {
    return person.name.at(0);
  })
};

console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20] 29
const calculateAreas = function (rectangles) {
  return rectangles.map(function (rectangle) {
    return rectangle.width * rectangle.height;
  });
};

console.log(calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]));

// extract boolean flags from [{ active: true }, { active: false }] => [true, false] 30
const extractFlags = function (objects) {
  return objects.map(function ({ active }) {
    return active;
  });
};

console.log(extractFlags([{ active: true }, { active: false }]));

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"] 31
const fullNames = function (objects) {
  return objects.map(function ({ firstName, lastName }) {
    return firstName + ' ' + lastName;
  });
};

console.log(fullNames([{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }]));

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity) 32
const totalPrices = function (objects) {
  return objects.map(function ({ price, quantity }) {
    return price * quantity;
  });
};

console.log(totalPrices([{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }]));

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)  33
const isAdult = function (objects) {
  return objects.map(function (person) {
    return person.age >= 18;
  });
};

console.log(isAdult([{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }]));

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]  34
const isUpperCase = function (char) {
  const decimal = char.charCodeAt();
  return decimal < 91 && decimal > 64;
}

const abbreviations = function (objects) {
  return objects.map(function ({ city, country }) {
    const abbrOfCity = [...city].filter(isUpperCase).join('');
    const abbrOfCountry = [...country].filter(isUpperCase).join('');

    return [abbrOfCity, abbrOfCountry];
  }).flat();
};

console.log(abbreviations([{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }]));

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]  35
const mathScores = function (objects) {
  return objects.map(function (student) {
    return student.scores.math;
  });
};

console.log(mathScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]] 36
const extractCoordinates = function (objects) {
  return objects.map(function ({ x, y }) {
    return [x, y];
  });
};

console.log(extractCoordinates([{ x: 1, y: 2 }, { x: 3, y: 4 }]))

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]  37
const fullNameAndAge = function (objects) {
  return objects.map(function ({ firstName, lastName, age }) {
    return [firstName + ' ' + lastName, age];
  });
};

console.log(fullNameAndAge([{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }]));

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]] 38
const extractScores = function (objects) {
  return objects.map(function ({ _, scores }) {
    return [scores.math, scores.english];
  });
};

console.log(extractScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]] 39
const keyValuePairs = function (objects) {
  return objects.map(function ({ key, value }) {
    return [key, value];
  });
};

console.log(keyValuePairs([{ key: "a", value: 1 }, { key: "b", value: 2 }]));

// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]  40
const splitFullNames = function (objects) {
  return objects.map(function ({ name }) {
    return name.split(' ');
  });
};

console.log(splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]));