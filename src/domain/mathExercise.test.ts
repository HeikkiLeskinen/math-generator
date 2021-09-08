import {createMathExercise, MathExercise}  from './mathExercise';

describe('MathExercise class ', () => {
    
    const defaultValues = {highDigit: 5, numberOfDigits: 3}

    it('can be created by calling the constructor', () => {
        expect(createMathExercise(defaultValues)).toBeInstanceOf(MathExercise);     
        
    });

    it('can print itself as a string', () => {
        const mathExercise = createMathExercise({
            ...defaultValues, 
            generateRandomNumber: () =>(0.9)});

        expect(mathExercise.toString()).toEqual('5 * 4 * 4')
    }); 

    it('is able to solve itself', () => {
        const mathExercise = createMathExercise({
            ...defaultValues, 
            generateRandomNumber: () =>(0.9)}); 

        expect(mathExercise.solve(80)).toEqual(true); 
    });

    it('can overwrite default value', () => {
        const mathExercise = createMathExercise({ highDigit:12, numberOfDigits: 6, generateRandomNumber:()=>(0.95)});
        expect(mathExercise.toString()).toEqual('12 * 11 * 11 * 11')
    });

})

  
