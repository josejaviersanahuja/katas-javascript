
// Build a pile of Cubes

/*Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3
 , the cube above will have volume of (n-1)^3
  and so on until the top which will have a volume of 1^3
 .
You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
n³ + (n-1)³ + ... + 1³ = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1*/
function findNb(m) {
  // n³ + (n-1)³ + ... + 1³ = n²(n+1)²/4
  const raiz = Math.sqrt(m);
  // la raiz debe ser un entero
  if (!Number.isInteger(raiz)) {
    return -1;
  } else {
    // el doble de la raiz = n*(n+1) > n²
    const raiz2 = Math.sqrt(raiz * 2);
    let start = parseInt(raiz2);
    while (start * (start + 1) <= raiz * 2) {
      if (start * (start + 1) === raiz * 2) {
        return start;
      }
      start++;
    }
  }
  return (-1);
}
/**
 * You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
 * @param {*} strarr 
 * @param {*} k 
 * @returns 
 */
function longestConsec(strarr, k) {
  // your code
  const result = strarr.reduce((acc, val, i) => {
    if (i + k <= strarr.length) {
      let str = ''
      for (let j = 0; j < k; j++) {
        str += strarr[i + j]
      }
      return acc.concat([str])
    } else {
      return acc
    }
  }, [])
  return result.reduce((a, b) => {
    return a.length < b.length ? b : a
  }, '')
}

/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 * @param {*} arr 
 * @returns 
 */
function moveZeros(arr) {

  const arrNo0 = []
  const arr0 = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] === 0 ? arr0.push(arr[i]) : arrNo0.push(arr[i])    
  }
  return arrNo0.concat(arr0)
}

/**
 * Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
 * @param {*} start 
 * @param {*} end 
 */
function ipsBetween(start, end){
  const startArr = start.split('.').map(val => parseInt(val))
  const endArr = end.split('.').map(val => parseInt(val))
  let result = 0
  for (let i = 0; i < 4; i++) {
    result += (endArr[i] - startArr[i]) * Math.pow(256, 3 - i)
  }
  return result
}
console.log(ipsBetween("10.0.0.0", "10.0.1.50")); // "abigailtheta"