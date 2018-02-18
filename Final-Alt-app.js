// Q3
class Student{
    constructor(studentFirstName, studentLastName, studentId){
    this.studentFirstName=studentFirstName;
    this.studentLastName=studentLastName;
    this.studentId=studentId;
    
    }
}
// Q4
class Assignment extends Student{
    constructor(url, assignmentType, grade){
        this.url=url;
        this.assignmentType=assignmentType;
        this.grade=grade;

    }
}

// Q5 & 7
const assignments=[
    {}, {}, {}
]
class Gradebook extends Assignment{
    constructor(courseCode, courseId, instructor, assignments){
        this.courseCode=courseCode;
        this.courseID=courseID;
        this.instructor=instructor;
        this.assignments=assignments
        this.average=this.getAverage(this.grade)
    }


getAverage(grade) {
    return grade.reduce((acc, curr, i) => {
        return (i === grade.length - 1) ? ((acc + curr.score) / (i + 1)) : (acc + curr.score)

    }, 0)
}}



// Q6

const addAssignment = new Gradebook(L250, 888, 'Mr. Anderson', 'Assignment1')



