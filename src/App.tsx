import './App.css';
import { CssBaseline, Button, Container, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { v4 as uuidv4 } from 'uuid';
import Exercises, { Exercise } from './Exercises';

function App() {
  const [exercises, setExercises] = useState<Array<Exercise>>([]);
  const [highDigit, setHighDigit] = useState<number>(10);
  const [numberOfExercises, setNumberOfExercises] = useState<number>(5);
  const [numberOfDigits, setNumberOfDigits] = useState<number>(2);

  const solve = (id: string, answer: number) => {
    setExercises(exercises.map(e => (e.id === id) ? Object.assign({}, e, { correct: correctAnswer(e, answer) }) : e));
  }

  const correctAnswer = (exercise: Exercise, answer: number) => {
    const correctAnswer = evaluate(exercise.operators.join(""));
    return correctAnswer == answer;
  }

  const randomOperator = (index: number, upTill: number): string => (
    (index % 2 === 0) ?
      Math.floor(Math.random() * upTill).toString()
      : "+-*:".charAt(Math.floor(Math.random() * 2))
  )

  const generateExercises = () => {
    const it = assignmentGenerator();
    setExercises([...Array(numberOfExercises)].map((_, i) => {
      return {
        id: uuidv4(),
        operators: it.next().value
      };
    }))
  }

  const allSumsPositive = (operators: string[]): boolean => {
    if (operators.length === 0) {
      return true;
    }

    const [head, ...tail] = operators;
    return evaluate(operators.join("")) >= 0 && allSumsPositive(tail)
  }

  function* assignmentGenerator(): Generator<string[], any, number> {
    const number = numberOfDigits + (numberOfDigits - 1);
    while (true) {
      const operators = [...Array(number)].map((_, i) => (randomOperator(i, highDigit)))

      if (allSumsPositive(operators)) {
        yield operators;
      }
    }
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper>
          <Exercises exercises={exercises} solve={solve} />
        </Paper>
      </Container>
      <Container maxWidth="md">
        <TextField label="High Digit" type="number" InputLabelProps={{shrink: true}} variant="filled" value={highDigit} onChange={(e) => setHighDigit(parseInt(e.currentTarget.value))}/>
        <TextField label="Number of Exercises" type="number" InputLabelProps={{shrink: true}} variant="filled" value={numberOfDigits} onChange={(e) => setNumberOfDigits(parseInt(e.currentTarget.value))}/>
        <TextField label="Number of Digits" type="number" InputLabelProps={{shrink: true}} variant="filled" value={numberOfExercises} onChange={(e) => setNumberOfExercises(parseInt(e.currentTarget.value))}/>
        <Button variant="contained" color="primary" onClick={() => generateExercises()}>GENERATE EXERCISE</Button>
      </Container>
    </>
  );
}

export default App;
