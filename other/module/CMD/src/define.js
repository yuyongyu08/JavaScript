/**
 * Created by yuyongyu on 2018/1/12.
 */
define('myModule', function () {
    function greet (name) {
        console.log('Hi, ' + name + '! You are Testing CommonJS')
    };

    return {
        firstName: 'yongyu',
        lastName: 'Yu',
        job: 'programmer',
        greet: greet
    }
});