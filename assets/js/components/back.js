

/**
 * 
 * @param {string} classCss name class 
 * @param {string} content html content 

 */
function back(classCss, content) {
    let html=`
   
        <div class="${classCss}"  >
            ${content}
        </div>    
    `;
    return html;
}



