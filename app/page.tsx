"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function YoungHoUltra() {
  const [input, setInput] = useState("");
  const [aura, setAura] = useState(100);
  const [chatLog, setChatLog] = useState([{ role: "system", content: "System Booted. Aura Stabilized at 100. 💅" }]);
  
  // Music State
  const [songName, setSongName] = useState("No Track Loaded");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (audioRef.current) {
        audioRef.current.src = url;
        setSongName(file.name);
        setIsPlaying(true);
        audioRef.current.play();
      }
    }
  };

  const handleRoast = () => {
    if (!input) return;
    const msg = input.toLowerCase();
    setChatLog(prev => [...prev, { role: "user", content: input }]);
    
    // Aura Logic
    let auraChange = 0;
    let reply = "Processing... the energy is mid. 💀";

    if (msg.includes("crush") || msg.includes("office")) {
      auraChange = -20;
      reply = "MS Office for a crush? Aura: -20. You're a simp-lord. 🤡";
    } else if (msg.includes("kali") || msg.includes("network") || msg.includes("python")) {
      auraChange = +15;
      reply = "Networking talk? Aura: +15. Tactical movement detected. 🔌";
    } else if (msg.includes("calories") || msg.includes("waist")) {
      auraChange = -10;
      reply = "calories again? Seems fat mama is sweating🤣🤣. Aura: -10. ⚠️";
    }

    setAura(prev => Math.max(0, Math.min(200, prev + auraChange)));
    setTimeout(() => {
      setChatLog(prev => [...prev, { role: "system", content: reply }]);
    }, 600);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-[#FDF2F8] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] overflow-hidden font-sans cursor-crosshair p-4">
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />

      {/* --- HEADER --- */}
      <div className="w-full bg-white/90 backdrop-blur-md border-b-4 border-pink-400 p-4 flex justify-between items-center rounded-2xl shadow-xl z-50 relative">
        <h1 className="text-pink-600 font-black text-3xl italic tracking-tighter uppercase">youngHo.exe</h1>
        <div className="flex gap-6 items-center font-bold">
          <div className="text-right">
            <p className="text-[10px] text-pink-400 uppercase">Current Aura</p>
            <p className={`text-xl ${aura > 100 ? 'text-green-500' : 'text-pink-600'}`}>{aura}</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-pink-200 overflow-hidden shadow-inner bg-pink-50">
             <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${aura}`} alt="status" />
          </div>
        </div>
      </div>

      {/* --- AURA TRACKER BAR (Left Side) --- */}
      <div className="absolute left-6 top-32 bottom-10 w-8 bg-white border-2 border-pink-200 rounded-full overflow-hidden flex flex-col-reverse shadow-lg">
        <motion.div 
          animate={{ height: `${(aura / 200) * 100}%` }}
          className={`w-full transition-colors duration-500 ${aura > 100 ? 'bg-green-400' : 'bg-pink-500'}`}
        />
      </div>

      {/* --- CHAT WINDOW (Draggable) --- */}
      <motion.div drag dragMomentum={false} className="absolute top-32 left-24 w-80 bg-white border-4 border-black rounded-3xl shadow-[10px_10px_0px_0px_#000] z-20 overflow-hidden">
        <div className="bg-black p-2 text-white text-[10px] font-bold flex justify-between px-4">
          <span>MENACE_CONSOLE</span>
          <div className="flex gap-1">
             <div className="w-2 h-2 rounded-full bg-red-500" />
             <div className="w-2 h-2 rounded-full bg-yellow-500" />
          </div>
        </div>
        <div className="h-64 p-4 overflow-y-auto space-y-3 bg-gray-50 text-[11px]">
          {chatLog.map((m, i) => (
            <div key={i} className={`p-2 rounded-lg ${m.role === 'system' ? 'bg-pink-100 text-pink-700 italic border border-pink-200' : 'bg-black text-white ml-4'}`}>
              {m.content}
            </div>
          ))}
        </div>
        <div className="p-3 bg-white border-t-2 border-black flex gap-2">
          <input 
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleRoast()}
            className="flex-1 p-2 bg-gray-100 rounded text-black text-xs outline-none" 
            placeholder="Drop the L here..."
          />
        </div>
      </motion.div>

      {/* --- MUSIC PLAYER (Right Side) --- */}
      <motion.div drag dragMomentum={false} className="absolute top-32 right-10 w-64 bg-white border-4 border-blue-400 rounded-2xl p-4 shadow-xl z-10">
        <div className="flex flex-col items-center gap-3">
          <motion.div 
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="w-24 h-24 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full border-8 border-black flex items-center justify-center shadow-lg"
          >
            <div className="w-6 h-6 bg-white rounded-full border-2 border-black" />
          </motion.div>
          <div className="text-center">
            <p className="text-[10px] font-black uppercase text-blue-600 truncate w-48">{songName}</p>
            <p className="text-[8px] text-gray-400 italic">NOW PLAYING</p>
          </div>
          <div className="flex gap-2">
            <label className="bg-blue-500 text-white px-3 py-1 rounded text-[10px] font-bold cursor-pointer hover:bg-blue-600 transition-colors">
              UPLOAD MP3
              <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" />
            </label>
            <button 
              onClick={() => {
                if (audioRef.current?.paused) { audioRef.current.play(); setIsPlaying(true); }
                else { audioRef.current?.pause(); setIsPlaying(false); }
              }}
              className="bg-black text-white px-3 py-1 rounded text-[10px] font-bold"
            >
              {isPlaying ? "PAUSE" : "PLAY"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* --- FLOATING STATUS STICKER --- */}
      <motion.div drag dragMomentum={false} className="absolute bottom-10 right-10 bg-yellow-300 border-2 border-black p-2 rotate-6 shadow-md cursor-pointer">
        <p className="font-mono text-[10px] font-bold tracking-widest text-black">
          STATUS: {aura > 120 ? "PEAK PERFORMANCE" : aura > 50 ? "DELUSIONAL" : "CRASHING OUT"}
        </p>
      </motion.div>

    </main>
  );
}