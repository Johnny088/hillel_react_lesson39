import { StudentItem } from '../StudentItem/StudentItem';
import { type studentType } from '../studentType/studentType';
interface Props {
  studentsList: studentType[];
}
export const StudentsList = ({ studentsList }: Props) => {
  console.log("Student's list");
  console.log(studentsList);
  return (
    <ul>
      {studentsList.map(student => (
        <li key={student.id}>{<StudentItem student={student} />}</li>
      ))}
    </ul>
  );
};
