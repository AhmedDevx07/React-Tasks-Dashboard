import { useState } from "react";
import {
  Play,
  RotateCcw,
  TrendingUp,
  Hash,
  Zap,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const FindMax = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    if (!input.trim()) return;

    setLoading(true);
     
    setTimeout(() => {
      const nums = input
        .split(",")
        .map((n) => Number(n.trim()))
        .filter((n) => !isNaN(n));

      if (nums.length === 0) {
        setResult("Error");
      } else {
        const maxVal = Math.max(...nums);
        setResult(maxVal);
      }
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
          <TrendingUp size={20} className="text-indigo-400" />
        </div>
        <div>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] leading-none mb-1">
            Analytical Module
          </p>
          <h3 className="text-white font-bold text-xl tracking-tight">
            Peak Value Finder
          </h3>
        </div>
      </div>

      
      <div className="space-y-3 group">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-1 flex items-center gap-2">
          <Hash size={12} /> Numeric Dataset (Comma Separated)
        </label>

        <div className="relative">
          <input
            type="text"
            className="w-full px-6 py-5 bg-gray-950/40 border border-white/5 rounded-2xl text-white font-mono text-lg outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 102, 560, 230, 890"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Zap
              size={16}
              className={`text-indigo-500/20 transition-opacity ${input ? "opacity-100" : "opacity-0"}`}
            />
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
              <Play
                size={18}
                fill="currentColor"
                className="group-hover:scale-110 transition-transform"
              />
              Find Largest
            </>
          )}
        </button>

        <button
          onClick={handleReset}
          className="flex-1 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all flex items-center justify-center"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      
      {result !== null && (
        <div className="relative group animate-in zoom-in-95 duration-500 pt-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-purple-600/30 rounded-[2.5rem] blur-xl opacity-20"></div>
          <div className="relative p-10 bg-[#0d111a]/80 border border-white/10 rounded-[2.5rem] backdrop-blur-xl overflow-hidden text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              {result === "Error" ? (
                <AlertCircle size={14} className="text-red-500" />
              ) : (
                <CheckCircle2 size={14} className="text-indigo-400" />
              )}
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
                {result === "Error"
                  ? "Execution Failed"
                  : "Peak Value Identified"}
              </p>
            </div>

            <div className="relative inline-block">
              <h2
                className={`text-7xl md:text-8xl font-black tracking-tighter ${result === "Error" ? "text-red-500" : "text-white"}`}
              >
                {result}
              </h2>
              {result !== "Error" && (
                <div className="absolute -top-2 -right-6 w-4 h-4 bg-indigo-500 rounded-full animate-ping opacity-50"></div>
              )}
            </div>

          
            <div className="mt-8 flex justify-center items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-600">
              <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                Algorithm: Math.Max
              </span>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                Complexity: O(n)
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindMax;
