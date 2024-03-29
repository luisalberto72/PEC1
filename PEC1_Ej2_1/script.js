
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
//const password=document.getElementById('password');
const password2=document.getElementById('password2');
const age = document.getElementById('age');

//Show input error message
function showError(input,message) {
    const formControl=input.parentElement; 
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input){
    const formControl=input.parentElement; 
    formControl.className='form-control success';
}


// Check email is valid
function checkEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
       showSuccess(input);
    } else {
        showError(input,'Email is not valid');
    }
 }

/*function isValidEmail(email) {
   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}*/


//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        showError(input,`${getFieldName(input)} is required`);
      } else {
        showSuccess(input);
      }
    });
}

//Check passwords match
function checkPasswordsMatch(input1,input2) {
    if (input1.value !== input2.value ) {
        showError(input2,'Passwords do not match')
    }
}

// Check age 
function checkAge(input) {
    const ageValue = parseInt(input.value);
    if (isNaN(ageValue) || ageValue < 0 || ageValue >= 1000) {
        showError(input, 'Age must be a valid number between 0 and 999');
    } else {
        showSuccess(input);
    }
}

//Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check input length

function checkLength(input,min,max){
   if (input.value.length < min) { 
    showError(input,`${getFieldName(input)} must be at least ${min} characters`);
   } else if (input.value.length > max) {
    showError(input,`${getFieldName(input)} must be less than ${max} characters`);
   } else {
    showSuccess(input);
   }

}

const passwordError = document.getElementById('password-error');

// Check password 
function checkPassword(input) {
    const passwordValue = input.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\{\}\|\[\]\\:";'<>?,.\/]).{8,}$/;
    if (!passwordRegex.test(passwordValue)) {
        showError(input, 'Password must be valid');
    } else {
        showSuccess(input);
        passwordError.style.visibility = 'hidden'; // Ocultar el mensaje de error si la contraseña es válida
    }
}

//Event listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();
   
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
    checkAge(age);
    checkPassword(password); // Added password validation
   
    /* if (username.value === ''){
        showError(username,'Username is required');
    } else {
        showSuccess(username);
    }
    
    if (email.value === ''){
        showError(email,'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email,'Email is not valid');
    } else {
        showSuccess(username);
    }

    if (password.value === ''){
        showError(password,'Password is required');
    } else {
        showSuccess(password);
    }

    if (password2.value === ''){
        showError(password2,'Password is required');
    } else {
        showSuccess(password2);
    }*/

});