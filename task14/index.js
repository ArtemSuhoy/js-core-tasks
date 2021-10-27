const typeData = (data) =>{
   return data == null ? null : data.constructor === Array ? 'Array' : typeof(data);
}

console.log(typeData('a'));
