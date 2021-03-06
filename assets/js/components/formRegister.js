

/**
 * define structure form register user 
 * @param {string} classCss name class 
 * @returns {String} Html element
 */
function formRegister(classCss) {

    let html=`
        <form class="${classCss}">
            <span class="error" id="error" ></span>
            <span class="userBlock">
                 <label for="name">Votre nom</label>
                 <input type="text" id="name" name="name" required />
            </span>
            <span class="userBlock">
                 <label for="age">Votre année de naissance</label>
                 <input type="number" id="age" name="age" maxlength = "4" required/>
            </span>
            <span class="selectDif">
                <span>
                    <input type="radio" id="v30" onclick="boxRadioCheked('v30')"  name="dif" value="30" checked/>
                    <label for="v30">Facile (0->30)</label>
                </span>
                <span>
                    <input type="radio" id="v100"  onclick="boxRadioCheked('v100')"  name="dif" value="100"/>
                    <label for="v100">Normal (0->100)</label>
                </span>
                <span>
                    <input type="radio" id="v200"  onclick="boxRadioCheked('v200')" name="dif" value="200"/>
                    <label for="v200">Dificile (0->200)</label>
                </span>

            </span>
            <input class="btn" name="status" type="submit" value ="PARTICIPER"/>
        </form>

    `;

    return html

}

/**
 * recovered form in the document html
 * @returns {HTMLFormElement}
 */
function getForm() {
    const form=document.querySelector('form');
    return form
}

/**
 * add event submit to form
 * @returns {void}
 */
function submitForm() {
    const myForm=getForm()
    myForm.addEventListener('submit', (e) => { submit(e, myForm) })


}

/**
 *  check the age of the user
 * @param {string|number} age 
 * @returns 
 */
function checkAge(age) {

    if (age.length==4) {

        let date=new Date().getFullYear();
        if (date-parseInt(age)>=18) {

            return age;

        } else {
            throw new Error("Vous n'avez pas l'age requis pour participer a ce jeu")
        }

    } else {
        throw new Error("Votre année de naissance ne doit pas être supérieure à 4 chiffres ou inférieure à 4 chiffres");
    }




}


/**
 *  manage data submit for user by the form
 * @param {Event} event 
 * @param {HTMLFormElement} form 
 * @returns {void}
 */
function submit(event, form) {

    event.preventDefault()

    var obj={};

    for (let i=0;i<form.elements.length;i++) {
        let item=form.elements.item(i);

        if (item.name=="age") {
            try {
                item.value=checkAge(item.value)
            } catch (error) {
                document.getElementById('error').innerHTML=error.message;
                return;
            }

        }

        if (item.name=="dif"&&item.checked==true) {
            obj[item.name]=item.value;
        } else if (item.name!="dif") {
            obj[item.name]=item.value;

        }



    }
    user=obj

    user.avatar=defaultAvatar[Math.floor(Math.random()*defaultAvatar.length)];
    user.errorCunt=0;
    user.gain=0;
    console.log(user);
    mynumber=setRandomNumber(user.dif);
    removeSubmit(form);
    SelectAvatarDraw();
}

/**
 *  remove event submit atached frorm register user 
 * @param {HTMLFormElement} form 
 */
function removeSubmit(form) {
    form.removeEventListener('submit', (e) => submit(e, form), false)
}

/**
 * define status box radio 
 * @param {string} id box radio selected 
 */
function boxRadioCheked(id) {



    switch (id) {
        case 'v30':
            document.querySelector('#'+id).checked=true;
            document.querySelector('#v100').checked=false;
            document.querySelector('#v200').checked=false;
            break;

        case 'v100':
            document.querySelector('#'+id).checked=true;
            document.querySelector('#v30').checked=false;
            document.querySelector('#v200').checked=false;
            break;

        default:
            document.querySelector('#'+id).checked=true;
            document.querySelector('#v100').checked=false;
            document.querySelector('#v30').checked=false;
            break;
    }


}
