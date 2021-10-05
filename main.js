/////////////////////////////////////Dom Objects & conatiners////////////////////////////
 
/////counter varible///////////
 let counter = 0;
 let counting = [];
 let counting_json_str = '';
 let str_card = '';

const add = document.getElementById('add');
const reset = document.getElementById('reset');
const rem = document.getElementById('rem');
const count = document.getElementById('count');

/////////////////widget area for saving count//////////////////
const main_widget = document.getElementById('main-wid');
const container_widget = document.getElementById('container-wid');
const save_btn = document.getElementById('save-btn');
let del_btn = document.querySelectorAll('.del');
const count_num = document.getElementById('count-add');



////////////////////////////event listeners and main code///////////////////////////
update();

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


//////widgte handle function and event listener
save_btn.addEventListener('click', ()=> {
    if(counter !== 0) {
        counting = [];
        if(localStorage.getItem('counting') == null) {
        //pushing the counter value for storing
        counting.push(counter);
        localStorage.setItem('counting', JSON.stringify(counting));
        
        //update list for counter
        up_list();

        //reseting counter and count display
        counter = 0;
        count.innerText = counter;
        }
        else {
            counting_json_str = localStorage.getItem('counting');
            counting = JSON.parse(counting_json_str);
            counting.push(counter);
            localStorage.setItem('counting', JSON.stringify(counting));

            //update list for counter
            up_list();
            

            //reseting counter and count display
            counter = 0;
            count.innerText = counter;
        }

    }//if statement end
});


///update list function update a list when saved new data or delete the data
function up_list() {
    counting.forEach((element, index) => {
    str_card += `<div class="widget-count" id="main-wid">
    <h5 class="count-num" id="count-add">${element}</h5>
    <button class="del" id="del-btn" onclick="del(${index})"><i class="fas fa-trash"></i></button>
    </div>`;
    });

    //reset things
    container_widget.innerHTML = '';
    container_widget.innerHTML = str_card;
    str_card = '';
}


//deleting the saved list
function del(index) {
    counting.splice(index, 1);
    localStorage.setItem('counting', JSON.stringify(counting));
    up_list();
}



///update function to update while reloading dom
function update() {
            if(localStorage.getItem('counting') == null) {
            counting = []
            }
            else {
            counting_json_str = localStorage.getItem('counting');
            counting = JSON.parse(counting_json_str);
            }

            counting.forEach((element, index) => {
                str_card += `<div class="widget-count" id="main-wid">
                <h5 class="count-num" id="count-add">${element}</h5>
                <button class="del" id="del-btn" onclick="del(${index})"><i class="fas fa-trash"></i></button>
                </div>`;
                });
                container_widget.innerHTML = str_card;
                str_card = '';
}