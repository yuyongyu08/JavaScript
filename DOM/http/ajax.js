
/**
 * xhr.readyState
 * 0-XMLHttpRequest实例化
 * 1-open()被执行
 * send()被执行，进入xhr.onreadystatechange
 * 2-请求被接受
 * 3-请求被处理
 * 4-请求被处理完成并返回
 * 
*/
function doGet(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onreadystatechange=function() {
        if (xhr.readyState==4 && xhr.status==200) {
            callback(xhr);
        }
    };

    xhr.send();
}

document.getElementById('btn').addEventListener('click', function () {
    doGet('http://www.runoob.com/try/ajax/demo_get.php', function (data) {
        console.log(data);
    });
});
