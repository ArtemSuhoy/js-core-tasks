// 1. ------------------------------------------
const sequence = (start = 0, step = 1) => {
    start -= step;
    return () => start += step;
}

const generator = sequence(10,3);

// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator());




// 2. ------------------------------------------

const generator2 = sequence(5,2);


const take = (gen, x) =>{
    let arr = []
    for(let i = 0; i < x; i++){
        arr.push(gen());
    }

    return arr;
}

// console.log(take(generator2, 4))




//3. --------------------------------------------------
const sqrt = (x) => Math.sqrt(x);
const square = (x) => x*x;
const array = [1,3,5,2, 4];
const map = (fn, array) => {
    return  array.map( (element) => fn(element));
}

// console.log(map(sqrt, array));
// console.log(array);
// console.log(map(square, array));
// console.log(array);




//4 ------------------------------------
const generator3 = sequence(3,2);

const fmap = (a, gen) => {
     return () => a(gen());
}
const squareGen = fmap(square, generator3)
// console.log(squareGen());




// 4. func add
const add = (...number) => {
    let sum = 0
    number.map(elements => sum += elements )
    return sum;
}

const fmap2 = (a, add ) => {

    return (...value) =>{
        console.log(value);
      return a( add(...value) );
    }
}
const squareAdd = fmap2(square, add);
    // console.log(squareAdd(3,5,6,9));



// 5. Partical



// 6.


// 7. Bind - google +

const bind = (fn, context) => {
    return (...args) => {
        console.log(args);
        console.log(fn);
        console.log(context);
        return fn.apply(context, [...args]);
    }
}

const ctx = { x : 2};

const testThis = function (a) {
    console.log('x= ' + this.x + ` a = ${a}`);
}

const boundFunction = bind(testThis, ctx);
// testThis(5)
boundFunction(100);



//8. pluck
const characters = [ { 'name': 'barney', 'age': '36'}, {'name':'fred', 'age':'40'} ];

const pluck = (massive, key) =>  {
    return () => {
        return massive.map( item =>{ return item[key]});
    }
}
const pluckTest = pluck(characters, 'age');

// console.log(pluckTest());



// 9. function predicat

const input = [1,2,3,4,5,6,7,8,9];

const isEvent = (x) => {
    let result = [];
    x.map( item =>{ if(item % 2 === 0){ result.push(item) } }  );
    return result;

}

const filter = (input, isEvent) => {
    return isEvent(input);
}

// console.log( filter(input, isEvent) );




// 10. counter prop object

    const a = { a: 1, b: 2};
    const ba = { a: 1, b:2, d:3, c:4, aa: 11, ab: 12, ac: 13, ad: 14}

    const count = (a) =>{
        let result = 0;

        for(let key in a){
            if(key){ result += 1;}
        }
        return result;
    }

    // console.log(count(ba));



    // 11. List view

    const listCity = [
         { country: 'Japan',city: 'Tokyo', population: '39105'},
        { country: 'India',city: 'Delhi', population: '31870'},
        { country: 'Indonesia',city: 'Jakarta', population: '35362'},
        { country: 'Brazil',city: 'Sao-Paulo', population: '22495'},
        {country: 'USA', city: 'New-York', population: '20902'},
        { country: 'Mumbai',city: 'India', population: '22186'},
        { country: 'Philippines',city: 'Manila', population: '23971'},
    ]


    const filterPopulation = (list) =>{
          return  list.sort( (a,b) => a.population > b.population ? -1 : 1);
    }

    console.log(filterPopulation(listCity));











