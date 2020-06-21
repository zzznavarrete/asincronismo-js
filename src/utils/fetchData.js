const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Método para consultar data desde una API
const fetchData = (url_api, callback) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        // Como primer parámetro se pasa el método de petición, luego la url, y luego si es que se ejecutará asincronicamente.
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            // Si el valor es igual a 4 es porque está completado.
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api));
            }
        });
        xhttp.send();
    })
}


module.exports = fetchData;