import React, { Component } from "react";
import $ from "jquery";
import Paper from "@material-ui/core/Paper";
import { Card, Container, TextField } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { Grid } from "@material-ui/core";
import { CardContent, CardHeader } from "@mui/material";
import axios from "axios";

class FormView extends Component {
	constructor(props) {
		super();
		this.state = {
			question: "",
			answer: "",
			difficulty: 1,
			category: 1,
			categories: {},
		};
	}

	componentDidMount() {
		$.ajax({
			url: `/categories`, //TODO: update request URL
			type: "GET",
			success: (result) => {
				this.setState({ categories: result.categories });
				return;
			},
			error: (error) => {
				alert("Unable to load categories. Please try your request again");
				return;
			},
		});
	}

	// submitQuestion = (event) => {
	// 	event.preventDefault();
	// 	$.ajax({
	// 		url: "http://localhost:5000/questions", //TODO: update request URL
	// 		type: "POST",
	// 		dataType: "json",
	// 		cors: true,
	// 		contentType: "application/json",
	// 		data: JSON.stringify({
	// 			question: this.state.question,
	// 			answer: this.state.answer,
	// 			difficulty: this.state.difficulty,
	// 			category: this.state.category,
	// 		}),
	// 		xhrFields: {
	// 			withCredentials: true,
	// 		},
	// 		crossDomain: true,
	// 		success: (result) => {
	// 			document.getElementById("add-question-form").reset();
	// 			return;
	// 		},
	// 		error: (error) => {
	// 			alert("Unable to add question. Please try your request again");
	// 			return;
	// 		},
	// 	});
	// };

	handleSubmit = (event) => {
		const obj = {
			question: this.state.question,
			answer: this.state.answer,
			difficulty: this.state.difficulty,
			category: this.state.category,
		};

		axios.post(`http://localhost:5000/questions`, obj).then((res) => {
			console.log(res);
			console.log(res.data);
		});
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<Container>
				<Grid container spacing={2}>
					<Grid item sm={12}>
						<Card>
							<CardHeader
								title="Add Quiz Questions"
								titleTypographyProps={{ variant: "h3" }}
								style={{
									textAlign: "center",
									color: "#4A5568",
								}}
							></CardHeader>
							<CardContent>
								<form onSubmit={this.handleSubmit}>
									<Grid container spacing={3}>
										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Questions"
												variant="outlined"
												fullWidth
												onChange={this.handleChange}
											/>
										</Grid>

										<Grid item sm={12}>
											<TextField
												id="outlined-basic"
												label="Answers"
												variant="outlined"
												fullWidth
												onChange={this.handleChange}
											/>
										</Grid>

										<Grid item sm={12}>
											<TextField
												select
												label="Difficulty"
												defaultValue=""
												onChange={this.handleChange}
												helperText="Please select category"
												className="inputText"
												fullWidth
												variant="outlined"
											>
												<MenuItem value="">
													<em>None</em>
												</MenuItem>
												<MenuItem value={1}>High</MenuItem>
												<MenuItem value={2}>Medium</MenuItem>
												<MenuItem value={3}>Low</MenuItem>
											</TextField>
										</Grid>

										<Grid item sm={12}>
											<TextField
												select
												label="Category"
												defaultValue=""
												onChange={this.handleChange}
												helperText="Please select category"
												className="inputText"
												fullWidth
												variant="outlined"
											>
												<MenuItem value="">
													<em>None</em>
												</MenuItem>
												<MenuItem value={1}>Science</MenuItem>
												<MenuItem value={2}>Art</MenuItem>
												<MenuItem value={3}>History</MenuItem>
											</TextField>
										</Grid>
										{/* <Grid item sm={12}>
							
										<FormControl
											variant="outlined"
											onChange={this.handleChange}
										>
											<InputLabel>
												Difficulty
											</InputLabel>
											<Select
											
												label="Difficulty"
											>
												<MenuItem value="">
													<em>None</em>
												</MenuItem>
												<MenuItem value={1}>High</MenuItem>
												<MenuItem value={2}>Medium</MenuItem>
												<MenuItem value={3}>Low</MenuItem>
											</Select>
										</FormControl>
								</Grid> */}

										{/* <Grid item sm={12}>
										<FormControl
											variant="outlined"
											onChange={this.handleChange}
										>
											<InputLabel id="demo-simple-select-outlined-label">
												Category
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												label="Category"
											>
												<MenuItem value="">
													<em>None</em>
												</MenuItem>
												<MenuItem value={10}>Science</MenuItem>
												<MenuItem value={20}>Art</MenuItem>
												<MenuItem value={30}>History</MenuItem>
											</Select>
										</FormControl>
                    </Grid> */}

										<Grid item sm={12}>
											<Button variant="contained" color="primary">
												SUBMIT
											</Button>
										</Grid>
									</Grid>
								</form>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default FormView;
