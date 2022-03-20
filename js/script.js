// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num < 1 || num > 100000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 100000.`;
    } else {
        txt += `You have entered the number ${num}`;
        let nth = (num % 10 == 1) ? 'st' : (num % 10 == 2) ? 'nd' : (num % 10 == 3) ? 'rd' : 'th';
        txt += `The ${num}${nth} prime number is ${nthPrime(num)}`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
     Function to Return the n-th Prime Number
     nthPrime(6) returns 13
     nthPrime(10) returns 29
*/
function nthPrime(n) {
    let primes = [];
    let number = 2;
    while (primes.length < n) {
        if (isPrime(number)) {
            primes.push(number);
            number += 1;
        } else {
            number += 1;
        }
    }
    return primes[primes.length-1];
}

/*
    Function to determine whether the given number is prime or not
    isPrime(2) returns true
    isPrime(15) returns false
*/
function isPrime(n) {
    if (n<2) return false;
    if (n==2) return true;
    if (n>2 && n%2==0) return false;
    for (let i=3;i<=Math.floor(Math.sqrt(n));i++) {
        if (n%i==0) return false;
    }
    return true;
}