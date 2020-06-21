const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

// Método para consultar data desde una API
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    // Como primer parámetro se pasa el método de petición, luego la url, y luego si es que se ejecutará asincronicamente.
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event){
        // Si el valor es igual a 4 es porque está completado.
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                // Recibo la data en string pero en estilo JSON, por lo que necesito parsearlo una vez tenga la data.
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error: ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

// En esta función vamos a buscar la siguiente información a la API
// 1. Cantidad de personajes
// 2. Nombre del primer personaje en el array retornado en la primera petición
// 3. Dimensión del personaje retornado en la segunda petición
fetchData(API, function(error1, data1){
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
});