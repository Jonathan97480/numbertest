function GameDraw() {

    let html=`<div class="gameForm" id="f1">

           <h1 class="" id="notif"></h1>
           
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

        let h=document.querySelector('h1');

        event.preventDefault()

        for (let index=0;index<form.elements.length;index++) {
            const item=form.elements.item(index);

            if (item.value>getRandomNumber()) {

                h.innerHTML="MOIN"
                ClearH(h)
                SubstracChance()
                addError()
                form.elements.item(index).value=""
                return

            } else if (item.value<getRandomNumber()) {
                h.innerHTML="PLUS"
                ClearH(h)
                SubstracChance()
                addError()
                form.elements.item(index).value=""
                return
            }

            /* Le jouer a Ganier */
            /* afficher un message de vistoire  */
            /* sauvgarder sont resulta dans la base de donée */
            /* Afficher les classement */

        }
    })
}

function ClearH(h) {
    setTimeout(() => { h.innerHTML="" }, 2000);
}

function SubstracChance() {

    chance--;

    if (chance<=0) {

        confirm(
            "Vouslez vous regarder une pube pour  récuperait 3 essai"
        )? document.querySelector('main').innerHTML+=Pub():looseGame();
    }
}
function addError() {
    user.errorCunt++;
}


function Pub() {
    let listMedai=[
        "https://www.youtube.com/embed/5GS_AAxZeFc",
        "https://www.youtube.com/watch?v=qetW6R9Jxs4"
    ]
    /* TODO: rajouter une selection des pub en Random */
    let html=`
        <div class=video>
            <span id=btnBlock" ><span>
         <iframe width="560" height="315" src="${listMedai[0]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   

        </div>
    `
    return modalDraw(html);
}

function modalDraw(content) {

    let html=`<div class="modal" >
        <span class="modalContent" >${content}<span>
    </div>`

    return html;
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

function looseGame() {

}