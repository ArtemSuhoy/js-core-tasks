const a = { x: 1, y: 2, z: [1, 2, 3] };
const shallowCopy = (a) => {
    return Object.assign([], a);
}

const b = shallowCopy(a);


b.x = 10;
console.log(a.x + ' a.x')
console.log(b.x + ' b.x');

b.z[0] = 4;
console.log(a.z[0] + ' a.x');
console.log(b.z[0] + ' b.x');

