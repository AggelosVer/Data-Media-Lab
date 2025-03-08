const username = document.getElementById("username")
const password = document.getElementById("password")
const form= document.getElementById("form")

//default username and password: admin123

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if (password.value.length<6 || password.value.length>20){
        alert("Password must be between 6 and 20 characters");
        return;
    }
    if (password.value !== "admin123" && username.value !== "admin123"){
        alert("Username and Password are wrong");
        return;
    }
    if (password.value !== "admin123"){
        alert("Password is wrong");
        return;
    }
    if (username.value !== "admin123"){
        alert("Username is wrong");
        return;
    }
    if (username.value === "admin123" && password.value === "admin123"){
        clearFields();
        alert("Login successful!");
    }

});

function clearFields() {
    username.value = "";
    password.value = "";
}