import { NextRequest, NextResponse } from 'next/server';
import { todoStore } from '@/lib/todoStore';

// GET /api/todos - Get all todos
export async function GET() {
  return NextResponse.json(todoStore.getAll());
}

// POST /api/todos - Create a new todo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text is required and must be a string' },
        { status: 400 }
      );
    }

    const newTodo = todoStore.create(text);
    return NextResponse.json(newTodo, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON' },
      { status: 400 }
    );
  }
}