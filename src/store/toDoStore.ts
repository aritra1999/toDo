import { writable } from "svelte/store";
import type { ToDo } from "./types";

export const toDos = writable<ToDo[]>([]);

export const addToDos = (text: string) => {   
    toDos.update((currToDos) => {
        return [ ...currToDos, { text, completed: false, id: Date.now() } ];
    });
}

export const deleteToDos = (id: number) => {
    toDos.update((currToDos) => currToDos.filter((currToDo) => currToDo.id !== id));
}

export const toDoCompleted = (id: number) => {
    toDos.update((currToDos) => {
        for(let i=0; i<currToDos.length; i++) 
            if(currToDos[i].id == id) 
                currToDos[i].completed = !currToDos[i].completed;
        return currToDos;
    });
}