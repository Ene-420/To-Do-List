import { crud } from "../obj/CRUD";
import { projectMenu } from "./libraryMenu";

export const notesMenu = (notesContent) =>{
    const contentBody = document.querySelector('.content');
    const contentNotes = document.querySelector('.content-notes');
    // const notesHeader = document.querySelector('.notes-page-head> h2');
    // const notesTextArea = document.querySelector('.notes-page>textarea')
    //let NotesContent = notesContent;
    let hText='', areaText = '';
    const crudOp = crud();

    // if(contentNotes){
    //     updateContentNotes(notesContent);
        
    // }else{
    //     render(notesContent)
    // }
    showNotes()

    
    const closeBtn = document.querySelector('.notes-page-head > button');
    const cancelNotesButton = document.querySelector('.cancel-notes-btn');
    const saveNotesButton = document.querySelector('.save-notes-btn')
    const notesHeader = document.querySelector('.notes-page-head> h2');
    const notesTextArea = document.querySelector('.notes-page>textarea')

    closeBtn.onclick =  closeNotes;
    cancelNotesButton.onclick = closeNotes;
    saveNotesButton.onclick = saveNewPage;
    //notesHeader.oninput = getHeaderText;
    notesTextArea.oninput = getAreaText;


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
        pageDiv.appendChild(createButtons())

        return pageDiv;
    }

    function openNotes(){
        contentBody.style.gridTemplateColumns  ='[start]1fr[start-end] 3fr [end]';
        if(contentNotes && contentNotes.style.display === 'none'){
            contentNotes.style.display = 'flex'
        }
        //contentNotes.style.display = 'flex';
    }

    function closeNotes(e){
        contentBody.style.gridTemplateColumns  ='[start]1fr[start-end] 0fr [end]';
        e.target.closest('.content-notes').style.display ="none";
    }

    function updateContentNotes(item){
        const pageHeader = contentNotes.querySelector('.notes-page-head> h2');
        const pageBody = contentNotes.querySelector('.notes-page>textarea')
        
        if(pageHeader.textContent.includes(item.getTitle())){
            openNotes();
        }
        else{
            pageHeader.textContent = item.getTitle();
            pageBody.value = item.getNotes();

            openNotes();
        }
    }

    function createButtons(){
        const button = ['Save', 'Cancel'];
        const notesBtnDiv = document.createElement('div');
        //notesBtnDiv.classList.add('notes-button-div')
        notesBtnDiv.classList.add('notes-btn-div')
        button.forEach(btn =>{
            const notesButton = document.createElement('button');
            notesButton.textContent = btn;
            notesButton.classList.add(`${btn.toLowerCase()}-notes-btn`)

            notesBtnDiv.appendChild(notesButton);
        })
        return notesBtnDiv;
    }

    function saveNewPage(e){
        let constructorName = notesContent.constructor.name;
        let headerTitle = notesHeader.textContent;
        //let notesText = notesTextArea.value;

        console.log(headerTitle);
        console.log(areaText);
        console.log(constructorName)
        if(e.target || headerTitle || areaText){
                console.log('Here')
                const itemInLS = crudOp.read(constructorName, notesContent.getTitle());
                console.log(itemInLS)
                itemInLS.getTitle() === headerTitle ? 0 : itemInLS.setTitle(headerTitle);
                itemInLS.getNotes() === areaText ? 0 : itemInLS.setNotes(areaText);

                console.log(itemInLS.getTitle())
                switch(constructorName){
                    case 'Files':
                        crudOp.notesToLS();
                        break;
                    
                    case 'ToDo':
                        crudOp.toDoListToLS();
                        break;
                }
            projectMenu()
        }
    }

    function showNotes(){
        if(contentNotes){

            console.log({notesContent})
            updateContentNotes(notesContent);
            
            
        }
        else{
            render(notesContent)
        }
    }

    // function getHeaderText(e){
    //     hText = e.target.value;
    //     console.log(hText)
    // }

    function getAreaText(e){
        areaText = e.target.value;
        //console.log(areaText)
    }
}