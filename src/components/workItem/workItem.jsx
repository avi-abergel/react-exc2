import React from "react";

export const WorkItem = ({ id, text, deleteItem }) => {
  return (
    <li>
      <div className="card">
        <div className="card-header">Task</div>
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
        </div>
        <button className="btn btn-primary" onClick={deleteItem(id)}>
          done
        </button>
      </div>
    </li>
  );
};
