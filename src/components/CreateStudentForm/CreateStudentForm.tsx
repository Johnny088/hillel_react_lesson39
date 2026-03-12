import './CreateStudentsForm.css';
import { type StudentType } from '../../types/studentType';
interface Props {
  onAdd: (newStudent: StudentType) => void;
}
export const CreateStudentForm = ({ onAdd }: Props) => {
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
      <label htmlFor="name">Name</label>
      <input required type="text" name="name" />
      <label htmlFor="age">Age</label>
      <input required type="number" name="age" />
      <label htmlFor="course">Course</label>
      <input required type="text" name="course" />
      <label htmlFor="avatar">image</label>
      <input type="text" name="avatar" />
      <button>Submit</button>
    </form>
  );
};
