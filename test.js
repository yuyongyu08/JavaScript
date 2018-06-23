function Student(name){
    var name = name;
    function privateFunc(){
        console.log("This is a private fucntion");
    }
    this.showName = function(){
        privateFunc();
        console.log(name);
    }

}
Student.prototype.protoFunction = function(){
    //console.log(name);
    this.showName();
}

var stu = new Student("Jim")
stu.showName();
stu.protoFunction();

