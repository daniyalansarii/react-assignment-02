import React from "react";
import "./App.css";

function App() {
  const students = [
    {
      name: "Ali Khan",
      course: "Web Development",
      age: 18,
      city: "Karachi",
    },
    {
      name: "Sara Ahmed",
      course: "Graphic Design",
      age: 20,
      city: "Lahore",
    },
    {
      name: "Ahmed Raza",
      course: "React JS",
      age: 19,
      city: "Islamabad",
    },
    {
      name: "Ayesha Malik",
      course: "Web Development",
      age: 21,
      city: "Karachi",
    },
  ];

  return (
    <div className="container">
      <h1 className="main-heading">Student Directory</h1>

      <div className="student-grid">
        {students.map((item, index) => (
          <div className="student-card" key={index}>
            <div className="card-header">
              <h2>{item.name}</h2>
            </div>

            <div className="card-body">
              <p>
                <strong>Course:</strong> {item.course}
              </p>

              <p>
                <strong>Age:</strong> {item.age}
              </p>

              <p>
                <strong>City:</strong> {item.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
