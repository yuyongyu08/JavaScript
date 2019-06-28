"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var Student =
    /*#__PURE__*/
    function () {
        function Student(firstName, lastName) {
            _classCallCheck(this, Student);

            this.firstName = firstName;
            this.lastName = lastName;
        }

        _createClass(Student, [{
            key: "greeter",
            value: function greeter() {
                console.log("Hello, ".concat(this.firstName, ".").concat(this.lastName));
            }
        }]);

        return Student;
    }();

var student = new Student('yu', 'yongyu');
student.greeter();
