function chunkArrayInGroups(arr, size) {
    let result = [];
    while (arr.length > 0) {
        result.push(arr.splice(0, size));
    }
    
    return result;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));