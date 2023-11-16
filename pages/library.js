export const library =() =>{
    
    const contentLibrary = document.querySelector('.content-library');



    function createFile(item, value){
        //const fileDiv = document.createElement('div');
        const priorityLabel = document.createElement('div');
        const fileTitle = document.createElement('h1')
        const date = document.createElement('span');
        const check = document.createElement('input');
        const fileDiv = document.createElement('button');

        fileDiv.classList.add('files');
        fileTitle.textContent = item.getTitle();
        fileTitle.style.pointerEvents = 'none';
        check.setAttribute('input', 'checkbox');
        check.style.display = 'none';
        if(item.constructor.name ==='To-Do'){
            date.textContent = item.getDueDate();
            priorityLabel.classList.add(`${item.getPriority()}`)
            fileDiv.dataset.type= 'To-Do-List';   
        }
        else{
            date.textContent = item.getDays();
            priorityLabel.classList.add('note-tag');
            fileDiv.dataset.type= 'Notes';
        }

        fileDiv.dataset.key = value;
        date.style.pointerEvents = 'none';
        priorityLabel.style.pointerEvents = 'none';

        fileDiv.appendChild(check);
        fileDiv.appendChild(priorityLabel);
        fileDiv.appendChild(fileTitle);
        fileDiv.appendChild(date);

        return fileDiv;
    }


    return{ createFile}
}