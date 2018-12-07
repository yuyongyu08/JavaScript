

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
