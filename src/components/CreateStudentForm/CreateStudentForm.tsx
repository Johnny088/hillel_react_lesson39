import './CreateStudentsForm.css';
import { type StudentType } from '../../types/studentType';
import { useId } from 'react';
interface Props {
  onAdd: (newStudent: StudentType) => void;
}
export const CreateStudentForm = ({ onAdd }: Props) => {
  const id = useId();
  const formHandler = (formData: FormData) => {
    const name = formData.get('name') as string;
    const age = Number(formData.get('age'));
    const course = formData.get('course') as string;
    const isOnline: boolean = false;
    const avatar = formData.get('avatar') as string;
    const newStudent = {
      id: Date.now(),
      name,
      age,
      course,
      isOnline,
      avatar,
    };
    onAdd(newStudent);
  };
  return (
    <form action={formHandler} className="form">
      <label htmlFor={`name-${id}`}>Name</label>
      <input required type="text" name="name" id={`name-${id}`} />
      <label htmlFor={`age-${id}`}>Age</label>
      <input required type="number" name="age" id={`age-${id}`} />
      <label htmlFor={`course-${id}`}>Course</label>
      <input required type="text" name="course" id={`course-${id}`} />
      <label htmlFor={`avatar-${id}`}>image</label>
      <input type="text" name="avatar" id={`avatar-${id}`} />
      <button>Submit</button>
    </form>
  );
};
