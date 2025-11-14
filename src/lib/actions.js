
"use server";
import { redirect } from "next/navigation";
import Todo from "./models/todo";
export async function newTodo(formData) {
  const title = formData.get("title");
  const author = formData.get("author");

  await Todo.create({ title, author });
  redirect("/todos/todoserver");
}
