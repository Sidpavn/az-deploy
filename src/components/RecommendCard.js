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

export default function RecommendCard() {
	const theme = useTheme();

	return (
		<Card sx={{ display: "flex", height: "200px" }}>
			<Grid item sm={4}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography component="div" variant="h5">
							Recommend Me
						</Typography>
						<Typography
							variant="subtitle2"
							color="text.secondary"
							component="div"
						>
							Books/Course
						</Typography>
					</CardContent>
					<Box sx={{ display: "flex", alignItems: "center", pl: 3, pb: 1 }}>
						<Button
							variant="contained"
							style={{
								color: "#ffffff",
                textTransform:"capitalize",
								backgroundColor: "#62A9FF",
								
								borderRadius: "6px",
							}}
							
						>
							Recommend
						</Button>
					</Box>
				</Box>
			</Grid>
			<Grid sx={{ display: "flex", flexDirection: "row-reverse" }} item sm={8}>
				{/* <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://cdn3d.iconscout.com/3d/premium/thumb/businesswoman-reading-book-3733407-3121123.png"
        alt="Live from space album cover"
      /> */}
				<CardMedia
					component="img"
					sx={{ width: "50%" }}
					image="https://media.istockphoto.com/vectors/young-adult-woman-reading-book-relaxing-sitting-in-chair-under-lamp-vector-id1159363620?k=20&m=1159363620&s=612x612&w=0&h=pY0TU2BqItqrRf-MJMkAxiy8uVCD1O76rjQJBVaa78o="
					alt="Live from space album cover"
				/>
			</Grid>
		</Card>
	);
}
