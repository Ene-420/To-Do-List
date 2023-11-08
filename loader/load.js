

export const  renderHeader = () =>{
    const body = document.querySelector('body');

    const headDiv = document.createElement('header');
    headDiv.classList.add('head');

    const headItems = ['TO-DO', 'NOTES'];
    const navHead = document.createElement('nav');
    navHead.classList.add('head-nav');
    const listItems = document.createElement('ul')
    

    headItems.forEach(item => {
        const headListItem = document.createElement('li');
        const itemBtn = document.createElement('button');
        itemBtn.classList.add('head-nav-btn');

        itemBtn.textContent = item;
        headListItem.append(itemBtn);

        listItems.appendChild(headListItem);
    })

    navHead.appendChild(listItems);
    headDiv.appendChild(navHead);
    body.appendChild(headDiv);


 }


 export const renderBody = () =>{
    const body = document.querySelector('body');

    const bodyDiv = document.createElement('main');

    bodyDiv.classList.add('content')

    body.appendChild(bodyDiv)
 }
 