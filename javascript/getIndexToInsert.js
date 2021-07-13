function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => {
        return a - b;
    });
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            return i;
        }
    }
}

getIndexToIns([40, 60], 50);