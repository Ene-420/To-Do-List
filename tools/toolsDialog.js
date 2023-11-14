export const dialog = ()=>{

    const notesPage = document.querySelector('.content');
    const dialog = document.querySelector('dialog');
    const formTitle = document.querySelector('form> input');


    showDialog()

    const cancelBtn = document.querySelector('.cancel-btn');
    const createBtn = document.querySelector('.create-button')
 
    cancelBtn.addEventListener('click', closeDialog);
    createBtn.addEventListener('click', )

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
        createBtn.textContent = 'Create';
        cancelBtn.textContent ='Cancel';
        
        createBtn.classList.add('create-btn');
        cancelBtn.classList.add('cancel-btn');

        options.forEach((item) =>{
            const fileDiv = document.createElement('div');
            const fileType = document.createElement('input');
            const fileLabel = document.createElement('label');

            fileLabel.textContent = item;
            fileLabel.setAttribute('for', `${item}`);

            fileType.setAttribute('type', 'radio');
            fileType.setAttribute('name', 'File');
            fileType.setAttribute('value', `${item}`);

            fileDiv.appendChild(fileType)
            fileDiv.appendChild(fileLabel)
            radioDiv.appendChild(fileDiv);

        })
        buttonDiv.classList.add('button-div');
        buttonDiv.appendChild(createBtn);
        buttonDiv.appendChild(cancelBtn);
        form.appendChild(title)
        form.appendChild(radioDiv);
        form.appendChild(buttonDiv)

        dialog.appendChild(form)
        notesPage.appendChild(dialog);

        dialog.showModal();
    }


    function showDialog(){
        if(dialog){
            dialog.showModal();
            dialog.style.display = 'flex'
            formTitle.textContent = '';
        }

        else{
            createDialog()
        }
        
    }

    function closeDialog(e){
        const target = e.target.closest('dialog');
        
        if(target.style.display === 'flex'){
            target.close();
            target.style.display = 'none';
        }
    }
    
}

