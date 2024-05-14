import { appContainer, board, buttons } from './App.css'


function App() {

  return (
    <div className={appContainer}>
      <div className={board}>

      </div>

      <div className={buttons}>
        <button>
          Delete this board
        </button>
        <button>
          Show activity list
        </button>
      </div>
    </div>
  )
}

export default App