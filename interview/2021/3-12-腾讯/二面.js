/**
 * 3,2,3,4,5
 * 5,4,3,2,1
 * 1,2,3,3,3
 * 2,3,3,2,1
 * 
 * 有以上矩阵，给定坐标[2,2]，source=3， target=2，如果坐标值和source相等，则把source改成target。
 * 相邻的上下左右会传染：和source相等会一直传染下去。假定source和target不相同。
 * 
 * 
*/

const arrs = [
    [3, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 3, 3],
    [2, 3, 3, 2, 1]
]

function handleMatrix(matrix, point, source, target) {
    travel(matrix, point, source, target)
    return matrix
}

function getSurround(matrix, point) {
    const [x, y] = [matrix[0].length, matrix.length];

    const [up_y, down_y, left_x, right_x] = [point.y - 1, point.y + 1, point.x - 1, point.x + 1];

    const up = (0 <= up_y && up_y <= y) ? { x: point.x, y: up_y } : null;
    const down = (0 <= down_y && down_y <= y) ? { x: point.x, y: down_y } : null;
    const left = (0 <= left_x && left_x <= y) ? { x: point.x, y: left_x } : null;
    const right = (0 <= right_x && right_x <= y) ? { x: point.x, y: right_x } : null;

    return [up, down, left, right]
}

function travel(matrix, point, source, target) {
    //1.处理目标点
    changePoint(matrix, point, source, target);

    //2.处理周围点
    const surround = getSurround(matrix, point);
    surround.forEach(item => {
        item && changePoint(matrix, item, source, target, () => {
            item && travel(matrix, item, source, target);
        });
    })
}

function changePoint(matrix, point, source, target, cb) {
    const ele = matrix[point.y][point.x];
    if (ele === source) {
        matrix[point.y].splice(point.x, 1, ele)
        cb && cb();
    }
}


console.table(handleMatrix(arrs, {x:2,y:2}, 3, 2));