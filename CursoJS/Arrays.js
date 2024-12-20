const courses = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Node.js' }
]
const course = courses.find(course => course.name === 'React')
console.log(course) // Output: { id: 2, name: 'React' }