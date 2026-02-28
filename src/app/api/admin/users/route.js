import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const dataFile = path.join(process.cwd(), "data", "users.json");

async function readData() {
  try {
    const raw = await fs.readFile(dataFile, "utf8");
    return JSON.parse(raw);
  } catch {
    return { users: [] };
  }
}
async function writeData(obj) {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(obj, null, 2), "utf8");
}

export async function GET() {
  const data = await readData();
  return NextResponse.json(data.users || []);
}

export async function POST(req) {
  const payload = await req.json();
  const data = await readData();

  const id = `u${Date.now()}${Math.floor(Math.random() * 900)}`;
  const user = {
    id,
    username: payload.username || `user_${id}`,
    fullName: payload.fullName || "",
    email: payload.email || "",
    role: payload.role || "bursar",
  };

  data.users = data.users || [];
  data.users.push(user);
  await writeData(data);

  return NextResponse.json(user);
}