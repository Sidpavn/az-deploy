import React from "react";
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
import RecommendCard from "../components/RecommendCard";
import TeacherQuizCard from "../components/TeacherQuizCard";

const TeacherDashboard = () => {
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item sm={12}>
				<h1>Teacher Dashboard</h1>
				</Grid>
				
				<Grid item sm={8}>
					<RecommendCard />
				</Grid>
				<Grid item sm={4}>
					<TeacherQuizCard/>
				</Grid>
				<Grid item xs={12}>
					<TeacherInfo />
				</Grid>
				<Grid item xs={12}>
					<AppWebsiteVisits
						title="Performance"
						subheader="(+43%) than last month"
						chartLabels={[
							"01/01/2022",
							"02/01/2022",
							"03/01/2022",
							"04/01/2022",
							"05/01/2022",
							"06/01/2022",
							"07/01/2022",
							"08/01/2022",
							"09/01/2022",
							"10/01/2022",
							"11/01/2022",
						]}
						chartData={[
							{
								name: "IT",
								type: "area",
								fill: "gradient",
								data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
							},
							{
								name: "Team C",
								type: "line",
								fill: "solid",
								data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
							},
						]}
					/>
				</Grid>
				
			</Grid>
		</div>
	);
};

export default TeacherDashboard;
