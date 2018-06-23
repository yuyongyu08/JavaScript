setTimeout(function () {
    console.log('零延迟');
}, 0);

function f1(){
    console.log('f1');
}

function asyncF1() {
    setTimeout(cb1);

    function cb1() {
        console.log('cb');
    }
}

function f2(){
    console.log('f2');
}

function asyncF2() {
    setTimeout(cb2, 2000);

    function cb2() {
        console.log('cb 2000');
    }
}



function asyncF3() {
    setTimeout(cb3, 1000);

    function cb3() {
        console.log('cb 1000');
    }
}

function f3(){
    console.log('f3');
}


f1();
asyncF1();
asyncF2();
f2();
asyncF3();
f3();