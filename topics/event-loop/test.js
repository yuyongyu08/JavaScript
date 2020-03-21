function say(msg){
    console.log(msg);
}

say('hello');

setTimeout(() => {
    say('?')
}, 5000)

setTimeout(() => {
    say('~')
})

setTimeout(() => {
    say('!')
}, 3000)


say('world');


// hello
// world
// ~
// !
// ?