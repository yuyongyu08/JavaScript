function A(next) {
  console.log("A start");
  typeof next === "function" && next();
  console.log("A end");
}

function B(next) {
  console.log("B start");
  typeof next === "function" && next();
  console.log("B end");
}

function C(next) {
  console.log("C start");
  typeof next === "function" && next();
  console.log("C end");
}

function D() {
  console.log("D start");
  console.log("D end");
}

A(B.bind(null, C.bind(null, D)));

// const mws = [A, B, C, D];
// function compose(allMW) {
//   return allMW.reduceRight((pre, cur) => {
//     return cur.bind(null, pre);
//   });
// }

// let mwFn = compose(mws);
// mwFn();

const mws = [A, B, C, D];
function compose(allMW) {
  function dispatch(i) {
    let middleware = allMW[i];
    if (!middleware) return;
    return middleware.bind(null, dispatch(i + 1));
  }

  return dispatch(0);
}

let mwFn = compose(mws);
mwFn();
