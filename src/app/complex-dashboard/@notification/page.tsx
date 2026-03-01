import Link from "next/link";

export default function NotificationPage() {
  return (
    <div className=" border rounded p-4 mb-4 bg-blue-200 shadow">
      <h1 className="text-2xl font-bold mb-4">Notification Page</h1>

      <p>
        <span className="bg-red-300 p-2  rounded-full">5</span> new
        notifications
      </p>
      <Link
        href="/complex-dashboard/archived-notification"
        className="text-blue-500 underline"
      >
        Archived notifications
      </Link>
    </div>
  );
}
