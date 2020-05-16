/*
11. Tower of Hanoi

There are three rods and a number of disks of different sizes which can slide onto any rod.
  The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape).
  The other two rods are empty to begin with.

The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well.
  This should be done obeying the following rules:
    i) Only one disk may be moved at a time
    ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod.
    iii) A larger disk may not placed on top of a smaller disk

Input:

Rod A	Rod B	Rod C
----
---------
-------------
Output:

Rod A	Rod B	Rod C
----
---------
-------------

Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?
*/
//apparently this is a solution... https://github.com/thinkful-ei-leopard
// A => C
// A => B
// C => B
// A => C
// B => A
// B => C
// A => C

function TOH(n,s,temp,d) {
  if (n === 1) {
    print(s,d)
    return;
  }

 TOH(n-1,s,d,temp)
 print(s, d)
 TOH(n-1,temp,s, d)

}

function print(a,b) {
  console.log(`moving ${a} to ${b}`)
}

TOH(3, 'A', 'B', 'C')

// 12)Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.
function CountingSheep(num) {
    for (let i =0; i <= num; --num) {
        if (num === 0) {
            console.log('All sheep jumped over the fence')
        }
        else {
            console.log(`${num}: Another sheep jumps over the fence`)
        }
    }
}
CountingSheep(3)

function PowerCalculator(int, exp) {
  if (exp < 0 ) {
    return 'exponent should be >= 0';
  }

  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= int;
  }
  return result;
}

function reverseString(str) {
    let newString = ' ';
    for (let i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString
}
console.log(reverseString('hello'))

function nthTriangle(n) {
  if (n === 0) {
    return 0;
  }
  let result = n;
  for (let i = 0; i < n; i++) {
    result += i;
  }
  return result
}

function stringSplitter(str, splitter) {
    const arr = [];
    while (str.includes(splitter)) {
        const i = str.indexOf(splitter);
        arr.push(str.slice(0, i))
        str = str.slice(i + 1)
    }
    return arr;
}

function FibonacciSeq(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else{
            result.push(result[i - 2] + result[i - 3])
        }
    }
    return result
}

function factorial(n) {
  if (n === 1 || n === 0) {
      return 1;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
      result *= i
  }
  return result;
};

/*
13. Recursive Big O
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

14. Iterative Big O
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.
*/
