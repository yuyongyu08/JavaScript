class UltimateBase{
    constructor(obj){
        this.obj = obj
    }
}

class UltimateWB extends UltimateBase{
    get MAIN () {
        return this.obj.WB
    }

    getUserInfo(){
        return {
            name: '58',
        }
    }
}

class UltimateAJK extends UltimateBase{
    get MAIN () {
        return this.obj.AJK
    }

    getUserInfo(){
        return {
            name: 'ajk',
        }
    }
}

exports.UltimateWB = UltimateWB;
exports.UltimateAJK = UltimateAJK;
