
// Definición de las promesas

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Resolve');
        }else{
            reject('Reject');
        }
    });
}

const somethingWillHappen2 = () => {
    return new Promise((res,rej) => {
        if(true){
            setTimeout(() => {
                res('true');
            }, 2000);
        }else{
            const err = new Error('Error xd');
            rej(err);
        }
    });
}


// Llamado de las promesas

/* somethingWillHappen()
    .then(res => console.log(res))
    .catch(err => console.error(err)); 

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Ejecutada posterior al response'))
    .catch(err => console.error(err));
 */


// Este método nos permite llamar promesa tras promesa
Promise.all([
    somethingWillHappen(), somethingWillHappen2()
]).then(response => {
    console.log('Array of results= ', response);
}).catch(err=>{
    console.err(err);
});


