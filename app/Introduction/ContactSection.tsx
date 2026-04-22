"use client";

import React, { useState } from 'react'; // Thêm useState vào đây
import { motion, AnimatePresence } from 'framer-motion'; // Thêm AnimatePresence
import { ReactNode } from 'react';

type SVGIconProps = {
    children: ReactNode;
    size?: number;
    color?: string;
};

const SVGIcon = ({ children, size = 20, color = "currentColor" }: SVGIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {children}
    </svg>
);

const Icons = {
    Sparkle: () => (
        <SVGIcon size={14} color="#b53d54">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </SVGIcon>
    ),
    Send: () => (
        <SVGIcon size={16} color="white">
            <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
        </SVGIcon>
    ),
    Download: () => (
        <SVGIcon size={16}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
        </SVGIcon>
    ),
    Github: () => <SVGIcon size={20}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></SVGIcon>,
    Instagram: () => (
        <SVGIcon size={20}>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </SVGIcon>
    ),
    Facebook: () => <SVGIcon size={20}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></SVGIcon>,
    Mail: () => <SVGIcon size={20}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></SVGIcon>,
    Phone: () => <SVGIcon size={24}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></SVGIcon>,
    X: () => <SVGIcon size={20}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></SVGIcon>
};

export default function CTASection() {
    const [showPhone, setShowPhone] = useState(false); // Đưa state vào trong đây

    return (
        <div
            className="relative w-full py-20 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
            style={{ backgroundImage: "url('/picture/anhcv/background.jpg')" }}
        >
            {/* 1. HIỆU ỨNG CÁNH HOA BAY PHƠI PHỚI */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, 800],
                            x: [0, Math.random() * 60 - 30],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "linear"
                        }}
                        className="absolute text-xl opacity-20"
                        style={{ left: `${Math.random() * 100}%`, top: "-10%" }}
                    >
                        {i % 2 === 0 ? "🌸" : "🍃"}
                    </motion.div>
                ))}
            </div>

            <div className="absolute inset-0 bg-white/20 backdrop-blur-[6px] pointer-events-none z-5" />

            <div className="max-w-5xl mx-auto relative z-20 px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-white/40 backdrop-blur-3xl rounded-[50px] border border-white/70 p-10 md:p-16 shadow-[0_40px_100px_rgba(255,182,193,0.15)] relative overflow-hidden"
                >
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#b53d54]/10 rounded-full blur-3xl" />

                    <div className="flex flex-col items-center text-center mb-12 relative z-10 w-full">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#fce4ec] shadow-sm mb-6"
                        >
                            <Icons.Sparkle />
                            <span className="text-[#b53d54] font-black text-[9px] uppercase tracking-[0.2em]">Sắc màu thanh xuân</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-black text-[#4a3728] tracking-tighter leading-tight">
                            Cùng nhau viết tiếp<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] via-[#d4a373] to-[#4a3728]">
                                những câu chuyện ý nghĩa ✨
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="flex justify-center items-center relative min-h-[350px]">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute text-[300px] md:text-[450px] opacity-[0.06] pointer-events-none select-none"
                            >
                                🌸
                            </motion.div>

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="relative flex justify-center items-center group"
                            >
                                <span className="text-[180px] md:text-[240px] opacity-40 drop-shadow-2xl filter blur-[0.5px]">🌸</span>
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: "spring" }}
                                        className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-[6px] border-white shadow-3xl relative z-10"
                                    >
                                        <img
                                            src="/picture/khenthuong/l4.jpg"
                                            alt="Portrait"
                                            className="w-full h-full object-cover scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "https://via.placeholder.com/150";
                                            }}
                                        />
                                    </motion.div>
                                </div>
                                <motion.span
                                    animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-8 -right-8 text-5xl opacity-50"
                                >
                                    ✨
                                </motion.span>
                            </motion.div>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <p className="text-base md:text-lg text-[#6f5643] mb-10 font-medium italic leading-relaxed opacity-90 max-w-sm">
                                "Mọi ý tưởng lớn đều bắt đầu từ một cuộc trò chuyện nhỏ. Hãy kết nối để chúng ta cùng tạo nên những giá trị bền vững!"
                            </p>

                            <div className="flex flex-wrap gap-4 mb-14 justify-center md:justify-start">
                                {/* SỬA NÚT LIÊN HỆ TẠI ĐÂY */}
                                <motion.button
                                    onClick={() => setShowPhone(true)}
                                    whileHover={{ y: -5, backgroundColor: "rgba(74, 55, 40, 0.95)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#4a3728] text-white font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-[#4a3728]/20 transition-all inline-flex"
                                >
                                    <Icons.Send /> Liên hệ ngay
                                </motion.button>

                                <motion.button
                                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-[#4a3728]/10 bg-white/20 backdrop-blur-md text-[#4a3728] font-bold uppercase text-[10px] tracking-widest transition-all"
                                >
                                    <Icons.Download /> Lưu hồ sơ
                                </motion.button>
                            </div>

                            <div className="grid grid-cols-2 gap-3 w-full max-w-[340px]">
                                {[
                                    { id: 'github', icon: <Icons.Github />, label: 'Github', color: 'hover:bg-black', url: 'https://github.com/khanhlinh12204' },
                                    { id: 'Instagram', icon: <Icons.Instagram />, label: 'Instagram', color: 'hover:bg-[#E1306C]', url: 'https://www.instagram.com/nlinhh122/' },
                                    { id: 'facebook', icon: <Icons.Facebook />, label: 'Facebook', color: 'hover:bg-[#1877f2]', url: 'https://www.facebook.com/nguyen.khanh.linh.497701/' },
                                    { id: 'mail', icon: <Icons.Mail />, label: 'Email', color: 'hover:bg-[#b53d54]', url: 'mailto:nguyenkhanhlinh12204@gmail.com' }
                                ].map((item) => (
                                    <motion.a
                                        key={item.id}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 6, scale: 1.02 }}
                                        className={`flex items-center gap-3 p-4 rounded-2xl bg-white/60 border border-white/80 transition-all duration-300 group ${item.color} hover:text-white shadow-sm`}
                                    >
                                        <div className="group-hover:rotate-[360deg] transition-transform duration-500">{item.icon}</div>
                                        <span className="text-[9px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{item.label}</span>
                                    </motion.a>
                                ))}
                            </div>

                            <p className="mt-12 text-[10px] font-black text-[#4a3728]/30 uppercase tracking-[0.6em] hover:text-[#b53d54] transition-all cursor-pointer select-all">
                                nguyenkhanhlinh12204@gmail.com
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- THÊM POP-UP VÀO ĐÂY --- */}
            <AnimatePresence>
                {showPhone && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setShowPhone(false)}
                            className="absolute inset-0 bg-[#4a3728]/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className="relative w-full max-w-[320px] bg-white rounded-[40px] p-8 text-center shadow-2xl border-b-8 border-[#d85165]/10"
                        >
                            <button onClick={() => setShowPhone(false)} className="absolute top-5 right-5 text-[#4a3728]/20 hover:text-[#d85165]"><Icons.X /></button>
                            <div className="mb-4 flex justify-center">
                                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-16 h-16 bg-[#fce7eb] rounded-full flex items-center justify-center text-[#d85165]">
                                    <Icons.Phone />
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-black text-[#4a3728] mb-1">Kết nối với mình</h3>
                            <p className="text-[#6f5643] text-[10px] font-bold uppercase tracking-widest mb-6 opacity-60">038.292.8102</p>
                            <motion.a
                                href="tel:0382928102"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-2 w-full py-4 bg-[#4a3728] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg"
                            >
                                Gọi trực tiếp ngay
                            </motion.a>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}