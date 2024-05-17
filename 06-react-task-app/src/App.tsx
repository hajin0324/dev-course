import { useState } from 'react';
import { appContainer, board, buttons, deleteBoardBtn, loggerBtn } from './App.css'
import BoardList from './components/BoardList/BoardList'
import ListsContainer from './components/ListsConatiner/ListsContainer';
import { useTypedSelector } from './hooks/redux';
import EditModal from './components/EditModal/EditModal';
import LoggerModal from './components/LoggerModal/LoggerModal';

function App() {
  const [isLoggerOpen, setIsLoggerOpen] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const modalActive = useTypedSelector(state => state.boards.modalActive);

  const boards = useTypedSelector(state => state.boards.boardArray);

  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];

  const lists = getActiveBoard.lists;

  return (
    <div className={appContainer}>
      {isLoggerOpen ? <LoggerModal setIsLoggerOpen={setIsLoggerOpen} /> : null}
      {modalActive ? <EditModal /> : null}

      <BoardList 
          activeBoardId={activeBoardId} 
          setActiveBoardId={setActiveBoardId} 
      />
      <div className={board}>
        <ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
      </div>

      <div className={buttons}>
        <button className={deleteBoardBtn}>
          Delete this board
        </button>
        <button 
          className={loggerBtn}
          onClick={() => setIsLoggerOpen(!isLoggerOpen)}
        >
          {isLoggerOpen ? 'Hide activity list' : 'Show activity list'}
        </button>
      </div>
    </div>
  )
}

export default App