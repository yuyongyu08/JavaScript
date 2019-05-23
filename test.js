let org = {
    name: 'yuyy',
    age: 18
};

let tar = {
    a:1,
    b:2,
    ...org
};

function s1(p,h,j) {
    console.log(p);
}
s1(...org);
