import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users, modules, courses } from "../data/mockData";
import "./UnlockRequests.css";

function UnlockRequests() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [requests, setRequests] = useState([
    {
      id: 1,
      student: "Neaha",
      moduleId: 3,
      reason: "I want to continue learning Functions.",
      status: "Pending",
    },
    {
      id: 2,
      student: "Anjali",
      moduleId: 4,
      reason: "Please unlock the OOP module.",
      status: "Pending",
    },
    {
      id: 3,
      student: "Rahul",
      moduleId: 7,
      reason: "I completed the previous modules.",
      status: "Approved",
    },
  ]);

  const getModule = (moduleId) => {
    return modules.find((module) => module.id === moduleId);
  };

  const getCourse = (moduleId) => {
    const module = getModule(moduleId);
    return courses.find((course) => course.id === module?.courseId);
  };

  const updateStatus = (id, status) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id
          ? { ...request, status: status }
          : request
      )
    );
  };

  const studentRequests =
    currentUser?.role === "Student"
      ? requests.filter((request) => request.student === currentUser.name)
      : requests;

  return (
    <div className="unlock-page">
      <div className="unlock-header">
        <div>
          <h2>Module Unlock Requests</h2>
          <p>
            {currentUser?.role === "Student"
              ? "View and track your module unlock requests."
              : "Review student requests and manage module access."}
          </p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          <i className="bi bi-arrow-left"></i> Dashboard
        </button>
      </div>

      {studentRequests.length === 0 ? (
        <div className="empty-request">
          <i className="bi bi-inbox"></i>
          <h4>No Requests Found</h4>
          <p>There are currently no module unlock requests.</p>
        </div>
      ) : (
        <div className="request-list">
          {studentRequests.map((request) => {
            const module = getModule(request.moduleId);
            const course = getCourse(request.moduleId);

            return (
              <div className="request-card" key={request.id}>
                <div className="request-icon">
                  <i className="bi bi-unlock"></i>
                </div>

                <div className="request-content">
                  <div className="request-top">
                    <div>
                      <h4>{module?.title}</h4>
                      <p className="course-name">
                        {course?.title}
                      </p>
                    </div>

                    <span
                      className={`status-badge ${request.status.toLowerCase()}`}
                    >
                      {request.status}
                    </span>
                  </div>

                  {currentUser?.role !== "Student" && (
                    <p>
                      <strong>Student:</strong> {request.student}
                    </p>
                  )}

                  <p>
                    <strong>Reason:</strong> {request.reason}
                  </p>

                  {request.status === "Pending" &&
                    currentUser?.role !== "Student" && (
                      <div className="request-actions">
                        <button
                          className="approve-btn"
                          onClick={() =>
                            updateStatus(request.id, "Approved")
                          }
                        >
                          <i className="bi bi-check-circle"></i>
                          Approve
                        </button>

                        <button
                          className="reject-btn"
                          onClick={() =>
                            updateStatus(request.id, "Rejected")
                          }
                        >
                          <i className="bi bi-x-circle"></i>
                          Reject
                        </button>
                      </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UnlockRequests;