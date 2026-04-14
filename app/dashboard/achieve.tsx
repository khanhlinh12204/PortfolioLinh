"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const AwardsSection = () => {
    const awards = [
        {
            id: 1,
            tag: "sinh viên 5 tốt",
            title: "Sinh viên 5 tốt",
            desc: "Đạt danh hiệu Sinh viên 5 tốt 2 năm liên tiếp (2023 – 2024)",
            image: "/picture/khenthuong/sv5t.jpg",
            icon: "🎓"
        },
        {
            id: 2,
            tag: "Sinh viên xuất sắc",
            title: "Sinh viên xuất sắc",
            desc: "Đạt danh hiệu Sinh viên Giỏi, Xuất Sắc trong 3 năm học(2022 – 2024)",
            image: "/picture/khenthuong/hssx1.jpg",
            icon: "🌸"
        },
        {
            id: 3,
            tag: "Cán bộ Đoàn - hội",
            title: "Thành tích công tác Đoàn",
            desc: "Đã có thành tích xuất sắc trong công tác Đoàn năm 2024 - 2025",
            image: "/picture/khenthuong/doanhoi.jpg",
            icon: "⭐"
        },
        {
            id: 4,
            tag: "Học bổng",
            title: "Học bổng “NEVER GIVE UP” (2024)",
            desc: "Đạt học bổng chương trình học bổng “NEVER GIVE UP” năm 2024",
            image: "/picture/khenthuong/hb.jpg",
            icon: "🌿"
        }
    ];

    return (
        <section className="relative w-full py-12 bg-[#fcfaf7] overflow-hidden">

            {/* 1. LAYER BACKGROUND TĨNH */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <Image
                    src="/picture/anhcv/background.jpg"
                    alt="decor"
                    fill
                    className="object-cover object-center opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#fcfaf7] via-transparent to-[#fcfaf7]"></div>
            </div>

            {/* 2. LAYER HIỆU ỨNG CÁNH HOA RƠI (MỚI THÊM) */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, 900],
                            x: [0, Math.random() * 120 - 60],
                            rotate: [0, 720]
                        }}
                        transition={{
                            duration: 12 + Math.random() * 15,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "linear"
                        }}
                        className="absolute text-2xl opacity-20"
                        style={{ left: `${Math.random() * 100}%`, top: "-10%" }}
                    >
                        {i % 2 === 0 ? "🌸" : "🍃"}
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-20">

                {/* 3. TIÊU ĐỀ */}
                <div className="relative flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-4 flex items-center gap-3 bg-[#d85165]/10 px-5 py-2 rounded-full border border-[#d85165]/20"
                    >
                        <Sparkles className="w-4 h-4 text-[#d85165]" />
                        <span className="text-[#d85165] text-xs font-bold tracking-[0.4em] uppercase">
                            My Achievements
                        </span>
                        <Sparkles className="w-4 h-4 text-[#d85165]" />
                    </motion.div>

                    <div className="relative">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-black text-[#4a3728] leading-[1.1] tracking-tight"
                        >
                            Thành tích <br />
                            <span className="text-[#d85165] relative inline-block">
                                & Dấu ấn
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        d="M5 15Q150 -5 295 15"
                                        stroke="#d85165"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </motion.h2>

                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-10 -right-12 hidden md:block text-[#d85165] opacity-40"
                        >
                            <Star size={48} fill="currentColor" />
                        </motion.div>
                    </div>

                    <p className="mt-8 text-[#6f5643] font-semibold text-lg opacity-70 italic max-w-2xl">
                        "Hành trình không ngừng nỗ lực khẳng định bản thân của Khánh Linh "
                    </p>
                </div>

                {/* 4. GRID CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
                    {awards.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group flex justify-center"
                        >
                            <div className="absolute inset-[-15px] bg-[#d85165]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="relative bg-white/20 backdrop-blur-md border border-white/40 p-5 pb-10 shadow-xl 
                                          rounded-[50%_50%_45%_55%/55%_45%_55%_45%] transition-all duration-700 
                                          group-hover:border-[#d85165]/40 
                                          group-hover:shadow-[0_0_50px_15px_rgba(216,81,101,0.25)]
                                          w-full max-w-[360px] flex flex-col items-center z-10">

                                <div className="relative w-64 h-64 mb-6 border-[12px] border-white shadow-2xl overflow-hidden rounded-full transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-0 -rotate-3">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-[#d85165]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </div>

                                <div className="text-center px-4">
                                    <span className="inline-block px-4 py-1 rounded-full bg-[#d85165]/20 text-[#d85165] text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-xl font-bold text-[#4a3728] mb-2 leading-tight">
                                        {item.icon} {item.title}
                                    </h3>
                                    <p className="text-xs text-[#6f5643] leading-relaxed opacity-90 font-medium">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="absolute -top-4 -right-2 text-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-[-15px] group-hover:rotate-12">🌸</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 5. BUTTONS */}
                <div className="mt-12 flex justify-center gap-6">
                    <button className="px-10 py-3 bg-white/40 backdrop-blur-md text-[#4a3728] border border-white/40 rounded-full font-bold shadow-md hover:bg-white/80 transition-all">
                        📜 Xem toàn bộ hồ sơ
                    </button>
                    <button className="px-10 py-3 bg-[#d85165] text-white rounded-full font-bold shadow-lg hover:shadow-[#d85165]/40 transition-all transform hover:-translate-y-1">
                        Kết nối cùng Khánh Linh
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;