function showDetailInfo(age, gender) {
    console.log(`My name is ${this.name}, I am ${age} years old, and I am a ${gender}.`);
}

let user = {
  name: 'yuyy'
};

showDetailInfo.call(user, 18, 'boy');

showDetailInfo.apply(user, [18, 'boy']);

showDetailInfo.bind(user)(18, 'boy');