import { Files, ToDo } from "./files"
const classTransformer=  require("class-transformer");
//const serialize = require('serialize-javascript'); 


export const crud = ()=>{

    const libraryBooks=[new Files('Monday Lecture'),new Files('Tuesday Lecture'),new Files('Wednesday Lecture')]
    let notes = localStorage.getItem('Notes') ? classTransformer.deserializeArray(Files,localStorage.getItem('Notes')) : []
    let toDoList = localStorage.getItem('To-Do-List') ? classTransformer.deserializeArray(ToDo,localStorage.getItem('To-Do-List')) : []


  


    function setNotes(item){
        notes.push(item);
        notesToLS();
    }


    function setToDo(item){
        toDoList.push(item);
        toDoListToLS();   
    }

    function notesToLS(){
        this.localStorage.setItem('Notes', classTransformer.serialize(notes));
    }

    function toDoListToLS(){
        this.localStorage.setItem('To-Do-List', classTransformer.serialize(toDoList));
    }

    function getNotes(){
        return notes
    }

    function getToDoList(){
        return toDoList
    }

    function toJson(item){
        return JSON.stringify(item)
    }
    function parseJson(item){
        return JSON.parse(item)
    }
    function readAll(){
        return libraryBooks;
    }

    function read(fileType, item){
        switch(fileType){
            case 'Notes':
                return notes.find((element) => element.getTitle().includes(item));
                break;
            
            case 'To-Do-List':
                return toDoList.find((element) => element.getTitle().includes(item));
                break;
            
            default:
                break
        }
    }

    function getAll(){

        return notes.concat(toDoList)
    }
    

    return{ readAll, read, setNotes, setToDo, getNotes, getToDoList, getAll};
}