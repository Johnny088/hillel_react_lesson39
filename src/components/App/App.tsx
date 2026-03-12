import { useState } from 'react';
import { data } from '../../data/data';
import { StudentsList } from '../StudentsList/StudentsList';
import { type StudentType } from '../../types/studentType';
import { CreateStudentForm } from '../CreateStudentForm/CreateStudentForm';
import './App.css';
export const App = () => {
  const [students, setStudents] = useState(data);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const deleteStudent = (id: number) => {
    setStudents(prevStudents => prevStudents.filter(x => x.id !== id));
  };
  const changeStatus = (id: number) => {
    setStudents(prev =>
      prev.map(st => (st.id === id ? { ...st, isOnline: !st.isOnline } : st)),
    );
  };
  const formRender = () => {
    setIsFormVisible(!isFormVisible);
  };
  const addStudent = (newStudent: StudentType) => {
    setStudents([...students, newStudent]);
  };
  return (
    <>
      <StudentsList
        studentsList={students}
        deleteItem={deleteStudent}
        changeStatus={changeStatus}
      />
      <button onClick={formRender}>
        {isFormVisible ? 'Hide form' : 'Add student'}
      </button>
      {isFormVisible && <CreateStudentForm onAdd={addStudent} />}
    </>
  );
};
