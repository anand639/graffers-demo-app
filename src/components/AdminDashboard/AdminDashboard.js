import React, { useState, useEffect } from 'react';
// Import the API function to fetch the list of companies and their ratings
import { fetchCompaniesWithRatings } from '../services/api';

function AdminDashboard() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const getCompanies = async () => {
            const data = await fetchCompaniesWithRatings();
            setCompanies(data);
        };

        getCompanies();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {companies.map(company => (
                    <li key={company._id}>
                        {company.name} - Average Rating: {company.averageRating || 'No ratings yet'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminDashboard;
