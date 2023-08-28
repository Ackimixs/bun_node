var sortingBubble = function (arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i; j < len; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
};
var createRandomArray = function (length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 1000));
    }
    return arr;
};
var isSorted = function (arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (arr[i] > arr[i + 1])
            return false;
    }
    return true;
};
var main = function () {
    var arr = createRandomArray(100000);
    var date = new Date();
    arr = sortingBubble(arr);
    console.log(new Date().getTime() - date.getTime());
    console.log(isSorted(arr));
};
main();
