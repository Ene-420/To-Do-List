export const notesMenu = (item) =>{
    const contentBody = document.querySelector('.content');
    const contentNotes = document.querySelector('.content-notes');
    const notesHeader = document.querySelector('.notes-page-head> h2');
    const notesTextArea = document.querySelector('.notes-page>textarea')

    //const 

    if(contentNotes){
        updateContentNotes(item);
        
    }else{
        render(item)
    }
    

    
    const closeBtn = document.querySelector('.notes-page-head > button');

    closeBtn.addEventListener('click', closeNotes);

    function render(item){

        openNotes();
        
        const contentNotes = document.createElement('div');
        contentNotes.classList.add('content-notes');

        
        contentBody.appendChild(contentNotes)
        contentNotes.appendChild(createPage(item));
    }
    

    function createPage(item){
        const pageDiv = document.createElement('div');
        const pageHead = document.createElement('div');
        const pageTitle = document.createElement('h2');
        const closeButton = document.createElement('button');
        const i = document.createElement('i');
        const pageText = document.createElement('textarea'); 

        pageDiv.classList.add('notes-page');
        pageTitle.textContent = item.getTitle();
        pageTitle.setAttribute('contenteditable', 'true');

        i.classList.add('fa-solid');
        i.classList.add('fa-xmark')
        closeButton.appendChild(i);
        pageHead.classList.add('notes-page-head')
        if(item.getNotes()){
            pageText.textContent = item.getNotes();
        }
        pageText.setAttribute('placeholder', 'Enter Text Here');
        pageHead.appendChild(pageTitle);
        pageHead.appendChild(closeButton);

        pageDiv.appendChild(pageHead);
        pageDiv.appendChild(pageText);

        return pageDiv;
    }


    function openNotes(){
        contentBody.style.gridTemplateColumns  ='[start]1fr[start-end] 3fr [end]';
        //contentNotes.style.display = 'flex';
    }


    function closeNotes(e){
        contentBody.style.gridTemplateColumns  ='[start]1fr[start-end] 0fr [end]';
        e.target.closest('.content-notes').style.display ="none";
    }

    function updateContentNotes(){

    }
}