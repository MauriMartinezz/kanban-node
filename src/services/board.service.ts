import { Board } from "../routes/types";
import boardData from "./board.json";

const boards: Array<Board> = boardData as Array<Board>;
export const getEntries = (): Array<Board> => boards;

export const addEntry = () => null;
