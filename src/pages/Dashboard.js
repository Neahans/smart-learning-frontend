import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./Dashboard.css";

const courseData = [
  { name: "Python", students: 45 },
  { name: "React", students: 38 },
  { name: "Django", students: 32 },
  { name: "Cybersecurity", students: 28 },
  { name: "AI & ML", students: 24 },
];

const moduleData = [
  { name: "Completed", value: 72 },
  { name: "In Progress", value: 18 },
  { name: "Locked", value: 10 },
];

function Dashboard() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const role = currentUser?.role || "Student";

  const isAdmin = role === "Admin";
  const isMentor = role === "Mentor";

  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="dashboard-heading">
        <div>
          <h2>
            Welcome, {currentUser?.name || "Student"} 👋
          </h2>

          <p>
            {isAdmin
              ? "Manage your learning platform from one place."
              : isMentor
              ? "Track your students and learning activities."
              : "Continue your learning journey."}
          </p>
        </div>
      </div>

      {/* ================= ADMIN ================= */}

      {isAdmin && (
        <>
          <div className="row g-4 mb-4">

            <div className="col-xl-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon purple">
                  <i className="bi bi-book-fill"></i>
                </div>

                <div>
                  <span>Total Courses</span>
                  <h3>24</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon blue">
                  <i className="bi bi-people-fill"></i>
                </div>

                <div>
                  <span>Total Students</span>
                  <h3>120</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon green">
                  <i className="bi bi-person-workspace"></i>
                </div>

                <div>
                  <span>Total Mentors</span>
                  <h3>12</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon orange">
                  <i className="bi bi-unlock-fill"></i>
                </div>

                <div>
                  <span>Unlock Requests</span>
                  <h3>8</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="row g-4">

            <div className="col-lg-7">
              <div className="chart-card">

                <div className="chart-header">
                  <div>
                    <h5>Course Enrollment</h5>
                    <small>Students per course</small>
                  </div>
                </div>

                <ResponsiveContainer
                  width="100%"
                  height={320}
                >
                  <BarChart data={courseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Bar
                      dataKey="students"
                      name="Students"
                    />
                  </BarChart>
                </ResponsiveContainer>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="chart-card">

                <div className="chart-header">
                  <div>
                    <h5>Module Progress</h5>
                    <small>Overall learning status</small>
                  </div>
                </div>

                <ResponsiveContainer
                  width="100%"
                  height={320}
                >
                  <PieChart>

                    <Pie
                      data={moduleData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {moduleData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                    <Legend />

                  </PieChart>
                </ResponsiveContainer>

              </div>
            </div>

          </div>
        </>
      )}

      {/* ================= MENTOR ================= */}

      {isMentor && (
        <>
          <div className="row g-4 mb-4">

            <div className="col-md-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon purple">
                  <i className="bi bi-people-fill"></i>
                </div>

                <div>
                  <span>My Students</span>
                  <h3>18</h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon blue">
                  <i className="bi bi-book"></i>
                </div>

                <div>
                  <span>My Courses</span>
                  <h3>5</h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon green">
                  <i className="bi bi-check-circle"></i>
                </div>

                <div>
                  <span>Completed</span>
                  <h3>42</h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon orange">
                  <i className="bi bi-unlock"></i>
                </div>

                <div>
                  <span>Pending Requests</span>
                  <h3>3</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="info-card">
            <div>
              <h5>Mentor Activity</h5>
              <p>
                You have 3 module unlock requests waiting
                for review.
              </p>
            </div>

            <i className="bi bi-arrow-right-circle"></i>
          </div>
        </>
      )}

      {/* ================= STUDENT ================= */}

      {!isAdmin && !isMentor && (
        <>
          <div className="row g-4 mb-4">

            <div className="col-md-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon purple">
                  <i className="bi bi-book-fill"></i>
                </div>

                <div>
                  <span>My Courses</span>
                  <h3>4</h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon blue">
                  <i className="bi bi-journal-check"></i>
                </div>

                <div>
                  <span>Completed Modules</span>
                  <h3>12</h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon orange">
                  <i className="bi bi-lock-fill"></i>
                </div>

                <div>
                  <span>Locked Modules</span>
                  <h3>3</h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon green">
                  <i className="bi bi-person-workspace"></i>
                </div>

                <div>
                  <span>My Mentor</span>
                  <h3 className="small-value">
                    Arun
                  </h3>
                </div>
              </div>
            </div>

          </div>

          <div className="info-card">
            <div>
              <h5>Continue Learning 🌸</h5>
              <p>
                Your next module is ready. Keep going!
              </p>
            </div>

            <button className="btn btn-primary">
              Continue
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </>
      )}

    </div>
  );
}

export default Dashboard;