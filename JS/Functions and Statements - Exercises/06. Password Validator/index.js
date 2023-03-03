function validatePassword(password) {

    function validateLength(password) {
      return password.length >= 6 && password.length <= 10;
    }
    
    function validatePasswordContent(password) {
      let isValid = true;
  
      for (const symbol of password) {
        isValid = symbol.match(/[A-Za-z0-9]+/);
        if (!isValid) {
          isValid = false;
          return;
        }
      }
      return isValid;
    }
  
    function validateDigitsCount(password) {
      let count = 0;
      for (const symbol of password) {
        isMatch = symbol.match(/[0-9]/);
        if (isMatch) {
          count++;
        }
      }
      let isThereIsEnoughDigits = count >= 2 ? true : false;
      return isThereIsEnoughDigits;
    }
  
    let isValid = true;
  
    if (!validateLength(password)) {
      console.log("Password must be between 6 and 10 characters");
      isValid = false;
    }
    if (!validatePasswordContent(password)) {
      console.log("Password must consist only of letters and digits");
      isValid = false;
    }
    if (!validateDigitsCount(password)) {
      console.log("Password must have at least 2 digits");
      isValid = false;
    }
    if (isValid) {
      console.log("Password is valid");
    }
  }
