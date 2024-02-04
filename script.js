const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');
const clicarpes = document.querySelector('.barrapes');
const passar = document.querySelector('.barrapes:hover');
const settings = document.querySelector('.config')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
})

document.addEventListener('mousedown', (Event) => {
    if(settings.contains(Event.target) || $checkbox.contains(Event.target))  {
        $checkbox.style.display = 'block';

    }else{
        $checkbox.style.display = 'none';

    }
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




