import { useRef, useState } from "preact/hooks";
import { Tasks } from "../components/Tasks.tsx";

export interface ITask {
  uuid: string;
  desc: string;
}

export default function Todo() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  // const [task, setTask] = useState("");
  const taskRef = useRef<HTMLInputElement | null>(null);

  function removeTask(uuid: string) {
    setTasks((tasks) => tasks.filter((task) => task.uuid != uuid));
  }

  return (
    <div class="flex flex-col w-full pt-5">
      <form
        class="flex gap-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          if (!taskRef?.current?.value) return;
          setTasks((
            p,
          ) => [...p, {
            desc: taskRef?.current?.value ?? "",
            uuid: crypto.randomUUID(),
          }]);
          taskRef.current.value = "";
        }}
      >
        <input
          class="w-5/6 border-1 border-gray-500 h-10 rounded p-2"
          placeholder="Write your task here..."
          type="text"
          ref={taskRef}
          // value={task}
          // onInput={(e) => setTask((e.target as HTMLInputElement).value)}
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
