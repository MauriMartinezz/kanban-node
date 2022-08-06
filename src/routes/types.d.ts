type BoardState = "DELETED" | "ACTIVE";

export interface Board {
  bid: string;
  backgroundColor: string;
  name: string;
  boardState: BoardState;
}
