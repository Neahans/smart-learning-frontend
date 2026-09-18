import React from "react";

import "./ModuleCard.css";

function ModuleCard({ module, onOpen, onRequestUnlock }) {
  return (
    <div
      className={
        module.unlocked
          ? "module-card"
          : "module-card locked"
      }
    >
      <div className="module-number">
        {module.unlocked ? (
          <i className="bi bi-check-lg"></i>
        ) : (
          <i className="bi bi-lock-fill"></i>
        )}
      </div>

      <div className="module-content">
        <span className="module-order">
          Module {module.order}
        </span>

        <h4>{module.title}</h4>

        <p>{module.description}</p>

        {module.unlocked ? (
          <button
            className="btn btn-primary module-button"
            onClick={() => onOpen(module)}
          >
            <i className="bi bi-book me-2"></i>
            Open Module
          </button>
        ) : (
          <button
            className="btn btn-outline-warning module-button"
            onClick={() => onRequestUnlock(module)}
          >
            <i className="bi bi-unlock me-2"></i>
            Request Unlock
          </button>
        )}
      </div>
    </div>
  );
}

export default ModuleCard;