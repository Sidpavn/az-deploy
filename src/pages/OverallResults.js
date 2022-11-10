import React, {useState,useEffect} from "react";
import TeacherInfo from "../components/teacherinfo/teacherinfo";
import TeacherChart from "../components/chart/teacherchart";
import { userData } from "../data";
import { Grid } from "@material-ui/core";
import {
	AppTasks,
	AppNewsUpdate,
	AppOrderTimeline,
	AppCurrentVisits,
	AppWebsiteVisits,
	AppTrafficBySite,
	AppWidgetSummary,
	AppCurrentSubject,
	AppConversionRates,
} from "../sections/@dashboard/app";
import axios from 'axios';
import RecommendCard from "../components/RecommendCard";
import ResultsCard from "../components/ResultsCard";
import TeacherQuizCard from "../components/TeacherQuizCard";
import "../components/teacherinfo/teacherinfo.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const OverallResults = () => {

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

	return (
		<div>
			<Grid container spacing={3}>
				<Grid item sm={12}>
				<h1>Overall Results</h1>
				</Grid>
				
				<Grid item sm={4}>
					<ResultsCard title="Strength" content={strength} image="/static/illustrations/strength.jpg"/>
				</Grid>
				<Grid item sm={4}>
                <ResultsCard title="Weakness" content={weakness} image="/static/illustrations/weak.png"/>
				</Grid>
				<Grid item xs={4}>
                <ResultsCard title="Overall Performance" content={performance} image="/static/illustrations/performance.jpg"/>
				</Grid>
                <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Trignometry Quiz</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{quiz1Score}</span>
         
        </div>
        <span className="featuredSub">{minutes1<10? "0"+minutes1:minutes1}:{seconds1<10? "0"+seconds1:seconds1} </span>
      </div>
     
      <div className="featuredItem">
        <span className="featuredTitle">Probability Quiz</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{quiz2Score}</span>
         
        </div>
        <span className="featuredSub">{minutes2<10? "0"+minutes2:minutes2}:{seconds2<10? "0"+seconds2:seconds2} </span>
      </div> 
      <div className="featuredItem">
        <span className="featuredTitle">Algebra Quiz</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{quiz3Score}</span>
         
        </div>
        <span className="featuredSub">{minutes3<10? "0"+minutes3:minutes3}:{seconds3<10? "0"+seconds3:seconds3} </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Statistics Quiz</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{quiz4Score}</span>
         
        </div>
        <span className="featuredSub">{minutes4<10? "0"+minutes4:minutes4}:{seconds4<10? "0"+seconds4:seconds4} </span>
      </div>       
    
    </div>
				
			</Grid>
		</div>
	);
};

export default OverallResults;
