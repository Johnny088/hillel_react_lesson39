import { useState } from 'react';
import { data } from '../../data/data';
import { StudentsList } from '../StudentsList/StudentsList';
// import { type StudentType } from '../../types/studentType';
import './App.css';
export const App = () => {
  const [students, setStudents] = useState(data);
  const deleteStudent = (id: number) => {
    setStudents(prevStudents => prevStudents.filter(x => x.id !== id));
  };
  const changeStatus = (id: number) => {
    // const currentStudent: StudentType | undefined = students.find(
    //   x => x.id === id,
    // );
    // currentStudent!.isOnline = !currentStudent!.isOnline;
    // setStudents([...students, currentStudent!]);
    setStudents(prev =>
      prev.map(st => (st.id === id ? { ...st, isOnline: !st.isOnline } : st)),
    );
  };
  return (
    <StudentsList
      studentsList={students}
      deleteItem={deleteStudent}
      changeStatus={changeStatus}
    />
  );
};
