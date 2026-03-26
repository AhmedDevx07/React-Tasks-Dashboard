import { useState } from "react";
import { Play, RotateCcw, Search, Hash, Sparkles, AlertTriangle, CheckCircle2, ListChecks } from "lucide-react";

const FindMissing = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    if (!input.trim()) return;

    setLoading(true);
   
    setTimeout(() => {
      const arr = input
        .split(",")
        .map(Number)
        .filter(n => !isNaN(n))
        .sort((a, b) => a - b);
      
      let missing = [];
      if (arr.length > 0) {
        for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
          if (!arr.includes(i)) missing.push(i);
        }
      }
      
      setResult(missing);
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
          <Search size={20} className="text-indigo-400" />
        </div>
        <div>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] leading-none mb-1">Sequence Auditor</p>
          <h3 className="text-white font-bold text-xl tracking-tight">Missing Link Finder</h3>
        </div>
      </div>
      
     
      <div className="space-y-3 group">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-1 flex items-center gap-2">
          <Hash size={12} /> Numerical Sequence (Comma Separated)
        </label>
        
        <div className="relative">
          <input 
            type="text"
            className="w-full px-6 py-5 bg-gray-950/40 border border-white/5 rounded-2xl text-white font-mono text-lg outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 1, 2, 4, 5, 6"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
             <ListChecks size={16} className={`text-indigo-500/20 transition-opacity ${input ? 'opacity-100' : 'opacity-0'}`} />
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
              Find Gaps
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

       
      {result !== null && (
        <div className="relative group animate-in zoom-in-95 duration-500 pt-2">
          
          <div className={`absolute -inset-1 rounded-[2.5rem] blur opacity-30 ${result.length > 0 ? 'bg-red-500/30' : 'bg-emerald-500/30'}`}></div>
          
          <div className={`relative p-10 bg-[#0d111a]/80 border rounded-[2.5rem] backdrop-blur-xl overflow-hidden text-center ${result.length > 0 ? 'border-red-500/20' : 'border-emerald-500/20'}`}>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              {result.length > 0 ? (
                <AlertTriangle size={14} className="text-red-400" />
              ) : (
                <CheckCircle2 size={14} className="text-emerald-400" />
              )}
              <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${result.length > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                {result.length > 0 ? "Gaps Identified" : "Sequence Integrity Verified"}
              </p>
            </div>
            
            <div className="relative px-4">
              <div className={`text-3xl md:text-5xl font-black tracking-tight leading-tight ${result.length > 0 ? 'text-white' : 'text-emerald-500'}`}>
                {result.length > 0 ? (
                  result.join(", ")
                ) : (
                  "Perfect Sequence"
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
               <span className="flex items-center gap-2">
                 <div className={`w-1.5 h-1.5 rounded-full ${result.length > 0 ? 'bg-red-500' : 'bg-emerald-500'}`}></div>
                 {result.length} Missing
               </span>
               <div className="w-[1px] h-3 bg-white/10"></div>
               <span className="text-gray-400">Status: Audited</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindMissing;