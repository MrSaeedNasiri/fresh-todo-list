import { useState } from "preact/hooks";
import { Tasks } from "../components/Tasks.tsx";

export default function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  function removeTask(s: string) {
    setTasks((p) => p.filter((e) => e != s));
  }

  return (
    <div class="flex flex-col w-full pt-5">
      <form
        class="flex gap-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          setTasks((p) => [...p, task]);
          setTask("");
        }}
      >
        <input
          class="w-5/6 border-1 border-gray-500 h-10 rounded p-2"
          placeholder="Write your task here..."
          type="text"
          value={task}
          onInput={(e) => setTask((e.target as HTMLInputElement).value)}
        />
        <input
          type="submit"
          value="Add"
          class="w-1/6 bg-blue-600 text-gray-50 rounded cursor-pointer hover:bg-blue-700 focus:bg-blue-700"
        >
        </input>
      </form>
      <Tasks tasks={tasks} removeTask={removeTask} />
    </div>
  );
}
