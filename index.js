function receivesAFunction(callback) {
  return callback();
}

let myFunction = function () {
  return "returns a function";
};
function returnsANamedFunction() {
  return myFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    return "xyz";
  };
}
