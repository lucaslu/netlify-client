import React from "react";

export default function AddStudent({ handleSubmit, educators }) {
  return (
    <form className="add-form" onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="studentName">
        Student Name:
        <input type="text" name="studentName" />
      </label>
      <label htmlFor="studentEmail">
        Student Email:
        <input type="text" name="studentEmail" />
      </label>
      <label htmlFor="studentCourse">
        Student Course:
        <input type="text" name="studentCourse" />
      </label>
      <label htmlFor="studentEducator">
        Student's Educator:
        <select name="studentEducator">
          {educators.map((educator) => (
            <option key={educator.id} value={educator.id}>
              {educator.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
}
