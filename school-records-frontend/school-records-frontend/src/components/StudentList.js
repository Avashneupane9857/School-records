// frontend/src/components/StudentList.js

import React from "react";

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
