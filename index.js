function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    function namedFunction() {
        // Function body, can be empty for the test
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
        // Function body, can be empty for the test
    };
}