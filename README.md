# Project Euler 007 - 10001st Prime

By listing the first six prime numbers: 2, 3, 5, 7, 11 and 13, we can see that the 6th prime is 13.  The aim is to find the 10001st Prime Number as well as the nth Prime Number.

Information at [Project Euler 007](https://projecteuler.net/problem=7)

## UX

**Getting Started**

Enter a whole number between 1 and 100000 in the input field and click on the Submit Button.  You will see the number that you have entered as well as the prime in that position, unless you have made an invalid input.  For example, if you entered the number 6, you will see that the prime at position 6 is 13.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, If I do any of:

    - Not enter anything in the input field
    - Entering a number less than 1 or greater than 100000
    - Entering text that is not a number (e.g. bus)
    - Entering a number, but it is not an integer

As a user, I expect the function `nthPrime(6)` to return a number.

As a user, I expect the function `nthPrime(6)` to return 13.

As a user, I expect the function `nthPrime(10)` to return 29.

As a user, I expect the function `nthPrime(100)` to return 541.

As a user, I expect the function `nthPrime(1000)` to return 7919.

As a user, I expect the function `nthPrime(10001)` to return 104743.

**Information Architecture**

The function `nthPrime(n)` returns a number (integer), where `n` is a number between 1 and 100000.

## Features

Allows the user to enter the number (position) as well as getting the prime number in this position.  Performs checks to ensure the input is valid.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-007) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)