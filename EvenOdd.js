function evenOdd(num) {
    const even = [];
    const odd = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            even.push(num[i]);
        } else {
            odd.push(num[i]);
        }
    }
    
    return { even: even, odd: odd };
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = evenOdd(numbers)
console.log(result.even);
console.log(result.odd);