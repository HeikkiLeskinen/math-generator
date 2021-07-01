
export type Actions =
| IncreaseScore
| StartGame;

type IncreaseScore = {
    type: "IncreaseScore";
    readonly amount: number;
};

type StartGame = {
    type: "StartGame";
};