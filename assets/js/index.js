
/* user varaible default value */
let user=new Object
let mynumber=0

/* {
    name: "",
    age: "",
    avatar: "",
    errorCunt: 0,
    gain: 0,
    dif: "",
    date: "",

} */

let defaultAvatar=[
    "assets/img/avatar1",
    "assets/img/avatar2",
    "assets/img/avatar3",
    "assets/img/avatar4"
]

StartGame()

function StartGame() {
    let html=" <h1>LE JUSTE NOMBRE</h1>"
    html+=back('back', formRegister("registerForm"));

    document.getElementById("main").innerHTML=html;

    submitForm();

    /**
     * 
     * @param {string} age
     * @returns  
     */



}



function game() {
    let html="";

    html+=back('back', GameDraw("gameForm"))

    document.getElementById("main").innerHTML=html;

    submitNumber();
}




