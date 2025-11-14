import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbconnection";
import Todo from "@/lib/models/todo";
dbConnection();

export async function GET() {
  try {
    const todo = await Todo.find();
    if (todo) {
return NextResponse.json({ todo, message: "success" }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error});
  }
}

export async function POST(req) {
  try {
    const { title, author } = await req.json();
    const todo = await Todo.create({ title, author });
    if (todo) {
      return NextResponse.json({ todo, status: 200, message: "todo created successfully" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, status: 500 });
  }
}
