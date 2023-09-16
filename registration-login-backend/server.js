const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const companyRoutes = require('./routes/companies');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://<graffersID>:<CodersID-Password>@cluster0.adwqpr4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
