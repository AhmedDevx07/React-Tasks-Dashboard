import { useState } from "react";
import { Play, RotateCcw, Filter, Hash, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

const RemoveFalsy = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    if (!input.trim()) return;

    setLoading(true);
    
    setTimeout(() => {
      const raw = input.split(",").map((s) => {
        let v = s.trim();
        if (v === "0") return 0;
        if (v === "false") return false;
        if (v === '""' || v === "''") return "";
        if (v === "null") return null;
        if (v === "undefined") return undefined;
        if (v === "NaN") return NaN;
        return v.replace(/['"]+/g, "");
      });
      const clean = raw.filter(Boolean);
      setResult(JSON.stringify(clean));
      setLoading(false);
    }, 600);
  };

  const handleReset = () => {
    setInput("");
    setResult(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
    
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <Filter size={20} className="text-indigo-400" />
        </div>
        <div>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] leading-none mb-1">Utility Module</p>
          <h3 className="text-white font-bold text-xl tracking-tight">Data Sanitization</h3>
        </div>
      </div>
      
       
      <div className="space-y-3 group">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-1 flex items-center gap-2">
          <Hash size={12} /> Mixed Dataset (Comma Separated)
        </label>
        
        <div className="relative">
          <input 
            type="text"
            className="w-full px-6 py-5 bg-gray-950/40 border border-white/5 rounded-2xl text-white font-mono text-lg outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='e.g. 0, "hello", false, null, 42'
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
             <ShieldCheck size={16} className={`text-indigo-500/20 transition-opacity ${input ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>
      </div>

      
      <div className="flex gap-4">
        <button 
          onClick={handleRun} 
          disabled={loading || !input.trim()}
          className="flex-[3] bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-indigo-600/20 group text-white"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              Filter Falsy Values
            </>
          )}
        </button>

        <button 
          onClick={handleReset} 
          className="flex-1 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 text-gray-400 hover:text-white transition-all flex items-center justify-center"
        >
          <RotateCcw size={20} />
        </button>
      </div>

       
      {result && (
        <div className="relative group animate-in zoom-in-95 duration-500 pt-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[2.5rem] blur opacity-40"></div>
          <div className="relative p-10 bg-[#0d111a]/80 border border-emerald-500/20 rounded-[2.5rem] backdrop-blur-xl overflow-hidden">
            
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1 bg-emerald-500/20 rounded-lg">
                <CheckCircle2 size={12} className="text-emerald-500" />
              </div>
              <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">Truthy Output Identified</p>
            </div>
            
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
              <code className="text-white text-xl md:text-2xl font-mono block break-all leading-relaxed">
                <span className="text-gray-600 mr-2">{">"}</span>
                {result}
              </code>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex gap-6">
               <div className="text-center">
                  <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Sanitized</p>
                  <p className="text-emerald-500 font-mono text-xs uppercase font-bold">Success</p>
               </div>
               <div className="w-[1px] h-8 bg-white/5"></div>
               <div className="text-center">
                  <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Logic</p>
                  <p className="text-white font-mono text-xs italic">Boolean Filter</p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveFalsy;