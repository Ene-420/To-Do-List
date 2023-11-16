export const dialog = ()=>{

    const notesPage = document.querySelector('.content');
    const dialog = document.querySelector('dialog');
    const formTitle = document.querySelector('form> input');
    const formRadio = document.querySelectorAll('input[name = "file"]')


    showDialog()

    const cancelBtn = document.querySelector('.cancel-btn');
    const createBtn = document.querySelector('.create-button');
    const fileRadioBtn = document.querySelectorAll('input[name = "file"]');
    const toDoInput = document.querySelector('input#to-do-list');
    const priority = document.querySelector('.priority');
    
 

    // toDoInput.addEventListener('change', ()=>{
    //     if(toDoInput.checked){
    //         console.log('checked')
    //     }
        
    // })
    fileRadioBtn.forEach((radioBtn) =>{
        radioBtn.onclick = checked
        //radioBtn.addEventListener('click', checked)
        //radioBtn.removeEventListener('change', checked)
       

    })

    function checked(e){
        console.log(e)
        const target = e.target;
        //const priorityDiv = document.createElement('div');
        if((target.value.includes('To-Do-List')) && (target.checked)){
            if(priority){
                priority.style.display = 'block'
            }
            
            else{
                e.target.parentNode.appendChild(createSubLabel())
            }
            
        }
        else{
            if(priority){
                priority.style.display = 'none'
            }
            
        }

        //target.removeEventListener('click', checked)
    }
    // toDoList.addEventListener('change', ()=>{
    //     console.log('change')
    //     if(toDoList.checked){
    //         const priorityLevel = ['top-priority', 'mid-priority', 'low-priority'];

    //         priorityLevel.forEach((priority) =>{
    //             priorityDiv.appendChild(createLabel(priority));
                
    //         })
    //         toDoList.appendChild(priorityDiv);
    //     }

    //     else{
    //         if(priorityDiv){
    //             priorityDiv.style.display = 'none';
    //         }
    //     }
    // })
    cancelBtn.onclick = closeDialog;
    //createBtn.addEventListener('click', )

    function createDialog(){
        const options =['Note', 'To-Do-List']

        const dialog = document.createElement('dialog');
        const form = document.createElement('form');
        const formDiv = document.createElement('div');
        const title = document.createElement('input');
        const radioDiv = document.createElement('div')
        const buttonDiv = document.createElement('div')
        const createBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');

        title.setAttribute('type', 'text');
        title.setAttribute('placeholder', 'Enter Title Here');
        title.setAttribute('id', 'form-title');
        createBtn.textContent = 'Create';
        cancelBtn.textContent = 'Cancel';
        
        createBtn.classList.add('create-btn');
        
        cancelBtn.classList.add('cancel-btn');
        

        options.forEach((item) =>{

            radioDiv.appendChild(createLabel(item, 'file'));

        })

        console.log(radioDiv.childNodes)
        radioDiv.childNodes.forEach(item =>{
            if(item.firstChild.id.includes('to-do-list')){
                item.appendChild(createSubLabel())
            }
        })
        
        buttonDiv.classList.add('button-div');
        buttonDiv.appendChild(createBtn);
        buttonDiv.appendChild(cancelBtn);
        form.appendChild(title)
        form.appendChild(radioDiv);
        //form.appendChild(buttonDiv)

        dialog.appendChild(form)
        dialog.appendChild(buttonDiv)
        notesPage.appendChild(dialog);

        dialog.showModal();
    }

    function createSubLabel(){
        const priorityDiv = document.createElement('div');
        priorityDiv.classList.add('priority');
        const priorityLevel = ['top-priority', 'mid-priority', 'low-priority'];

        priorityLevel.forEach((priority) =>{
            priorityDiv.appendChild(createLabel(priority, 'priority-label'));
        });

        return priorityDiv
    }

    function showDialog(){
        if(dialog){

            formTitle.textContent = '';
            formRadio.forEach((radio) =>{
                radio.checked = false;
            })
            dialog.showModal();
            dialog.style.display = 'block'
        }

        else{
            createDialog()
        }
        
    }

    function closeDialog(e){
        console.log(e)
        const target = e.target.closest('dialog');
        
        if(target.open){
            target.close();
            target.style.display = 'none';
            if(priority ){
                priority.style.display = 'none';
            }
        }
        //e.target.removeEventListener('click', closeDialog)
    }

    function createLabel(item, itemType){
        const fileDiv = document.createElement('div');
        const fileType = document.createElement('input');
        const fileLabel = document.createElement('label');

        fileLabel.textContent = item;
        fileLabel.setAttribute('for', `${item.toLocaleLowerCase()}`);

        fileType.setAttribute('type', 'radio');
        fileType.setAttribute('name', itemType);
        fileType.setAttribute('value', `${item}`);
        fileType.setAttribute('id', `${item.toLocaleLowerCase()}`)

        // fileLabel.addEventListener('click', ()=>{
        //     if(fileLabel.getAttribute('for').includes(fileType.getAttribute('id'))){
        //         fileType.checked= true;
        //     }
        // })
        
        fileDiv.appendChild(fileType)
        fileDiv.appendChild(fileLabel)

        return fileDiv;
    }
    
}

