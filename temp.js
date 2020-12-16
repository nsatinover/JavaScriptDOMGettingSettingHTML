// function say(something) {
//     console.log(something);
// }

function exec(func, arg) {
    func(arg);
}

exec((something) => {
    console.log(something);
}, 'hi, there');

window.setTimeout((something) => {
    console.log(something);
}, 3000, 'Greetings, everyone!');