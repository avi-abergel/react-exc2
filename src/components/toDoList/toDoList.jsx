import { React, useState } from "react";
import { AddWorkItem } from "../addWorkItem/addWorkItem";
import { WorkItem } from "../workItem/workItem";

import "./style.css";

export const ToDoList = () => {
  const [ItemArr, setItemArr] = useState([]);
  const [Task, setTask] = useState("");

  const addItem = () => {
    setItemArr((ItemArr) => [
      ...ItemArr,
      { id: ItemArr.length + 1, text: Task },
    ]);
  };

  const deleteItem = (id) => {
    let newItemArr = ItemArr.filter((I) => I.id !== id);
    setItemArr(newItemArr);
  };

  const handleTask = (event) => {
    setTask(event.target.value);
  };
  return (
    <div className="toDoList-container">
      <h1>today work items that should be done</h1>
      <AddWorkItem addItem={addItem} handleTask={handleTask} />
      {ItemArr.map((i) => {
        return <WorkItem id={i.id} text={i.text} deleteItem={deleteItem} />;
      })}
    </div>
  );
};
