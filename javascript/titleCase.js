function titleCase(str) {
    let str_arr = str.split(" ");
    let result = "";

    for (let i = 0; i < str_arr.length; i++) {
        str_arr[i] = str_arr[i].toLowerCase();
        str_arr[i] = str_arr[i].charAt(0).toUpperCase() + str_arr[i].slice(1);
        result = str_arr.join(" ");
    }

    return result;
}

titleCase("I'm a little tea pot");