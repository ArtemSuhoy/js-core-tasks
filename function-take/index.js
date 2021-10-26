const sequence = (start = 0, step = 1) => {
    start -= step;
    return () => start += step;
}

const generator = sequence(10,3);

console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());