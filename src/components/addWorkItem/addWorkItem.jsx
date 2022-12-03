import React from "react";

export const AddWorkItem = ({ addItem, handleTask }) => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" onChange={handleTask}></input>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => addItem()}
      >
        Add
      </button>
    </div>
  );
};
