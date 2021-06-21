import { Card, CardContent, Input, makeStyles, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import clsx from 'clsx';
import React, { useState } from 'react';
import './App.css';

export interface Exercise {
    id: string;
    correct?: boolean;
    operators: Array<string>;
}

export interface ExercisesProps {
    exercises: Array<Exercise>;
    solve: (id: string, answer: number) => void;
}

const useStyles = makeStyles({
    inCorrect: {
        background: 'linear-gradient(45deg, #0575E6 30%, #021B79 90%)'
    },
    title: {
        fontSize: 20,
    },
  });

function Exercises({exercises, solve}: ExercisesProps) {
  const classes = useStyles();
  const [answers, setAnswers] = useState(new Map());

  const updateAnswer = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const name = e.target.name;
    const value = e.target.value;
    setAnswers(answers.set(name, value));
  }

  const submitAnswer = (id: string) => {
    solve(id, answers.get(id))
  }

  const exerciseList = exercises
  .filter(e => e.correct !== true)
  .map(exercise =>
    <Card key={exercise.id}>
      <CardContent className={clsx({[classes.inCorrect]: exercise.correct === false})}>
        <Typography variant="h3" gutterBottom>
            {exercise.operators.join(" ")} = ?
        </Typography>
        <form noValidate autoComplete="off">
            <Input name={exercise.id} onChange = {updateAnswer}/>
            <SendIcon onClick={() => submitAnswer(exercise.id)}/>
        </form>
      </CardContent>
    </Card>
  )

  return (
    <div>
      {exerciseList}
    </div>
  )

}

export default Exercises;
