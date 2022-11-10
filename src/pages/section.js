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
import MediaCard from "../components/QuizCard";

const QuizSection = () => {
	const navigate = useNavigate();

	const [cats, setCats] = useState([]);
	const [cat, setCat] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [qNo, setQNo] = useState(0);

	const fetchQuestionCategories = async () => {
		const { data } = await axios.get(`https://opentdb.com/api_category.php`);

		setCats(data.trivia_categories);
	};
	useEffect(() => {
		fetchQuestionCategories();
	}, []);

	// const submitHandler = () => {
	// 	if (
	// 		parseInt(qNo) > 15 ||
	// 		parseInt(qNo) < 1 ||
	// 		cat === "" ||
	// 		difficulty === ""
	// 	) {
	// 		alert(" Please give proper input !");
	// 	} else {
	// 		const url = `q/${cat}/${difficulty}/${qNo}`;

	// 		console.log(url);
	// 		navigate(`/dashboard/${url}`, { replace: true });
	// 	}
	// };

	const submitHandler = () => {
		const url = `q/${cat}`;

		console.log(url);
		navigate(`/dashboard/${url}`, { replace: true });
	};
	const { register, handleSubmit, control, errors } = useForm({});

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	return (
		<div>
			<Container>
				<Grid container justifyContent={"center"} spacing={2}>
					<Card>
						<CardHeader
							title="Select Sections"
							titleTypographyProps={{ variant: "h3" }}
							style={{
								textAlign: "center",
								color: "#4A5568",
							}}
						></CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit(submitHandler)}>
								<Grid container spacing={3}>
									<Grid item sm={12}>
										{/* <TextField
											select
											label="Select"
											defaultValue=""
											onChange={(e) => setCat(e.target.value)}
											helperText="Please select category"
											className="inputText"
											fullWidth
											variant="outlined"
										>
											{cats.map((c) => {
												return (
													<MenuItem key={c.id} value={c.id}>
														{c.name}
													</MenuItem>
												);
											})}
										</TextField> */}
										<TextField
											select
											label="Select"
											defaultValue=""
											onChange={(e) => setCat(e.target.value)}
											helperText="Please select Section"
											className="inputText"
											variant="outlined"
										>
											<MenuItem value="7">7</MenuItem>
											<MenuItem value="IT">IT</MenuItem>
										</TextField>
									</Grid>
									{/* <Grid item sm={12}>
										<TextField
											select
											label="Select"
											defaultValue=""
											className="inputText"
											onChange={(e) => setDifficulty(e.target.value)}
											helperText="Please select defficulty"
											variant="outlined"
											fullWidth
										>
											<MenuItem value="easy">Easy</MenuItem>
											<MenuItem value="medium">Medium</MenuItem>
											<MenuItem value="hard">Hard</MenuItem>
										</TextField>
									</Grid> */}
									{/* <Grid item sm={12}>
										<TextField
											id="outlined-basic"
											label="Number Of Questions ( 1 - 15 )"
											variant="outlined"
											type="number"
											name="number"
											className="inputText"
											fullWidth
											onChange={(e) => setQNo(e.target.value)}
										/>
									</Grid> */}

									<Grid item sm={12}>
										<Button
											variant="contained"
											fullWidth
											style={{
												color: "#ffffff",
												backgroundColor: "#FFB862",

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
			</Container>
		</div>
	);
};

export default QuizSection;
