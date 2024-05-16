import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[]
}

type TAddBoardAction = {
  board: IBoard;
}

const initialState: TBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: "기본 게시판",
      lists: [
        {
          listId: "list-0",
          listName: "List 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "Jini"
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Description",
              taskOwner: "Jini"
            }
          ]
        },
        {
          listId: "list-1",
          listName: "List 2",
          tasks: [
            {
              taskId: "task-3",
              taskName: "Task 3",
              taskDescription: "Description",
              taskOwner: "Jini"
            }
          ]
        }
      ]
    }
  ]
}

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard: (state, {payload}: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(payload.board);
    }
  }
})

export const { addBoard }= boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;