import { users } from "./data";

export async function GET() {
  return new Response(JSON.stringify(users));
}

export async function POST(request: Request) {
  const newUser = await request.json();
  users.push(newUser);
  return new Response(JSON.stringify(newUser), { status: 201 });
}
