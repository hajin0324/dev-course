import React, { ChangeEvent, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { deleteTask, setModalActive, updateTask } from '../../store/slices/boardsSlice';
import { v4 } from 'uuid';
import { addLog } from '../../store/slices/loggerSlice';
import { buttons, closeBtn, deleteBtn, header, input, modalWindow, title, updateBtn, wrapper } from './EditModal.css';

const EditModal = () => {
  const dispatch  = useTypedDispatch();
  const editingState = useTypedSelector(state => state.modal);
  const [data, setData] = useState(editingState);

  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskName: e.target.value
      }
    })
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskDescription: e.target.value
      }
    })
  }

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskOwner: e.target.value
      }
    })
  }

  const handleUpdate = () => {
    dispatch(
      updateTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        task: data.task
      })
    )

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Update Task: ${editingState.task.taskName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now())
      })
    )

    dispatch(setModalActive(false));
  }
  
  const handleDelete = () => {
    dispatch(
      deleteTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        taskId: editingState.task.taskId
      })
    )

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Delete Task: ${editingState.task.taskName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now())
      })
    )

    dispatch(setModalActive(false))
  }

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>{editingState.task.taskName}</div>
          <FiX className={closeBtn} onClick={handleCloseButton}/>
        </div>
        <div className={title}>TITLE</div>
        <input 
          className={input}
          type='text'
          value={data.task.taskName}
          onChange={handleNameChange}
        />
        <div className={title}>DESCRIPTION</div>
        <input  
          className={input}
          type='text'
          value={data.task.taskDescription}
          onChange={handleDescriptionChange}
        />
        <div className={title}>AUTHOR</div>
        <input
          className={input}
          type='text'
          value={data.task.taskOwner}
          onChange={handleAuthorChange}
        />
        <div className={buttons}>
          <button
            className={updateBtn}
            onClick={handleUpdate}
          >
            Update Task
          </button>
          <button
            className={deleteBtn}
            onClick={handleDelete}
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditModal