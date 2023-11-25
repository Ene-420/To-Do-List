import { crud } from "../obj/CRUD";
import { libraryTools } from "../tools/libraryTools";
import { library } from "./library";
import { notesMenu } from "./notes";

export const projectMenu =()=>{
    const contentBody = document.querySelector('.content');
    const libraryPage = contentBody.querySelector('.content-library')
    const newLibrary = library();
    
    displayContent()
    //render();
    const libraryContent = document.querySelectorAll('.files')
    const deleteBtn = document.querySelectorAll('.trash-btn');

    libraryContent.forEach((file) =>{
        file.onclick = openNotes
    })

    deleteBtn.forEach(btn =>{
        btn.onclick = deleteFileOnScreen
    })

    function openNotes(e){
        if(e.target.dataset.key){
            const childELements = e.target.children;
       
            let fileContents =  crud().read(e.target.dataset.type, childELements.item(2).textContent);
            
            const notes = notesMenu(fileContents);
        }  
    }

    function render(){
        let fileList = crud().getAll();

        if(libraryPage){
            createLibraryPageContent(libraryPage);

            contentBody.appendChild(libraryPage)
        }
        else{
            const contentLibrary = document.createElement('section');
            contentLibrary.classList.add('content-library');

            createLibraryPageContent(contentLibrary)
            contentBody.appendChild(contentLibrary);
        }  
    }

    function deleteFileOnScreen(e){
        const crudOp = crud();
        const target = e.target.parentNode.parentNode.closest('.files')
        //console.log(e.target.dataset.type)

        let fileContents =  crudOp.read(target.dataset.type, target.children.item(2).textContent);
        
        target.dataset.type === 'Notes' ? crudOp.deleteItemInNotes(fileContents)
        : crudOp.deleteItemInToDoList(fileContents);
        
        projectMenu()
    }
    
    function reRender(){
        console.log(libraryPage.childElementCount)
        if(libraryPage.children.length > 0){
            libraryPage.replaceChildren();

            
        }

        render();
    }

    function displayContent(){
        if(libraryPage){
            reRender()
        }

        else{
            
            libraryTools();
            render()
        }
    }

    function createLibraryPageContent(div){
        let fileList = crud().getAll();
        //const div = document.createElement('div');
        if(fileList){
            for(let i=0; i < fileList.length; i++){
                div.appendChild(newLibrary.createFile(fileList[i], i))
            }
        }
        

        //return div;
    } 
}
//projectMenu()