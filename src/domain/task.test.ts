import { getAllJSDocTagsOfKind } from 'typescript';
import {Task}  from './task';

describe('Task class ', () => {
    
    it('can be created by calling the constructor', () => {
        expect(new Task()).toBeInstanceOf(Task);
    });

    it('is able to solve itself', () => {
        var task = new Task(()=>(1));        
        expect(task).toEqual({
            symbols: [ '7', '/', '6', '/', '1.1666666666666667' ],
            noDivision: true,
            highDigit: 6,
            numberOfDigits: 4
          })
        
        
    });

    it('can print itself as a string', () => {
        const task = new Task(()=>(0.5));
        console.log(task)
        expect(task.toString()).toEqual('4 - 3 - 1 - 0')
    });
    
})
  

