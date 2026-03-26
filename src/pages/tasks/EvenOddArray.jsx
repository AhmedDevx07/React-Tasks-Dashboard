import { useState } from "react";
import { Play, RotateCcw, Columns, Hash, Sparkles, CircleDot, Activity } from "lucide-react";

const EvenOddArray = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    if (!input.trim()) return;
    
    setLoading(true);
     
    setTimeout(() => {
      const nums = input.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
      const even = nums.filter(n => n % 2 === 0);
      const odd = nums.filter(n => n % 2 !== 0);
      setResult({ even, odd });
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
          <Columns size={20} className="text-indigo-400" />
        </div>
        <div>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] leading-none mb-1">Mathematical Module</p>
          <h3 className="text-white font-bold text-xl tracking-tight">Array Parity Filter</h3>
        </div>
      </div>
      
     
      <div className="space-y-3 group">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-1 flex items-center gap-2">
          <Hash size={12} /> Dataset (Numbers Only)
        </label>
        
        <div className="relative">
          <input 
            type="text"
            className="w-full px-6 py-5 bg-gray-950/40 border border-white/5 rounded-2xl text-white font-mono text-lg outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 12, 45, 78, 23"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
             <Activity size={16} className={`text-indigo-500/20 transition-opacity ${input ? 'opacity-100' : 'opacity-0'}`} />
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
              Sort Numbers
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in zoom-in-95 duration-500">
          
           
          <div className="relative group">
            <div className="absolute -inset-1 bg-emerald-500/10 rounded-[2rem] blur opacity-40"></div>
            <div className="relative p-6 bg-[#0d111a]/80 border border-emerald-500/20 rounded-[2rem] backdrop-blur-xl h-full">
              <div className="flex items-center gap-2 mb-4">
                <CircleDot size={14} className="text-emerald-500" />
                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em]">Even Result</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5 min-h-[60px] flex items-center justify-center">
                <code className="text-white text-lg font-mono">
                  {result.even.length > 0 ? result.even.join(", ") : <span className="text-gray-700 italic">No Evens</span>}
                </code>
              </div>
            </div>
          </div>

         
          <div className="relative group">
            <div className="absolute -inset-1 bg-orange-500/10 rounded-[2rem] blur opacity-40"></div>
            <div className="relative p-6 bg-[#0d111a]/80 border border-orange-500/20 rounded-[2rem] backdrop-blur-xl h-full">
              <div className="flex items-center gap-2 mb-4">
                <CircleDot size={14} className="text-orange-400" />
                <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em]">Odd Result</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5 min-h-[60px] flex items-center justify-center">
                <code className="text-white text-lg font-mono">
                  {result.odd.length > 0 ? result.odd.join(", ") : <span className="text-gray-700 italic">No Odds</span>}
                </code>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default EvenOddArray;