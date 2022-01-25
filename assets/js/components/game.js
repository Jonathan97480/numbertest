let pubStatus={
    isActive: false,
    time: 0
};

let startGain=500



function initGame() {
    startGain=500;
    chance=3;
    user.gain=0;
    user.errorCunt=0;
}


/**
 * define structure form the game
 * @returns {string} return html code 
 */
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

/**
 * add event submit to form game and mange logique game
 */
function submitNumber() {

    let form=getForm()

    form.addEventListener('submit', (event) => {

        let h=document.querySelector('h1');

        event.preventDefault()

        for (let index=0;index<form.elements.length;index++) {
            const item=form.elements.item(index);

            if (item.value>getRandomNumber()) {

                h.setAttribute('class', 'moin')
                h.innerHTML="MOINS"

                ClearH(h)
                SubstracChance()
                addError()
                form.elements.item(index).value=""
                return

            } else if (item.value<getRandomNumber()) {
                h.setAttribute('class', 'plus')
                h.innerHTML="PLUS"
                ClearH(h)
                SubstracChance()
                addError()
                form.elements.item(index).value=""
                return
            }

            /* Le jouer a Ganier */
            user.gain=startGain;
            document.querySelector('main').innerHTML+=modalDraw(ContentEndGame("BIEN JOUER", "RECOMMENCER", "RETOURNER A L'ACCEUIL"));
            AddEventContentGame();
            /* save player to database api */
            setDatatoApi('http://www.portfolio.jon-dev.fr/Api/', 'registrePlayer', user);


        }
    })
}

/**
 * clear content h1 htmlElement to 2 seconds
 * @param {HTMLElement} h the h corresponds to the h1 tag of the page which displays less or more
 * @returns{void}
 */
function ClearH(h) {
    setTimeout(() => { h.innerHTML="" }, 2000);
}

/**
 * manages the display of the try number that the player has and
 *  offers him advertising if he no longer has enough try 
 * @returns{void}
 */
function SubstracChance() {

    chance--;
    document.getElementById('chance').innerHTML=`Nombre d'essai : ${chance}`
    startGain-=30;
    if (chance<=0) {

        confirm(
            "Voulez vous regarder une pub pour  récupérait 3 essais"
        )? document.querySelector('main').innerHTML+=Pub():looseGame();
    } else if (startGain<=0) {
        startGain=0;
        looseGame();
    }
}


/**
 * manages the display of the error number
 * @returns{void}
 */
function addError() {
    user.errorCunt++;
    document.getElementById('error').innerHTML=`Nombre d'erreures : ${user.errorCunt}`;
    document.getElementById('start-gain').innerHTML=`Jeton de départ : ${startGain}`


}

/**
 * generate an advertisement and display in the modal
 * @returns {string} html code
 */
function Pub() {
    /* define time pub  */
    pubStatus.time=30;
    pubStatus.isActive=true;
    timerDeconte(pubStatus.time);

    const listMedai=[
        "https://www.youtube.com/embed/ubDF5aLEld0",
        "https://www.youtube.com/embed/KszZ_i0mOdg",
        "https://www.youtube.com/embed/AQXVHITd1N4",
        "https://www.youtube.com/embed/ubDF5aLEld0"
    ]
    const curentPub=listMedai[Math.floor(Math.random()*listMedai.length)];

    const html=`
        <div class=video>
            <span id="btnBlock" ></span>
         <iframe width="560" height="315" src="${curentPub}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   

        </div>
    `
    return modalDraw(html);
}

/**
 * generate the modal element
 * @param {string} content html code (cotent the modal) 
 * @returns {string} html code
 */
function modalDraw(content) {

    const html=`<div class="modal"id="modal" >
        <span class="modalContent" >${content}<span>
    </div>`

    return html;
}

/**
 * number of seconds before the ad can be cansel
 * @param {number} time  
 * @return{void}
 */
function timerDeconte(time) {
    let timeInterval=setInterval(() => {
        document.getElementById('btnBlock').innerHTML=`${pubStatus.time} seconde avant de pouvoir passer la pub`;

        pubStatus.time--;

        pubStatus.time<=0?
            stopTime(timeInterval):"";


    }, 1000)

}

/**
 * stop interval pub time andd abb button passed 
 * @param {object} interval the interval to use for the advertisement timer
 * @return{void}
 */
