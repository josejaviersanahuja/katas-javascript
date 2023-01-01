/**
 * Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
 * Any whitespace at the end of the line should also be stripped out.

Example:
 * Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
 * @param {String} input 
 * @param {String[]} markers 
 */
function solution(input, markers) {
  markers.forEach(marker => {
    input = input.replace(new RegExp(`\\s*${marker}.*`, 'i'), '');
  });
  console.log(input.slice(-1));
  return input
};

/**
 * Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.
For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
 * @param {Number} n 
 */
function nextBigger(n) {
  //your code here
  const chars = n.toString().split('').reverse();
  if (chars.every((char, index) => index === chars.length - 1 || char <= chars[index + 1])) {
    return -1
  } else {
    const i = chars.findIndex((char, index) => char > chars[index + 1]);
    console.log(chars);
    console.log(i);
    console.log(chars.slice(0, i + 1));
    const especialArray = chars.slice(0, i + 1).filter(e => e > chars[i + 1]);
    const especial = chars.findIndex((char, index) => char === Math.min(...especialArray).toString());
    console.log(especial);
    [chars[i + 1], chars[especial]] = [chars[especial], chars[i + 1]];
    const firstChars = chars.slice(0, i + 1).sort();
    const lastChars = chars.slice(i + 1);
    console.log(chars);
    console.log(firstChars);
    console.log(lastChars);
    return parseInt(lastChars.reverse().concat(firstChars).join(''));
  }
}

/**
 * The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. 
 * It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key).

The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

From Wikipedia:

The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. 
It is a simple form of polyalphabetic substitution.

. . .

In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, 
A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.

Assume the key is repeated for the length of the text, character by character. 
Note that some implementations repeat the key over characters only if they are part of the alphabet -- this is not the case here.

The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

Visual representation:

"my secret code i want to secure"  // message
"passwordpasswordpasswordpasswor"  // key
Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

Example
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj');  // returns 'waffles'
Any character not in the alphabet must be left as is. For example (following from above):

c.encode('CODEWARS'); // returns 'CODEWARS'
 * @param {String} key 
 * @param {String} abc 
 */
function VigenèreCipher(key, abc) {
  const keyArray = key.split('');
  const abcArray = abc.split('');
  this.encode = function (str) {
    const strArray = str.split('');
    const result = strArray.map((char, index) => {
      if (abcArray.includes(char)) {
        const keyIndex = abcArray.findIndex(e => e === keyArray[index % keyArray.length]);
        const charIndex = abcArray.findIndex(e => e === char);
        return abcArray[(charIndex + keyIndex) % abcArray.length];
      } else {
        return char;
      }
    });
    return result.join('');
  };
  this.decode = function (str) {
    const strArray = str.split('');
    const result = strArray.map((char, index) => {
      if (abcArray.includes(char)) {
        const keyIndex = abcArray.findIndex(e => e === keyArray[index % keyArray.length]);
        const charIndex = abcArray.findIndex(e => e === char);
        return abcArray[(charIndex - keyIndex + abcArray.length) % abcArray.length];
      } else {
        return char;
      }
    });
    return result.join('');
  };
}

function nextSmaller(n) {
  //your code here
  const chars = n.toString().split('').reverse();
  if (chars.every((char, index) => index === chars.length - 1 || char >= chars[index + 1])) {
    return -1
  } else {
    const i = chars.findIndex((char, index) => char < chars[index + 1]);
    console.log(chars);
    console.log(i);
    console.log(chars.slice(0, i + 1));
    const especialArray = chars.slice(0, i + 1).filter(e => e <= chars[i + 1]);
    const especial = chars.findIndex((char, index) => char === Math.max(...especialArray).toString());
    console.log(especial);
    [chars[i + 1], chars[especial]] = [chars[especial], chars[i + 1]];
    const firstChars = chars.slice(0, i + 1).sort().reverse();
    const lastChars = chars.slice(i + 1);
    console.log(chars);
    console.log(firstChars);
    console.log(lastChars);
    return parseInt(lastChars.reverse().concat(firstChars).join(''));
  }
}

/**
 * We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
 * @param {String} a 
 * @param {String} b 
 * @returns 
 */
function add(a, b) {
  aReverse = a.split('').reverse();
  bReverse = b.split('').reverse();
  const result = [];
  let carry = 0;
  for (let i = 0; i < Math.max(aReverse.length, bReverse.length); i++) {
    const sum = (parseInt(aReverse[i]) || 0) + (parseInt(bReverse[i]) || 0) + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry) {
    result.push(carry);
  }
  return result.reverse().join('');
}

/** "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

"Interesting" Numbers
Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

So, you should expect these inputs and outputs:

// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
Error Checking
A number is only interesting if it is greater than 99!
Input will always be an integer greater than 0, and less than 1,000,000,000.
The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
You should only ever output 0, 1, or 2. 
 * 
 * @param {Number} number 
 * @param {Number[]} awesomePhrases 
 */
