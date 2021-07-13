function mutation(arr) {
    mustContainArr = arr[1].toLowerCase().split("");
    checkArr = arr[0].toLowerCase().split("");

    for (let i = 0; i < mustContainArr.length; i++) {
        if (checkArr.indexOf(mustContainArr[i]) < 0) {
            return false;
        }
    }
    return true;

}

mutation(["floor", "for"]);