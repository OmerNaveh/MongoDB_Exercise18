const Student = require('../Models/students')

//     --queries--     //
async function getAllStudents(){
    const allstudents =  await Student.find({});
    return allstudents;
}

async function getStudentByName(name){
    const student = await Student.find({name: name});
    return student;
}
// getStudentByName('Ido')  - the task was to get student with name ido

async function getStudentsByCourse(courseName){
    const students = await Student.find({courses: courseName})
    return students;
}
// getStudentsByCourse("Law"); -task was to return all students who have value Law in courses Array

async function getStudentsByCourseAndGender(courseName, gender){
    const students = await Student.find({courses:courseName , gender:gender});
    return students;
}

// getStudentsByCourseAndGender('Java', 'Female'); - task was return all students who take Java course and are Female.

async function getStudnetsbyBirthDateGT(gtBirth){
    const greaterThanDate = new Date(gtBirth); // in case param recieved is in non date format
    const students = await Student.find({birth:{$gt:greaterThanDate}});
    return students;
}
// getStudnetsbyBirthDateGT("05/05/1997");  - task was to return all students whose birth is gt this date.

async function getStudentsBynNumberStartsWith(){
    const students = await Student.find({phone: /^054/})
    console.log(students);
    return students;
}
//getStudentsBynNumberStartsWith() - returns all Students whose number starts with 054