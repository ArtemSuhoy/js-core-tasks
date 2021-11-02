const body = document.body;

const table = () => {
   const table =  document.createElement('table');
    table.id = 'table';
    // table.setAttribute('onclick', 'delegate()');
    document.querySelector('.wrapper').append(table);

}


const addLayout = () => {
    for(let r = 0; r < 6; r++){
        let tr = document.createElement('tr')
        tr.id = `row-${r+1}`;
        document.querySelector('table').append(tr);

        for(let c = 0; c<6; c++) {
            let td = document.createElement('td');
            td.id = `col-${r+1}${c + 1}`;
            // td.setAttribute('onclick','invert()')
            document.body.querySelectorAll('tr')
                .forEach(item => item.append(td));
        }
    }
}


const delegate = () =>{
    const wrapper = document.getElementById('wrapper');
    console.log(wrapper);
    wrapper.addEventListener('click', (event) =>{
        if(event.target.closest('td')){

            (event.target.className == 'green')?
                event.target.className = ''
                : event.target.classList.add('green');

        }
    })
}
delegate();


const changeColor = () =>{
    let invert = document.getElementsByClassName('green')
        console.log(invert)
    Object.values(invert).map(item => item.className = 'red')
}






// const invert = () =>{}