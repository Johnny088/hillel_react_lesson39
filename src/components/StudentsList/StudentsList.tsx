import { StudentItem } from '../StudentItem/StudentItem';
import { type StudentType } from '../../types/studentType';
interface Props {
  studentsList: StudentType[];
  deleteItem: (id: number) => void;
  changeStatus: (id: number) => void;
}
export const StudentsList = ({
  studentsList,
  deleteItem,
  changeStatus,
}: Props) => {
  return (
    <ul>
      {studentsList.map(student => (
        <li key={student.id}>
          <StudentItem
            student={student}
            deleteItem={deleteItem}
            changeStatus={changeStatus}
          />
        </li>
      ))}
    </ul>
  );
};