function stopTime(interval) {

    clearInterval(interval)
    document.getElementById('btnBlock').innerHTML=`<button id="btnPub">Passer la pub</button>`;

    document.getElementById('btnPub').addEventListener('click', () => {

        passPub();

    });
}

/**
 * remove pub and add 3 try the player and rezt pub status
 * @returns{void}
 */
function passPub() {

    document.getElementById('modal').remove();

    pubStatus.isActive=false;
    pubStatus.time=0;

    restoreGameEvent();
}

/**
 * restore all event necessary the game
 * @returns {void}
 */
function restoreGameEvent() {

    /* Clear All event  */
    let elem=document.querySelector('main');
    elem.replaceWith(elem.cloneNode(true));

    /* restore all event game */
    addChance();

    submitNumber();

    eventClassment();
}

/**
 * add 3 try the player
 * @return{void}
 */
function addChance() {
    chance=0;
    chance=+ 3;
    document.getElementById('chance').innerHTML=`Nombre d'essai : ${chance}`

}

/**
 * return number randon 
 * @param {number} limit 
 * @returns {void}
 */
function setRandomNumber(limit) {
    let v=Math.floor(Math.random()*limit);
    return v;
}


/**
 * get number genrate to function setRandomNumber
 * @returns {number}
 */
function getRandomNumber() {
    return mynumber;
}

/**
 * genre modal if player loose game
 * @returns {void}
 */
function looseGame() {

    document.querySelector('main').innerHTML+=modalDraw(ContentEndGame("VOUS AVER PERDU LE BON CHIFFRE EST: "+getRandomNumber(), 'RECOMENCER', 'ABANDONER'));
    AddEventContentGame()
}


/**
 * will generate the content of the end game madal (loose and win)
 * @param {string} text the texte display header content 
 * @param {string} btnValideTexte  text the button valide
 * @param {string} btnDesmissTexte text the button cancel
 * @returns {string} html code
 */
function ContentEndGame(text, btnValideTexte, btnDesmissTexte) {

    const html=`
        <div class="looseBox">
            <span class="Bheader" >${text}</span>       
            <span class="Bbody" >
            <button id="btn1">${btnValideTexte}</button>
            <button id="btn2">${btnDesmissTexte}</button>
            </span>       
        <div>

    `;

    return html;
}


/**
 * Adds a click event on the buttons that 
 * is displayed at the end of the game 
 */
function AddEventContentGame() {

    document.getElementById("btn1").addEventListener('click', () => game());
    document.getElementById("btn2").addEventListener("click", () => StartGame())
}

/**
 * return card list classment all player
 * @returns {Promise} 
 */
async function ClassmentUser() {


    /* Get data to api */

    let html=""

    await getDatatoApi('http://www.portfolio.jon-dev.fr/Api/', 'getAllPlayer').then((result) => {

        const data=result.results;

        html+=`<div id="cls" class="classment">`;

        data.map((player) => {

            player.dif==parseInt(user.dif)?

                html+=`<span>
                <img src="assets/img/${player.avatar}" / >
                <h3>${player.name}</h3>
                <p>${player.score}</p>
             </span>`:"";


        })

        html+=`</div>
            <div class="btnctrl" id="clsBtn">
                <img src="assets/img/Right.png" />
            </div>`;

    })
    return html;

}

/**
 * Add event list all user 
 */
function eventClassment() {



    document.getElementById('clsBtn').addEventListener('click', () => {

        let btn=document.getElementById('clsBtn');
        let cls=document.getElementById('cls');

        cls.className=='classment'?
            cls.setAttribute('class', 'classment activeClassment'):
            cls.setAttribute('class', 'classment');

        btn.className=='btnctrl'?
            btn.setAttribute('class', 'btnctrl activeBtnClassment'):
            btn.setAttribute('class', 'btnctrl');



    })


}

/* CHOICE AVATAR  */
function getAvatar(urlAvatar) {

    user.avatar=urlAvatar;
    game()

}

function SelectAvatarDraw() {

    let main=document.querySelector('main');

    main.innerHTML="<h1>Sélectionner un avatar</h1>";

    let div=document.createElement('div');

    div.className="list-avatar";

    defaultAvatar.map((avatar) => {
        console.log(avatar)
        let img=document.createElement('img');
        img.setAttribute('src', `assets/img/${avatar}`);
        img.setAttribute('onclick', `getAvatar('${avatar}')`);
        div.appendChild(img);


    })

    main.appendChild(div);

}



