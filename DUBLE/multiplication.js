function createmultiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
const double = createmultiplier(5);
console.log(double(10));
console.log(double(20));
console.log(double(100));
