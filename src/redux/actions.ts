import { GameState } from "./reducers";
import TYPES from "./types";

export type Actions =
| StartGame
| UpdateConfig
| IncreaseScore
| GenerateExerices
| SubmitAnswer
| Persist
| Rehydrate

type Persist = {
    type: 'persist/PERSIST';
}

type Rehydrate = {
    type: 'persist/REHYDRATE';
    readonly payload: GameState;
}

type StartGame = {
    type: TYPES.START_GAME;
};

type UpdateConfig = {
    type: TYPES.UPDATE_CONFIG;
    readonly payload: {
        numberOfExercises?: number;
        numberOfDigits?: number;
        highDigit?: number;
    };
}
type IncreaseScore = {
    type: TYPES.INCREASE_SCORE;
    readonly payload: {amount: number};
};

type GenerateExerices = {
    type: TYPES.GENERATE_EXERICES;
};

type SubmitAnswer = {
    type: TYPES.SUBMIT_ANSWER;
    readonly payload: {id: string, answer: number};
};
