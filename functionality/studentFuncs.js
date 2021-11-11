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

//       --Updates--        //
async function addCourseToStudent(coureName, studentName){
    Student.updateMany({name: studentName}, {$push:{ courses: coureName}}).then(
        console.log('Updated Course Successfully')
    )
}
// addCourseToStudent('JavaScript', 'Yahalom'); - task was to add a course to a student

async function setBirthToStudent(newBirth, studentName){
    const setBirth = new Date(newBirth); // in case argument was sent in non date format
    Student.updateOne({name:studentName}, {birth:setBirth}).then(
        console.log('Updated birth Successfully')
    )
}
//setBirthToStudent('02/12/1998', 'Koren'); - task was to change birth date to particular student

//       -- Text Search --        //
async function getAllStudentsContainingO(){
    const students = await Student.find({name: /o/i}); //the i makes the rejex case-insesitive
    return students;
}
//getAllStudentsContainingO(); - return all student whose name contains o/O

async function getAllStudentsContainingHOrY(){
    const students = await Student.find({name: {$in:[/h/i, /y/i]}}); //the i makes the rejex case-insesitive
    console.log(students);
    return students;
}
//getAllStudentsContainingHOrY() - return all students whose name contains h/H or y/Y
