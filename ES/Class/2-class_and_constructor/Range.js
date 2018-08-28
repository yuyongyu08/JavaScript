/**
 * 构造函数
 *
 */
function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to
    },

    foreach: function (f) {
        for(var i = Math.ceil(this.from); i < this.to; i++) f(i)
    },

    toString: function () {
        return "(" + this.from + "..." + this.to + ")"
    }
};

var r = new Range(1, 3);

r.includes(2);
r.foreach(console.log);
console.log(r.toString());
console.log(r instanceof Range);