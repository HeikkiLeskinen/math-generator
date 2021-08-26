import {Task}  from './task';

describe('Task class ', () => {
    
    it('can be created by calling the constructor', () => {
        expect(new Task()).toBeInstanceOf(Task);
    });

    it('is able to solve itself', () => {
        const task = new Task(() => (0.9));      

        expect(task.solution()).toEqual(750); 
    });

    it('can print itself as a string', () => {
        const task = new Task(()=>(0.5));
        expect(task.toString()).toEqual('4 - 3 - 1 - 0')
    });
    it('can overwrite default value', () => {
        const task = new Task(()=>(0.5),true, 12, 2 );
        expect(task.toString()).toEqual('7 - 6')
    });
    
})

  