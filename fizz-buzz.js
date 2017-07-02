'use strict'
/**
 * FizzBuzz is an old programming exercise.
 * The goal is to iterate over a range of numbers and print a message about each number's divisibility.
 * The message is generated the following way:
 * *) if the number is divisible by three, the message is `Fizz`
 * *) if the number is divisible by five, the message is `Buzz`
 * *) if the number is divisible by both three and five, the message is `FizzBuzz`
 * *) otherwise, no message is produced
 * The exact message format for this assignment is specified in the `message(n)` method.
 */

/**
 * Checks whether a given int `a` is evenly divisible by a given int `b` or not.
 * For example, `divides(4, 2)` returns `true` and `divides(4, 3)` returns `false`.
 *
 * @param a the number to be divided
 * @param b the number to divide by
 * @return `true` if a is evenly divisible by b, `false` otherwise
 */
const divides = (a, b) => {
  if (a % b === 0) {
    true
  } else {
    false
  }
  return divides
}
/**
 * Generates a divisibility message for a given number. Returns undefined if the given number is not divisible by 3 or 5.
 * Message formatting examples:
 * 1 -> undefined // not divisible by 3 or 5
 * 3 -> "3: Fizz" // divisible by only 3
 * 5 -> "5: Buzz" // divisible by only 5
 * 15 -> "15: FizzBuzz" // divisible by both three and five
 *
 * @param n the number to generate a message for
 * @return a message according to the format above, or undefined if n is not divisible by either 3 or 5
 */

const message =
  (n) => {
    if (n % 3 === 0 && n % 5 === 0) {
      var mes = n + ' => 15: FizzBuzz'
    } else if (n % 3 === 0) {
      mes = n + ' => 3: Fizz'
    } else if (n % 5 === 0) {
      mes = n + ' => 5: Buzz'
    } else {
      null
    }
    return mes
  }

/**
 * Generates an array of messages to print for a given range of numbers.
 * If there is no message for an individual number (i.e., `message(n)` returns null),
 * it should be excluded from the resulting array.
 *
 * @param start the number to start with (inclusive)
 * @param end the number to end with (exclusive)
 * @return an array of divisibility messages, which should be empty if the given range is empty
 */
const messages =
  (start, end) => {
    for (let i = start; i < end; i++) {
      if (message(i) != null) {
        console.log(message(i))
      }
    }
    return messages
  }

/**
 * For this main method, iterate over the numbers 1 through 115 and print
 * the relevant messages to sysout
 */
const main =
  () => {
    messages(1, 115)
    return main
  }
main()
