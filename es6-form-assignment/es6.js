let emailAndPw = [{
        email: "test1@gmail.com",
        password: "testpass1"
    },
    {
        email: "test2@gmail.com",
        password: "testpass2"
    }

]

let emailValidate = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
var btn = document.getElementById("submit");
btn.addEventListener("click", validateFields);
function validateEmail() {
    var email = document.getElementById("email").value;
   
    
    if (email.length == 0) {
        document.getElementById("er-mail").innerHTML = "email field is necessary";
        return false;
    }
   else if(email.includes("@") == false) {
        document.getElementById("er-mail").innerHTML = "include @";
        return false;
    }
    else if (!emailValidate.test(email)) {
        document.getElementById("er-mail").innerHTML = "follow email format";
        return false;
    }  
    else {
        document.getElementById("er-mail").innerHTML = "";
        return true;
    }
}
function validatePass(){
    var password = document.getElementById("password").value;
    
    if (password.length == 0) {
        document.getElementById("er-pw").innerHTML = "password field is necessary";
        return false;
    }
    else if (password.length < 8 || password.length > 24) {
        document.getElementById("er-pw").innerHTML = "length of password should be between 8 and 24";
        return false;
    }
    else {
        document.getElementById("er-pw").innerHTML = "";
        return true;
    }
    
}
function match() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var found = false;
    for (var i = 0; i < emailAndPw.length; i++) {
        if (found != true &&  email == emailAndPw[i].email && password == emailAndPw[i].password ) { 
            found =true;
           
            return true;
        }
        else if(email == emailAndPw[i].email &&  password != emailAndPw[i].password){
            alert("wrong password");
            
            return false;
        }
        
        
    }
    if (found == false) {
        
        return false;
    }
    else {
        return true;
    }
}

function validateFields() {
   
    var em = validateEmail();
    var pw = validatePass();
    var checkmatch = match();
    console.log(checkmatch);
    console.log(em && pw && checkmatch); 
    if (em && pw && checkmatch) {
        return true;
    }
    else {
        event.preventDefault();
    }
    

}