import { Files } from "./files"

export const crud = ()=>{

    const libraryBooks=[new Files('Monday Lecture'),new Files('Tuesday Lecture'),new Files('Wednesday Lecture')]
    let notes = localStorage.getItem('Notes') ? parseJson(localStorage.getItem('Notes')) : []
    let toDoList = localStorage.getItem('To-Do-List') ? parseJson(localStorage.getItem('To-Do-List')) : []

    function setNotes(item){
        notes.push(item);
        localStorage.setItem('Notes', toJson(notes));
    }


    function setToDo(item){
        toDoList.push(item);
        localStorage.setItem('To-Do-List', toJson(toDoList));
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
                return notes[item]
                break;
            
            case 'To-Do-List':
                return toDoList[item];
                break;
            
            default:
                break
        }
    }

    function getAll(){
        return notes.concat(toDoList)
    }
    function read(item){
        return libraryBooks[item];
    }

    return{ readAll, read};
}