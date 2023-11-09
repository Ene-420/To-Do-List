export const notesMenu = () =>{
    const contentBody = document.querySelector('.content');

    render()

    function render(){

        contentBody.style.gridTemplateColumns  ='[start]1fr[start-end] 3fr [end]';
        
        const contentNotes = document.createElement('div');
        contentNotes.classList.add('content-notes');

        contentNotes.appendChild(createPage());
        contentBody.appendChild(contentNotes)
    }
    

    function createPage(item){
        const pageDiv = document.createElement('div');
        const pageHead = document.createElement('div');
        const pageTitle = document.createElement('h2');
        const closeButton = document.createElement('button');
        const i = document.createElement('i');
        const pageText = document.createElement('textarea'); 

        pageDiv.classList.add('notes-page');
        pageTitle.textContent= '';
        pageTitle.setAttribute('contenteditable', 'true');

        i.classList.add('fa-solid');
        i.classList.add('fa-xmark')
        closeButton.appendChild(i);

        pageHead.appendChild(pageTitle);
        pageHead.appendChild(closeButton);

        pageDiv.appendChild(pageHead);
        pageDiv.appendChild(pageText);

        return pageDiv;
    }
}