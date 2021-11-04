class Koa{
    middlewares = [];
    context = {
        request: null,
        response: null
    }

    use(middleware){
        this.middlewares.push(middleware)
    }

    compose(){
        console.log('koa init');
        const middlewareFn = this.middlewares.reduceRight((pre, next, index, arr) => {
            return next.bind(this, this.context, pre)
        }, () => {
            console.log('koa start');
        });

        middlewareFn()
    }
}

const app = new Koa();

app.use((ctx, next) => {
    console.log('mid1 start');
    next();
    console.log('mid1 end');
})

app.use((ctx, next) => {
    console.log('mid2 start');
    next();
    console.log('mid2 end');
})

app.use((ctx) => {
    console.log('final');
})

app.compose()