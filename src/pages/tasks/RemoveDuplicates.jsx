import { useState } from "react";
import { Play, RotateCcw, Layers, Hash, CheckCircle2, Sparkles } from "lucide-react";

const RemoveDuplicates = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    if (!input.trim()) return;
    
    setLoading(true);
    
     
    setTimeout(() => {
     
      const arr = input.split(",")
                       .map(item => item.trim())
                       .filter(item => item !== "");

     
      const unique = [...new Set(arr)];
      
      setResult(unique);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
    
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <Layers size={20} className="text-indigo-400" />
        </div>
        <div>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] leading-none mb-1">Utility Module</p>
          <h3 className="text-white font-bold text-xl tracking-tight">Array Deduplication</h3>
        </div>
      </div>
      
       
      <div className="space-y-3">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-1">
          Input Dataset (Comma Separated)
        </label>
        
        <div className="relative group">
          <Hash className="absolute left-4 top-5 text-gray-600 group-focus-within:text-indigo-500 transition-colors" size={20} />
           
          <input 
            type="text" 
            className="w-full pl-12 pr-4 py-5 bg-gray-950/40 border border-white/5 rounded-2xl text-white font-mono text-lg outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="10, 20, 20, 30, 10"
          />
        </div>
      </div>

       
      <div className="flex gap-4">
        <button 
          onClick={handleRun} 
          disabled={loading || !input}
          className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-indigo-600/20 text-white"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Play size={18} fill="currentColor" />
              Execute Script
            </>
          )}
        </button>

        <button 
          onClick={() => { setInput(""); setResult(null); }} 
          className="px-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 text-gray-400 transition-all"
        >
          <RotateCcw size={20} />
        </button>
      </div>

     
      {result && (
        <div className="relative animate-in zoom-in-95 duration-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[2rem] blur opacity-30"></div>
          <div className="relative p-8 bg-[#0d111a]/80 border border-emerald-500/20 rounded-[2.5rem] backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em]">Unique Output</p>
            </div>
            
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
              <code className="text-white text-xl md:text-2xl font-mono block">
                <span className="text-gray-600 mr-2">[</span>
                {result.join(", ")}
                <span className="text-gray-600 ml-2">]</span>
              </code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveDuplicates;