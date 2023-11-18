import { crud } from "../obj/CRUD";
import { libraryTools } from "../tools/libraryTools";
import { library } from "./library";
import { notesMenu } from "./notes";

export const projectMenu =()=>{
    const contentBody = document.querySelector('.content');
    
    const contentLibrary = document.createElement('section');
    contentLibrary.classList.add('content-library');
    const newLibrary = library();
    const crudOperations = crud();

    
    libraryTools();
    render();
    const libraryContent = document.querySelectorAll('.files')

    libraryContent.forEach((file) =>{
        file.onclick = openNotes
    })


    function openNotes(e){
        console.log(e.target)
        e.target.lastElementChild.style.display = 'none';
        let fileContents =  crudOperations.read( e.target.type,parseInt(e.target.dataset.key));
        console.log(fileContents)
        const notes = notesMenu(fileContents);

        //e.target.removeEventListener('click', openNotes)
    }

    function render(){

        let fileList = crudOperations.getAll();
        console.log(fileList);
        for(let i=0; i < fileList.length; i++){
            contentLibrary.appendChild(newLibrary.createFile(fileList[i], i))
        }
        
        contentBody.appendChild(contentLibrary);
    }
    
}