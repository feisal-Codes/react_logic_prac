import "./styles.css";
import { useState } from "react";
//kanban board
//input -> [backlog,todo,inprogress,done]
//output-> simulate an assembly line
//[[1,2,3,4,5,6],[],[],[]]
import Assembly from "./kanban";
import Task from "./task";

const Tasks = [
  { id: 1, name: "Buy groceries", completed: false },
  { id: 2, name: "Finish homework", completed: true },
  { id: 3, name: "Walk the dog", completed: false },
  { id: 4, name: "shopping", completed: false },
  { id: 5, name: "Finish classwork", completed: true },
  { id: 6, name: "sleep", completed: false }
];
const list = ["backlog", "todo", "progress", "done"];

export default function App() {
  return (
    <div className="App">
      {/* <Assembly list={list} /> */}
      {/* <Clickevents /> */}
      <Task tasks={Tasks} />
    </div>
  );
}
