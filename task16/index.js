let a = { x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null, w: new Date() };

let copy = (obj) => {
    let copyObj = Array.isArray(obj) ? [] : {}; // Поверка является obj - array или object


    for (let  key in obj) {

        if(typeof obj[key] == 'object' && obj[key] instanceof Date){
             copyObj[key] = new Date();
        }

        if (obj.hasOwnProperty(key)){

            if (typeof obj[key] === 'object'  && obj[key] !== null && !(obj[key] instanceof Date) )
                copyObj[key] = copy(obj[key]);
            else
                copyObj[key] = obj[key];

        }

    }
    return copyObj;
}


var b = copy(a); // b — это отдельный объект
b.x = 10;
b.z[0] = 2
console.log(b, a)