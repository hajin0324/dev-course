import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

type Todo = {
  id : number;
  text : string;
  isChecked : boolean;
};

const TodoList: React.FC = () => {
  const title: string = "To Do List";
  
  const [todos, setTodos] = useState<Todo[]> (
    [
      {id : 1, text : 'Study', isChecked : false},
      {id : 2, text : 'Sleep', isChecked : false},
      {id : 3, text : 'Meeting', isChecked : false}
    ]
  );

  const [newTodo, setNewTodo] = useState<string>('');

  const handleCheckedChange = (itemId : number) => {
    setTodos(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, isChecked : !item.isChecked } : item
      )
    )
  }

  const addTodo = () => {
    if(newTodo.trim() !== ''){
      setTodos([...todos, { id : Date.now(), text : newTodo, isChecked : false }]);
      setNewTodo('');
    }
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return(
    <div>
      <h1>{title}</h1>
      <p></p>

      <div className='container'>
        <div>
          <input type="text"
          placeholder="to do"
          style={{marginRight: "10px", writingMode: "horizontal-tb"}}
          onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className='addBtn' onClick={addTodo}>add</button>
        </div>
        <p></p>

        <div className='board'>
        <ul style={{listStyleType: "none"}}>
            {
              todos.map(todo => (
                <li key={todo.id}>
                  <input type = "checkbox"
                  style={{marginRight: "20px"}}
                  onChange={() => {
                    handleCheckedChange(todo.id);
                  }}></input>
                  <span>
                    {
                      todo.isChecked ? <del>{todo.text}</del> : <span>{todo.text}</span>
                    }
                  </span>
                  <button
                    onClick = {() => removeTodo(todo.id)}
                    className="delBtn"
                  >del</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default TodoList;