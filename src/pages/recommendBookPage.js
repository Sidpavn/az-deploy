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
import { useFormContext, useForm, Controller } from "react-hook-form";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import axios from "axios";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import image from "../assets/questions.jpg";
import recommendBooks from "../services/recommendBooks";



const BookPage = () => {

    
const [recommend, setRecommend] = useState("");
const [recommendResult, setRecommendResult] = useState([]);

const { register, handleSubmit, control, errors } = useForm({});

const handleRecommendSubmit = async () => {
    const obj = {
        recommend: recommend,
    };
    const res = await recommendBooks(obj);
    console.log(res);
    if (res.status === 200) {
        console.log(res.data.prediction);

        setRecommendResult(res.data.prediction);
    } 
    else if (res.status === 500) {
        alert("sorry we couldn't find a matching recommendation!");
    }
};

    return (
        <div>
            <Container style={{ backgroundColor: "white" }}>
				<Grid container spacing={3}>
        <Grid item sm={6}>
						<img
							src={image}
							alt="loading_image"
							style={{
								paddingLeft: "50px",
								paddingTop: "100px",
								width: "80%",
							}}
						/>
                        </Grid>
                        <Grid item sm={6}>
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
                                            <Grid item sm = {12}>
											<Card>
												<CardContent>
													<Typography>{value}</Typography>
												</CardContent>
											</Card>
                                            </Grid>
										))}
									</Grid>
								</form>
							</CardContent>
						</Card>
					</Grid>
                    </Grid>
                    </Container>
				
                </div>
    )
}

export default BookPage;