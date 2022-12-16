import TaskForm from "./components/TaskForm";
import Task_List from "./components/Task_List";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto bg-yellow-400 p-10">
        <TaskForm />
        <Task_List />
      </div>
    </main>
  );
}

export default App;
