import Todo from "../islands/Todo.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md flex flex-col justify-center items-center">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <a href="https://fresh.deno.dev">
        <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh" />
      </a>
      <h1 class="text-3xl p-2">
        Fresh ToDo List
      </h1>
      <Todo />
    </div>
  );
}
