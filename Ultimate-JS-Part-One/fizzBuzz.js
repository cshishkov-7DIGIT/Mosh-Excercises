function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  const divisibleBy3 = input % 3 === 0;
  const divisibleBy5 = input % 5 === 0;

  return divisibleBy3 && divisibleBy5 ? "FizzBuzz" : divisibleBy3 ? "Fizz" : divisibleBy5 ? "Buzz" : input;
}

let a = 15;

console.log(fizzBuzz(a));
