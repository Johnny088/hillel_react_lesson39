import { type StudentType } from '../../types/studentType';
interface Props {
  student: StudentType;
  deleteItem: (id: number) => void;
  changeStatus: (id: number) => void;
}

export const StudentItem = ({ student, deleteItem, changeStatus }: Props) => {
  const viewHandler = () => {
    console.log('clicked');
  };
  const deleteHandler = () => {
    deleteItem(student.id);
  };
  const switchStatus = () => {
    changeStatus(student.id);
  };
  return (
    <>
      <p>
        <img src={student.avatar} alt="avatar" width={150} height={150} />
      </p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course:{student.course}</p>
      <p>{student.isOnline === true ? 'Online' : 'Offline'}</p>
      <ul>
        <li>
          <button onClick={viewHandler}>View profile</button>
        </li>
        <li>
          <button onClick={deleteHandler}>Delete</button>
        </li>
        <li>
          <button onClick={switchStatus}>Change status</button>
        </li>
      </ul>
    </>
  );
};
