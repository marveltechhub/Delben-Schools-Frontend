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

export async function GET(req, { params }) {
  const { id } = params;
  const data = await readData();
  const u = (data.users || []).find(x => x.id === id);
  if (!u) return new NextResponse("Not found", { status: 404 });
  return NextResponse.json(u);
}

export async function PUT(req, { params }) {
  const { id } = params;
  const payload = await req.json();
  const data = await readData();
  const idx = (data.users || []).findIndex(x => x.id === id);
  if (idx === -1) return new NextResponse("Not found", { status: 404 });
  const updated = { ...data.users[idx], ...payload };
  data.users[idx] = updated;
  await writeData(data);
  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  const { id } = params;
  const data = await readData();
  data.users = (data.users || []).filter(x => x.id !== id);
  await writeData(data);
  return NextResponse.json({ ok: true });
}