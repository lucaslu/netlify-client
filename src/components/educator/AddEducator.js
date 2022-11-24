import React from "react";

export default function AddEducator({ handleSubmit }) {
  return (
    <form className="add-form" onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="educatorName">
        Educator Name:
        <input type="text" name="educatorName" />
      </label>
      <label htmlFor="educatorEmail">
        Educator Email:
        <input type="text" name="educatorEmail" />
      </label>
      <label htmlFor="educatorPosition">
        Educator Position:
        <input type="text" name="educatorPosition" />
      </label>
      <button type="submit">Add Educator</button>
    </form>
  );
}
