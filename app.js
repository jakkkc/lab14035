const express = require('express')
const app = express()

// Set view engine to EJS
app.set('view engine', 'ejs')

// Serve static files
app.use(express.static('public'))

// Define the IST and APT degree program courses
const istCourses = [
	'Software Development',
	'Data Science',
	'Web Development',
	'Cybersecurity',
	'IT Project Management',
	'User Experience Design',
	'Mobile Application Development',
	'Data Management',
	'Cloud Computing',
	'Artificial Intelligence',
]

const aptCourses = [
	'Machine Learning',
	'Deep Learning',
	'Data Analytics',
	'Natural Language Processing',
	'Computer Vision',
	'Reinforcement Learning',
	'Computer Graphics',
	'Robotics',
	'Operating Systems',
	'Computer Networks',
]

// Route for the degree program selection page
app.get('/', (req, res) => {
	res.render('degree_program', { title: 'Select Degree Program' })
})

// Route for the results page
app.get('/results', (req, res) => {
	let degreeProgram = req.query.degreeProgram
	let courses = []

	// Determine which courses to display based on the selected degree program
	if (degreeProgram === 'IST') {
		courses = istCourses
	} else if (degreeProgram === 'APT') {
		courses = aptCourses
	}

	res.render('results', { degreeProgram: degreeProgram, courses: courses })
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`)
})
