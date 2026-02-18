import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSumbit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSumbit}>
            <label style={{ color: 'green' }} >Escribe tu nuevo TODO</label>
            <textarea
                className="TodoForm-textarea"
                placeholder="Escribe aquí tu nuevo TODO"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button 
                    TodoForm-button--cancel"
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button 
                    TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };
