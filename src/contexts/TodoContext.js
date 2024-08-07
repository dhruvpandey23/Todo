import { createContext, useCallback, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id:1,
            todo:"Todo Message",
            completed:false
        }
    ],

    addTodos : (todos)=>{},
    updateTodo : (id,todos) =>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id) =>{}
})



export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider