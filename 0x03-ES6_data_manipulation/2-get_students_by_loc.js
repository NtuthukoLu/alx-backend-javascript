export default function getStudentsByLocation(studentsArray, city) {
  const studentsInCity = studentsArray.filter(student => student.location == city);
  return studentsInCity;
}
