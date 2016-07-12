
//#1 HW Problem
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(5, 10));

//#2 HW Problem
function isEqual(arg1, arg2) {
  if(arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqual('george', 'george'));

//#3 HW Problem
function discountPercentage(origAmt, discount) {
  if(discount > 100 || origAmt <= 0) {
    return "Error";
  }
  else {
    return origAmt * discount;
  }
}
console.log(discountPercentage(100, .25));

//#4 HW Problem
function stringCapitalize(string) {
  var array1 = string.split(' ');
  var newArray1 = [];
  for(var x = 0; x < array1.length; x++) {
    newArray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newArray1.join(' ');
  };
console.log(stringCapitalize('hey whats up'));

//#5 HW Problem
function evenNumbers(int) {
    if(i > 100 || i < 0) {
      return false;
    }
      for(var i = 0; i <= int; i+=2) {
        if(i < int && int % 2 === 0) {
          console.log(i);
    }
    else {
      return int;
    }
  }
}

console.log(evenNumbers(20));

//#6 HW Problem
function isDivisible(arg1, arg2) {
  if(arg1 % arg2 === 0) {
    return true;
  }
  else {
    return false;
  }
};
console.log(isDivisible(4, 2));

//#7 HW Problem
//check if arg is integer
//check if arg is bw 0-100
//write function for > 40
//write function for < 40

// function oddNumbers(num) {
//   if(!Number.isInteger(num)) {
//     return false;
//   } else if(num > 100 || num < 0) {
//     return false;
//   }
//     else {
//     return true;
//     }
//   }

// output odd numbers 0-40
// function outputOdd(num) {
//   var result = [];
//   if(num < 40) {
//       for (var i = 1; i < 40; i+=2) {
//         result.push(i);
//   }
//     else {
//       for(var j = 41; j < num; j+=2) {
//         result.push(j);
//       }
//     }
//         return result;
//     }
//   }
