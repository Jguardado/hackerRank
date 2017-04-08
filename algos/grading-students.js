/*
round the grade up to the next multiple of 5. 23 => 25
(you have to get the diference between current and possible rounded up number - no greater than 3)

anything less than 40 fails

for input is number of students

remaining digits are the actual grades
*/
const dummpyData = [73, 67, 38, 33];

const roundingGrade = (grade) => {
  if(grade < 36) {
    console.log('sorry: ', grade);
    return grade
  }

  const findRound = (grade) => {
    const divdeByFive = grade / 5;
    const roundedToNearestMultiple = Math.round(divdeByFive);
    const newGrade = 5 * roundedToNearestMultiple;
    const diference = newGrade - grade;
    if(diference > 3 || diference < 0) {
      console.log(grade);
      return grade
    }
    console.log(newGrade);
    return newGrade
  }
  findRound(grade)
}

dummpyData.forEach((grade) => roundingGrade(grade))
