Array.prototype.myFilter = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue;
        fn.call(context, arr[i], i, this) && filteredArr.push(arr[i])
    }
    return filteredArr
}

const createDebounceFunction = (fn, ms) => {
    let timeout;
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }

        clearTimeout(timeout);

        timeout = setTimeout(fnCall, ms)
    };
}
