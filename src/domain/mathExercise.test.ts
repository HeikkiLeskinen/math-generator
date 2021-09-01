import { BaseOperator } from '.';
import {MathExercise}  from './mathExercise';

describe('MathExercise class ', () => {
    
    it('can be created by calling the constructor', () => {
        expect(new MathExercise({})).toBeInstanceOf(MathExercise);
    });

    it('is able to solve itself', () => {
        const mathExercise = new MathExercise({randomNumber:() => (0.9), randomOperator:() => BaseOperator.ADD});    
     

        expect(mathExercise.solution).toEqual(21); 
    });

    it('can print itself as a string', () => {
        const mathExercise = new MathExercise({randomNumber:()=>(0.5), randomOperator:() => BaseOperator.ADD});

        expect(mathExercise.toString()).toEqual('4 + 3 + 3 + 3')
    });
    it('can overwrite default value', () => {
        const mathExercise = new MathExercise({randomNumber:()=>(0.95), randomOperator:() => BaseOperator.ADD, 'highDigit':12, 'numberOfDigits':6});
        expect(mathExercise.toString()).toEqual('12 + 11 + 11 + 11')
    });
    
})

  