import { createTransform } from 'redux-persist';
import { GameState } from './reducers';

const SetTransform = createTransform(
    (inboundState: GameState, key): any => {
        return {
            ...inboundState,
         
        };
    },
    (outboundState: any, key) => {
        return {
            ...outboundState,          
        };
    },
    {
        whitelist: ['gameReducer']
    }
);

export default SetTransform;