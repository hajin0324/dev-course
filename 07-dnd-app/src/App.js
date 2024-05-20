import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const fruitsColor = [
  {
    id: 'red',
    name: 'apple'
  },
  {
    id: 'yello',
    name: 'banana'
  },
  {
    id: 'blue',
    name: 'blueberry'
  },
  {
    id: 'purple',
    name: 'grape'
  }
]

function App() {

  const [fruits, setFruits] = useState(fruitsColor)

  const handleEnd = (result) => {
    if(!result.destination) return;

    const items = Array.from(fruits);

    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem)

    setFruits(items)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fruits Color</h1>          

        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId='fruits'>
            {(provided) => (
              <ul 
                className='fruits'
                {...provided.droppableProps} 
                ref={provided.innerRef}
              >
                {
                  fruits.map(({id, name}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>
                              { name }
                            </p>
                          </li>
                        )}
                      </Draggable>
                    )
                  })
                }
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>        

      </header>
    </div>
  );
}

export default App;
