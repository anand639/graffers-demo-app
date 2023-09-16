# graffers-demo-app
*************************Company Rating App Project*************
1. Project Setup:
Frontend:
•	Created a new React project using Create React App (CRA).
•	Set up a basic folder structure for components, services, and assets.
Backend:
•	Initialize a new Node.js project.
•	Use Express.js as the web server framework.
•	Connect to a database with MongoDB.
2. Design:
layout of the application.
3. Features:
Frontend:
1.	Registration & Login:
•	Create a single page with two forms: one for registration and one for login.
•	Registration form fields: email, password, role (Admin/Client).
•	Login form fields: email, password.
2.	Admin Dashboard:
•	After login, if the user is an Admin, they should be redirected to the Admin Dashboard.
•	Here, the Admin can create a new company.
3.	Client Dashboard:
•	After login, if the user is a Client, they should be redirected to the Client Dashboard.
•	Here, the Client can see a list of companies.
•	Below each company, there's an option to rate the company.
4.	Admin View Ratings:
•	Admin can view the ratings given to each company.
Backend:
1.	User Registration & Login:
•	Endpoint to register a new user.
•	Endpoint to login a user and return a JWT token for authentication.
2.	Admin Features:
•	Endpoint to create a new company.
3.	Client Features:
•	Endpoint to fetch a list of companies.
•	Endpoint to rate a company.
4.	Ratings View:
•	Endpoint for the admin to view ratings of each company.
4. Database:
1.	Tables/Collections:
•	users: To store user details like email, password (hashed), and role.
•	companies: To store company details.
•	ratings: To store ratings given by clients to companies.
Next Steps:
1.	Frontend:
•	Set up the React project.
•	Create the necessary components based on the Figma design.
•	Implement state management (using React Context or Redux) for user authentication and data fetching.
2.	Backend:
•	Set up the Node.js project with Express.js.
•	Connect to the database.
•	Implement the necessary routes and controllers for the features mentioned above.
•	Implement JWT authentication.
3.	Database:
•	Set up the database (MySQL or MongoDB).
•	Create the necessary tables/collections and relationships.

5. Deployment
