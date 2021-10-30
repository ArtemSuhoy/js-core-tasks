class ElecticNetwork{
    static POWERSTATION = { type: 'Електростанция', power: Math.max(Math.random()*100), price: '1680' };
    static SOLARBATTERY = { type: 'Солнечная батарея', power: Math.max(Math.random()*5), price: '4560'};
    static CONSUMERS = {
        type: 'Квартиры',
        appartamens: Math.floor(Math.random() * 400),
        consumingDay: 0.004,
        consumingNight: 0.001,
    }
    static ELECTRICLINE ={
        power: '20',
        price: function (max = 1.55,  min = 2) {
            return Math.random() * (max - min) + min;
        }
    }

    constructor(station, consumers) {
        if(station == ElecticNetwork.POWERSTATION || station == ElecticNetwork.SOLARBATTERY){
            this.statiom == station
        };

        if(consumers == ElecticNetwork.CONSUMERS) {
             this.consumers = consumers;
        };
    }

    calculateElectricity = () => {
        let appartaments = this.consumers.appartamens;
        let consumingDay = this.consumers.consumingDay;
        let consumingNight = this.consumers.consumingNight;
        let sum = 0;

        sum = (appartaments * 1000) * consumingNight;
        return `${sum} - Среднее количество потребления Мегаватт в 1000 домах с среднем количеством квартир в доме: ${appartaments}`
    }


}

const Home1 = new ElecticNetwork(ElecticNetwork.SOLARBATTERY, ElecticNetwork.CONSUMERS);

console.log(Home1.calculateElectricity());
