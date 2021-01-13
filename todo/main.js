let todoInput = document.querySelector('.todo__input');
let box = document.querySelector('.box');

function addTask() {
    todoInput.addEventListener('keydown', (e) => {
        if (todoInput.value !== '' && e.code === 'Enter') {
            createLabel()
            crossText();
            editTask()
            removeTask();
        }
        // if (todoInput.value !== '' && e.code === 'Enter') {

        //     let task = document.createElement('label');
        //     task.classList.add('label');
        //     task.innerHTML = `
        //         <input class="checkbox" type="checkbox">
        //         <span class="checkbox__style"></span>
        //         <span class="label__text">${todoInput.value}</span>
        //         <button class="edit">
        //             <img src="edit-button.svg" alt="">
        //         </button>
        //         <button class="close">
        //             <img src="cancel.svg" alt="">
        //         </button>
        // `;

        //     box.append(task);

        //     todoInput.value = '';

        // }

        
    });

    let addBtn = document.querySelector('.btn__add');

    addBtn.addEventListener('click', function () {
        if (todoInput.value !== '') {
            createLabel()
            crossText();
            editTask()
            removeTask();
        }
    })
    
}

function createLabel() {

        let task = document.createElement('label');
        task.classList.add('label');
        task.innerHTML = `
                <input class="checkbox" type="checkbox">
                <span class="checkbox__style"></span>
                <span class="label__text">${todoInput.value}</span>
                <button class="edit">
                    <img src="edit-button.svg" alt="">
                </button>
                <button class="close">
                    <img src="cancel.svg" alt="">
                </button>
        `;

        box.append(task);

        todoInput.value = '';

    
}



addTask()

function editTask() {
    let editBtn = document.querySelectorAll('.edit');

    editBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.previousElementSibling.setAttribute('contenteditable', true);
            btn.previousElementSibling.focus();
            document.execCommand('selectAll', false, null);
            document.getSelection().collapseToEnd();
        })
    })
}

editTask() 

function crossText() {
    let checkbox = document.querySelectorAll('.checkbox');

    checkbox.forEach(item => {
        item.addEventListener('change', () => {
            if (item.checked == true) {
                item.parentNode.classList.add('label--crosed')
            } else {
                item.parentNode.classList.remove('label--crosed')
            }
        })
    });
}

crossText();

function removeTask() {
    let closeBtn = document.querySelectorAll('.close');

    closeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentNode.remove();
        })
    })
}

removeTask()








