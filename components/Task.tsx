interface TaskProps {
  task: string;
  removeTask: (s: string) => void;
}

export function Task({ task, removeTask }: TaskProps) {
  return (
    <div class="w-full bg-gray-50 h-16 text-black rounded shadow flex justify-between items-center content-between">
      <p class="p-2 w-5/6">
        {task}
      </p>
      <button
        onClick={() => removeTask(task)}
        class="w-1/6 bg-red-100 h-full"
      >
        Done
      </button>
    </div>
  );
}
