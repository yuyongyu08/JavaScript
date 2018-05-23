color = 'red';

var o = {color: 'green'};

function getColor() {
    console.log(this.color);
}


getColor.apply();
getColor.apply(this);
getColor.apply(o);