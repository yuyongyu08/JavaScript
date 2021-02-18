setTimeout(() => {console.info(1)},0);
new Promise( resolve => {
    console.info(2);
    resolve();
    console.info(3);
}).then(() => {console.info(4);  return 6}).then((data) => {console.info(data)})
console.info(5);

//我的：2,5,3,4,6,1

//实际：2,3,5,4,6,1
