import { useState } from 'react';
import { data } from '../../data/data';
import { StudentsList } from '../StudentsList/StudentsList';
import { type studentType } from '../studentType/studentType';
export const App = () => {
  const [students, setStudents] = useState<studentType[]>(data);
  return (
    <>
      <StudentsList studentsList={students} />
    </>
  );
};
