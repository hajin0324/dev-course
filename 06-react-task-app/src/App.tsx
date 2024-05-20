import { useState } from 'react';
import { appContainer, board, buttons, deleteBoardBtn, loggerBtn } from './App.css'
import BoardList from './components/BoardList/BoardList'
import ListsContainer from './components/ListsConatiner/ListsContainer';
import { useTypedDispatch, useTypedSelector } from './hooks/redux';
import EditModal from './components/EditModal/EditModal';
import LoggerModal from './components/LoggerModal/LoggerModal';
import { deleteBoard, sort } from './store/slices/boardsSlice';
import { addLog } from './store/slices/loggerSlice';
import { v4 } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const dispatch = useTypedDispatch();
  const [isLoggerOpen, setIsLoggerOpen] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const modalActive = useTypedSelector(state => state.boards.modalActive);

  const boards = useTypedSelector(state => state.boards.boardArray);

  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];

  const lists = getActiveBoard.lists;

  const handleDeleteBoard = () => {
    if(boards.length > 1) {
      dispatch(
        deleteBoard({boardId: getActiveBoard.boardId})
      )

      dispatch(
        addLog({
          logId: v4(),
          logMessage: `Delete Board: ${getActiveBoard.boardName}`,
          logAuthor: 'User',
          logTimestamp: String(Date.now())
        })
      )

      const newIndexToSet = () => {
        const indexToBeDeleted = boards.findIndex(
          board => board.boardId === activeBoardId
        )

        return indexToBeDeleted === 0 
          ? indexToBeDeleted + 1
          : indexToBeDeleted - 1
      }

      setActiveBoardId(boards[newIndexToSet()].boardId)
    } else {
      alert('최소 게시판 개수는 한 개입니다.');
    }
  }

  const handleDragEnd = (result: any) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    
    console.log('lists', lists);
    const sourceList = lists.filter(
      list => list.listId === source.droppableId
    )[0];

    console.log('source list', sourceList);
    
    dispatch(
      sort({
        boardIndex: boards.findIndex(board => board.boardId === activeBoardId),
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId
      })
    )

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `move task ${sourceList.tasks.filter(task => task.taskId === draggableId)[0].taskName} 
        from "${sourceList.listName}" to ${lists.filter(list => list.listId === destination.droppableId)[0].listName}`,
        logAuthor: 'User',
        logTimestamp: String(Date.now())
      })
    )
  }

  return (
    <div className={appContainer}>
      {isLoggerOpen ? <LoggerModal setIsLoggerOpen={setIsLoggerOpen} /> : null}
      {modalActive ? <EditModal /> : null}

      <BoardList 
          activeBoardId={activeBoardId} 
          setActiveBoardId={setActiveBoardId} 
      />
      <div className={board}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
        </DragDropContext>
      </div>

      <div className={buttons}>
        <button 
          className={deleteBoardBtn}
          onClick={handleDeleteBoard}
        >
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