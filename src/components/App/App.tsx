import { useState } from 'react';
import { data } from '../../data/data';
import { StudentsList } from '../StudentsList/StudentsList';
import { type StudentType } from '../../types/studentType';
import { CreateStudentForm } from '../CreateStudentForm/CreateStudentForm';
import './App.css';
export const App = () => {
  const [students, setStudents] = useState(data);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const deleteStudent = (id: number) => {
    setStudents(prevStudents => prevStudents.filter(x => x.id !== id));
  };
  const changeStatus = (id: number) => {
    setStudents(prev =>
      prev.map(st => (st.id === id ? { ...st, isOnline: !st.isOnline } : st)),
    );
  };
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  const addStudent = (newStudent: StudentType) => {
    setStudents(prevStudent => [...prevStudent, newStudent]);
    toggleFormVisibility();
  };
  return (
    <>
      {students.length > 0 && (
        <StudentsList
          studentsList={students}
          deleteItem={deleteStudent}
          changeStatus={changeStatus}
        />
      )}
      <button className="formBtn" onClick={toggleFormVisibility}>
        {isFormVisible ? 'Hide form' : 'Add student'}
      </button>
      {isFormVisible && <CreateStudentForm onAdd={addStudent} />}
    </>
  );
};
