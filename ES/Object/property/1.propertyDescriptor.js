let user = {
    name: 'yuyy'
};

console.log(Object.getOwnPropertyDescriptor(user, 'name')); //{ value: 'yuyy', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptors(user));//{ name: { value: 'yuyy', writable: true, enumerable: true, configurable: true } }