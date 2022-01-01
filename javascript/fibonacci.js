function fibonacci(num) {
  // type your code here
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
  /* fibonacci looping:

    fibonacci(num) {
      let a = 0, b = 1, f = 1;
      for (var i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
      }
      return f
    }

  */
}

console.log(fibonacci())

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
  //
// And a written explanation of your solution
  //recursion: takes in the number and breaks it down in the recursion forumla until reduced to 
  //1 then added together.
  //looping: starts at index 3 calculates a, b, and f until i <= the given number

