function formatColor(color: string): string {


}

toString(16)
输入：'RGB(0, 10, 255)'

输出：'#000AFF'




实现一个 flat 方法，可以根据传入的层级展开对应深度的数组嵌套：

   ```js
   // 例子：

   var arr1 = [1, 2, [3, 4], [5, 6]];

   arr1.flat();

   // [1, 2, 3, 4, 5, 6]    

   

   var arr2 = [1, 2, [3, 4, [5, 6]], [7, 8]];

   arr2.flat();

   // [1, 2, 3, 4, [5, 6], 7, 8]

   

   var arr3 = [1, 2, [3, 4, [5, 6]]];

   arr3.flat(2);

   // [1, 2, 3, 4, 5, 6]

   

   //使用 Infinity，可展开任意深度的嵌套数组

   var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

   arr4.flat(Infinity);

   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

   

   Array.prototype.flat = function(depth = 1) {

   

   }

   ```