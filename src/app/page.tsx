import TodoApp from "@/components/TodoApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Todo App
          </h1>
          <p className="text-gray-600">
            A simple todo application built with Next.js and React
          </p>
        </header>
        <TodoApp />
      </div>
    </div>
  );
}
