export default function getListStudentIDs(studentsArray) {
    if (!Array.isArray(studentsArray)) {
        return [];
    }

    const id = studentsArray.map(student => student.id);
    return id;
}