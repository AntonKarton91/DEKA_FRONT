import React, {useState} from "react";


export default function NewTaskForm({showForm, clearForm, addTask}) {

    const [newTaskDescription, setNewTaskDescription] = useState('')


    function add(e) {
        e.preventDefault()
        if(newTaskDescription){
            const desk = {
                id: Date.now(),
                name: newTaskDescription,
                participants: []
            }
            addTask(desk)
            clear()
        }

    }

    function clear() {
        setNewTaskDescription('')
        clearForm()
    }

    if (showForm){
        return (
            <form className='new-task-form'>
                    <textarea
                        value={newTaskDescription}
                        onChange={e => setNewTaskDescription(e.target.value)}
                        className='new-task-form-input'
                        type="text"
                    />
                <div className='button-row'>

                    <button
                        onClick={add}
                        type='submit'
                        className='new-task-form-add'
                    >
                        Добавить карточку
                    </button>

                    <div className="material-symbols-outlined" onClick={clear}>
                        close
                    </div>
                </div>
            </form>
        )
    }
    return null
}