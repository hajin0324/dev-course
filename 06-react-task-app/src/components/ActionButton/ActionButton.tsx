import React, { FC, useState } from 'react'
import DropDownForm from './DropDownForm/DropDownForm';
import { IoIosAdd } from 'react-icons/io';
import { listBtn, taskBtn } from './ActionButton.css';


type TActionButtonProps = {
  boardId: string;
  listId: string;
  list?: boolean;
}

const ActionButton: FC<TActionButtonProps> = ({
  boardId,
  listId,
  list
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const buttonText = list ? "Register New List" : "Register New Task";
  return isFormOpen ? (
      <DropDownForm 
        setIsFormOpen={setIsFormOpen}
        list={list ? true : false}
        boardId={boardId}
        listId={listId}
      />
    )
    :
    (
      <div 
        className={list ? listBtn : taskBtn}
        onClick={() => setIsFormOpen(true)}
      >
        <IoIosAdd />
        <p>{buttonText}</p>
      </div>
    )
}

export default ActionButton