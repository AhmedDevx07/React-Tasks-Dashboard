import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { User, Bell, Search, Menu, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";
const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Sign Out",
      text: "Are you sure you want to terminate your current session?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#6366f1",
      cancelButtonColor: "#1e293b",
      confirmButtonText: "Yes, Sign Out",
      background: "#0b0f19",
      color: "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await logout();
        navigate("/auth");
      }
    });
  };
  const handleFeatureDevelopment = () => {
    Swal.fire({
      title: "Feature in Development",
      text: "This feature is currently being optimized for the best experience and will be available in the next update.",
      icon: "info",
      iconColor: "#6366f1",
      background: "#0b0f19",
      color: "#fff",
      showConfirmButton: true,
      confirmButtonColor: "#6366f1",
      confirmButtonText: "Understood",
      customClass: {
        popup:
          "rounded-3xl border border-white/10 shadow-2xl shadow-indigo-500/10",
      },
    });
  };
  return (
    <div className="flex bg-[#0b0f19] h-screen text-gray-200 antialiased overflow-hidden font-sans">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out bg-gray-950 border-r border-white/5
          lg:sticky lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar closeMobile={() => setSidebarOpen(false)} />
      </div>

      <main className="flex-1 flex flex-col min-w-0 h-screen relative">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-6 lg:px-10 bg-[#0b0f19]/80 backdrop-blur-xl sticky top-0 z-30 shrink-0">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2.5 text-gray-400 hover:bg-white/5 rounded-xl transition-colors border border-white/5"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-2 w-80 lg:w-96 focus-within:border-indigo-500/50 transition-all group">
              <Search
                size={18}
                className="text-gray-500 group-focus-within:text-indigo-400"
              />
              <input
                className="bg-transparent border-none outline-none ml-3 text-sm w-full text-white placeholder:text-gray-600"
                placeholder="Search tasks..."
              />
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <button
              onClick={handleFeatureDevelopment}
              className="p-2 text-gray-400 hover:text-white relative transition-colors"
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#0b0f19]"></span>
            </button>

            <div className="h-8 w-[1px] bg-white/10 mx-1 hidden sm:block"></div>

            <div className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-all">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-white leading-none mb-1 tracking-tight">
                  {user?.displayName || "Guest User"}
                </p>
                <p className="text-[9px] text-indigo-400 font-black uppercase tracking-[0.2em]">
                  PRO MEMBER
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-[1.5px] shadow-lg shadow-indigo-500/10">
                <div className="w-full h-full bg-[#0b0f19] rounded-[14px] flex items-center justify-center">
                  <User size={18} className="text-indigo-400" />
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-all border border-red-500/10 group shadow-lg shadow-red-500/5"
              title="Logout"
            >
              <LogOut
                size={20}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-10 bg-gradient-to-br from-transparent to-indigo-900/5 overflow-y-auto custom-scrollbar">
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
