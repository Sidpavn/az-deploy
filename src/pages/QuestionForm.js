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
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import image from "../assets/questions.jpg";
import recommendQuestion from "../services/recommendQuestion";
import { studentPerformance } from "../services/predictPerformance";

const QuestionForm = () => {
	const navigate = useNavigate();

	const [section, setSection] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [question, setQuestion] = useState(0);
	const [answer, setAnswer] = useState("");
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [option4, setOption4] = useState("");
	const [subject, setSubject] = useState("");
	const [recommend, setRecommend] = useState("");
	const [recommendResult, setRecommendResult] = useState([]);

	const [state, setState] = React.useState({
		open: false,
		vertical: "top",
		horizontal: "center",
	});

	const { vertical, horizontal, open } = state;

	const handleClose = () => {
		setState({ ...state, open: false });
	};
	// const getCategory = () => {
	//     axios.get(`http://localhost:5000/categories`)
	//     .then((response) => {
	//         const allCat = response.categories
	//         console.log(allCat);
	//     })
	//     .catch(error => console.error(`Error: ${error}`))
	// }

	const resetForm = () => {
		document.getElementById("add-question").reset();
		setDifficulty("");
		setSection("");
		setSubject("");
	};

	// const fetchQuestionCategories = async () => {
	// 	const { data } = await axios.get(`http://localhost:5000/categories`);

	// 	console.log(data.categories);
	// };
	// useEffect(() => {
	// 	fetchQuestionCategories();
	// }, []);

	const handleFormSubmit = () => {
		const obj = {
			question: question,
			answer: answer,
			option1: option1,
			option2: option2,
			option3: option3,
			option4: option4,
			difficulty: difficulty,
			section: section,
			subject: subject,
		};
		setState({ open: true, vertical: "top", horizontal: "right" });
		console.log(obj);

		axios.post(`http://localhost:5000/api/questions`, obj).then((res) => {
			console.log(res);
			resetForm();
		});
	};

	// const handleRecommendSubmit = () => {
	// 	const obj = {
	// 		recommend:recommend,

	// 	};
	// 	console.log(obj);

	// 	axios.post(`http://localhost:5000/recommendQuestion`).then((res) => {
	// 		console.log(res.prediction);

	// 	});

	// };


	const { register, handleSubmit, control, errors } = useForm({});

	const handleRecommendSubmit = async () => {
		const obj = {
			recommend: recommend,
		};
		const res = await recommendQuestion(obj);
		console.log(res);
		if (res.status === 200) {
			console.log(res.data.prediction);

			setRecommendResult(res.data.prediction);
		} 
		else if (res.status === 500) {
			alert("sorry we couldn't find a matching recommendation!");
		}
	};

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	return (
		<div>
			<Container style={{ backgroundColor: "white" }}>
				<Grid container spacing={3}>
					{/* <Grid style={{ backgroundColor: "#FFB862" }} item sm={6}>
						<img
							src={image}
							alt="loading_image"
							style={{
								paddingLeft: "50px",
								paddingTop: "100px",
								width: "80%",
							}}
						/>
					</Grid> */}
					<Grid item sm={6}>
						<Card>
							<CardHeader
								title="Add Question"
								titleTypographyProps={{ variant: "h4" }}
								style={{
									textAlign: "center",
									color: "#4A5568",
								}}
							></CardHeader>
							<CardContent>
								<form
									id="add-question"
									onSubmit={handleSubmit(handleFormSubmit)}
								>
									<Grid container spacing={3}>
										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Question"
												variant="outlined"
												className="inputText"
												fullWidth
												size="medium"
												onChange={(e) => setQuestion(e.target.value)}
											/>
										</Grid>
										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Answer"
												variant="outlined"
												fullWidth
												size="medium"
												onChange={(e) => setAnswer(e.target.value)}
											/>
										</Grid>

										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Option 1"
												variant="outlined"
												fullWidth
												size="medium"
												onChange={(e) => setOption1(e.target.value)}
											/>
										</Grid>

										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Option 2"
												variant="outlined"
												fullWidth
												size="medium"
												onChange={(e) => setOption2(e.target.value)}
											/>
										</Grid>

										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Option 3"
												variant="outlined"
												fullWidth
												size="medium"
												onChange={(e) => setOption3(e.target.value)}
											/>
										</Grid>

										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Option 4"
												variant="outlined"
												fullWidth
												size="medium"
												onChange={(e) => setOption4(e.target.value)}
											/>
										</Grid>

										<Grid item sm={12}>
											<TextField
												select
												label="Select"
												defaultValue=""
												onChange={(e) => setSubject(e.target.value)}
												helperText="Please select subject"
												className="inputText"
												fullWidth
												size="medium"
												variant="outlined"
											>
												<MenuItem value="">
													<em>None</em>
												</MenuItem>
												<MenuItem value="Mathematics">Mathematics</MenuItem>
												<MenuItem value="Information Technology">
													Information Technology
												</MenuItem>
											</TextField>
										</Grid>

										<Grid item sm={12}>
											<TextField
												select
												label="Select"
												defaultValue=""
												onChange={(e) => setSection(e.target.value)}
												helperText="Please select category"
												className="inputText"
												fullWidth
												size="medium"
												variant="outlined"
											>
												<MenuItem value="">
													<em>None</em>
												</MenuItem>
												<MenuItem value="Trignometry">Trignometry</MenuItem>
												<MenuItem value="Calculus">Calculus</MenuItem>
												<MenuItem value="Satistics">Satistics</MenuItem>
												<MenuItem value="Marix">Marix</MenuItem>
											</TextField>
										</Grid>
										<Grid item sm={12}>
											<TextField
												select
												label="Select"
												defaultValue=""
												className="inputText"
												onChange={(e) => setDifficulty(e.target.value)}
												helperText="Please select difficulty"
												variant="outlined"
												size="medium"
												fullWidth
											>
												<MenuItem value="Easy">Easy</MenuItem>
												<MenuItem value="Medium">Medium</MenuItem>
												<MenuItem value="Hard">Hard</MenuItem>
											</TextField>
										</Grid>

										<Grid item sm={12}>
											<Button
												variant="contained"
												style={{
													color: "#ffffff",
													backgroundColor: "#FFB862",
													width: "100%",
													borderRadius: "6px",
												}}
												type="submit"
											>
												Submit
											</Button>
										</Grid>
									</Grid>
								</form>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={6}>
						{/* <img
							src={image}
							alt="loading_image"
							style={{
								paddingLeft: "50px",
								paddingTop: "100px",
								width: "80%",
							}}
						/> */}
						<Card>
							<CardHeader
								title="Search here to recommend Question"
								titleTypographyProps={{ variant: "h5" }}
								style={{
									textAlign: "center",
									color: "#4A5568",
								}}
							></CardHeader>
							<CardContent>
								<form
									id="add-question"
									onSubmit={handleSubmit(handleRecommendSubmit)}
								>
									<Grid container spacing={3}>
										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Search Question"
												variant="outlined"
												className="inputText"
												fullWidth
												size="medium"
												onChange={(e) => setRecommend(e.target.value)}
											/>
										</Grid>
										<Grid item sm={4}>
											<Button
												variant="contained"
												style={{
													color: "#ffffff",
													backgroundColor: "#62A9FF",
													width: "100%",
													borderRadius: "6px",
												}}
												type="submit"
											>
												Recommend
											</Button>
										</Grid>
										{recommendResult.map((value) => (
											<Card>
												<CardContent>
													<Typography>{value}</Typography>
												</CardContent>
											</Card>
										))}
									</Grid>
								</form>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert
						onClose={handleClose}
						severity="success"
						sx={{ width: "100%" }}
					>
						Question successfully Added
					</Alert>
				</Snackbar>
			</Container>
		</div>
	);
};

export default QuestionForm;
