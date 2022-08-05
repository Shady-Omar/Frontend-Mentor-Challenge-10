let fName = document.querySelector(".error_f")
let lName = document.querySelector(".error_l")
let email = document.querySelector(".error_e")
let pass = document.querySelector(".error_p")

function validation() {

    // add (if) statement inside each (setTimeout) to run the validation process asynchronously
    setTimeout(() => {
        if( document.myForm.fname.value == "" || document.myForm.fname.value == null) {
            // alert( "First Name cannot be empty" ); // The Alert code was for testing
            fName.classList.remove("error_f");
            fName.classList.add("show");
            return false;
        } else {
            fName.classList.remove("show");
            fName.classList.add("error_f");
        }
    },0);
    
    setTimeout(() => {
        if( document.myForm.lname.value == "" ) {
            // alert( "Last Name cannot be empty" ); // The Alert code was for testing
            lName.classList.remove("error_l");
            lName.classList.add("show");
            return false;
        } else {
            lName.classList.remove("show");
            lName.classList.add("error_l");
        }
    }, 0);
    
    setTimeout(() => {
        if( document.myForm.email.value == "" ) {
            // alert( "Looks like this is not an Email" ); // The Alert code was for testing
            email.classList.remove("error_e");
            email.classList.add("show");
            return false;
        } else {
            email.classList.remove("show");
            email.classList.add("error_e");
        }
    }, 0);

    if( document.myForm.pass.value == "" ) {
        // alert( "password cannot be empty" ); // The Alert code was for testing
        pass.classList.remove("error_p");
        pass.classList.add("show");
        return false;
    } else {
        pass.classList.remove("show");
        pass.classList.add("error_p");
    }

    return(true);
}

