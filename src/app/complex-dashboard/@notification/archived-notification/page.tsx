import Link from "next/link";

export default function archivedNotification() {
  return (
    <div className=" border rounded p-4 mb-4 bg-blue-200 shadow">
      <h1 className="text-2xl font-bold mb-4">Notification Page </h1>

      <Link href="/complex-dashboard" className="text-blue-500 underline">
        Default
      </Link>
    </div>
  );
}
