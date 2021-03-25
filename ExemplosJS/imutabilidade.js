const students = [
    {
        nome:'Silvia',
        nota:10
    },
    {
        nome:'Paloma',
        nota:4
    },
    {
        nome:'Samuel',
        nota:7
    },
    {
        nome:'Yan',
        nota:9.5
    },
    {
        nome:'Allan',
        nota:5
    },
    {
        nome:'Salustiano',
        nota:7.5
    },
    {
        nome:'Robson',
        nota:0
    },
    {
        nome:'Leandro',
        nota:2
    },
    {
        nome:'Anderson',
        nota:6
    },
    {
        nome:'Carlos',
        nota:8
    }
]

function getApprovedStudents(studentsList) {

    return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos aprovados');
console.log(getApprovedStudents(students));

console.log('\n Lista de alunos ');
console.log(students);