# Todo App

A modern, responsive todo application built with **React.js** frontend and **Next.js** backend.

![Todo App Screenshot](https://github.com/user-attachments/assets/5c6451a8-05ba-438e-8dcd-00732fd63c24)

## Features

✅ **Create Todos** - Add new tasks with a clean, intuitive interface  
✅ **Complete Todos** - Mark tasks as done/undone with a single click  
✅ **Edit Todos** - Inline editing of existing tasks  
✅ **Delete Todos** - Remove tasks with confirmation dialog  
✅ **Progress Tracking** - See completion statistics at a glance  
✅ **Responsive Design** - Works beautifully on desktop and mobile  
✅ **Real-time Updates** - Instant feedback for all operations  

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG icons)
- **Data Storage**: In-memory (for demo purposes)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd journal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## API Endpoints

The application provides a REST API for todo operations:

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/[id]` - Update a specific todo
- `DELETE /api/todos/[id]` - Delete a specific todo

### Example API Usage

```bash
# Get all todos
curl http://localhost:3000/api/todos

# Create a new todo
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"text": "Learn React"}'

# Mark todo as completed
curl -X PUT http://localhost:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# Delete a todo
curl -X DELETE http://localhost:3000/api/todos/1
```

## Project Structure

```
src/
├── app/
│   ├── api/todos/              # API routes
│   │   ├── route.ts           # GET, POST /api/todos
│   │   └── [id]/route.ts      # PUT, DELETE /api/todos/[id]
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── TodoApp.tsx            # Main todo application
│   ├── AddTodoForm.tsx        # Form for adding todos
│   └── TodoItem.tsx           # Individual todo item
└── lib/
    └── todoStore.ts           # Data store and types
```

## Key Features Explained

### Responsive Design
The app uses Tailwind CSS for a mobile-first responsive design that looks great on all devices.

### Real-time Updates
All todo operations (create, update, delete) are immediately reflected in the UI without page refreshes.

### Inline Editing
Click the edit button on any todo to edit it inline. Press Enter to save or Escape to cancel.

### Progress Tracking
The app shows completion statistics (e.g., "2 of 3 completed") to help track your progress.

### Error Handling
Comprehensive error handling for API operations with user-friendly error messages.

## Future Enhancements

- [ ] Persistent data storage (database integration)
- [ ] User authentication and multiple user support
- [ ] Todo categories and tags
- [ ] Due dates and reminders
- [ ] Search and filtering
- [ ] Drag and drop reordering
- [ ] Dark mode support

## Development

### Linting
```bash
npm run lint
```

### Building
```bash
npm run build
```

### Type Checking
The project uses TypeScript for type safety. All components and API routes are fully typed.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
