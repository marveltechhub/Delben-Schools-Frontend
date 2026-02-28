"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../admin.css";

export default function AdminDashboard() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: "", fullName: "", email: "", role: "bursar" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("delben_admin_token");
    if (!token) router.push("/admin/login");
    else load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    const res = await fetch("/api/admin/users");
    const j = await res.json();
    setUsers(j || []);
  }

  async function createOrUpdate(e) {
    e.preventDefault();
    if (editingId) {
      const res = await fetch(`/api/admin/users/${editingId}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setEditingId(null);
        setForm({ username: "", fullName: "", email: "", role: "bursar" });
        load();
      }
      return;
    }
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ username: "", fullName: "", email: "", role: "bursar" });
      load();
    }
  }

  function edit(u) {
    setEditingId(u.id);
    setForm({ username: u.username, fullName: u.fullName, email: u.email, role: u.role });
  }

  async function remove(id) {
    if (!confirm("Delete this account?")) return;
    await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
    load();
  }

  function logout() {
    localStorage.removeItem("delben_admin_token");
    router.push("/admin/login");
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h2>Admin Dashboard</h2>
        <div>
          <button onClick={logout} className="small">Logout</button>
        </div>
      </header>

      <section className="admin-grid">
        <form className="admin-form" onSubmit={createOrUpdate}>
          <h3>{editingId ? "Edit account" : "Create account"}</h3>
          <label>Username<input value={form.username} onChange={e=>setForm({...form, username:e.target.value})} required/></label>
          <label>Full name<input value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})} required/></label>
          <label>Email<input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} /></label>
          <label>Role
            <select value={form.role} onChange={e=>setForm({...form, role:e.target.value})}>
              <option value="bursar">Bursar</option>
              <option value="principal">Principal</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <div className="admin-actions">
            <button type="submit">{editingId ? "Save" : "Create"}</button>
            {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ username: "", fullName: "", email: "", role: "bursar" }); }}>Cancel</button>}
          </div>
        </form>

        <div className="admin-list">
          <h3>Accounts</h3>
          <table>
            <thead><tr><th>Username</th><th>Full name</th><th>Role</th><th>Email</th><th></th></tr></thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.username}</td>
                  <td>{u.fullName}</td>
                  <td>{u.role}</td>
                  <td>{u.email}</td>
                  <td>
                    <button onClick={() => edit(u)} className="small">Edit</button>
                    <button onClick={() => remove(u.id)} className="small danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}