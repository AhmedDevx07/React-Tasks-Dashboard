import { useState } from "react";
import { Play, RotateCcw, Undo2, Type, Sparkles, CheckCircle2 } from "lucide-react";

const ReverseString = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    if (!text.trim()) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const reversed = text.split("").reverse().join("");
      setResult(reversed);
      setLoading(false);
    }, 500);
  };

  const handleReset = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
    
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <Undo2 size={20} className="text-indigo-400" />
        </div>
        <div>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] leading-none mb-1">Transformation Module</p>
          <h3 className="text-white font-bold text-xl tracking-tight">String Reversal</h3>
        </div>
      </div>
      
       
      <div className="space-y-3 group">
        <div className="flex justify-between items-end px-1">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
            <Type size={12} /> Input String
          </label>
        </div>
        
        <div className="relative">
          <input 
            type="text"
            className="w-full px-6 py-5 bg-gray-950/40 border border-white/5 rounded-2xl text-white font-mono text-lg outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-800"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to flip..."
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
             <Sparkles size={16} className={`text-indigo-500/20 transition-opacity ${text ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>
      </div>

    
      <div className="flex gap-4">
        <button 
          onClick={handleRun} 
          disabled={loading || !text.trim()}
          className="flex-[3] bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-indigo-600/20 group text-white"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              Reverse Logic
            </>
          )}
        </button>

        <button 
          onClick={handleReset} 
          className="flex-1 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all active:rotate-180 duration-500 flex items-center justify-center"
        >
          <RotateCcw size={20} />
        </button>
      </div>

       
      {result && (
        <div className="relative group animate-in zoom-in-95 duration-500 pt-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur opacity-40"></div>
          <div className="relative p-8 bg-[#0d111a]/80 border border-white/10 rounded-[2.5rem] backdrop-blur-xl overflow-hidden text-center">
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="p-1 bg-indigo-500/20 rounded-lg">
                <CheckCircle2 size={12} className="text-indigo-400" />
              </div>
              <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">Output Sequence</p>
            </div>
            
            <div className="relative">
              <span className="text-6xl absolute -top-8 -left-2 text-white/5 font-serif italic">“</span>
              <div className="text-white text-3xl md:text-5xl font-black tracking-tighter break-words leading-tight px-4">
                {result}
              </div>
              <span className="text-6xl absolute -bottom-14 -right-2 text-white/5 font-serif italic">”</span>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-6">
               <div className="text-center">
                  <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Length</p>
                  <p className="text-white font-mono">{text.length}</p>
               </div>
               <div className="w-[1px] h-8 bg-white/5"></div>
               <div className="text-center">
                  <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Status</p>
                  <p className="text-emerald-500 font-mono text-xs uppercase">Inverted</p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReverseString;