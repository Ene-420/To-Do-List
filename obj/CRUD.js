import { Files } from "./files"

export const crud = ()=>{

    const libraryBooks=[new Files('Monday Lecture'),new Files('Tuesday Lecture'),new Files('Wednesday Lecture')]

    function readAll(){
        return libraryBooks;
    }


    function read(item){
        return libraryBooks[item];
    }

    return{ readAll, read};
}