import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { getProfile } from "@/lib/auth-actions";
import { redirect } from "next/navigation";
import { UserProvider } from "@/components/user-provider";
import { serializeData } from "@/lib/utils";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rawProfile = await getProfile();

  if (!rawProfile) {
    redirect("/login");
  }

  const profile = serializeData(rawProfile);

  return (
    <UserProvider user={profile}>
      <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)]">
        <Sidebar />
        <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
          <Topbar />
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </UserProvider>
  );
}