function isInteresting(number, awesomePhrases) {
  const isPalindrome = (str) => str === str.split('').reverse().join('');
  const isSequential = (str) => {
    const strArray = str.split('');
    const first = strArray[0];
    const isIncrementing = strArray.every((char, index) => (parseInt(first) + index) % 10 === parseInt(char));
    const isDecrementing = strArray.every((char, index) => (parseInt(first) - index) % 10 === parseInt(char));
    return isIncrementing || isDecrementing;
  }
  const isFollowedByZeros = (str) => str.split('').every((char, index) => index === 0 || char === '0');
  const isAwesome = (str) => awesomePhrases.includes(parseInt(str));
  const isGreaterThan99 = (number) => number > 99;
  const str = number.toString();
  if((isPalindrome(str) || isSequential(str) || isFollowedByZeros(str) || isAwesome(str)) && isGreaterThan99(number)) {
    return 2;
  }
  const nextNumber = number + 1;
  const nextNumberStr = nextNumber.toString();
  if((isPalindrome(nextNumberStr) || isSequential(nextNumberStr) || isFollowedByZeros(nextNumberStr) || isAwesome(nextNumberStr)) && isGreaterThan99(nextNumber)) {
    return 1;
  }
  const nextNextNumber = number + 2;
  const nextNextNumberStr = nextNextNumber.toString();
  if((isPalindrome(nextNextNumberStr) || isSequential(nextNextNumberStr) || isFollowedByZeros(nextNextNumberStr) || isAwesome(nextNextNumberStr)) && isGreaterThan99(nextNextNumber)) {
    return 1;
  }
  return 0;
}

/**
 * Your task in this Kata is to emulate text justification in monospace font. 
 * You will be given a single-lined text and the expected justification width. 
 * The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
Last line should not be justified, use only one space between words.
Last line should not contain '\n'
Strings with one word do not need gaps ('somelongword\n').
Example with width=30:

Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.
Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

Have fun :)


 * @param {String} text 
 * @param {Number} width 
 * @returns 
 */
function justify(text, width) {
  if(text.length <= width) return text;
  const words = text.split(' ');
  const lines = [];
  let currentLine = [];
  let currentLineLength = 0;
  for(let i = 0; i < words.length; i++) {
    const word = words[i];
    if(currentLineLength + word.length < width) {
      currentLine.push(word);
      currentLineLength += i === 0 ? word.length : word.length + 1;
    } else {
      lines.push(currentLine);
      currentLine = [word];
      currentLineLength = word.length;
    }
  }
  lines.push(currentLine);
  const justifiedLines = lines.map((line, index) => {
    if(index === lines.length - 1) {
      return line.join(' ');
    }
    const lineLength = line.join('').length;
    const spaces = width - lineLength;
    const spacesPerWord = Math.floor(spaces / (line.length - 1));
    const extraSpaces = spaces % (line.length - 1);
    const spacesArray = new Array(line.length - 1).fill(spacesPerWord);
    for(let i = 0; i < extraSpaces; i++) {
      spacesArray[i]++;
    }
    return line.map((word, index) => {
      if(index === line.length - 1) {
        return word;
      }
      return word + ' '.repeat(spacesArray[index]);
    }).join('');
  });
  console.log(justifiedLines);
  return justifiedLines.join('\n');
}
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

/**
 * In mathematics, the factorial of integer n is written as n!. 
 * It is equal to the product of n and every integer preceding it. 
 * For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. 
For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). 
For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

I have removed the use of require in the javascript language.
 * @param {Number} n 
 */
function factorial(n){
  if(n < 0) return null;
  let result = 1;
  const multiply = (a, b) => {
    const aArray = a.toString().split('').reverse();
    const bArray = b.toString().split('').reverse();
    const resultArray = [];
    for(let i = 0; i < aArray.length; i++) {
      for(let j = 0; j < bArray.length; j++) {
        const index = i + j;
        const product = aArray[i] * bArray[j];
        if(resultArray[index]) {
          resultArray[index] += product;
        } else {
          resultArray[index] = product;
        }
      }
    }
    for(let i = 0; i < resultArray.length; i++) {
      const number = resultArray[i];
      const ones = number % 10;
      const tens = Math.floor(number / 10);
      resultArray[i] = ones;
      if(resultArray[i + 1]) {
        resultArray[i + 1] += tens;
      } else if(tens !== 0) {
        resultArray[i + 1] = tens;
      }
    }
    return resultArray.reverse().join('');
  }
  for(let i = 1; i <= n; i++) {
    result = multiply(result, i);
  }
  return result;
}

console.log(multiply(120,6)); // 120

/**
 * Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array, i.e:

[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],
  
  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],
  
  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]
Rules for validation

Data structure dimension: NxN where N > 0 and √N == integer
Rows may only contain integers: 1..N (N included)
Columns may only contain integers: 1..N (N included)
'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
 * @param {Number[][]} data 
 * @returns {Boolean}
 */
var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------
  const n = data.length
  const sqr = Math.sqrt(n)
  const isValid = (arr) => {
    if (!arr.every(x => typeof x === 'number')) return false
    const set = new Set(arr)
    return set.size === n && Math.min(...set) === 1 && Math.max(...set) === n
  }
  const isValidRow = (row) => isValid(data[row])
  const isValidCol = (col) => isValid(data.map(row => row[col]))
  const isValidSqr = (row, col) => {
    const arr = []
    for (let i = row; i < row + sqr; i++) {
      for (let j = col; j < col + sqr; j++) {
        arr.push(data[i][j])
      }
    }
    return isValid(arr)
  }

  //   Public methods
  // -------------------------
  return {
    isValid: function() {
      // YOUR SOLUTION
      for (let i = 0; i < n; i++) {
        if (!isValidRow(i) || !isValidCol(i)) return false
      }
      for (let i = 0; i < n; i += sqr) {
        for (let j = 0; j < n; j += sqr) {
          if (!isValidSqr(i, j)) return false
        }
      }
      return true
    }
  };
};

console.log(Sudoku([ [ true ] ]).isValid());
