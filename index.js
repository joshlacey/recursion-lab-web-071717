// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}


// function reverseString(string) {
//   let reversed = "";
//   (function reverse (string) {
//     if (string.length > 1) {
//       reversed += string[string.length - 1]
//       string = string.substring(0, string.length - 1)
//       reverse(string)
//     } else {
//       reversed += string[0]
//     };
//   })(string);
//   return reversed
// }

function reverseString(string) {
  if (string.length < 2) {
    return string
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
}

// function isPalindrome(string) {
//   let start = 0;
//   let end = string.length-1;
//   let midpoint = Math.floor(string.length/2)
//   if (string.length % 2 === 0) {
//     return string.substring(0, midpoint + 1) == reverseString(string.substring(midpoint + 1, string.length))
//   } else {
//     return string.substring(0 , midpoint) == reverseString(string.substring(midpoint + 1, string.length));
//   }
// }

function isPalindrome(string) {
  let l = string.length
  if (l < 2) {
    return true
  } else if (string[ l - 1 ] === string[0]){
    return isPalindrome(string.substring(1, l - 1))
  } else {
    return false
  }
}

// function addUpTo(array, index) {
//   let sum = 0;
//   let counter = 0;
//   (function add(array, index) {
//     sum += array[counter];
//     if (counter !== index) {
//       counter++;
//       add(array, index);
//     }
//   })(array,index);
//   return sum;
// }

function addUpTo(array, index) {
  if(index > 0) {
    return array[index] + addUpTo(array, --index)
  } else {
    return array[index]
  }
}

// function addUpTo(myArray, index) {
//   return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
// }

// function maxOf(array) {
//   let max = null;
//   let index = 0;
//   (function maxer (array, index) {
//     if(array[index] > max){
//       max = array[index];
//     };
//     if(index < array.length - 1) {
//       index++;
//       maxer(array, index);
//     }
//   })(array, index);
//   return max;
// }

function maxOf(array) {
  let max = array[0];
  if (array.length === 1 ) {
    return max;
  } else if ( max < array[1] ) {
    array.shift();
  } else {
    array.splice(1,1);
  }
   return maxOf(array);
}

// function includesNumber(array, number) {
//   let counter = 0;
//   let includes = false;
//   (function includer(array, number) {
//     includes = (array[counter] === number);
//     if ((counter < array.length - 1) && !includes ) {
//       counter ++;
//       includer(array, number);
//     }
//   })(array, number)
//   return includes
// }

function includesNumber(array, number) {
  if ( array[0] === number )  {
    return true;
  } else if (array.length > 1) {
    return includesNumber(array.splice(1, array.length-1), number);
  } else {
    return false;
  }
}
