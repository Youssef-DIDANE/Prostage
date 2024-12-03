document.getElementById("submit_btn").addEventListener('click', (e) => {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_verified = document.getElementById("password_verified").value;

    e.preventDefault();

    if (password === password_verified) {
        console.log(document.cookie)
        var data = document.cookie.split("; ").find(row => row.startsWith('users='))
        console.log(data)
        if(data){
            var Allusers = data.split("=")[1]
            document.cookie = "users="+Allusers+",email:"+email+",password:"+password;
        }else{
            document.cookie = "users=email:"+email+",password:"+password;
        }
        document.cookie = "loggedIn=false";
        console.log(document.cookie);

        alert("Utilisateur enregistré avec succès !");
        window.location.href = "Se Connecter.html";
    } else {
        alert("Les mots de passe ne correspondent pas !");
    }
});
