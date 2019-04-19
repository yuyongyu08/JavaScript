var x = 1;
{
    function xx() {
        console.log('ss', this.x)
    }
}
xx()


var x = 1;
(function xx() {
    console.log('ss', this.x)
})();