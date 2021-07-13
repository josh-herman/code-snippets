function factorialize(num) {
    let product = 1;
    while (num > 1) {
        product *= num;
        num--;
    }
    return product;
}