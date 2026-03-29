"use client";
import React, { useState } from 'react';

export default function YoungHoDesktop() {
  const [lore, setLore] = useState("Status: Initializing Delusion... 🤡");

  return (
    <main className="min-h-screen bg-[#FDF2F8] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] overflow-hidden font-sans cursor-crosshair">
      
      {/* --- THE HEADER BAR --- */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b-2 border-pink-200 p-2 flex justify-between items-center px-6 shadow-sm">
        <h1 className="text-pink-500 font-black tracking-tighter text-2xl italic">youngHo.</h1>
        <div className="flex gap-4 items-center">
          <div className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold border border-pink-200">
            L-Counter: 0 💔
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white shadow-sm overflow-hidden">
            <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=clown" alt="avatar" />
          </div>
        </div>
      </div>

      {/* --- THE DRAGGABLE CHAT WINDOW --- */}
      <div className="absolute top-24 left-10 w-96 bg-white border-4 border-pink-400 rounded-3xl shadow-[8px_8px_0px_0px_rgba(244,114,182,1)] overflow-hidden transition-all hover:scale-[1.02]">
        <div className="bg-pink-400 p-2 flex justify-between items-center px-4">
          <span className="text-white font-bold text-sm">menace_chat.exe</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-white/50"></div>
            <div className="w-3 h-3 rounded-full bg-white/50"></div>
          </div>
        </div>
        <div className="p-6 space-y-4 h-[400px] flex flex-col justify-between">
          <div className="text-pink-600 font-medium italic">
            "Oh, you're back? Did the MS Office activation expire or did the crush just leave you on read? 💀"
          </div>
          
          <div className="space-y-2">
            <input 
              type="text" 
              placeholder="Dump your lore here..."
              className="w-full p-3 bg-pink-50 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 text-pink-700 placeholder:text-pink-300"
            />
            <button className="w-full bg-pink-500 text-white font-black py-3 rounded-xl hover:bg-pink-600 transition-colors">
              ROAST ME ✨
            </button>
          </div>
        </div>
      </div>

      {/* --- THE MEDIA VAULT STICKER --- */}
      <div className="absolute bottom-10 right-10 w-64 bg-yellow-100 border-2 border-dashed border-yellow-400 p-4 rotate-3 shadow-lg rounded-lg">
        <h3 className="font-black text-yellow-700 text-sm mb-2">💿 MEDIA_VAULT</h3>
        <p className="text-[10px] text-yellow-600 uppercase font-bold mb-3">Playing: SZA - Snooze (Down Bad Edit)</p>
        <div className="h-1 bg-yellow-400 w-full rounded-full overflow-hidden">
          <div className="h-full bg-yellow-600 w-1/3 animate-pulse"></div>
        </div>
      </div>

      {/* --- FLOATING STICKER --- */}
      <div className="absolute top-1/2 right-1/4 animate-bounce">
         <span className="bg-purple-500 text-white p-2 rounded-lg font-bold -rotate-12 shadow-md">
           PERIMETER FENCE ⚠️
         </span>
      </div>

    </main>
  );
}