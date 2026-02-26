import { type studentType } from '../studentType/studentType';
interface Props {
  student: studentType;
}

export const StudentItem = ({ student }: Props) => {
  return (
    <>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course:{student.course}</p>
      <p>{student.isOnline === true ? 'Online' : 'Offline'}</p>
      <img src={student.avatar} alt="avatar" />
    </>
  );
};
