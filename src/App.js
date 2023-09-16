import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import ClientDashboard from "./components/ClientDashboard/ClientDashboard";
import { Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route
							path="/admin-dashboard"
							element={
								<ProtectedRoute>
									<AdminDashboard />
								</ProtectedRoute>
							}
						/>

						<ProtectedRoute
							path="/client-dashboard"
							component={ClientDashboard}
						/>
						<Navigate from="/" to="/login" />
					</Routes>
				</Router>
			</AuthProvider>
		</ThemeProvider>
	);
}

export default App;
