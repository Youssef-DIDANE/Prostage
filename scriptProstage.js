window.onload = function() {
    console.log(document.cookie);
    const loggedIn = document.cookie.split('; ').find(row => row.startsWith('loggedIn='));
    console.log(loggedIn);

    if (loggedIn && loggedIn.split('=')[1] === "true") {
        document.getElementById("stageLink").style.pointerEvents = "auto";
        document.getElementById("pfeLink").style.pointerEvents = "auto";
        document.getElementById("Guides").style.pointerEvents = "auto";
    } else {
        document.getElementById("stageLink").addEventListener(
            'click',
            (e) => {
                e.preventDefault();
                alert("Veuillez se connecter d'abord !!");
            }
        );
        document.getElementById("pfeLink").addEventListener(
            'click',
            (e) => {
                e.preventDefault();
                alert("Veuillez se connecter d'abord !!");
            }
        );
        document.getElementById("Guides").addEventListener(
            'click',
            (e) => {
                e.preventDefault();
                alert("Veuillez se connecter d'abord !!");
            }
        );
    }
};
