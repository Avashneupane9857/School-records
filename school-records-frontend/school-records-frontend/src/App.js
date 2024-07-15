// frontend/src/App.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3005/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div>
      <h1>School Records Management</h1>
      <AddStudent fetchStudents={fetchStudents} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
