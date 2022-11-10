import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import {
	Button,
	Grid,
	Container,
	TextField,
	Typography,
	Card,
	CardContent,
	CardHeader,
	MenuItem,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useFormContext, useForm, Controller } from "react-hook-form";
import axios from "axios";

const Result = ({ questions, createMarkup, reset,time }) => {
	const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [second,setSecond] = useState("");
    const [result,setResult] = useState([]);

    useEffect(() => {
      if (questions.length > 0) {
        setScore(
          questions.filter((q) => q.userAnswer === q.answer).length * 10
        );
        
        
      }
      setSecond(time);
      // eslint-disable-next-line
    }, []);

	return (
		<div>
			<Container>
				<Grid container justifyContent={"center"} spacing={2}>
                    <Grid item sm={12}>
                <Card
        style={{ marginTop: '50px', backgroundColor: '#FDECD7' }}
      >
        <CardHeader
          title='Marksheet'
          titleTypographyProps={{ variant: 'h3' }}
          style={{
            textAlign: 'center',
            backgroundColor: '#62A9FF',
            color: 'white',
          }}
        ></CardHeader>
        <CardContent>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.59rem',
              fontWeight: 'bold',
            }}
          >
            Full Score: {questions.length * 10}
          </p>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.59rem',
              fontWeight: 'bold',
            }}
          >
            Total Score: {score}
          </p>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.59rem',
              fontWeight: 'bold',
            }}
          >
            Total Time: {second}
          </p>
        </CardContent>
      </Card>
      </Grid>

      {questions.map((q, i) => {
        return (
            <Grid item sm={12}>
          <Card key={i} style={{ marginTop: '15px' }}>
            <CardContent>
            <Typography variant="h6" gutterBottom>
        {q.question}
      </Typography>
      <div >
      <Typography variant="h6" gutterBottom>Your Answer: </Typography>
      {q.userAnswer === q.correct_answer ? <Typography color={'green'}>{q.userAnswer}</Typography>: <Typography color={'red'}>{q.userAnswer}</Typography> }    
                
      <Typography variant="h5" gutterBottom>Correct Answer: </Typography>
      <Typography variant="h6" gutterBottom>{q.answer}</Typography>
              </div>
              <p style={{ float: 'right', color: 'blue' }}>
                <b>Mark : {q.userAnswer === q.answer ? '10' : '00'} </b>
              </p>
            </CardContent>
          </Card>
          </Grid>
        );
      })}
      <div>
      <Button
          variant='contained'
          onClick={reset}
          style={{ marginTop: '35px', marginBottom: '15px', width: '100%' }}
          color='primary'
        >
          Reset
        </Button>
      </div>
				</Grid>
			</Container>
		</div>
	);
};

export default Result;
