var inputVar = document.getElementById("var");
var formElem = document.getElementById("user-var");

formElem.onsubmit = function(event) {
    inputInt = inputVar.value;


    if ( inputInt === 10) {
        console.log('execute')
    }

const promise = new Promise((resolve, reject) => {



    setTimeout(() =>  {
        if ( inputInt === 10) {
            console.log('execute')
            resolve('RESOLVED')
        } else {
            reject('REJECTED')
        }
    }, 1000)
});

promise.then(data => {
    console.log(data);
}).catch(err => {
    console.warn(err)
});
}