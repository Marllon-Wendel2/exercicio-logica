function gradingStudents(grades) {
    const realGrades = grades.map(grade => {
       return aroundGrade(grade)
    });
    
realGrades.forEach((grade) => console.log(grade));
}

function aroundGrade(grade) {
    if(grade % 5 !== 0) {
        const differece = 5 - (grade % 5)
        if(differece < 3 && grade + differece >= 40) {
            grade += differece;
        }
    } 
    return(grade)
}

const grades = [73, 67, 38, 33]
gradingStudents(grades)