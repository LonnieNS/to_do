const listContainer = document.querySelector('.list_container');
let form = document.querySelector('#add_task_form');


let listArray = [
    
];



const addNewTask = (index) => {
    listContainer.innerHTML += `
    <div class="list_item_container">
        <div class="list_btn_container">
            <div class="done_btn border">
                <p>
                    <i class="fa fa-check" aria-hidden="true"></i>
                </p>
            </div>
            <div class="remove_btn border" id="${index}">
                <p>-</p>
            </div>
        </div>
        <p class="list">${listArray[index]}</p>
    </div>
    `  
};



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { taskName } = e.target.elements;
    
    listArray.push(taskName.value); //Pusher det indtastede til enden af arrayet.
    let newTaskIndex = listArray.length - 1; //sætter newTaskIndex til indexet af det sidste element i arrayet.

    addNewTask(newTaskIndex);

    let doneBtn = document.querySelectorAll('.done_btn');

    doneBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.target.classList.toggle('highlighted');
        })
    });

    let removeBtn = document.querySelectorAll('.remove_btn');

    removeBtn.forEach (item=> {
        item.addEventListener('click', (e) => {
            let specificItemID = e.currentTarget.id;
            listArray.splice(specificItemID, 1);
            console.log(listArray);
        });
    });
}); 
 

/* NOTER TIL I MORGEN: Slet knappen fjerner elementet fra Arrayet, men ikke siden. 

NYT PROBLEM: Punkterne skal slettes i den rækkefølge de er tilføjet, ellers passer ID og array-index ikke længere sammen. */