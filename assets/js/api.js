/**
 * récupère des données à intérieure d'une Api
 * @param {String} url 
 * @param {String} request 
 * @returns {JSON}
 */
async function getDatatoApi(url, request) {

    const init={
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    return await fetch(url+request, init).then((response) => {

        return response.json()
    })
}


function setDatatoApi(url, request, data) {




    fetch(url+request+`/name:${data.name}/age:${data.age}/dif:${data.dif}/score:${data.gain}/avatar:${data.avatar}/error:${data.errorCunt}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'


    })
}