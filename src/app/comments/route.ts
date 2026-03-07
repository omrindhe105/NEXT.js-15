import { NextRequest } from "next/server";
import { users } from "./data";
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredResult = query
    ? users.filter((user) => user.comment.includes(query))
    : users;

  return new Response(JSON.stringify(filteredResult));
}

export async function POST(request: Request) {
  const newUser = await request.json();
  users.push(newUser);
  return new Response(JSON.stringify(newUser), { status: 201 });
}
