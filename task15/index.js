const a = { x: 1, y: 2, z: [1, 2, 3] };
c = new Date(2021, 10, 28);
// console.log(c.constructor == Date)

const shallowCopy = (a) => {
    if(a.constructor === Date){
        return new Date(a);
    }
    return Object.assign( {} ,a);
}


const b = shallowCopy(a);
const d = shallowCopy(c);


console.log(d + ' <------ copy Date');

b.x = 10;
console.log(a.x + ' a.x')
console.log(b.x + ' b.x');

b.z[0] = 4;
console.log(a.z[0] + ' a.x');
console.log(b.z[0] + ' b.x');

