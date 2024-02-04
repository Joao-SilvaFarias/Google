const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');
const clicar = document.querySelector('.barrapes');
const passar = document.querySelector('.barrapes:hover');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('light-mode');
})
 
document.addEventListener('mousedown', (Event) => {
    if(clicar.contains(Event.target))  {
        clicar.style.background = 'var(--barrapes-bg-hover)';
    }else{
        clicar.style.background = 'none';
        clicar.style = '.barrapes:hover';
    }
})




