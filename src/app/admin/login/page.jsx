"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../admin.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    setErr("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const j = await res.json();
    if (res.ok && j.token) {
      localStorage.setItem("delben_admin_token", j.token);
      router.push("/admin/dashboard");
      return;
    }
    setErr(j.message || "Login failed");
  }

  return (
    <div className="admin-page">
      <form className="admin-box" onSubmit={submit}>
        <h2>Admin Portal Login</h2>
        {err && <div className="admin-err">{err}</div>}
        <label>Username
          <input value={username} onChange={e=>setUsername(e.target.value)} required />
        </label>
        <label>Password
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </label>
        <div className="admin-actions">
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}