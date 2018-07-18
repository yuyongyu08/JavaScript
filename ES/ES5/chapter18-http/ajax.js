

function doGet(url) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onreadystatechange=function() {
        if (xhr.readyState==4 && xhr.status==200) {
            console.log(xhr);
        }
    };

    xhr.send();
}

doGet('http://www.runoob.com/try/ajax/demo_get.php');