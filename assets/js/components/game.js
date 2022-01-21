function GameDraw(classCss) {

    let html=`<div class="${classCss}" id="f1">

           <h1 class="defaultNotif" id="notif">MOIN</h1>
           
           <form >
                <label>Choiser un nombre</label>
                <input  name="value"/>
           </form>
    
    </div>`

    return html;

}

function submitNumber() {
    let form=getForm()
    form.addEventListener('submit', (event) => {

        event.preventDefault()

        for (let index=0;index<form.elements.length;index++) {
            const item=form.elements.item(index);

            if (item.value>getRandomNumber()) {

                /* Affihcer un message pour dire que ces moin */
                /* deconter le nombre déssais a jouter le nombre derreur  */

                return

            } else if (item.value<getRandomNumber()) {

                /* Affihcer un message pour dire que ces plus */
                /* deconter le nombre déssais a jouter le nombre derreur  */

                return
            }

            /* Le jouer a Ganier */
            /* afficher un message de vistoire  */
            /* sauvgarder sont resulta dans la base de donée */
            /* Afficher les classement */

        }
    })
}

function SubstracChance() {
    /* retirait 1 ho nombre dessais disponible */

    /* si le jouer na plus déssais lui proposer une pube */
    /* si oui afficher une madal avec une video  */
}
function addError() {
    /* Ajouter plus 1 au erreure quil a efectuer */
}


function Pub() {
    /* choisire une pub dans un tableau de video */
    /* afficher la pub en modal */
}

function modalDraw(ClassCss, content) {
    /* definire la modal et son contenue */
}

function timerDeconte(time) {
    /* deconte le temps avant de passer la pub */
}

function passPub() {
    /* close modal pub  */
}

function addChance(number) {
    /* rajoute de la chance au jouer  */
}

function setRandomNumber(limit) {
    let v=Math.floor(Math.random()*limit);
    return v;
}
function getRandomNumber() {
    return mynumber;
}