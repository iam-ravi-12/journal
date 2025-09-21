export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// In-memory storage for simplicity (in a real app, use a database)
const todos: Todo[] = [
  {
    id: 1,
    text: "Learn Next.js",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    text: "Build a todo app",
    completed: false,
    createdAt: new Date(),
  },
];

let nextId = 3;

export const todoStore = {
  getAll: (): Todo[] => todos,
  
  getById: (id: number): Todo | undefined => 
    todos.find(todo => todo.id === id),
  
  create: (text: string): Todo => {
    const newTodo: Todo = {
      id: nextId++,
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    todos.push(newTodo);
    return newTodo;
  },
  
  update: (id: number, updates: Partial<Todo>): Todo | null => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) return null;
    
    todos[todoIndex] = { ...todos[todoIndex], ...updates, id };
    return todos[todoIndex];
  },
  
  delete: (id: number): Todo | null => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) return null;
    
    const deletedTodo = todos[todoIndex];
    todos.splice(todoIndex, 1);
    return deletedTodo;
  },
};