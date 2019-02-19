;(function(global){
    class Events {
        constructor(){
            this.cache = {};
            this.onceKeys = [];
        }
        on(key, fn){
            if(!this.cache[key]) this.cache[key] = [];
            this.cache[key].push(fn);
        }
        one(key, fn){
            this.cache[key]=[];
            this.on(key, fn);
            this.onceKeys.push(key);
        }
        off(key, fn){
            if(this.cache[key]) this.cache[key] = fn ? this.cache[key].filter(v=>v !== fn) : [];
        }
        emit(key, ...args){
            if(this.cache[key]){
                this.cache[key].forEach(v=>v.apply(null, args))
                if(this.onceKeys.includes(key)){
                    this.cache[key] = [];
                    this.onceKeys = this.onceKeys.filter(v=>v!==key);
                }
            }
        }
    }

    global.Events = new Events();
})(this)

