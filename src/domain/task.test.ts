import { getAllJSDocTagsOfKind } from 'typescript';
import Task  from './task';

describe('Task class ', () => {
    
    it('can be created by calling the constructor', () => {
        expect(new Task()).toBeInstanceOf(Task);
    });

    it('is able to solve itself', () => {
        const equation = new Task();
        
        expect(equation.solution()).toBeDefined
        
    });

    it('can print itself as a string', () => {
        const equation = new Task();
        expect(equation.toString()).toHaveLength
        
       
    });
    
})
  

