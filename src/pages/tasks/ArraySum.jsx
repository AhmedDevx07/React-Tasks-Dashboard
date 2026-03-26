import { useState } from "react";
import { Play, RotateCcw, Calculator, Hash, Sparkles, CheckCircle2, Sigma } from "lucide-react";

const ArraySum = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    if (!input.trim()) return;

    setLoading(true);
    
    setTimeout(() => {
      const sum = input
        .split(",")
        .map(Number)
        .filter(n => !isNaN(n))
        .reduce((a, b) => a + b, 0);
      setResult(sum);
      setLoading(false);
    }, 500);
  };

  const handleReset = () => {
    setInput("");
    setResult(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
    
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <Calculator size={20} className="text-indigo-400" />
        </div>
        <div>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] leading-none mb-1">Aggregation Logic</p>
          <h3 className="text-white font-bold text-xl tracking-tight">Array Summation</h3>
        </div>
      </div>
      
       
      <div className="space-y-3 group">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-1 flex items-center gap-2">
          <Hash size={12} /> Numeric Elements (Comma Separated)
        </label>
        
        <div className="relative">
          <input 
            type="text"
            className="w-full px-6 py-5 bg-gray-950/40 border border-white/5 rounded-2xl text-white font-mono text-lg outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 10, 20, 30, 40"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
             <Sigma size={16} className={`text-indigo-500/20 transition-opacity ${input ? 'opacity-100' : 'opacity-0'}`} />
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
              Calculate Sum
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
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-purple-600/30 rounded-[2.5rem] blur opacity-40"></div>
          <div className="relative p-12 bg-[#0d111a]/80 border border-white/10 rounded-[2.5rem] backdrop-blur-xl overflow-hidden text-center">
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="p-1 bg-indigo-500/20 rounded-lg">
                <CheckCircle2 size={12} className="text-indigo-400" />
              </div>
              <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">Cumulative Result</p>
            </div>
            
            <div className="relative inline-block">
              <h2 className="text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]">
                {result.toLocaleString()}
              </h2>
              <Sparkles className="absolute -top-4 -right-8 text-indigo-400 opacity-50 animate-pulse" size={24} />
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-8">
               <div className="text-center">
                  <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Items</p>
                  <p className="text-white font-mono">{input.split(",").filter(n => n.trim()).length}</p>
               </div>
               <div className="w-[1px] h-8 bg-white/5"></div>
               <div className="text-center">
                  <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Average</p>
                  <p className="text-indigo-400 font-mono text-xs uppercase font-bold">
                    {(result / (input.split(",").filter(n => n.trim()).length || 1)).toFixed(1)}
                  </p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArraySum;