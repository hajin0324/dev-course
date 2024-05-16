import React, { FC, useState } from 'react'
import { useTypedSelector } from '../../hooks/redux';
import { FiPlusCircle } from 'react-icons/fi';
import { addBtn, addSection, boardItem, boardItemActive, container, title } from './BoardList.css';
import SideForm from './SideForm/SideForm';
import clsx from 'clsx';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>
}

const BoardList: FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId
}) => {

  const { boardArray } = useTypedSelector(state => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false);  

  return (
    <div className={container}>
      <div className={title}>
        BOARD
      </div>
      {boardArray.map((board, index) => (
        <div key={board.boardId}
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={
            clsx(
              {
                [boardItemActive]:
                boardArray.findIndex(b => b.boardId === activeBoardId) === index
              },
              {
                [boardItem]:
                boardArray.findIndex(b => b.boardId === activeBoardId) !== index,
              }
            )
          }
        >
          <div>
            {board.boardName}
          </div>
        </div>
      ))}
      <div className={addSection}>
        {
          isFormOpen ?
            <SideForm setIsFormOpen={setIsFormOpen} />
            :
            <FiPlusCircle className={addBtn} onClick={() => setIsFormOpen(!isFormOpen)}/>
        }
      </div>
    </div>
  )
}

export default BoardList