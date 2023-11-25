import { projectMenu } from "../pages/libraryMenu";

export const header = (item) =>{
    const body = document.querySelector('body');
    const headerDiv = document.querySelector('.head')
    const headerText = document.querySelector('.header-text');
    const switchButton = document.querySelector('.switch-button');


    switchHeader()

    


    function createHeader(item){
        const headDiv = document.createElement('header');
        headDiv.classList.add('head');

        const itemHeader = document.createElement('h2');
        const switchBtn = document.createElement('button');
        
        itemHeader.textContent = item;
        itemHeader.classList.add('header-text')
        switchBtn.textContent = item === 'Notes'? `To-Do-List` : `Notes`;
        switchBtn.classList.add('switch-button');
        //switchBtn.setAttribute('value', `${switchBtn.textContent}`)

        switchBtn.onclick = function(e){
            projectMenu(e.target.textContent)
            header(e.target.textContent)
        }
        const navHead = document.createElement('nav');
        navHead.classList.add('head-nav');

        navHead.appendChild(itemHeader);
        navHead.appendChild(switchBtn)
        headDiv.appendChild(navHead);
        body.appendChild(headDiv);
    }

    function updateHeader(item){
        headerText.textContent = item

        switchButton.textContent =  item === 'Notes'? `To-Do-List` : `Notes`;
    }


    function switchHeader(){
        if(headerDiv){
            updateHeader(item)
        }
        else{
            createHeader(item)
        }
    }
}