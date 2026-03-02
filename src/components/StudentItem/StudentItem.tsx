import { type StudentType } from '../../types/studentType';
interface Props {
  student: StudentType;
}

export const StudentItem = ({ student }: Props) => {
  const viewHandler = () => {
    console.log('clicked');
  };
  return (
    <>
      <p>
        <img src={student.avatar} alt="avatar" />
      </p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course:{student.course}</p>
      <p>{student.isOnline === true ? 'Online' : 'Offline'}</p>
      <button onClick={viewHandler}>View ptofile</button>
    </>
  );
};
