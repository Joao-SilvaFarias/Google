const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');
const clicarpes = document.querySelector('.barrapes');
const passar = document.querySelector('.barrapes:hover');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('light-mode');
})
 
document.addEventListener('mousedown', (Event) => {
    if(clicarpes.contains(Event.target))  {
        clicarpes.style.background = 'var(--barrapes-bg-hover)';
        clicarpes.style.boxShadow = '5px 5px 5px var(--shadow)';
    }else{
        clicarpes.style.background = 'none';
        clicarpes.style = '.barrapes:hover';
    }
})




