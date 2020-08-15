(function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function draw(members, init) {
        members = wash(members)
        console.log(members);

        let total = members.length
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(500, 500);
        for (var j = 0; j < total; j++) { // draw individual dots
            ctx.fillStyle = 'rgb(' + (10 * j) + ',' + (255 - 10 * j) + ',255)';
            ctx.rotate(Math.PI * 2 / total);
            ctx.font = "25px serif";
            ctx.textAlign = 'center'
            ctx.fillText(members[j], 0, 400);
        }
        ctx.restore();

        let center = Math.floor(Math.random() * total)
        let text = ''
        if(init){
            text = '学'
            ctx.font = "130px serif";
        }else{
            text = members[center]
            ctx.font = "50px serif";
        }
        ctx.textAlign = 'center'
        ctx.fillText(text, 510, 510);
    }

    function wash(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            let random = Math.floor(Math.random() * i)
            let temp = arr[i];
            arr[i] = arr[random];
            arr[random] = temp;
        }

        return arr
    }

    let members = [
        '王立娥', '李贞', '于新辉', '李春燕', '张志君',
        '王晓朦', '汤海波', '班杨杨', '高崇', '杨敏',
        '杨盛岚', '于永雨', '王永平', '尹海鹰', '王婷',
        '胡代艳', '龚虹宇', '何绪佳', '母玉飞', '丁延强',
        '白东英', '马晓林', '曲雪', '刘宇航', '张陆', '杨丽霞', '刘钰莹'
    ]

    let toggle = false;
    let timer = null;

    function handleClick() {
        toggle = !toggle;
        if (toggle) {
            timer = setInterval(() => { draw(members) }, 100)
        } else {
            clearInterval(timer)
            draw(members, true)

        }
    }

    window.handleClick = handleClick

    draw(members, true)

})(window)