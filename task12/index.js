const POTATO = {type: 'Картошка', price: '15', cal: '10' };
const SALAD = {type: 'Салат', price: '20', cal: '5' };
const CHEESE = {type: 'Сыр', price: '10', cal: '20'};
const MAYO = {type: 'Майонез', price: '20', cal: '5'}

class Hamburger{
    constructor(type, price, cal) {
        this.type = type;
        this.price = price;
        this.cal = cal;
    }

    size(){
        return `${this.type}: ${this.price} тугриков, ${this.cal} калорий`;
    }

}

// class Additives{
//     constructor(type, price, cal) {
//         this.type = type;
//         this.price = price;
//         this.cal = cal;
//     }
//
//     type(){
//         return `${this.type}, ${this.price} - тугриков, ${this.cal} -калорий`;
//     }
//
// }

// const potato = new Additives('Картошка', 15, 10);
// const salad = new Additives('Салат', 20, 5);
// const cheese = new Additives('Сыр', 10, 20);

const BigHamburger = new Hamburger('Big Hamburger', 100, 40, );
const SmallHamburger = new Hamburger('Small Hamburger', 50, 20, );

console.log(BigHamburger.size());

console.log(SmallHamburger.size());


const caloriesCalc = (...props) => {
   let sum = 0;
     props.map( item => sum += +item.cal)
    return sum;
}

const priceCalc = (...props) => {
    let sum = 0;
    console.log(props);
    props.map( item => sum += +item.price)

    return sum;
}

console.log(caloriesCalc(BigHamburger, POTATO, CHEESE, SmallHamburger));
console.log(priceCalc(BigHamburger, POTATO, CHEESE, SmallHamburger));


// Не сделал защиту от ошибок. 1: Может принимать несколько бургеров, 2: Может принимать несколько добавок