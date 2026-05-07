import { AdminLoginForm } from "./AdminLoginForm";

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { next?: string };
}) {
  const nextPath = searchParams.next || "/admin";
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 text-black">
      <div className="liquid-glass w-full max-w-md p-6">
        <p className="coord text-xs text-[#1f1f1f]">ADMIN ACCESS</p>
        <h1 className="mt-2 font-display text-4xl font-bold">Login</h1>
        <p className="mt-2 text-sm text-[#1f1f1f]">
          Enter credentials to access the admin testing area.
        </p>
        <AdminLoginForm nextPath={nextPath} />
      </div>
    </main>
  );
}
