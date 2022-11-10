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

export default function ResultsCard({image,title,content}) {
	const theme = useTheme();

	return (
		<Card sx={{ display: "flex",flexDirection: "initial", height: "200px" }}>
			
			<Grid sx={{ display: "flex", justifyContent:'center'}} item sm={6}>
				<CardMedia
					component="img"
					sx={{ width: "90%" }}
					// image="/static/illustrations/strength.jpg"
                    image={image}
					alt="Live from space album cover"
				/>
			</Grid>
            <Grid item sm={6}>
				<Box sx={{ display: "flex", alignItems: "right" }}>
					<CardContent>
						<Typography component="div" variant="h6">
							{title}
						</Typography>
						<Typography
							variant="h4"
							color="#62A9FF"
							component="div"
						>
							{content}
						</Typography>
					</CardContent>
				</Box>
			</Grid>
		</Card>
	);
}
