import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen w-screen">
      <TaskForm />
      <TaskList />
    </main>
  );
}

export default App;
