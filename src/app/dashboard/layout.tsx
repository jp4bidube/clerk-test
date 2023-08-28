import { UserProfile } from "@/components/user-profile";
import { SignedIn } from "@clerk/nextjs";
import { Metadata } from "next";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard to your account",
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SignedIn>
      <div className="flex min-h-screen flex-col">
        <header className="container z-40 bg-background border-b-2">
          <div className="flex h-20 items-center justify-end py-6">
            <nav className="flex gap-2">
              <UserProfile />
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </SignedIn>
  );
}
