import AddStudent from "./AddStudent";
import StudentsList from "./StudentsList";
import axios from "axios";
import { useEffect, useState } from "react";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

export default function Students() {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [educators, setEducators] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await axios.get(`${BACK_END}/api/students`);
      setStudents(data);
    };

    const fetchEducators = async () => {
      const { data } = await axios.get(`${BACK_END}/api/educators`);
      setEducators(data);
    };

    fetchStudents();
    fetchEducators();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      name: event.target.studentName.value,
      email: event.target.studentEmail.value,
      course: event.target.studentCourse.value,
      educator_id: event.target.studentEducator.value,
    };
    axios.post(`${BACK_END}/api/students`, newStudent).then((response) => {
      setStudents([...students, response.data]);
    });
    event.target.reset();
  };

  const handleEdit = (event, studentId) => {
    event.preventDefault();
    setEditId(studentId);
  };

  const handleUpdate = (event, studentId) => {
    event.preventDefault();
    const values = {
      name: event.target.studentName.value,
      email: event.target.studentEmail.value,
      course: event.target.studentCourse.value,
    };
    axios
      .patch(`${BACK_END}/api/students/${studentId}`, values)
      .then((response) => {
        const updatedStudents = students.map((student) =>
          student.id === response.data.id ? response.data : student
        );
        setStudents(updatedStudents);
        setEditId(null);
      });
  };

  const handleDelete = async (event, studentId) => {
    event.preventDefault();
    const {
      data: { deletedStudentId },
    } = await axios.delete(`${BACK_END}/api/students/${studentId}`);
    setStudents(students.filter((student) => student.id !== deletedStudentId));
  };

  return (
    <>
      <AddStudent handleSubmit={handleSubmit} educators={educators} />
      <StudentsList
        students={students}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        editId={editId}
      />
    </>
  );
}
