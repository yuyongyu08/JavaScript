let user = {
    name: 'yuyy'
};

Object.defineProperty(user, 'name', {
    value: 'yyy'
});

console.log(user.name);