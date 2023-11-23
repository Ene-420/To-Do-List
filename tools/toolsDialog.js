import { crud } from "../obj/CRUD";
import { Files, ToDo } from "../obj/files";
import { projectMenu } from "../pages/libraryMenu";

export const dialog = ()=>{

    const notesPage = document.querySelector('.content');
    const dialog = document.querySelector('dialog');
    //let crudOperations = crud();

    showDialog()

    const cancelBtn = document.querySelector('.cancel-btn');
    const createBtn = document.querySelector('.create-btn');
    const fileRadioBtn = document.querySelectorAll('input[name = "file"]');
    const priorityRadio = document.querySelectorAll('input[name = "priority-label"]')
    const toDoInput = document.querySelector('input#to-do-list');
    const priority = document.querySelector('.priority');
    const title =  document.querySelector('#form-title')
    const form = document.querySelector('form');
    //const dateTime = document.querySelectorAll('.date-time');
    let checkedFileRadio="";
    
 
    fileRadioBtn.forEach((radioBtn) =>{
        radioBtn.onclick = checked
        if(radioBtn.checked){
            
        }
    })
    priorityRadio.forEach(radioBtn =>{

        radioBtn.onclick = showDateTime;
    })

    function checked(e){
  
        const target = e.target;
        checkedFileRadio = target.value;
        if((target.value.includes('To-Do-List')) && (target.checked)){
            if(priority){
                priority.style.display = 'block'
            //     priorityRadio.forEach(radioBtn =>{

            //     radioBtn.onclick = showDateTime();
            // })
                
            }
            
            else{
                e.target.parentNode.appendChild(createSubLabel())
            }
            
        }
        else{
            closePriority()
            
        }

    }

    cancelBtn.onclick = closeDialog;
    createBtn.onclick = createFile;

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

            // title.textContent = '';
            // radioBtn.forEach((radio) =>{
            //     radio.checked = false;
            // })
            dialog.showModal();
            dialog.style.display = 'block'
        }

        else{
            createDialog()
        }
        
    }

    function closeDialog(e){
        //console.log(e)
        const target = e.target.closest('dialog');
        
        if(target.open){
            target.close();
            target.style.display = 'none';
            closePriority()
        }
        clearSelection()
    }

    function createLabel(item, itemType){
        const fileDiv = document.createElement('div');
        const fileType = document.createElement('input');
        const fileLabel = document.createElement('label');

        // fileDiv.classList.add('priority-label')
        fileLabel.textContent = item;
        fileLabel.setAttribute('for', `${item.toLocaleLowerCase()}`);

        fileType.setAttribute('type', 'radio');
        fileType.setAttribute('name', itemType);
        fileType.setAttribute('value', `${item}`);
        fileType.setAttribute('id', `${item.toLocaleLowerCase()}`)
        
        fileDiv.appendChild(fileType)
        fileDiv.appendChild(fileLabel)
        

        if(itemType.includes('priority-label')){
            const dateTime = document.createElement('input');
            dateTime.setAttribute('type', 'datetime-local');
            dateTime.setAttribute('min', `${new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))}`)
            dateTime.setAttribute('name', 'datetime')
            dateTime.setAttribute('class', 'date-time')
            fileDiv.appendChild(dateTime);
            fileDiv.classList.add('priority-label')
        }
        return fileDiv;
    }

    function createFile(e){
        //console.log(e)
        if(title.value && checkedFileRadio){
            
            console.log(title.value)
            if(checkedFileRadio.includes('To-Do-List')){
                priorityRadio.forEach(radioBtn =>{
                    if(radioBtn.checked){
                        console.log(radioBtn.value);
                        const dateTime = radioBtn.nextSibling.nextSibling.value;
                        if(dateTime){
                            console.log(new Date(dateTime))
                            const file = new ToDo(title.value,radioBtn.value, dateTime)
                            crud().setToDo(file)
                            projectMenu()
                        }
                        //const file = new ToDo(title.value,radioBtn.value, dateTime)
                    }
                })

            }

            else{
                const file = new Files(title.value);
                crud().setNotes(file)
                projectMenu()
            }
        }
        else{
            console.log(title.value);
        }
        clearSelection()
        closePriority()
        closeDialog(e)
    }
    

    function clearSelection(){

        form.reset();
    }

    function closePriority(){
        if(priority ){
            priority.style.display = 'none';
        }
    }

    function showDateTime(e){
        console.log('here')
        let dateTime = e.target.nextSibling.nextSibling;
        if(e.target.checked){
            dateTime.style.display ='block';
        }
        priorityRadio.forEach(radioBtn =>{
            let dateTimeSibling = radioBtn.nextSibling.nextSibling;
            if(radioBtn.checked){
                console.log(dateTimeSibling);
                if(dateTimeSibling.style.display ==='none'){
                    dateTimeSibling.style.display = 'block';
                }
                
            }
            else{
                if(dateTimeSibling.style.display ==='block'){
                    dateTimeSibling.style.display = 'none';
                }
            }
        })
    }
}

