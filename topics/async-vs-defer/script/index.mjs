export default (num) => {
    console.log(`delay${num}s.js start execute`, new Date().getMilliseconds());

    setTimeout(() => console.log(`delay${num}s.js setTimeout callback `, new Date().getMilliseconds()), num * 1000)
}