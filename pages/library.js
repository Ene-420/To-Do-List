const library =() =>{
    
    const contentLibrary = document.querySelector('.content-library');


    function createFile(item){
        const fileDiv = document.createElement('div');
        const priorityLabel = document.createElement('div');
        const fileTitle = document.createElement('h1')
        const date = document.createElement('span');

        fileDiv.classList.add('files');
        fileTitle.textContent = item.getTitle();
        if(item.constructor.name ==='To-Do'){
            date.textContent = item.getDueDate();
            priorityLabel.classList.add(`${item.getPriority()}`)   
        }
        else{
            date.textContent = item.getDays();
            priorityLabel.classList.add('note-tag');
        }



        fileDiv.appendChild(priorityLabel);
        fileDiv.appendChild(fileTitle);
        fileDiv.appendChild(date);

        return fileDiv;
    }
}