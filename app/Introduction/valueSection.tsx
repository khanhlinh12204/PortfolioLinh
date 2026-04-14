"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Rocket, Flame, Lightbulb, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export default function MindsetSection() {
    const mindsets = [
        {
            icon: Rocket,
            title: "Learning by Doing",
            desc: "Mình học tốt nhất khi được thực hành và tự trải nghiệm thay vì chỉ đọc lý thuyết.",
            gradient: "from-orange-400 to-[#b53d54]"
        },
        {
            icon: Flame,
            title: "Growth Mindset",
            desc: "Mình luôn tin rằng bản thân có thể cải thiện mỗi ngày nếu đủ cố gắng.",
            gradient: "from-[#b53d54] to-pink-500"
        },
        {
            icon: Lightbulb,
            title: "Problem Solving",
            desc: "Mình thích phân tích vấn đề và tìm ra cách giải quyết tối ưu nhất.",
            gradient: "from-purple-500 to-[#b53d54]"
        },
    ];

    // PHẦN GIÁ TRỊ (THẾ MẠNH) ĐƯỢC BỔ SUNG
    const values = [
        "Tư duy logic tốt và khả năng tự học cao",
        "Khả năng làm việc nhóm tốt ",
        "Đã tiếp cận Machine Learning và Nhận dạng thông qua học tập và thực hành cơ bản",
        "Thích UI/UX & xây dựng sản phẩm"
    ];

    return (
        <div
            className="relative w-full py-16 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
            style={{ backgroundImage: "url('/picture/anhcv/background.jpg')" }}
        >
            {/* HIỆU ỨNG HOA LÁ RƠI */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, 900],
                            x: [0, Math.random() * 100 - 50],
                            rotate: [0, 720]
                        }}
                        transition={{
                            duration: 12 + Math.random() * 15,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "linear"
                        }}
                        className="absolute text-2xl opacity-15"
                        style={{ left: `${Math.random() * 100}%`, top: "-10%" }}
                    >
                        {i % 2 === 0 ? "🌸" : "🍃"}
                    </motion.div>
                ))}
            </div>

            {/* Overlay nền mờ mịn */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[6px] pointer-events-none" />

            <section className="relative z-1 w-full max-w-6xl px-6 lg:px-12">

                <div className="relative text-center mb-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.1] overflow-hidden">
                        <span className="text-[100px] md:text-[140px] font-black whitespace-nowrap uppercase tracking-tighter text-[#4a3728]">
                            VALUES
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="relative inline-flex items-center gap-2 px-6 py-2 mb-4 rounded-full border-2 border-[#f2cbd4] bg-white/80 backdrop-blur-md shadow-lg transition-all hover:ring-4 hover:ring-[#f2cbd4]/40"
                    >
                        <Sparkles className="text-[#b53d54]" size={16} />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#b53d54]">Tư duy & Giá trị cốt lõi</span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
                        <h2 className="text-4xl md:text-6xl font-black text-[#4a3728] tracking-tighter leading-tight drop-shadow-md">
                            Định hướng & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#b53d54] animate-pulse">
                                Giá trị bản thân
                            </span>
                        </h2>
                    </motion.div>
                </div>

                {/* CARDS GRID 1: MINDSETS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {mindsets.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                                className="group p-7 rounded-[35px] bg-white/40 backdrop-blur-xl shadow-lg transition-all duration-500"
                            >
                                <div className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                                    <Icon className="text-white w-5 h-5" />
                                </div>

                                <h3 className="font-black text-[#4a3728] mb-3 uppercase tracking-tight text-[15px]">
                                    {item.title}
                                </h3>

                                <p className="text-[#4a3728]/80 leading-relaxed font-medium text-[13px] text-justify">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CARD 2: GIÁ TRỊ (THẾ MẠNH) - THIẾT KẾ DÀI NGANG */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full p-8 rounded-[40px] bg-white/40 backdrop-blur-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 group"
                >
                    <div className="flex flex-col items-center md:items-start min-w-[150px]">
                        <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-[#4a3728] text-white mb-3 shadow-lg group-hover:rotate-12 transition-transform">
                            <ShieldCheck size={38} />
                        </div>
                        <h3 className="text-lg font-black text-[#4a3728] uppercase tracking-tighter">Thế mạnh</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-white/60 shadow-sm transition-all"
                            >
                                <CheckCircle2 size={18} className="text-[#b53d54] flex-shrink-0" />
                                <span className="text-[13px] font-bold text-[#6b5b4d]">{val}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* QUOTE SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mt-14 text-center"
                >
                    <div className="inline-block px-8 py-6 rounded-[30px] bg-white/30 backdrop-blur-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#b53d54] opacity-40"></div>

                        <p className="text-2xl md:text-3xl font-black text-[#4a3728] italic">
                            “Mỗi dòng code là <span className="text-[#b53d54]">một bước tiến</span>”
                        </p>
                        <p className="text-[9px] mt-2 font-black uppercase tracking-[0.4em] text-[#7a6a5c]">
                            — Hành trình phát triển bản thân mỗi ngày
                        </p>
                    </div>
                </motion.div>

            </section>
        </div>
    );
}