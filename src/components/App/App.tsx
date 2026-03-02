import { useState } from 'react';
import { data } from '../../data/data';
import { StudentsList } from '../StudentsList/StudentsList';
export const App = () => {
  const [students] = useState(data);
  return <StudentsList studentsList={students} />;
};
