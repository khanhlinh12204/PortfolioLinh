"use client";

import React, { useState } from 'react';
import { Briefcase, Rocket, Trophy, Sparkles, Target, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
export default function GoalSection() {
    const goals = [
        {
            icon: <Briefcase size={18} />,
            title: "Ngắn hạn",
            desc: "Tìm kiếm cơ hội thực tập để tích lũy kinh nghiệm thực tế trong lĩnh vực Khoa học máy tính và phát triển phần mềm.",
            color: "from-orange-400 to-[#b53d54]",
            // Hiệu ứng phủ màu bên ngoài (Shadow Glow)
            shadowColor: "shadow-[0_0_20px_rgba(251,146,60,0.15)]",
            hoverShadow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]",
            align: "left"
        },
        {
            icon: <Rocket size={18} />,
            title: "Trung hạn",
            desc: "Xây dựng nền tảng vững chắc trong Khoa học máy tính, phát triển kỹ năng lập trình và tham gia các dự án phần mềm có tính ứng dụng thực tế.",
            color: "from-[#b53d54] to-pink-500",
            shadowColor: "shadow-[0_0_20px_rgba(181,61,84,0.15)]",
            hoverShadow: "hover:shadow-[0_0_30px_rgba(181,61,84,0.3)]",
            align: "right"
        },
        {
            icon: <Trophy size={18} />,
            title: "Dài hạn",
            desc: "Theo đuổi hướng AI kết hợp phần mềm, phát triển các hệ thống thông minh và ứng dụng trí tuệ nhân tạo vào giải quyết bài toán thực tế.",
            color: "from-purple-500 to-[#b53d54]",
            shadowColor: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
            hoverShadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
            align: "left"
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className="relative w-full py-20 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden z-0"
            style={{ backgroundImage: "url('/Picture/anhcv/background.jpg')" }}
        >
            {/* 1. HIỆU ỨNG HOA LÁ RƠI */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, 1000],
                            x: [0, Math.random() * 80 - 40],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "linear"
                        }}
                        className="absolute text-xl opacity-10"
                        style={{ left: `${Math.random() * 100}%`, top: "-10%" }}
                    >
                        {i % 2 === 0 ? "🌸" : "🍃"}
                    </motion.div>
                ))}
            </div>

            {/* 2. HẠT ÁNH SÁNG BAY LƠ LỬNG */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`p-${i}`}
                        className="absolute rounded-full bg-[#b53d54] opacity-10 blur-[2px]"
                        style={{
                            width: Math.random() * 6 + 2 + 'px',
                            height: Math.random() * 6 + 2 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-white/10 backdrop-blur-[6px] pointer-events-none z-5" />

            <section className="relative z-10 w-full max-w-5xl px-6">

                <div className="relative text-center mb-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.1] overflow-hidden">
                        <span className="text-[100px] md:text-[140px] font-black whitespace-nowrap uppercase tracking-tighter text-[#4a3728]">
                            MISSION
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
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#b53d54]">Định hướng tương lai</span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
                        <h2 className="text-4xl md:text-6xl font-black text-[#4a3728] tracking-tighter leading-tight drop-shadow-md">
                            Mục tiêu tương lai<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#b53d54] animate-pulse">
                                của mình
                            </span>
                        </h2>
                        <p className="text-sm font-medium text-[#4a3728]/60 italic max-w-md mx-auto">
                            Sinh viên Khoa học máy tính với định hướng phát triển lâu dài trong công nghệ
                        </p>
                    </motion.div>
                </div>


                {/* TIMELINE GOALS */}
                <div className="relative space-y-12">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#b53d54]/10 hidden lg:block" />

                    {goals.map((goal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: goal.align === "left" ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${goal.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
                        >
                            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-2">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    // SỬ DỤNG SHADOW ĐỂ PHỦ MÀU RA NGOÀI KHUNG
                                    className={`relative p-6 rounded-[30px] bg-white/60 backdrop-blur-xl border border-white/40 ${goal.shadowColor} ${goal.hoverShadow} max-w-[340px] group transition-all duration-500`}
                                >
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center text-white shadow-md`}>
                                            {goal.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-[15px] font-black text-[#4a3728] mb-1.5 uppercase tracking-tight">
                                                {goal.title}
                                            </h3>
                                            <p className="text-[12px] text-[#4a3728]/80 leading-relaxed font-medium text-justify">
                                                {goal.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex justify-end opacity-40">
                                        <ChevronRight size={14} className="text-[#b53d54]" />
                                    </div>
                                </motion.div>
                            </div>

                            <div className="hidden lg:flex w-12 justify-center relative z-20">
                                <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#b53d54]" />
                            </div>

                            <div className="hidden lg:block lg:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}