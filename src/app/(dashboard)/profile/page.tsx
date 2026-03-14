"use client";

import { api } from "@/trpc/react";

export default function ProfilePage() {
  const { data: user } = api.users.getCurrent.useQuery();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: "var(--th-text)" }}>Profile</h1>
        <p className="mt-1" style={{ color: "var(--th-text-secondary)" }}>Manage your account settings.</p>
      </div>

      <div
        className="max-w-2xl rounded-xl border p-8"
        style={{ borderColor: "var(--th-border)", backgroundColor: "var(--th-card)" }}
      >
        <div className="mb-8 flex items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
            <span className="text-2xl font-bold text-white">
              {user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("") ?? "?"}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold" style={{ color: "var(--th-text)" }}>{user?.name ?? "Loading..."}</h2>
            <p style={{ color: "var(--th-text-secondary)" }}>{user?.email}</p>
            <span className="mt-1 inline-block rounded-full bg-primary/20 px-3 py-0.5 text-xs font-medium capitalize text-primary-light">
              {user?.role}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Full Name</label>
            <input
              type="text"
              defaultValue={user?.name}
              className="w-full rounded-lg border px-4 py-2.5 outline-none"
              style={{
                borderColor: "var(--th-border)",
                backgroundColor: "var(--th-input-bg)",
                color: "var(--th-text)",
              }}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Email Address</label>
            <input
              type="email"
              defaultValue={user?.email}
              className="w-full rounded-lg border px-4 py-2.5 outline-none"
              style={{
                borderColor: "var(--th-border)",
                backgroundColor: "var(--th-input-bg)",
                color: "var(--th-text)",
              }}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Role</label>
            <input
              type="text"
              defaultValue={user?.role}
              disabled
              className="w-full rounded-lg border px-4 py-2.5 outline-none"
              style={{
                borderColor: "var(--th-border)",
                backgroundColor: "var(--th-input-bg)",
                color: "var(--th-text-muted)",
              }}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium" style={{ color: "var(--th-text-secondary)" }}>Member Since</label>
            <input
              type="text"
              defaultValue={user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : ""}
              disabled
              className="w-full rounded-lg border px-4 py-2.5 outline-none"
              style={{
                borderColor: "var(--th-border)",
                backgroundColor: "var(--th-input-bg)",
                color: "var(--th-text-muted)",
              }}
            />
          </div>
          <button className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition-colors hover:bg-primary-dark">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
