const statusColors: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400",
  contacted: "bg-yellow-500/20 text-yellow-400",
  qualified: "bg-purple-500/20 text-purple-400",
  converted: "bg-green-500/20 text-green-400",
  lost: "bg-red-500/20 text-red-400",
  admin: "bg-red-500/20 text-red-400",
  editor: "bg-purple-500/20 text-purple-400",
  user: "bg-blue-500/20 text-blue-400",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusColors[status] ?? "bg-gray-500/20 text-gray-400"}`}
    >
      {status}
    </span>
  );
}
