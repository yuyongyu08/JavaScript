let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

arr1.intersect(arr2) //返回交集：[3]
arr1.union(arr2) //返回并集：[ 1, 2, 3, 4, 5 ]
arr1.complement(arr2) //返回补集：[ 1, 2, 4, 5 ]
