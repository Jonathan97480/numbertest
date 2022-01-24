
/* user varaible default value */
let user={
    name: "",
    age: "",
    avatar: "",
    errorCunt: 0,
    gain: 0,
    dif: "",
    date: "",
};

let mynumber=0;
let chance=3;

/*
*Array avatar local url
*/
let defaultAvatar=[
    "assets/img/avatar1.png",
    "assets/img/avatar2.png",
    "assets/img/avatar4.png",
    "assets/img/avatar5.png",
    "assets/img/avatar6.png",
    "assets/img/avatar7.png",
    "assets/img/avatar8.png",
    "assets/img/avatar9.png",
    "assets/img/avatar10.png",
    "assets/img/avatar11.png",
    "assets/img/avatar12.png",
    "assets/img/avatar13.png",
    "assets/img/avatar14.png",
    "assets/img/avatar1.png",
    "assets/img/avatar16.png",
    "assets/img/avatar17.png",
    "assets/img/avatar18.png"
]

//Launch game
StartGame()


/**
 * Generate screen register player
 * @returns {void}
 */
function StartGame() {

    let html=" <h1>LE JUSTE NOMBRE</h1>"

    html+=back('back', formRegister("registerForm"));



    document.getElementById("main").innerHTML=html;

    submitForm();

}


/**
 * Generate Game screen
 * @return {void}
 */
function game() {

    let html=`<header>
                <span id="chance">Nombre d'essai : ${chance}</span>
                <span id="error">Nombre erreure : ${user.errorCunt}</span>
                <span class="profil-block">
                    <img class="avatar" src="${user.avatar}" onclick="getModalProfil()"/>
                </span> 
                </header>
    `;

    mynumber=setRandomNumber(user.dif);

    html+=back('back', GameDraw())

    html+=ClassmentUser();

    document.getElementById("main").innerHTML=html;

    submitNumber();

    eventClassment();
}




