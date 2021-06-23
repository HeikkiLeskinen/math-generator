import "./App.css";
import { Button, Container, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { evaluate } from "mathjs";
import { v4 as uuidv4 } from "uuid";
import Exercises, { Exercise } from "./Exercises";
import { createMuiTheme } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";

import { ThemeProvider } from "@material-ui/core";

import { GridList } from "@material-ui/core";
import { GridListTile } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

function App() {
  const [exercises, setExercises] = useState<Array<Exercise>>([]);
  const [highDigit, setHighDigit] = useState<number>(10);
  const [numberOfExercises, setNumberOfExercises] = useState<number>(5);
  const [numberOfDigits, setNumberOfDigits] = useState<number>(2);

  const solve = (id: string, answer: number) => {
    setExercises(
      exercises.map((e) =>
        e.id === id
          ? Object.assign({}, e, { correct: correctAnswer(e, answer) })
          : e
      )
    );
  };

  const correctAnswer = (exercise: Exercise, answer: number) => {
    const correctAnswer = evaluate(exercise.operators.join(""));
    return correctAnswer == answer;
  };

  const randomOperator = (index: number, upTill: number): string =>
    index % 2 === 0
      ? Math.floor(Math.random() * upTill).toString()
      : "+-*:".charAt(Math.floor(Math.random() * 2));

  const generateExercises = () => {
    const it = assignmentGenerator();
    setExercises(
      [...Array(numberOfExercises)].map((_, i) => {
        return {
          id: uuidv4(),
          operators: it.next().value,
        };
      })
    );
  };

  const allSumsPositive = (operators: string[]): boolean => {
    if (operators.length === 0) {
      return true;
    }

    const [head, ...tail] = operators;
    return evaluate(operators.join("")) >= 0 && allSumsPositive(tail);
  };

  function* assignmentGenerator(): Generator<string[], any, number> {
    const number = numberOfDigits + (numberOfDigits - 1);
    while (true) {
      const operators = [...Array(number)].map((_, i) =>
        randomOperator(i, highDigit)
      );

      if (allSumsPositive(operators)) {
        yield operators;
      }
    }
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });

  const LABELS: string[] = [
    "High Digit",
    "Number of Digit",
    "Number of Exercise",
  ];

  interface SettingProps {
    label: string;
    value: number;
  }

  const settings: SettingProps[] = [
    { label: LABELS[0], value: highDigit },
    { label: LABELS[1], value: numberOfDigits },
    { label: LABELS[2], value: numberOfExercises },
  ];

  const handleChange = (label: string, str: string) => {
    const value = parseInt(str);
    if (label === LABELS[0]) {
      setHighDigit(value);
    } else if (label === LABELS[1]) {
      setNumberOfDigits(value);
    } else {
      setNumberOfExercises(value);
    }
  };

  const getMax = (label: string) => {
    if (label === LABELS[0]) {
      return 100;
    } else if (label === LABELS[1]) {
      return 5;
    } else {
      return 15;
    }
  };

  const getMin = (label: string) => {
    if (label === LABELS[0]) {
      return 0;
    } else if (label === LABELS[1]) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <article>
          <Container maxWidth="xl">
            <Exercises exercises={exercises} solve={solve} />
          </Container>

          <Container
            maxWidth="xl"
            style={{
              paddingTop: "10px",
            }}
          >
            <Card>
              <CardContent>
                <GridList cols={4} spacing={30} cellHeight={"auto"}>
                  {settings.map((setting) => (
                    <GridListTile cols={1}>
                      <CardActions>
                        <TextField
                          label={setting.label}
                          type="number"
                          InputLabelProps={{ shrink: true }}
                          variant="filled"
                          value={setting.value}
                          fullWidth
                          inputProps={{
                            step: 1,
                            min: getMin(setting.label),
                            max: getMax(setting.label),
                          }}
                          onChange={(e) =>
                            handleChange(setting.label, e.currentTarget.value)
                          }
                        />
                      </CardActions>
                    </GridListTile>
                  ))}
                  <GridListTile cols={1}>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => generateExercises()}
                      >
                        GENERATE EXERCISE
                      </Button>
                    </CardActions>
                  </GridListTile>
                </GridList>
              </CardContent>
            </Card>
          </Container>
        </article>
      </ThemeProvider>
    </>
  );
}

export default App;
