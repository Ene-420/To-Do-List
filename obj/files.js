const { intlFormatDistance } = require("date-fns");

class Files{
    constructor(title, notes){
        this.title = title;
        this.notes = notes;
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
        return intlFormatDistance(new Date(getDate()), new Date())
    }
    setNotes(text){
        this.notes = text;
    }

    setTitle(title){
        this.title = title;
    }
}

class ToDo extends Files{
    constructor(title, notes, priority, dueDate){
        super(title, notes);
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
