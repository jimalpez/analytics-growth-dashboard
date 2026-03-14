"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import { StatusBadge } from "@/app/_components/status-badge";

const availableRoles = ["admin", "editor", "user"];

export default function AdminUsersPage() {
  const utils = api.useUtils();
  const { data: users } = api.users.getAll.useQuery();
  const updateRole = api.users.updateRole.useMutation({
    onSuccess: () => void utils.users.getAll.invalidate(),
  });
  const createUser = api.users.create.useMutation({
    onSuccess: () => {
      void utils.users.getAll.invalidate();
      setShowAddModal(false);
      setNewName("");
      setNewEmail("");
      setNewRole("user");
    },
  });

  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("user");

  function startEditing(userId: string, currentRole: string) {
    setEditingUserId(userId);
    setSelectedRole(currentRole);
  }

  function cancelEditing() {
    setEditingUserId(null);
    setSelectedRole("");
  }

  function saveRole(userId: string) {
    updateRole.mutate({ id: userId, role: selectedRole });
    setEditingUserId(null);
    setSelectedRole("");
  }

  function handleAddUser(e: React.FormEvent) {
    e.preventDefault();
    createUser.mutate({ name: newName, email: newEmail, role: newRole });
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--th-text)" }}>Admin - Users</h1>
          <p className="mt-1" style={{ color: "var(--th-text-secondary)" }}>Manage user accounts and roles.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)]"
        >
          + Add User
        </button>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "var(--th-overlay)" }}>
          <div
            className="w-full max-w-md rounded-xl border p-6"
            style={{ borderColor: "var(--th-border)", backgroundColor: "var(--th-card)" }}
          >
            <h3 className="mb-4 text-lg font-semibold" style={{ color: "var(--th-text)" }}>Add New User</h3>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded-lg border px-4 py-2.5 outline-none"
                  style={{
                    borderColor: "var(--th-border)",
                    backgroundColor: "var(--th-input-bg)",
                    color: "var(--th-text)",
                  }}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Email</label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border px-4 py-2.5 outline-none"
                  style={{
                    borderColor: "var(--th-border)",
                    backgroundColor: "var(--th-input-bg)",
                    color: "var(--th-text)",
                  }}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Role</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full rounded-lg border px-4 py-2.5 outline-none"
                  style={{
                    borderColor: "var(--th-border)",
                    backgroundColor: "var(--th-input-bg)",
                    color: "var(--th-text)",
                  }}
                >
                  {availableRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="rounded-lg border px-4 py-2 text-sm transition-colors"
                  style={{
                    borderColor: "var(--th-border)",
                    color: "var(--th-text-secondary)",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={createUser.isPending}
                  className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)] disabled:opacity-50"
                >
                  {createUser.isPending ? "Adding..." : "Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div
        className="rounded-xl border p-6"
        style={{ borderColor: "var(--th-border)", backgroundColor: "var(--th-card)" }}
      >
        <h3 className="mb-4 text-lg font-semibold" style={{ color: "var(--th-text)" }}>All Users</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottomWidth: "1px", borderColor: "var(--th-border)" }}>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "var(--th-text-secondary)" }}>Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "var(--th-text-secondary)" }}>Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "var(--th-text-secondary)" }}>Role</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "var(--th-text-secondary)" }}>Joined</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "var(--th-text-secondary)" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr
                  key={user.id}
                  className="transition-colors"
                  style={{ borderBottomWidth: "1px", borderColor: "var(--th-border)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--th-row-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <td className="whitespace-nowrap px-4 py-3 text-sm" style={{ color: "var(--th-text-secondary)" }}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/20">
                        <span className="text-xs font-bold text-[var(--color-primary-light)]">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span className="font-medium" style={{ color: "var(--th-text)" }}>{user.name}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm" style={{ color: "var(--th-text-secondary)" }}>
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm" style={{ color: "var(--th-text-secondary)" }}>
                    {editingUserId === user.id ? (
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="rounded-md border px-2 py-1 text-sm outline-none"
                        style={{
                          borderColor: "var(--th-border)",
                          backgroundColor: "var(--th-input-bg)",
                          color: "var(--th-text)",
                        }}
                      >
                        {availableRoles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <StatusBadge status={user.role} />
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm" style={{ color: "var(--th-text-secondary)" }}>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm" style={{ color: "var(--th-text-secondary)" }}>
                    {editingUserId === user.id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => saveRole(user.id)}
                          disabled={updateRole.isPending}
                          className="rounded-md bg-[var(--color-success)] px-3 py-1 text-xs font-medium text-white transition-colors disabled:opacity-50"
                        >
                          {updateRole.isPending ? "Saving..." : "Save"}
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="rounded-md border px-3 py-1 text-xs transition-colors"
                          style={{ borderColor: "var(--th-border)", color: "var(--th-text-secondary)" }}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => startEditing(user.id, user.role)}
                        className="rounded-md border px-3 py-1 text-xs transition-colors"
                        style={{ borderColor: "var(--th-border)", color: "var(--th-text-secondary)" }}
                      >
                        Edit Role
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
