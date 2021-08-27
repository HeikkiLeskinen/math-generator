import {MathExercise}  from './mathExercise';

describe('MathExercise class ', () => {
    
    it('can be created by calling the constructor', () => {
        expect(new MathExercise({})).toBeInstanceOf(MathExercise);
    });

    it('is able to solve itself', () => {
        const mathExercise = new MathExercise({randomNumber:() => (0.9)});      

        expect(mathExercise.solution).toEqual(750); 
    });

    it('can print itself as a string', () => {
        const mathExercise = new MathExercise({randomNumber:()=>(0.5)});
        expect(mathExercise.toString()).toEqual('4 - 3 - 1 - 0')
    });
    it('can overwrite default value', () => {
        const mathExercise = new MathExercise({randomNumber:()=>(0.95), 'highDigit':12, 'numberOfDigits':6});
        expect(mathExercise.toString()).toEqual('12 * 11 * 11 * 11')
    });
    
})

  