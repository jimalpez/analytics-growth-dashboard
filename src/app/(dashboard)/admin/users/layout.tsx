import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Users",
  description: "Manage user accounts and roles for your organization.",
};

export default function AdminUsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
