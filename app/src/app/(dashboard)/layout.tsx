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
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[var(--ln-bg)]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--ln-teal-500)] border-t-transparent"></div>
          <p className="text-sm font-bold text-[var(--ln-text-secondary)]">Preparing your learning dashboard...</p>
        </div>
      </div>
    );
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
