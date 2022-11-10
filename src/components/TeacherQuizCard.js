import * as React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@mui/material";

export default function TeacherQuizCard() {
	const theme = useTheme();

	return (
		<Card sx={{ display: "flex", height: "200px" }}>
			<Grid item sm={6}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography component="div" variant="h5">
							Make quiz
						</Typography>
						<Typography
							variant="subtitle2"
							color="text.secondary"
							component="div"
						>
							Books/Course
						</Typography>
					</CardContent>
					<Box sx={{ display: "flex", alignItems: "left", pl: 3, pb: 1 }}>
						<Button
							variant="contained"
							style={{
								color: "#ffffff",
								backgroundColor: "#62A9FF",
                                textTransform:"capitalize",
								borderRadius: "6px",
							}}
						>
							Add Quiz
						</Button>
					</Box>
				</Box>
			</Grid>
			<Grid sx={{ display: "flex", flexDirection: "row-reverse" }} item sm={6}>
				<CardMedia
					component="img"
					sx={{ width: 151 }}
					image="https://img.freepik.com/free-vector/comic-style-question-mark-speech-bubble-background_1017-23978.jpg"
					alt="Live from space album cover"
				/>
			</Grid>
		</Card>
	);
}
