const POTATO = {type: 'Картошка', price: '15', cal: '10' };
const SALAD = {type: 'Салат', price: '20', cal: '5' };
const CHEESE = {type: 'Сыр', price: '10', cal: '20'};
const MAYO = {type: 'Майонез', price: '20', cal: '5'}

class Hamburger{
    //STUFFING
    static POTATO = {type: 'Картошка', price: '15', cal: '10' };
    static SALAD = {type: 'Салат', price: '20', cal: '5' };
    static CHEESE = {type: 'Сыр', price: '10', cal: '20'};
    //Topping
    static MAYO = {type: 'Майонез', price: '20', cal: '5'};
    static SPICE = {type: 'Приправа', price: '15', cal: '0'};

    //Hamburger
    static BIGSIZE = { type: 'Большой гамбургер', price: '100', cal:'40'};
    static SMALLSIZE = { type: 'Маленький гамбургер', price: '50', cal:'20'};

    constructor(size, stuffing, topping){
        //Size
        if( size == Hamburger.BIGSIZE  || size == Hamburger.SMALLSIZE){
            this.size = size
        } else {
            console.log('Неверно указанное первое значение HAMBURGER SIZE')
        }

        //Stuffing
        if( stuffing == Hamburger.POTATO || stuffing == Hamburger.CHEESE || stuffing == Hamburger.SALAD) {
            this.stuffing = stuffing;
        } else {
            console.log('Неверно указанное второе значение HAMBURGER STUFFING')

        }


        //Topping
        if(topping == Hamburger.MAYO || topping == Hamburger.SPICE){
            this.topping = topping;
        }

    }

    addToping = (prop = '') => {
        if(this.topping == Hamburger.SPICE || this.topping == Hamburger.MAYO){
            return ` addToping: добавки уже имеются`
        }

       if(prop.toLowerCase() == 'spice') {
          return  this.topping = Hamburger.SPICE;
        } else if (prop.toLowerCase() == 'mayo'){
           return this.topping = Hamburger.MAYO;
        }
    };
    removeTopping = ( prop = '') => {
        if(this.topping == Hamburger.SPICE || this.topping == Hamburger.MAYO){
            this.topping = null
        }
    }
    getCaloriesCalc = () => {
            try {
                let sum = 0;
                let hamburger = +this.size.cal;
                let stuffing = +this.stuffing.cal;
                let topping;
                try {
                    topping = +this.topping.cal
                } catch (e) {
                    topping = 0;
                }
                return `${sum = hamburger + stuffing + topping} Calories <--- Total Calories `;
            } catch (e) {
                return `${e.name} \n ${e.message}`;
            }
         };
    getPriceCalc = () => {
         try {
             let sum = 0;
             let hamburger = +this.size.price;
             let stuffing = +this.stuffing.price;
             let topping;
             try {
                 topping = +this.topping.price
             } catch (e) {
                 topping = 0;
             }
             return `${sum = hamburger + stuffing + topping} Tugrikov <--- Total Price `;
         } catch (e) {
             return `${e.name} \n ${e.message}`;
         }
    };
}



// const BigHamburger = new Hamburger(Hamburger.BIGSIZE, Hamburger.SALAD);
const SmallHamburger = new Hamburger(Hamburger.SMALLSIZE, Hamburger.CHEESE);


console.log(SmallHamburger.getPriceCalc()) // Узнать цену
console.log(SmallHamburger.getCaloriesCalc()) // Узнать Количество калорий

SmallHamburger.addToping(); 'Добавить добавку в () <- указать spice || mayo'
SmallHamburger.removeTopping(); 'Убрать добавку'
