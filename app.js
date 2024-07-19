const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
    { id: 1, name: 'John Doe', year: 3, degree: 'Computer Science', skills: ['JavaScript', 'Node.js'] },
    { id: 2, name: 'Jane Smith', year: 2, degree: 'Mechanical Engineering', skills: ['Python', 'MATLAB'] }
];

app.get('/', (req, res) => {
    res.send('Welcome to the College Student API!');
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const student = students.find(s => s.id === studentId);

    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

app.post('/students', (req, res) => {
    const newStudent = req.body;
    newStudent.id = students.length ? students[students.length - 1].id + 1 : 1;
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.post('/students', (req, res) => {
    const newStudent = req.body;
    newStudent.id = students.length ? students[students.length - 1].id + 1 : 1;
    students.push(newStudent);
    console.log('New student added:', newStudent); // Log new student
    console.log('Current students:', students); // Log current students array
    res.status(201).json(newStudent);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
