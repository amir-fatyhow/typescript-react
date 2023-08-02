import React, {useState} from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const keyPressEnter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }
    return (
        <div className='input-field'>
            <input
                onChange={changeHandler}
                value={title}
                type="text"
                id='title'
                placeholder='type here your case, please'
                onKeyPress={keyPressEnter}
            />
        </div>
    );
};

export default TodoForm;