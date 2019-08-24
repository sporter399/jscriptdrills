var inputVar = document.getElementById("var");
var formElem = document.getElementById("user-var");

formElem.onsubmit = function(event) {
    event.preventDefault();

    inputInt = inputVar.value;
    testInt = parseInt(inputInt);


    if ( testInt === 10) {
        console.log('execute one')
    }

const promise = new Promise((resolve, reject) => {



    setTimeout(() =>  {
        if ( testInt === 10) {
            console.log('execute two')
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

if ( testInt === 10) {
    console.log('execute three')
}
}
