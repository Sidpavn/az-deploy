import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import {
	Button,
	Grid,
	Container,
	TextField,
	Typography,
	Card,
	CardContent,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useFormContext, useForm, Controller } from "react-hook-form";
import { studentPerformance } from "../services/predictPerformance";
import image from "../assets/20943965.jpg";

const StudentForm = () => {
	const [calculus, setCalculus] = useState([]);
    const [statistics, setStatistics] = useState([]);
	const [regression, setRegression] = useState([]);
	const [matrix, setMatrix] = useState([]);
    const [prediction, setPrediction] = useState([]);

	const [open, setOpen] = React.useState(false);
	const { register, handleSubmit, control, errors } = useForm({});

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	const handleFormSubmit = async (data) => {
		const obj = {
			marks: [data.marks],
			marks1: [data.marks1],
            marks2: [data.marks2],
            marks3: [data.marks3]
		};
		const res = await studentPerformance(obj);
        console.log(obj)
		if (res.status === 200) {
			// setTimeout(()=>{
			//     window.location.href = `${window.location.origin}`
			// },1000);

		
            
			console.log(res.data.Prediction);
            console.log(res.data.Prediction[0]);
            setPrediction(res.data.Prediction);
			setMatrix(res.data.Prediction[0]);
            setStatistics(res.data.Prediction[1]);
            setCalculus(res.data.Prediction[2]);
            setRegression(res.data.Prediction[3]);
		} else {
			alert("Form Submtted Unsuccessfully");
		}
	};

	return (
		<div>
			{/* <NavBar/> */}

			{/* <Container>
                    <Grid container justify={2} spacing={2}>
                        <Grid item sm={3}></Grid>
                        <Grid item sm={6}>
                            <Card>
                                <CardContent>
                                    <Typography style={{fontWeight:'bold',marginBottom:'20px',fontSize:'24px'}}>Predict Performance</Typography>
                                <form onSubmit={handleSubmit(handleFormSubmit)}>
                                    <Grid container spacing={3}>
                                    <Grid item sm={12}>
                                        <Controller
                                       
                                        {...register('query',{required:true})}
                                       
                                        id="query"
                                        name="query"
                                        defaultValue=""
                                        control={control}
                                        render={({ field }) => <TextField {...field} variant="outlined"  label = 'Marks'  fullWidth/>}
                                        variant="outlined"
                                        fullWidth
                                        />
                                    </Grid>
                                    
                                    <Grid item sm={12}>
                                    <Button
                                                
                                                variant="contained"
                                                style={{
                                                    color: '#ffffff',
                                                    backgroundColor: '#8dc643',
                                                    
                                                    textTransform: 'capitalize',
                                                    borderRadius: '8px',
                                                    
                                                    
                                                    
                                                    width: '100px'
                                                }}
                                                type="submit"
                                            >
                                                Save
                                            </Button>
                                            </Grid>
                                            </Grid>
                                </form>
                                </CardContent>
                            </Card>
                           
                        </Grid>
                        <Grid item sm={3}></Grid>
                    </Grid>
                </Container> */}
			<Container>
				<Grid container spacing={2}>
					<Grid item sm={6}>
						<div style={{ paddingTop: "20%" }}>
							<Card>
								<CardContent>
									<Typography
										style={{
											fontWeight: "bold",
											marginBottom: "20px",
											fontSize: "24px",
										}}
									>
										Predict Performance
									</Typography>
									<form onSubmit={handleSubmit(handleFormSubmit)}>
										<Grid container spacing={3}>
											<Grid item sm={12}>
												<Controller
													{...register("marks", { required: true })}
													id="marks"
													name="marks"
													defaultValue=""
													control={control}
													render={({ field }) => (
														<TextField
															{...field}
															variant="outlined"
															label="Grade"
															fullWidth
														/>
													)}
													variant="outlined"
													fullWidth
												/>
											</Grid>
                                            <Grid item sm={12}>
												<Controller
													{...register("marks1", { required: true })}
													id="marks1"
													name="marks1"
													defaultValue=""
													control={control}
													render={({ field }) => (
														<TextField
															{...field}
															variant="outlined"
															label="Subject"
															fullWidth
														/>
													)}
													variant="outlined"
													fullWidth
												/>
											</Grid>
                                            <Grid item sm={12}>
												<Controller
													{...register("marks2", { required: true })}
													id="marks2"
													name="marks2"
													defaultValue=""
													control={control}
													render={({ field }) => (
														<TextField
															{...field}
															variant="outlined"
															label="Section"
															fullWidth
														/>
													)}
													variant="outlined"
													fullWidth
												/>
											</Grid>
                                            <Grid item sm={12}>
												<Controller
													{...register("marks3", { required: true })}
													id="marks3"
													name="marks3"
													defaultValue=""
													control={control}
													render={({ field }) => (
														<TextField
															{...field}
															variant="outlined"
															label="Marks"
															fullWidth
														/>
													)}
													variant="outlined"
													fullWidth
												/>
											</Grid>

											<Grid item sm={12}>
												<Button
													variant="contained"
													style={{
														color: "#ffffff",
														backgroundColor: "#4C4EF9",

														textTransform: "capitalize",
														borderRadius: "8px",

														width: "100px",
													}}
													type="submit"
												>
													Predict
												</Button>
											</Grid>
										</Grid>
									</form>
								</CardContent>
							</Card>

                            {prediction != "" ? (
                                <Grid>
                                <Card>
                                    <CardContent>
                                    <Typography> Matrix is your {matrix}</Typography>
                                    <Typography> Statistics is your {statistics}</Typography>
                                    <Typography>Calculus is your {calculus}</Typography>
                                    <Typography> Regression is your {regression}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            ):<Grid>
                                </Grid>}
                            
                          
						</div>
					</Grid>
					<Grid item sm={6}>
						<img
							src={image}
							alt="loading_image"
							style={{
								paddingLeft: "50px",
                                paddingTop:"30px",
								width: "100%",
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default StudentForm;
