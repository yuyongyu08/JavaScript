const input = [
  { id: "1", data: "中国", pid: null },
  { id: "2", data: "北京", pid: "1" },
  { id: "3", data: "上海", pid: "1" },
  { id: "4", data: "海淀", pid: "2" },
];

const output = [
  {
    id: "1",
    data: "中国",
    pid: null,
    children: [
      { id: "2", data: "北京", pid: "1", children: [{ id: "4", data: "海淀", pid: "2" }] },
      { id: "3", data: "上海", pid: "1" },
    ],
  },
];

// 遍历 O(n²)
function list2tree1(list) {
  // 深拷贝，防止对输入的数据结构造成影响
  let input = JSON.parse(JSON.stringify(list));
  let result = [];

  input.forEach((item) => {
    if (item.pid) {
      let parent = input.find((node) => node.id === item.pid);
      parent.children = parent.children ? [...parent.children, item] : [item];
    } else {
      result.push(item);
    }
  });

  return result;
}

// 遍历 O(2n)
function list2tree2(list) {
  // 深拷贝，防止对输入的数据结构造成影响
  let input = JSON.parse(JSON.stringify(list));
  let result = [];
  let map = new Map();
  input.forEach((item) => {
    map.set(item.id, item);
  });

  input.forEach((item) => {
    if (item.pid) {
      let parent = map.get(item.pid);
      parent.children = parent.children ? [...parent.children, item] : [item];
    } else {
      result.push(item);
    }
  });

  return result;
}

// 遍历-优化 O(n)
function list2tree3(list) {
  // 深拷贝，防止对输入的数据结构造成影响
  let input = JSON.parse(JSON.stringify(list));
  let map = new Map();
  let result = [];

  for (const item of input) {
    const id = item.id;
    const pid = item.pid;

    let mapItem = map.get(id);
    mapItem = { ...item, children: mapItem?.children || [] };
    map.set(id, mapItem);

    if (pid) {
      let parent = map.get(pid);
      if (parent) {
        parent.children.push(mapItem);
      } else {
        map.set(pid, { children: [mapItem] });
      }
    } else {
      result.push(mapItem);
    }
  }

  return result;
}

// 语法极简(递归)
function list2tree4(list, pid = null) {
  return list.filter((item) => item.pid === pid).map((item) => ({ ...item, children: list2tree4(list, item.id) }));
}

console.log("1:", list2tree1(input));
console.log("2:", list2tree2(input));
console.log("3:", list2tree3(input));
console.log("4:", list2tree4(input));
