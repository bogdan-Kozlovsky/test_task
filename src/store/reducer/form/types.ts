export type InitialStateType = {
  positions: PositionType[];
  success: boolean;
  token: string;
};

export type PositionType = {
  id: string;
  name: string;
};
