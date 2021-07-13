function findLongestWordLength(str) {
    
    var str_arr = str.split(" ");
    let current_longest = 0;
    for (let contender = 1; contender < str_arr.length; contender++) {
        if (str_arr[contender].length > str_arr[current_longest].length) {
            current_longest = contender;
        }
    }
    return str_arr[current_longest].length;
}
