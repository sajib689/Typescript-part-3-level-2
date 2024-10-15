type Alpha = string | number
function add(param1: Alpha, param2: Alpha) : Alpha {
    if(typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

console.log(add(3,4))