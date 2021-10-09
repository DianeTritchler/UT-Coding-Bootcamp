// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordlength = 0;
var lowercase = false;
var uppercase = false;
var numbers = false;
var specialCharacters = false;

// Write password to the #password input
function writePassword() {

  //Intake Password Length &  Checks if entry is valid
    while( passwordlength < 8 || passwordlength > 128){
      
        passwordlength = window.prompt("Length of password? (8-128 Characters)");
        
      if( passwordlength < 8 || passwordlength > 128){
        window.confirm("Invalid Length. Please Choose between 8 and 128 Characters.");
      }
    }

    while( lowercase == false && uppercase == false && numbers == false && specialCharacters == false){
        lowercase = window.confirm("Would you like to include Lower Case letters?");
        uppercase = window.confirm("Would you like to include Upper Case letters?");
        numbers   = window.confirm("Would you like to include Numbers?");
        specialCharacters = window.confirm("Would you like to include Special Characters?");
        
        if(lowercase == false && uppercase == false && numbers == false && specialCharacters == false){
          window.alert("You must choose at lease one Character Type for you password. Please try again.");
        }

      }//end of while
    

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword(){
  
  var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var characterArray = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']',']','|',':',';','"',',','<',',','>','.','?','/'];
  var numbersArray = ['1','2','3','4','5','6','7','8','9','0'];
  var possibleElements = [];
  var totalIndex = 0;
  var finalPassword = [];

  //Gets total length of our possible Elements Array
  if(lowercase === true){
    totalIndex = totalIndex + alphabetArray.length;
  }
  if(uppercase === true){
    totalIndex = totalIndex + alphabetArray.length;
  }
  if(numbers === true){
    totalIndex = totalIndex + numbersArray.length;
  }
  if(specialCharacters === true){
    totalIndex = totalIndex + characterArray.length;
  }

  //Creates possible elements Array - Combines all chosen elements
  for(var x = 0, i = 0; x < totalIndex; i++ ){

    if(lowercase === true && i < alphabetArray.length){
      possibleElements[x] = alphabetArray[i];
      x++;
    }
    if(uppercase === true && i < alphabetArray.length){
      possibleElements[x] = alphabetArray[i].toUpperCase();
      x++;
    }
    if(numbers === true && i < numbersArray.length){
      possibleElements[x] = numbersArray[i];
      x++;
    }
    if(specialCharacters === true && i < characterArray.length){
      possibleElements[x] = characterArray[i];
      x++;
    }
  } 

  //Creates finalPassword Array
  for(var i = 0; finalPassword.length < passwordlength; i++){
    finalPassword[i] = possibleElements[getRandomInt(totalIndex-1)];
  }
  
  //Return
  return finalPassword.join("");
}//End of generatePassword Function


//Random Number Generator with a Max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

