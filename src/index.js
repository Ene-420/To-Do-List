import { header } from "../loader/header";
import { renderHeader, renderBody, landingPage } from "../loader/load";
import { projectMenu } from "../pages/libraryMenu";
import './style.css';
import 'es6-shim';
import 'reflect-metadata';


// renderHeader()
// renderBody()
// projectMenu();

landingPage()

const notesBtn = document.querySelector('.notes-landing-page-btn');
const toDoBtn = document.querySelector('.to-do-list-landing-page-btn')
const landingPageDiv = document.querySelector('.landing-page')
//const switchPageBtn = document.querySelector('.switch-button')

notesBtn.onclick= removeLandingPageAndOpenHeader
toDoBtn.onclick = removeLandingPageAndOpenHeader

// const switchPageBtn = document.querySelector('.switch-button')
// switchPageBtn.onclick = function(e){
//     console.log(e.target.value)
// }


function removeLandingPageAndOpenHeader(e){
    landingPageDiv.style.display = 'none'
    header(e.target.textContent)
    renderBody();
    projectMenu(e.target.textContent)
}

