// const API_URL = 'http://localhost:5000/api';

// export const registerUser = async (userData) => {
//     const response = await fetch(`${API_URL}/users/register`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//     });
//     return response.json();
// };

// export const loginUser = async (userData) => {
//     const response = await fetch(`${API_URL}/users/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//     });
//     return response.json();
// };


import axios from 'axios';

// Base URL for your backend API
const API_URL = 'http://localhost:5000/api';

// Function to register a user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to login a user
export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, loginData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to fetch companies
export const fetchCompanies = async () => {
    try {
        const response = await axios.get(`${API_URL}/companies`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const rateCompany = async (companyId, ratingValue) => {
    const response = await fetch(`${API_URL}/companies/rate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('authToken') // Assuming the token is stored in local storage
        },
        body: JSON.stringify({ companyId, rating: ratingValue })
    });
    return response.json();
};


export const fetchCompaniesWithRatings = async () => {
    const response = await fetch(`${API_URL}/companies/list-with-ratings`, {
        headers: {
            'x-auth-token': localStorage.getItem('authToken')
        }
    });
    return response.json();
};
