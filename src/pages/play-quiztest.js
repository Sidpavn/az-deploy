import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import ShowResult from './ShowResult';
import Result from './Result';
import Loader from '../img/loader.svg';
import { Button, Card, CardContent,Typography,TextField,Container } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from '@mui/material';

const QuestionsTest = ({ history }) => {
  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;
  let {no,cat,dif,} = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [questions, setQuestions] = useState([]);
  const [curQuestionNo, setCurQuestionNo] = useState(0);
  const [allAnswers, setAllAnswers] = useState([]);
  const [result, setResult] = useState(false);
  const [seconds,setSeconds] = useState(0);
  const [finalSecond,setFinalSecond] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [answers,setAnswers] = useState([]);

  var timer;
  useEffect(() => {
   timer = setInterval(()=> {
    setSeconds(seconds+1);

    if(seconds ===59){
      setMinutes(minutes+1);
      setSeconds(0);
    }

    setFinalSecond(minutes*60+seconds)
   },1000)

   return () => clearInterval(timer);
  });

  const stop = () => {
    clearInterval(timer);
  }

  const createMarkup = (text) => {
    return { __html: text };
  };

  const fetchQuizData = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:5000/api/quiz/${
       cat
      }`;
      const { data } = await axios.get(url);
      // console.log(data.Quiz_Questions);
      setQuestions(data.Quiz_Questions);
      setAllAnswers(
        [
          data.Quiz_Questions[0].option1,
          data.Quiz_Questions[0].option2,
          data.Quiz_Questions[0].option3,
          data.Quiz_Questions[0].option4,
        ].sort(() => Math.random() - 0.5)
      );
      // console.log(allAnswers);
    } catch (error) {
      console.log('Fetch quiz error =====>>>>', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuizData();
    // eslint-disable-next-line
  }, []);

  const nextQuestion = () => {
    if (!questions[curQuestionNo].userAnswer) {
      alert('Please select one answer !');
      return false;

     
    }

    setAnswers([...answers,{
      question_id : questions[curQuestionNo].question_id,
      response : questions[curQuestionNo].userAnswer
    }])

    console.log(answers);

    setAllAnswers(
      [
        questions[curQuestionNo + 1].option1,
        questions[curQuestionNo + 1].option2,
        questions[curQuestionNo + 1].option3,
        questions[curQuestionNo + 1].option4,
      ].sort(() => Math.random() - 0.5)
    );
    console.log(questions.answer)

    setCurQuestionNo(curQuestionNo + 1);
  };

  const showResult = () => {
    if (!questions[curQuestionNo].userAnswer) {
      alert('Please select one answer !');
      return false;
    }

    setResult(true);
    setAnswers([...answers,{
      question_id : questions[curQuestionNo].question_id,
      response : questions[curQuestionNo].userAnswer
    }])
    console.log(answers);

    axios.post(`http://localhost:5000/api/attempt/${
      cat
     }`, {
      quiz_answers: answers,
      quizId: cat,
      duration:finalSecond
  }).then(res => {
      if (res.data) {
          console.log(res.data)
      }
  })

  stop();
  console.log(finalSecond);
  };

  const reset = () => {
    navigate('/dashboard/app');
  };

  const getAnswer = (e, ans) => {
    questions[curQuestionNo].userAnswer = ans;
    setSelected(ans);
  };

  return (
    <>
      {loading ? (
        <div >
          <img src={Loader} alt='Loading...' />
        </div>
      ) : !result ? (
        <div>
          
          {questions.length > 0 && (
            <>
            <Container>
				<Grid container justifyContent={"center"} spacing={2}>
          <Grid item sm={12}>
              <Card>
                
              <Typography
								style={{
									color: '#42536b',
									variant: 'h3',
									fontSize: '20px',
									fontWeight: '600'
								}}
							>
								{questions[curQuestionNo].question}
							</Typography>
                  
                
                <CardContent>
                
                <FormControl component="fieldset">

      <RadioGroup aria-label="gender" name="gender1" onChange={getAnswer}>
        {allAnswers.map((ans,i) => {
          return (
            <FormControlLabel key= {i} value={ans} control={<Radio/>} label={ans}/>
          )
        })}
      </RadioGroup>
    </FormControl>
                  {/* {allAnswers.map((ans, i) => {
                    return (
                      <div
                        className={
                          selected === ans ? 'selected answer' : 'answer'
                        }
                        key={i}
                        onClick={(e) => {
                          getAnswer(e, ans);
                        }}
                      >
                        <p dangerouslySetInnerHTML={createMarkup(ans)}></p>
                      </div>
                    );
                  })} */}
                  

                  
                </CardContent>
                
              </Card>
              </Grid>
              </Grid>
              </Container>

              
              <div style={{paddingTop:'40px'}}>
                  <Grid>
                    <Button
                      variant='contained'
                      
                      style={{ float: 'right',backgroundColor:'#62A9FF',color:'white' }}
                      onClick={
                        questions.length === curQuestionNo + 1
                          ? showResult
                          : nextQuestion
                      }
                    >
                      {questions.length === curQuestionNo + 1
                        ? 'Show Result'
                        : 'Next Qustion'}
                    </Button>
                    <Typography>{minutes<10? "0" +minutes:minutes}:{seconds<10? "0"+seconds:seconds}</Typography>
                    <Button variant='outlined' onClick={reset}>
                      Reset
                    </Button>
                    <Button variant='outlined' >
                      Start
                    </Button>
                    <Button variant='outlined' onClick={stop}>
                      Stop
                    </Button>
                    </Grid>
                  </div>
            </>
          )}
          
         
        </div>
        
      ) : (
        <Result
          questions={questions}
          createMarkup={createMarkup}
          reset={reset}
          time = {`${minutes<10? "0"+minutes:minutes}:${seconds<10? "0"+seconds:seconds}`}
        />
      )}
    </>
  );
};

export default QuestionsTest;
