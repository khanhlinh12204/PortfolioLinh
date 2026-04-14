"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ICON SOCIAL */
const SocialIcon = ({ type }: { type: string }) => {
    const paths: any = {
        fb: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        tt: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5",
        yt: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02V8.48L15.45 11.75l-5.7 3.27z",
        in: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
    };

    return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path
                d={paths[type]}
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );
};

const Footer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <footer className="relative w-full py-20 bg-[#fcfaf7] overflow-hidden border-t">

            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src="/picture/anhcv/background.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#fcfaf7] via-transparent to-[#fcfaf7]" />
            </div>

            {/* FLOAT ICON */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, 800],
                            x: [0, Math.random() * 80 - 40],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 12 + i,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute text-xl opacity-20"
                        style={{ left: `${i * 10}%`, top: "-10%" }}
                    >
                        {i % 2 ? "🌸" : "🍃"}
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-20">

                {/* GRID */}
                <div className="grid md:grid-cols-12 gap-12 mb-16">

                    {/* LOGO */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-[4px] h-16 bg-[#d85165]" />
                            <img
                                src="/picture/anhcv/logo4.png"
                                className="h-24 object-contain"
                            />
                        </div>

                        <p className="text-sm text-[#6f5643] leading-relaxed max-w-md">
                            Một góc nhỏ nơi mình chia sẻ hành trình học tập, trải nghiệm và
                            những điều tích cực trên con đường phát triển bản thân 🌸
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div className="md:col-span-3 space-y-6">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                            Navigation
                        </p>

                        <nav className="flex flex-col gap-3">
                            {[
                                { name: "Trang chủ", icon: "🏠" },
                                { name: "Giới thiệu", icon: "🌸" },
                                { name: "Dự án", icon: "💻" },
                                { name: "Liên hệ", icon: "💌" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href="#"
                                    className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white/50 hover:bg-white transition"
                                >
                                    <span>{item.icon}</span>
                                    <span className="relative text-sm font-semibold text-slate-600 group-hover:text-[#d85165]">
                                        {item.name}
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#d85165] group-hover:w-full transition-all" />
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* CONTACT */}
                    <div className="md:col-span-4 space-y-6">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                            Kết nối
                        </p>

                        <div className="space-y-3">
                            {[
                                { label: "Email", val: "nguyenkhanhlinh12204@gmail.com" },
                                { label: "Phone", val: "0382928102" },
                                { label: "Location", val: "Huế, Việt Nam" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="p-4 rounded-2xl bg-white/60 backdrop-blur-md hover:shadow-lg transition"
                                >
                                    <p className="text-[10px] text-[#d85165] font-bold uppercase">
                                        {item.label}
                                    </p>
                                    <p className="text-sm font-semibold text-slate-700">
                                        {item.val}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* SOCIAL */}
                    <div className="flex gap-6">
                        {["fb", "tt", "yt", "in"].map((s) => (
                            <motion.a
                                key={s}
                                whileHover={{ y: -5, scale: 1.2 }}
                                className="text-slate-400 hover:text-[#d85165]"
                                href="#"
                            >
                                <SocialIcon type={s} />
                            </motion.a>
                        ))}
                    </div>

                    {/* COPYRIGHT */}
                    <div className="text-xs uppercase text-slate-400 flex items-center gap-3">
                        © 2026 Crafted by
                        <span className="px-4 py-1 rounded-full bg-white text-[#d85165] font-bold shadow">
                            NGUYỄN KHÁNH LINH
                        </span>
                    </div>

                    {/* BACK TO TOP */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-2 text-xs font-bold uppercase"
                    >
                        Về đầu trang
                        <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-[#d85165] hover:text-white transition">
                            ↑
                        </div>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;