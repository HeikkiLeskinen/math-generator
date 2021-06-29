import { Box } from "@material-ui/core";
import {
  Card,
  CardContent,
  Container,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import clsx from "clsx";
import React, { useState } from "react";


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
  cardRow: {
    border: "0 solid transparent",
    boxShadow: "0 0.1875rem 0 #ec131e",
    textShadow: "0 0.0625rem 0 rgb(0 0 0 / 15%)",
    alignItems: "center",
  },
  exercise: {
    display: "flex",
    flexWrap: "nowrap",
    alignContent: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  calculation: {
    flex: 0.5,
    textAlign: "end",
  },
  answer: {
    flex: 0.5,
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    padding: "10px",
  },
  inCorrect: {
    backgroundColor: "#ef5350", // red
    color: "#fff",
    textShadow: "0 0.0625rem 0 rgb(0 0 0 / 15%)",
  },
  input: {
    border: "10 solid green",
    fontSize: "3rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: "1.167",
    letterSpacing: "0em",
    color: "#929797", // grey
  },
  focused: {
    color: "#25ad62", // green
  },
  white: {
    color: "white",
    textShadow: "0 0.0625rem 0 rgb(0 0 0 / 15%)",
  },
  yellow: {
    color: "#ffee58",
    textShadow: "0 0.0625rem 0 rgb(0 0 0 / 15%)",
  },
  icon: {
    margin: "10px",
    display: "flex",
    height: "50%",
    width: "50%",
  },
});

function Exercises({ exercises, solve }: ExercisesProps) {
  const classes = useStyles();
  const [answers, setAnswers] = useState(new Map());

  const updateAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAnswers(answers.set(name, value));
  };

  const submitAnswer = (id: string) => {
    solve(id, answers.get(id));
  };

  const exerciseList = exercises
    .filter((e) => e.correct !== true)
    .map((exercise) => (
      <Card key={exercise.id}>
        <CardContent
          className={clsx(classes.cardRow, {
            [classes.inCorrect]: exercise.correct === false,
          })}
        >
          <form noValidate autoComplete="off">
            <Container className={classes.exercise}>
              <Box className={classes.calculation}>
                <Typography variant="h3">
                  {exercise.operators.join(" ")} =
                </Typography>
              </Box>
              <Box className={clsx(classes.answer)}>
                <TextField
                  required
                  name={exercise.id}
                  variant="outlined"
                  onChange={updateAnswer}
                  InputProps={{
                    className: clsx(classes.input, {
                      [(classes.inCorrect, classes.white)]:
                        exercise.correct === false,
                    }),
                    classes: {
                      focused:
                        exercise.correct === false
                          ? classes.yellow
                          : classes.focused,
                    },
                  }}
                />
                <Box>
                  <SendIcon
                    className={classes.icon}
                    onClick={() => submitAnswer(exercise.id)}
                  />
                </Box>
              </Box>
            </Container>
          </form>
        </CardContent>
      </Card>
    ));

  return <div>{exerciseList}</div>;
}

export default Exercises;
