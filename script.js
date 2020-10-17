// Stating Variables 
var userInput;
var confirmNum;
var confirmSpeial;
var confirmUpper;
var confirmLower;
var choices;

number = [1,2,3,4,5,6,7,8,9]
lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/","\:","\;","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
space = [];

// Change lower to upper- lower provided above
var toUpper = function(x) {
    return x.toUpperCase();
};

upper = lower.map(toUpper);

var get = document.querySelector("#generate");

// Event listener to creat function when button is clicked
get.addEventListener("click", function() {
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
});

// Function to ask user criteria and store choices to generate password
function generatePassword() {
        userInput = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!userInput){
        alert("This needs a value");
    } else if (userInput < 8 || userInput >128) {
        userInput = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmNum = confirm("Will this contain numbers?");
        confirmSpeial = confirm("Will this contain special characters?");
        confirmUpper = confirm("Will this contain Uppercase letters?");
        confirmLower = confirm("Will this contain Lowercase letters?");
    };

    // If user clicks no for all criterias's - they are prompted so
    if (!confirmSpeial && !confirmNum && !confirmUpper && !confirmLower) {
        choices = alert("You must choose a criteria!");
    }
    // All possible choices the user makes gets stored here
    else if (confirmSpeial && confirmNum && confirmUpper && confirmLower) {

        choices = specialChar.concat(number, lower, upper);
    }
    else if (confirmSpeial && confirmNum && confirmUpper) {
        choices = specialChar.concat(number, upper);
    }
    else if (confirmSpeial && confirmNum && confirmLower) {
        choices = specialChar.concat(number, lower);
    }
    else if (confirmSpeial && confirmLower && confirmUpper) {
        choices = specialChar.concat(lower, upper);
    }
    else if (confirmNum && confirmLower && confirmUpper) {
        choices = number.concat(lower, upper);
    }
    else if (confirmSpeial && confirmNum) {
        choices = specialChar.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = specialChar.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = specialChar.concat(upper);
    }
    else if (confirmLower && confirmNum) {
        choices = lower.concat(number);

    } else if (confirmLower && confirmUpper) {
        choices = lower.concat(upper);

    } else if (confirmNum && confirmUpper) {
        choices = number.concat(upper);
    }
    else if (confirmSpeial) {
        choices = specialChar;
    }
    else if (confirmNum) {
        choices = number;
    }
    else if (confirmLower) {
        choices = lower;
    }
    else if (confirmUpper) {
        choices = space.concat(upper);
    };
    // Variable for password to be stored
    var password = [];
    
    // For loop to Generate randon password based on criteria inputed by user
    for (var i = 0; i < userInput; i++){
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var pw = password.join("");
    uInput(pw);
    return pw;
}
// Pastes password in the textarea of the HTML
function uInput(pw) {
    document.getElementById("password").textContent = pw;
};


