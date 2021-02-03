/**
 * 入参：传入任意个坐标
 * 出参：覆盖所有坐标的最小坐标和最大坐标
 */
function getAreaCoordinate(arr) {
    //普通
    // arr.sort((a, b) => a.x > b.x);
    // let minX = arr[0].x;
    // let maxX = arr[arr.length - 1].x;
    // arr.sort((a, b) => a.y > b.y)[0].y;
    // let minY = arr[0].y
    // let maxY = arr[arr.length - 1].y;

    //最优
    let first = arr[0];
    let minX = maxX = first.x, minY = maxY = first.y;
    arr.forEach(item => {
        item.x > minX && (minX = item.x);
        item.x < maxX && (maxX = item.x);
        item.y > minY && (minY = item.y);
        item.y < maxY && (maxY = item.y);
    });

    return [{ x: minX, y: minY }, { x: maxX, y: maxY }]
}

const arr = [{ x: 1, y: 1 }, { x: 3, y: 5 }, { x: 7, y: 1 }, { x: 12, y: 5 }, { x: 14, y: 13 }, { x: 6, y: 1 }]

console.table(getAreaAccord(arr)) 