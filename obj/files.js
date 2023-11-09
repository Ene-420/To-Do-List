const { intlFormatDistance } = require("date-fns");

export class Files{
    constructor(title){
        this.title = title;
        this.notes = '';
        this.dateCreated = new Date();
    }

    getTitle(){
        return this.title;
    }

    getNotes(){
        return this.notes;
    }

    getDate(){
        return `${this.dateCreated.getFullYear()}-${this.dateCreated.getMonth()+1}-${this.dateCreated.getDate()}`
    }

    getDays(){
        return intlFormatDistance(new Date(this.getDate()), new Date())
    }
    setNotes(text){
        this.notes = text;
    }

    setTitle(title){
        this.title = title;
    }
}

export class ToDo extends Files{
    constructor(title, priority, dueDate){
        super(title);
        this.priority = priority;
        this.dueDate = dueDate; 

    }


    getPriority(){
        return this.priority;
    }

    getDueDate(){
        const dday= intlFormatDistance( new Date(this.dueDate),new Date(getDate()))
        return dday;
    }

    setPriority(priority){
        this.priority = priority;
    }

    setDueDate(date){
        this.dueDate = date;
    }
}
