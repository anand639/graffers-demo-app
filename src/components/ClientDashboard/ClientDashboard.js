import React, { useState, useEffect } from "react";
import { fetchCompanies } from "../services/api";
import { rateCompany } from "../services/api";
import { Button, List, ListItem, Container } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

function ClientDashboard() {
	const [companies, setCompanies] = useState([]);
	const [loading, setLoading] = useState(true); // Add this line

	useEffect(() => {
		const getCompanies = async () => {
			try {
				const data = await fetchCompanies();
				setCompanies(data);
				setLoading(false); // Set loading to false after data is fetched
			} catch (error) {
				console.error("Error fetching companies:", error);
				setLoading(false); // Set loading to false even if there's an error
			}
		};

		getCompanies();
	}, []);

	if (loading) {
		return <p>Loading...</p>; // Display a loading message while data is being fetched
	}

	const handleRate = async (companyId, ratingValue) => {
		try {
			const response = await rateCompany(companyId, ratingValue);
			if (response.msg === "Rating added successfully") {
				alert("Thank you for your rating!");
			} else {
				alert("Error rating the company. Please try again.");
			}
		} catch (error) {
			console.error("Error rating:", error);
		}
	};

	return (
		<Container>
			<h2>Client Dashboard</h2>
			<List>
				{companies.map((company) => (
					<ListItem key={company._id}>
						{company.name}
						<Button
							variant="contained"
							color="primary"
							startIcon={<StarRateIcon />}
							onClick={() => handleRate(company._id, 5)}
						>
							Rate 5
						</Button>
					</ListItem>
				))}
			</List>
		</Container>
	);
}

export default ClientDashboard;
