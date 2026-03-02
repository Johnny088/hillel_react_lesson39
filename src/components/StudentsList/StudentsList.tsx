import { StudentItem } from '../StudentItem/StudentItem';
import { type StudentType } from '../../types/studentType';
interface Props {
  studentsList: StudentType[];
}
export const StudentsList = ({ studentsList }: Props) => {
  return (
    <ul>
      {studentsList.map(student => (
        <li key={student.id}>
          <StudentItem student={student} />
        </li>
      ))}
    </ul>
  );
};
