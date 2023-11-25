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

notesBtn.onclick= function(e){
    console.log(e.target)
    landingPageDiv.style.display = 'none'
}