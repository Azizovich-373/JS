let arr = [1, 2, 4, 'alex', [1, 2], {}, null, true, false, undefined];

let str = 0;
let num = 0;
let obj = 0;
let others = 0;

arr.filter(item => {
    if (typeof item === 'string') {
        str++;
    } else if (typeof item === 'number') {
        num++;
    } else if (typeof item === 'object' && item !== null) {
        obj++;
    } else {
        others++;
    }
});

console.log("Strings:", str);
console.log("Numbers:", num);
console.log("Objects:", obj);
console.log("Others:", others);