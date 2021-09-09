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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Exercise } from "../../../domain";
import TYPES from "../../../redux/types";

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


export interface Props {
    exercise: Exercise ;
    index: number;
}

export function ExerciseComponent({exercise , index}: Props) {
    const classes = useStyles();
    const [value, setValue] = useState<string>('');

    const dispatch = useDispatch();

    const updateAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setValue(e.target.value);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent, id: string) => {
      if(e.key === 'Enter'){
        submitAnswer(id);
      }
    }

    const submitAnswer = (id: string) => {
      dispatch({
        type: TYPES.SUBMIT_ANSWER,
        payload: {id: id, answer: parseInt(value)}
      });
    };

    return (
        <Card key={exercise.id}>
        <CardContent
          className={clsx(classes.cardRow, {
            [classes.inCorrect]: exercise.wasLastSubmittedAnswerCorrect === false,
          })}
        >
            <Container className={classes.exercise}>
              <Box className={classes.calculation}>
                <Typography variant="h3">
                  {exercise.toString()} =
                </Typography> 
              </Box>
              <Box className={clsx(classes.answer)}>
                <TextField
                  inputRef={input => input && index === 0 && input.focus()}
                  value={value}
                  name={exercise.id}
                  variant="outlined"
                  onChange={updateAnswer}
                  onKeyPress={e => handleKeyPress(e, exercise.id)}
                  InputProps={{
                    className: clsx(classes.input, {
                      [(classes.inCorrect, classes.white)]:
                        exercise.wasLastSubmittedAnswerCorrect === false,
                    }),
                    classes: {
                      focused:
                        exercise.wasLastSubmittedAnswerCorrect === false
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
        </CardContent>
      </Card>
    );
}
