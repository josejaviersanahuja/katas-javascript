/**
 * Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

Examples
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"
 * @param {*} int32 
 */
function int32ToIp(int32){
  const arr = []
  for (let i = 0; i < 4; i++) {
    arr.push(int32 % 256)
    int32 = Math.floor(int32 / 256)
  }
  return arr.reverse().join('.')

  /**
   * 
function int32ToIp(int32){

 return (
          ((int32 >> 24) & 0xFF) + "." +
          ((int32 >> 16) & 0xFF) + "." +
          ((int32 >>  8) & 0xFF) + "." +
          ((int32) & 0xFF)
        );
 
}
const int32ToIp = int32 => [24, 16, 8, 0].map(e => int32 >> e & 255).join('.');

function int32ToIp(int32){
    return (int32>>>24) + '.' + (int32<<8>>>24) + '.' + (int32<<16>>>24) + '.' + (int32<<24>>>24)
}

   */
}

/**
 * Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b
 . Note that a and b may be very large!

For example, the last decimal digit of 9^7
  is 9, since 9^7=4782969
You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0
 * @param {String} str1 
 * @param {String} str2 
 * @returns 
 */
var lastDigit = function(str1, str2){  
  
  if (str2 == '0') return 1;
  let a = str1.slice(-1);
  let b = str2.slice(-2) % 4 || 4;
  return Math.pow(a, b) % 10;
}

console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"));