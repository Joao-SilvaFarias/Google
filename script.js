const clicar = document.querySelector('.barrapes');
const passar = document.querySelector('.barrapes:hover');

document.addEventListener('mousedown', (Event) => {
    if(clicar.contains(Event.target))  {
        clicar.style.background = 'rgb(57, 57, 57)';
    }else{
        clicar.style.background = 'none';
        clicar.style = '.barrapes:hover';
    }
})