//ru
function test(args){
  if(args.length < 1){
    console.log('args need!')
  }else{
    if(typeof args === 'string'){
      return args.split('').join('_')
    }else{
      return args
    }
  }
}

let str = 'abc'

String.prototype.a = test.bind(null, str)

console.log(str.a())