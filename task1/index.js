console.log('Hello word');
let body = document.body;

// const hasClass = (node) =>{
//     let elements = body.querySelector(node);
//   return   ( elements.className == false) ? console.log('Class notFound') : console.log(elements.className, ' <---- Class');
// };

const hasClass = (node) =>{
    let elements = body.querySelector(node);
    return   ( elements.className == false) ? console.log('Class notFound') : console.log(elements.className, ' <---- Class');
};


const addClass = (node, klass) => {
   let id = document.querySelector(node)
    // ( id.className == false)?  id.className = klass : console.log('Класс уже есть');
    if(id.className == false){
       return id.className = klass;
    } else {
       return id.classList.add(klass);
    }
}

const addNodes = () => {
    let createElem = document.createElement('p');
    createElem.innerHTML = 'New elements';

    console.log(document.querySelector('#paragraph'))
   return  document.querySelector('#paragraph').after(createElem);
}

// const removeClass =(node, attribute) =>{
//     console.log('------------------- Class removed --------------------')
//     console.log(node, attribute);
//     return document.querySelector(node).removeAttribute(attribute);
// }

const removeClass =(node) =>{
    console.log('------------------- Class removed --------------------')
    return document.querySelector(node).className = '';
}

