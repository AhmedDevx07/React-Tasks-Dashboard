import { useState } from "react";
import { Play, RotateCcw, Languages, Type, Sparkles, CheckCircle2 } from "lucide-react";

const VowelCounter = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    if (!text.trim()) return;

    setLoading(true);
    
    setTimeout(() => {
      const vowels = text.match(/[aeiou]/gi);
      setResult(vowels ? vowels.length : 0);
      setLoading(false);
    }, 500);
  };

  const handleReset = () => {
    setText("");
    setResult(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
   
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <Languages size={20} className="text-indigo-400" />
        </div>
        <div>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] leading-none mb-1">Linguistic Analysis</p>
          <h3 className="text-white font-bold text-xl tracking-tight">Vowel Counter</h3>
        </div>
      </div>
      
     
      <div className="space-y-3 group">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-1 flex items-center gap-2">
          <Type size={12} /> Input Text / Sentence
        </label>
        
        <div className="relative">
          <textarea 
            className="w-full px-6 py-5 bg-gray-950/40 border border-white/5 rounded-[1.5rem] text-white font-mono text-lg outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-800 resize-none h-40"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a sentence to analyze..."
          />
          <div className="absolute right-4 bottom-4">
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
              Count Vowels
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
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur opacity-40"></div>
          <div className="relative p-10 bg-[#0d111a]/80 border border-white/10 rounded-[2.5rem] backdrop-blur-xl overflow-hidden text-center">
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="p-1 bg-indigo-500/20 rounded-lg">
                <CheckCircle2 size={12} className="text-indigo-400" />
              </div>
              <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">Analysis Complete</p>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                {result}
              </span>
              <p className="mt-2 text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px]">
                Vowels Detected
              </p>
            </div>

            
            <div className="absolute top-0 right-0 p-6 opacity-10 hidden sm:block">
               <Languages size={80} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VowelCounter;