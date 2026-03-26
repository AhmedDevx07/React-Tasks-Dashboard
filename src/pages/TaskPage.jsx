import { useParams } from "react-router-dom";
import { useTask } from "../context/TaskContext";
import { Suspense } from "react";
import { TaskComponents, taskLogics } from "./tasks"; 
import { Code2, Terminal, Cpu, Sparkles } from "lucide-react";

const TaskPage = () => {
  const { id } = useParams();
  const { taskList } = useTask();
  const task = taskList.find((t) => t.id === Number(id));

  const ActiveComponent = TaskComponents[id];

  if (!task) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4 bg-red-500/5 p-12 rounded-[3rem] border border-red-500/10">
        <h1 className="text-4xl font-black text-red-500/50">404</h1>
        <p className="text-white font-bold text-xl tracking-tight">Task Not Found</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 lg:space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
       
      <div className="relative pl-6 lg:pl-8">
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)]" />
        <div className="flex items-center gap-3 mb-2">
          <Sparkles size={16} className="text-indigo-400 animate-pulse" />
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Workspace Module</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-none">
          {task.title}
        </h1>
        <p className="text-gray-500 mt-3 font-medium flex items-center gap-2 text-sm lg:text-base">
          <Cpu size={18} className="text-gray-600" />
          Standalone Algorithm Execution Engine
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
         
        <div className="xl:col-span-7 group">
          <div className="relative">
            
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-[#0b0f19]/60 border border-white/5 p-6 lg:p-10 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl overflow-hidden min-h-[400px]">
              <Suspense fallback={
                <div className="flex flex-col items-center justify-center h-64 space-y-4">
                  <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
                  <p className="text-indigo-400 font-bold text-xs tracking-widest uppercase">Initializing Module...</p>
                </div>
              }>
                {ActiveComponent ? (
                  <ActiveComponent />
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/5 rounded-3xl">
                    <Terminal size={40} className="text-gray-800 mb-4" />
                    <p className="text-gray-600 italic font-medium">Logic UI component is being compiled...</p>
                  </div>
                )}
              </Suspense>
            </div>
          </div>
        </div>

        
        <div className="xl:col-span-5 sticky top-28">
          <div className="bg-[#05070a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col group">
           
            <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-indigo-500/10 rounded-lg">
                  <Code2 size={14} className="text-indigo-400" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Logic Code</span>
              </div>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500/40 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 group-hover:bg-amber-500/40 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-colors" />
              </div>
            </div>
            
           
            <div className="p-6 lg:p-8 flex-1 font-mono text-sm leading-relaxed overflow-x-auto custom-scrollbar">
              <pre className="text-indigo-300/90 whitespace-pre-wrap break-words">
                <code className="block border-l-2 border-indigo-500/20 pl-4">
                  {taskLogics[id] || "// System logic not found for this module."}
                </code>
              </pre>
            </div>
           
            <div className="bg-white/5 px-6 py-3 border-t border-white/5">
               <p className="text-[9px] font-bold text-gray-600 uppercase tracking-tighter">Read Only • JavaScript ES6</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TaskPage;