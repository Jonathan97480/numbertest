
/**
 * Generate modal Profil
 */
function getModalProfil() {


    const html=`
    <div  class="profil">
        <img class="avatar" src="${user.avatar}"/>
        <h2>${user.name}</h2>
        <p>${user.age}</p>
        <button id="btn-profil" class="btn" >fermer votre profile</button>
    </div>`;

    document.querySelector('main').innerHTML+=modalDraw(html);
    addEventProfilModal();

}


/**
 * Add event clcik in the btn profil modal
 */
function addEventProfilModal() {


    document.getElementById('btn-profil').addEventListener('click', () => {

        document.getElementById('modal').remove();

        restoreGameEvent();

    });

}





