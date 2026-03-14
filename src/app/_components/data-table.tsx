"use client";

interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  title: string;
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  title,
}: DataTableProps<T>) {
  return (
    <div className="rounded-xl border p-6" style={{ borderColor: "var(--th-border)", backgroundColor: "var(--th-card)" }}>
      <h3 className="mb-4 text-lg font-semibold" style={{ color: "var(--th-text)" }}>{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottomWidth: "1px", borderColor: "var(--th-border)" }}>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: "var(--th-text-secondary)" }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={(item.id as string | undefined) ?? i}
                className="transition-colors"
                style={{ borderBottomWidth: "1px", borderColor: "var(--th-border)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--th-row-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="whitespace-nowrap px-4 py-3 text-sm"
                    style={{ color: "var(--th-text-secondary)" }}
                  >
                    {col.render
                      ? col.render(item)
                      : (() => {
                          const val: unknown = item[col.key];
                          if (val == null) return "";
                          if (val instanceof Date) return val.toLocaleDateString();
                          if (typeof val === "object") return JSON.stringify(val);
                          return String(val as string | number | boolean);
                        })()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
