export const libraryTools = () =>{

    const libraryContent = document.querySelector('.content-library');

    createLibraryTools();

    
    function createLibraryTools(){
      const tools = ['trash','pen-to-square'];

      const toolsDiv = document.createElement('div');
      tools.forEach((item) =>{

        const toolsButton = document.createElement('button');
        const i = document.createElement('i');
        i.classList.add('fa-solid');
        i.classList.add(`fa-${item}`);

        toolsButton.appendChild(i);
        toolsDiv.appendChild(toolsButton);
      })

      libraryContent.appendChild(toolsDiv);
    }
}