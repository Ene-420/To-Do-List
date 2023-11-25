const body = document.querySelector('body');

export const  renderHeader = (item) =>{
    

    // const headDiv = document.createElement('header');
    // headDiv.classList.add('head');

    // const headItems = ['TO-DO', 'NOTES'];
    // const navHead = document.createElement('nav');
    // navHead.classList.add('head-nav');
    // const listItems = document.createElement('ul')
    

    // headItems.forEach(item => {
    //     const headListItem = document.createElement('li');
    //     const itemBtn = document.createElement('button');
    //     itemBtn.classList.add('head-nav-btn');

    //     itemBtn.textContent = item;
    //     headListItem.append(itemBtn);

    //     listItems.appendChild(headListItem);
    // })

    // navHead.appendChild(listItems);
    // headDiv.appendChild(navHead);
    // body.appendChild(headDiv);

    const headDiv = document.createElement('header');
    headDiv.classList.add('head');

    const itemHeader = document.createElement('h2');
    const switchBtn = document.createElement('button');
    
    itemHeader.textContent = item;
    
    switchBtn.textContent = item === 'Notes'? 'To-Do-List' : 'Notes';
    



    
}


 export const renderBody = () =>{
   // const body = document.querySelector('body');

    const bodyDiv = document.createElement('main');

    bodyDiv.classList.add('content')

    body.appendChild(bodyDiv)
 }
 
 export const landingPage = () =>{
    const div = document.createElement('div');
    const headerMsg = document.createElement('h1');
    headerMsg.textContent = 'Welcome '

    div.appendChild(headerMsg)
    div.classList.add('landing-page')
    const landingPageBtn = ['Notes', 'To-Do-List'];
    landingPageBtn.forEach(btn =>{
        const pageBtn  = document.createElement('button')
        pageBtn.textContent = btn
        pageBtn.classList.add(`${btn.toLowerCase()}-landing-page-btn`)
        div.appendChild(pageBtn);
    })

    
    body.appendChild(div)
    //const notesBtn  = document.createElement('button')
 }