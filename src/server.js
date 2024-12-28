import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to handle CORS
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

// Function to test if Django backend is listening
const testDjangoBackend = async () => {
    try {
        await axios.get('http://127.0.0.1:8000/api/signup/');
        console.log('Django backend is listening');
    } catch (error) {
        console.error('Error connecting to Django backend:', error);
    }
};


// Route to handle sign-up requests
// Removed duplicate sign-up route handler

// Route to handle login requests
app.post('/api/login', async (req, res) => {
    console.log('Received login request:', req.body);

    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login/', { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Login response:', response.data);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Login error:', error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

// Route to handle fetching doctor appointments
app.get('/api/doctor-appointments', async (req, res) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctor-appointments/');
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error fetching doctor appointments:', error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});
// Route to handle fetching all appointments
app.get('/api/appointments', async (req, res) => {
    console.log('Received request to fetch all appointments');
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/appointments/');
        console.log('Fetched appointments:', response.data);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        if (error.response) {
            console.error('Error response data:', error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});
// Route to handle fetching doctor appointments
app.post('/api/doctor-appointments', async (req, res) => {
    console.log('Received doctor appointment request:', req.body);
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/doctor-appointments/', req.body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Doctor appointment response:', response.data);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Doctor appointment error:', error);
        if (error.response) {
            console.error('Error response data:', error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

// Route to handle customer support requests
app.post('/api/customer-support', async (req, res) => {
    console.log('Received customer support request:', req.body);
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/customer-support/', req.body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Customer support response:', response.data);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Customer support error:', error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

// Route to handle ambulance requests
app.post('/api/ambulance-requests', async (req, res) => {
    console.log('Received ambulance request:', req.body);
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/ambulance-requests/', req.body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Ambulance request response:', response.data);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Ambulance request error:', error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

// Route to handle appointment requests
app.post('/api/appointments', async (req, res) => {
    console.log('Received appointment request:', req.body);
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/appointments/', req.body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Appointment response:', response.data);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Appointment error:', error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

// Middleware to handle CORS
// Removed duplicate CORS middleware

// Start the server
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await testDjangoBackend();
});
// Route to handle sign-up requests
app.post('/api/signup', async (req, res) => {
    console.log('Received sign-up request:', req.body);
    try {
        const requestData = {
            first_name: req.body.first_Name,
            last_name: req.body.last_Name,
            department: req.body.department,
            email: req.body.email,
            esn: req.body.esn,
            password: req.body.password
        };
        const response = await axios.post('http://127.0.0.1:8000/api/signup/', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Sign-up response:', response.data);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Sign-up error:', error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});