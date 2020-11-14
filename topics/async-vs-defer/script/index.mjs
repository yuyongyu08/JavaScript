export default (num) => {
    console.log(`delay${num}s.js start execute!`);

    setTimeout(() => console.log(`delay${num}s.js setTimeout callback executed! `), num * 1000)
}