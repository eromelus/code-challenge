const findSum = function (array) {
  let sum = 0;
  array.forEach((number) => (sum += number));
  return sum;
};

const findFrequency = function (array) {
  const itemFrequencyCount = {};

  const result = {
    most: array[0],
    least: array[0],
  };

  for (let item in itemFrequencyCount) {
    if (itemFrequencyCount[item] > itemFrequencyCount[result.most]) {
      result.most = item;
    }

    if (itemFrequencyCount[item] < itemFrequencyCount) {
      result.least = item;
    }
  }

  return result;
};

const isPalindrome = function (str) {
  const lowerCasedString = str.toLowerCase();
  const reversedString = lowerCasedString.split("").reverse().join("");

  return lowerCasedString === reversedString;
};

const largestPair = function (array) {
  let maxProduct = 0;

  for (let i = 0; i < array.length; i++) {
    const product = array[i] * array[i + 1];

    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};

const removeParenth = function (str) {
  const openParenthIndex = str.indexOf("(");
  const closedParenthIndex = str.indexOf(")");

  return str.slice(0, openParenthIndex) + str.slice(closedParenthIndex + 1);
};

const scoreScrabble = function (str) {
  const letterScores = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    i: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 2,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10,
  };

  let score = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      score += letterScores[char];
    });

  return score;
};
