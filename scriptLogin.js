function loginUser(event) {
    event.preventDefault();

    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    var user = document.cookie.split("; ")[0].split("=")[1];
    console.log(user);
    if ( user ) {
        var userObject = [];
        console.log(user.split(",").length);
        for( var i = 0 ; i <= user.split(",").length/2 ; i+=2){
            var email = user.split(",")[i].split(":")[1];
            var password = user.split(",")[i+1].split(":")[1];
            console.log(email);
            console.log(password);
            userObject.push([email,password]);
        }
        console.log(userObject);

        var UserExists = userObject.some( user => user[0] === emailInput && user[1] === passwordInput );
        if (UserExists) {
            document.cookie = "loggedIn=true";
            console.log(document.cookie);

            alert("Connexion réussie!");
            window.location.href = "Prostage1.html";
        } else {
            alert("E-mail ou mot de passe incorrect!");
        }
    } else {
        alert("Vous devez creer un compte!!");
    }
}

document.getElementById("seconnecter_btn").addEventListener(
    'click',
    loginUser
);
