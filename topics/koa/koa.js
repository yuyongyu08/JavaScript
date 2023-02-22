class Koa {
  constructor() {
    this.middlewareList = [];
    this.context = {
      request: null,
      response: null,
    };
  }

  use(middleware) {
    this.middlewareList.push(middleware);
  }

  compose(middlewareList) {
    return function (ctx) {
      function dispatch(index) {
        const middleware = middlewareList[index];
        if (!middleware) return;
        return middleware(ctx, dispatch.bind(null, index + 1));
      }

      return dispatch(0);
    };
  }
}

const app = new Koa();

app.use((ctx, next) => {
  console.log("A start");
  next();
  console.log("A end");
});

app.use((ctx, next) => {
  console.log("B start");
  next();
  console.log("B end");
});

app.use((ctx, next) => {
  console.log("C start");
  next();
  console.log("C end");
});

app.use((ctx, next) => {
  console.log("D start");
  next();
  console.log("D end");
});

const run = app.compose(app.middlewareList);
run();
