import { faker } from "@faker-js/faker";
// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import Iconify from "../components/Iconify";
// sections
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

// ----------------------------------------------------------------------

export default function DashboardApp() {
	const theme = useTheme();

	return (
		<div>
			<Page title="Dashboard">
				<Container maxWidth="xl">
					<Typography variant="h4" sx={{ mb: 5 }}>
						Hi, Welcome back
					</Typography>

					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} md={3}>
							<AppWidgetSummary
								title="Points Earned"
								total={56}
								icon={"mdi:star"}
							/>
						</Grid>

						<Grid item xs={12} sm={6} md={3}>
							<AppWidgetSummary
								title="Quiz Completed"
								total={10}
								color="info"
								icon={"mdi:book-open-variant"}
							/>
						</Grid>

						<Grid item xs={12} sm={6} md={3}>
							<AppWidgetSummary
								title="Highest Marks"
								total={98}
								color="warning"
								icon={"mdi:account-school"}
							/>
						</Grid>

						<Grid item xs={12} sm={6} md={3}>
							<AppWidgetSummary
								title="Avg Quiz Time(mins)"
								total={30}
								color="error"
								icon={"mdi:timer"}
							/>
						</Grid>

						<Grid item xs={12} md={6} lg={8}>
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

						<Grid item xs={12} md={6} lg={4}>
							<AppCurrentVisits
								title="Overall Performance"
								chartData={[
									{ label: "Algebra", value: 30 },
									{ label: "Trignometry", value: 25 },
									{ label: "Matrix", value: 15 },
									{ label: "Matrix", value: 30 },
								]}
								chartColors={[
									theme.palette.primary.main,
									theme.palette.secondary.main,
									theme.palette.chart.violet[0],
									theme.palette.chart.yellow[0],
								]}
							/>
						</Grid>
						<Grid item xs={12} md={6} lg={8}>
							<AppNewsUpdate
								title="Quizzes"
								list={[...Array(5)].map((_, index) => ({
									id: 1,
									title: "Quiz 1",
									description: "Mathematic",
									image: `/static/illustrations/quizimage.jpg`,
									
								}))}
							/>
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<AppCurrentSubject
								title="Current Sections"
								chartLabels={[
									"Algebra",
									"Matrics",
									"Statistics",
									"Probability",
									"Programming",
									"Number System",
								]}
								chartData={[
									{ name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
									{ name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
									{ name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
								]}
								chartColors={[...Array(6)].map(
									() => theme.palette.text.secondary
								)}
							/>
						</Grid>
					</Grid>
				</Container>
			</Page>
		</div>
	);
}
