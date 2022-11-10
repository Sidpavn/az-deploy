import { Button, Card, CardContent, CardHeader,Typography,Chip } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionList = () => {
	const [page, setPage] = useState(1);
	const [questions, setQuestions] = useState([]);
	const [categories, setCategories] = useState({});
	const [currentCategory, setCurrentCategory] = useState(null);
	const [totalQuestions, setTotalQuestions] = useState(0);

	const fetchQuestionList = async () => {
		const { data } = await axios.get(
			`http://localhost:5000/questions?page=${page}`
		);
		setCategories(data.categories);
		setQuestions(data.questions);
		setTotalQuestions(data.totalQuestions);
		setCurrentCategory(data.currentCategory);

		console.log(data.categories);
	};
	useEffect(() => {
		fetchQuestionList();
	}, []);

	return (
		<div>
			<Card
				style={{ marginTop: "50px", backgroundColor: "#FFB862" }}
			>
				<CardHeader
					title="Question List"
					titleTypographyProps={{ variant: "h4" }}
					style={{
						textAlign: "center",
						color: "white",
					}}
				></CardHeader>
			</Card>

			{questions.map((q, i) => {
				return (
					<Card key={i} style={{ marginTop: "15px" }}>
						<div>
                        <Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									style={{paddingLeft:"30px",paddingTop:"20px"}}
								>
									{q.question}
								</Typography>
						</div>
						
						<CardContent>
							<div>
								
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
                                    style={{paddingLeft:"15px"}}
								>
									Answer : <Chip label={q.answer} style={{backgroundColor:"#D9FBF1",color:"green",fontWeight:"bold"}}  />
								</Typography>
                                
							</div>
                            
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default QuestionList;
