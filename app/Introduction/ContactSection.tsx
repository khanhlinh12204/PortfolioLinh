"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
    Linkedin: () => <SVGIcon size={20}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></SVGIcon>,
    Facebook: () => <SVGIcon size={20}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></SVGIcon>,
    Mail: () => <SVGIcon size={20}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></SVGIcon>
};

export default function CTASection() {
    return (
        <div
            className="relative w-full py-20 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
            style={{ backgroundImage: "url('/Picture/anhcv/background.jpg')" }}
        >
            {/* 1. HIỆU ỨNG CÁNH HOA BAY PHƠI PHỚI (nền) */}
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

            {/* 2. OVERLAY LÀM MỀM GIAO DIỆN */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[6px] pointer-events-none z-5" />

            <div className="max-w-5xl mx-auto relative z-20 px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-white/40 backdrop-blur-3xl rounded-[50px] border border-white/70 p-10 md:p-16 shadow-[0_40px_100px_rgba(255,182,193,0.15)] relative overflow-hidden"
                >
                    {/* Decor chìm hồng phấn */}
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#b53d54]/10 rounded-full blur-3xl" />

                    {/* TIÊU ĐỀ NẰM GIỮA TRANG TRỌNG */}
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

                    {/* BỐ CỤC CHÍNH: TRÁI (HOA CHÈN ẢNH) - PHẢI (THÔNG TIN) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                        {/* CỘT TRÁI: BÔNG HOA CỰC TO XOAY + ẢNH CHÂN DUNG */}
                        <div className="flex justify-center items-center relative min-h-[350px]">
                            {/* Hoa xoay chìm rất to phía sau */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute text-[300px] md:text-[450px] opacity-[0.06] pointer-events-none select-none"
                            >
                                🌸
                            </motion.div>

                            {/* Khối hoa và ảnh chính */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="relative flex justify-center items-center group"
                            >
                                {/* Bông hoa chính làm "khung" cho ảnh */}
                                <span className="text-[180px] md:text-[240px] opacity-40 drop-shadow-2xl filter blur-[0.5px]">🌸</span>

                                {/* ẢNH CHÂN DUNG (Nhụy hoa) */}
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: "spring" }}
                                        className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-[6px] border-white shadow-3xl relative z-10"
                                    >
                                        <img
                                            src="/Picture/khenthuong/l4.jpg"
                                            alt="Portrait"
                                            className="w-full h-full object-cover scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "https://via.placeholder.com/150";
                                            }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Sparkling decor bám theo hoa */}
                                <motion.span
                                    animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-8 -right-8 text-5xl opacity-50"
                                >
                                    ✨
                                </motion.span>
                            </motion.div>
                        </div>

                        {/* CỘT PHẢI: THÔNG TIN VÀ NÚT LIÊN HỆ */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <p className="text-base md:text-lg text-[#6f5643] mb-10 font-medium italic leading-relaxed opacity-90 max-w-sm">
                                "Mọi ý tưởng lớn đều bắt đầu từ một cuộc trò chuyện nhỏ. Hãy kết nối để chúng ta cùng tạo nên những giá trị bền vững!"
                            </p>

                            {/* Nút bấm trong suốt thanh lịch */}
                            <div className="flex flex-wrap gap-4 mb-14 justify-center md:justify-start">
                                <motion.button
                                    whileHover={{ y: -5, backgroundColor: "rgba(74, 55, 40, 0.95)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#4a3728] text-white font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-[#4a3728]/20 transition-all"
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

                            {/* Social Bento Grid thu gọn */}
                            <div className="grid grid-cols-2 gap-3 w-full max-w-[340px]">
                                {[
                                    { id: 'github', icon: <Icons.Github />, label: 'Github', color: 'hover:bg-black' },
                                    { id: 'linkedin', icon: <Icons.Linkedin />, label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
                                    { id: 'facebook', icon: <Icons.Facebook />, label: 'Facebook', color: 'hover:bg-[#1877f2]' },
                                    { id: 'mail', icon: <Icons.Mail />, label: 'Email', color: 'hover:bg-[#b53d54]' }
                                ].map((item) => (
                                    <motion.a
                                        key={item.id}
                                        href="#"
                                        whileHover={{ x: 6, scale: 1.02 }}
                                        className={`flex items-center gap-3 p-4 rounded-2xl bg-white/60 border border-white/80 transition-all duration-300 group ${item.color} hover:text-white shadow-sm`}
                                    >
                                        <div className="group-hover:rotate-[360deg] transition-transform duration-500">
                                            {item.icon}
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">
                                            {item.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Email hiển thị thanh lịch */}
                            <p className="mt-12 text-[10px] font-black text-[#4a3728]/30 uppercase tracking-[0.6em] hover:text-[#b53d54] transition-all cursor-pointer select-all">
                                nguyenkhanhlinh12204@gmail.com
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}