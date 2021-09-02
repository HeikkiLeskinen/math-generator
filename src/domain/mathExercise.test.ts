import { BaseOperator, randEnumValue } from '.';
import {MathExercise}  from './mathExercise';

describe('MathExercise class ', () => {
    
    const defaultValues = {highDigit: 5, numberOfDigits: 3}

    it('can be created by calling the constructor', () => {
        expect(new MathExercise(defaultValues)).toBeInstanceOf(MathExercise);     
        
    });

    it('can print itself as a string', () => {
        const mathExercise = new MathExercise({
            ...defaultValues, 
            generateRandomNumber: () =>(0.9)});

        expect(mathExercise.toString()).toEqual('5 * 4 * 4')
    }); 

    it('is able to solve itself', () => {
        const mathExercise = new MathExercise({
            ...defaultValues, 
            generateRandomNumber: () =>(0.9)}); 

        expect(mathExercise.solution(80)).toEqual(80); 
    });

    it('can overwrite default value', () => {
        const mathExercise = new MathExercise({ highDigit:12, numberOfDigits: 6, generateRandomNumber:()=>(0.95)});
        expect(mathExercise.toString()).toEqual('12 * 11 * 11 * 11')
    });

})

  
