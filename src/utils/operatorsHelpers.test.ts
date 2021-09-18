import { BaseOperator } from '../domain';
import {getOperatorsByDifficulty, selectRandomOperation}  from './operatorHelpers';

describe('operators helper functions', () => {
    
    it('Difficulty 0 correspond to addition', () => {
        expect(getOperatorsByDifficulty(0)).toEqual( ["+"]);     
    });

    it('Difficulty 1 correspond to addition', () => {
        expect(getOperatorsByDifficulty(1)).toEqual( ["+", "-"]);     
    });

    it('Difficulty NA correspond to addition', () => {
        expect(getOperatorsByDifficulty(10)).toEqual( ["+"]);     
    });

    it('it returns an addidtion', () => {
        const operations : BaseOperator[]= [BaseOperator.ADD, BaseOperator.ADD, BaseOperator.ADD, BaseOperator.ADD]
        expect(selectRandomOperation(operations)).toEqual( "+");     
    });
    it('it returns an operation', () => {
        const operations : BaseOperator[]= [BaseOperator.ADD, BaseOperator.SUBSTRACT, BaseOperator.MULTIPLY]
        const op = selectRandomOperation(operations)
        expect(["+","-", "*"].includes(op)).toBeTruthy;     
    });
   
})
