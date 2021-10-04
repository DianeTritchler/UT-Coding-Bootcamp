// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordlength = window.prompt("Length of password? (8-128 Characters)");
  var lowercase = window.prompt("Would you like to include Lower Case letters? Enter YES or NO to choose.");
  var uppercase = window.prompt("Would you like to include Upper Case letters? Enter YES or NO to choose.");
  var numbers   = window.prompt("Would you like to include Numbers? Enter YES or NO to choose.");
  var specialCharacters = window.prompt("Would you like to include Special Characters? Entr YES or NO to choose.");

  var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

function generatePassword(){
  for(var i = 8; i <= passwordlength; i){
      
      if (lowercase == "yes"){
        password[i] = randomLetter(); 
        i++;

      }
      if(uppercase == "yes"){

        i++;

      }
      if(numbers == "yes"){

        i++;

      }
      if(specialCharacters == "yes"){

        i++;

      }

      
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

