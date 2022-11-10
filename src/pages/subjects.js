import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import MediaCard from "../components/QuizCard";
import { Grid, Container, Typography, Button } from "@mui/material";
import axios from 'axios';

const Subjects = () => {

	const [strength, setStrength] = useState('');
    const [weakness, setWeakness] = useState('');
    const [quiz1Score, setquiz1Score] = useState('');
    const [quiz2Score, setquiz2Score] = useState('');
    const [quiz3Score, setquiz3Score] = useState('');
    const [quiz4Score, setquiz4Score] = useState('');
    const [quiz1Duration, setQuiz1Duration] = useState('');
    const [quiz2Duration, setQuiz2Duration] = useState('');
    const [quiz3Duration, setQuiz3Duration] = useState('');
    const [quiz4Duration, setQuiz4Duration] = useState('');
    const [performance, setPerformance] = useState('');
    const [seconds1,setSeconds1] = useState(0);
    const [minutes1,setMinutes1] = useState(0);
    const [seconds2,setSeconds2] = useState(0);
    const [minutes2,setMinutes2] = useState(0);
    const [seconds3,setSeconds3] = useState(0);
    const [minutes3,setMinutes3] = useState(0);
    const [seconds4,setSeconds4] = useState(0);
    const [minutes4,setMinutes4] = useState(0);
	const [input,setInput] = useState([]);


    const fetchQuizData = async () => {
        try {
          const url = `http://localhost:5000/api/results`
          const { data } = await axios.get(url);
           console.log(data);
            setStrength(data.strength);
            setWeakness(data.weakness);
            setPerformance(data.performance);
            setquiz1Score(data.quiz1_score);
            setquiz2Score(data.quiz2_score);
            setquiz3Score(data.quiz3_score);
            setquiz4Score(data.quiz4_score);
            setMinutes1(Math.floor(data.quiz1_duration / 60));
            setSeconds1(data.quiz1_duration % 60)
            setMinutes2(Math.floor(data.quiz2_duration / 60));
            setSeconds2(data.quiz2_duration % 60)
            setMinutes3(Math.floor(data.quiz3_duration / 60));
            setSeconds3(data.quiz3_duration % 60)
            setMinutes4(Math.floor(data.quiz4_duration / 60));
            setSeconds4(data.quiz4_duration % 60)
			setQuiz1Duration(data.quiz1_duration)
            setQuiz2Duration(data.quiz2_duration)
            setQuiz3Duration(data.quiz3_duration)
            setQuiz4Duration(data.quiz4_duration)
        

         
          // console.log(allAnswers);
        } catch (error) {
          console.log('Fetch quiz error =====>>>>', error);
        }
       
      };

    useEffect(() => {
        fetchQuizData();
        // eslint-disable-next-line
      }, []);

	const handlePrediction = () => {
		
		let obj=[quiz1Score,quiz1Duration,quiz2Score,quiz2Duration,quiz3Score,quiz3Duration,quiz4Score,quiz4Duration]
		console.log(obj)
		axios.post(`http://localhost:5000/predict`, {
		obj
	  }).then(res => {
		  console.log(res.data.Prediction)
	  })
	};
	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item sm={6}>
					<Typography
						sx={{ fontSize: 20 }}
						color="text.secondary"
						style={{ paddingTop: "20px", fontWeight: "600" }}
					>
						Mathematics
					</Typography>
				</Grid>
				<Grid
					style={{
						position: "relative",
						textAlign: "end",
						alignItems: "flex-end",
					}}
					item
					sm={6}
				>
					<div>
						<Button
							variant="contained"
							style={{
								color: "#ffffff",
								textTransform: "capitalize",
								

								borderRadius: "6px",
							}}
							onClick={handlePrediction}
						>
							Analyze Performance
						</Button>
					</div>
				</Grid>
				<Grid item sm={3}>
					<MediaCard
						title={"Quiz 1"}
						subject={"Trignometry"}
						to="/dashboard/q/11"
					/>
				</Grid>
				<Grid item sm={3}>
					<MediaCard
						title={"Quiz 2"}
						subject={"Probability"}
						to="/dashboard/q/12"
					/>
				</Grid>
				<Grid item sm={3}>
					<MediaCard
						title={"Quiz 3"}
						subject={"Algebra"}
						to="/dashboard/q/13"
					/>
				</Grid>
				<Grid item sm={3}>
					<MediaCard
						title={"Quiz 4"}
						subject={"Statistics"}
						to="/dashboard/q/14"
					/>
				</Grid>
				<Grid item sm={12}>
					<Typography
						sx={{ fontSize: 20 }}
						color="text.secondary"
						style={{ paddingTop: "20px", fontWeight: "600" }}
					>
						Information Technology
					</Typography>
				</Grid>
				<Grid item sm={4}>
					<MediaCard
						title={"Quiz 1"}
						subject={"Programming"}
						to="/dashboard/sections"
					/>
				</Grid>
				<Grid item sm={4}>
					<MediaCard
						title={"Quiz 2"}
						subject={"Numbering System"}
						to="/dashboard/sections"
					/>
				</Grid>
				<Grid item sm={4}>
					<MediaCard
						title={"Quiz 3"}
						subject={"Word Processing"}
						to="/dashboard/sections"
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Subjects;
