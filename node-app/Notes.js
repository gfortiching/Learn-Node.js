console.log(); // Global

setTimeout();
clearTimeout();

setInterval();
clearInterval();

// Using window

window.console.log // Other way

var message = "";

window.message // Other way



function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Gabriel');



var message = '';
console.log(global.message);

var sayHello = function () {

}

window.sayHello();