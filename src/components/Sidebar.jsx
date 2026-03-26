import { NavLink } from "react-router-dom";
import { useTask } from "../context/TaskContext";
import {
  ChevronRight,
  Terminal,
  Settings,
  HelpCircle,
  LayoutDashboard,
} from "lucide-react";
import Swal from "sweetalert2";
const Sidebar = ({ closeMobile }) => {
  const { taskList } = useTask();
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
    <aside className="w-full h-full bg-gray-900/50 backdrop-blur-xl flex flex-col h-screen">
      <div className="p-8 flex items-center gap-4 border-b border-white/5">
        <div className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-600/40 transform rotate-3">
          <Terminal size={24} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-black text-white tracking-tighter uppercase leading-none">
            CodeLab <span className="text-indigo-500 italic">PRO</span>
          </h1>
          <p className="text-[10px] text-gray-500 font-bold mt-1 tracking-widest uppercase">
            Workspace v1.0
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-5 space-y-2 custom-scrollbar">
        <p className="text-[10px] font-black text-indigo-400/60 uppercase px-4 pb-3 tracking-[0.2em]">
          Algorithm Collection ({taskList.length})
        </p>

        {taskList.map((task) => (
          <NavLink
            key={task.id}
            to={`/task/${task.id}`}
            onClick={closeMobile}
            className={({ isActive }) => `
              flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 group
              ${
                isActive
                  ? "bg-indigo-600/15 text-white border border-indigo-500/20 shadow-lg shadow-indigo-600/5"
                  : "text-gray-500 hover:bg-white/5 hover:text-gray-200"
              }
            `}
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[11px] font-bold h-6 w-6 rounded-lg flex items-center justify-center transition-colors ${isActive ? "bg-indigo-500 text-white" : "bg-gray-800 text-gray-500 group-hover:bg-gray-700"}`}
                  >
                    {task.id}
                  </span>
                  <span className="text-sm font-semibold truncate max-w-[140px]">
                    {task.title}
                  </span>
                </div>
                <ChevronRight
                  size={14}
                  className={`transition-all duration-300 ${isActive ? "text-indigo-500 translate-x-1 opacity-100" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`}
                />
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-white/5 bg-black/20">
        <div className="flex items-center justify-around text-gray-500">
          <Settings
            onClick={handleFeatureDevelopment}
            size={18}
            className="hover:text-white cursor-pointer transition-colors"
          />
          <HelpCircle
            onClick={handleFeatureDevelopment}
            size={18}
            className="hover:text-white cursor-pointer transition-colors"
          />
          <LayoutDashboard
            onClick={handleFeatureDevelopment}
            size={18}
            className="hover:text-white cursor-pointer transition-colors"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
