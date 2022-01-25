
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

let apiData=null;

/*
*Array avatar local url
*/
let defaultAvatar=[
    "avatar1.png",
    "avatar2.png",
    "avatar4.png",
    "avatar5.png",
    "avatar6.png",
    "avatar7.png",
    "avatar8.png",
    "avatar9.png",
    "avatar10.png",
    "avatar11.png",
    "avatar12.png",
    "avatar13.png",
    "avatar14.png",
    "avatar1.png",
    "avatar16.png",
    "avatar17.png",
    "avatar18.png"
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
    initGame()

    let html=`<header>
                <span id="chance">Nombre d'essai : ${chance}</span>
                <span id="error">Nombre erreure : ${user.errorCunt}</span>
                <span id="start-gain">Jeton de départ : ${startGain}</span>

                <span class="profil-block">
                    <img class="avatar" src="assets/img/${user.avatar}" onclick="getModalProfil()"/>
                </span> 
                </header>
    `;

    mynumber=setRandomNumber(user.dif);

    html+=back('back', GameDraw())

    ClassmentUser().then((htmlElement) => {
        console.log(htmlElement)
        html+=htmlElement;
        document.getElementById("main").innerHTML=html;
        submitNumber();
        eventClassment();


    });





}




