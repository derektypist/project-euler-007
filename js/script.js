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