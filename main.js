/////////////////////////////////////Dom Objects & conatiners////////////////////////////
 
/////counter varible///////////
 let counter = 0;

const add = document.getElementById('add');
const reset = document.getElementById('reset');
const rem = document.getElementById('rem');
const count = document.getElementById('count');



////////////////////////////event listeners and main code///////////////////////////
add.addEventListener('click', ()=>{
    counter++;
    count.innerText = counter; 
});

rem.addEventListener('click', ()=>{
    if(counter > 0) {
        counter--;
        count.innerText = counter; 
    }
});

reset.addEventListener('click', ()=>{
    counter = 0;
    count.innerText = counter; 
});

