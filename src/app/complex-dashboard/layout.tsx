export default function ComplexDashboardLayout({
  children,
  notification,
  revenu,
  UserAnalyticsPage,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  revenu: React.ReactNode;
  UserAnalyticsPage: React.ReactNode;
}) {
  return (
    <div className="flex h-screen  flex-col ">
      <main className="w-3/4 p-4">{children}</main>
      <div className="w-full p-4 bg-gray-200 flex space-x-4">
        {notification}
        {revenu}
        {UserAnalyticsPage}
      </div>
    </div>
  );
}
