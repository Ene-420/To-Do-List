import { dialog } from "./toolsDialog";

export const libraryTools = () =>{

    const libraryContent = document.querySelector('.content');

    createLibraryTools();

    const penSquare = document.querySelector('.pen-to-square');


    penSquare.addEventListener('click', openCreateMenu)

    
    function createLibraryTools(){
      const tools = ['trash','pen-to-square'];

      const toolsDiv = document.createElement('div');
      tools.forEach((item) =>{

        const toolsButton = document.createElement('button');
        const i = document.createElement('i');
        i.classList.add('fa-solid');
        i.classList.add(`fa-${item}`);
        toolsButton.classList.add(item);

        toolsButton.appendChild(i);
        toolsDiv.appendChild(toolsButton);
        toolsDiv.classList.add('library-tools')
      })

      libraryContent.appendChild(toolsDiv);
    }


    function openCreateMenu(e){
      if(e){
        dialog();
      }
    }
}