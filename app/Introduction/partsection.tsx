"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles, ArrowRight, Code, Microscope, Terminal, Quote
} from 'lucide-react';
import { Variants } from "framer-motion";

const StudentJourneyMirror = () => {
    // Animation variants cho các phần tử con
    const fadeInUp: Variants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };


    return (
        <div
            className="relative w-full min-h-screen py-20 flex flex-col items-center justify-center bg-cover bg-center bg-fixed overflow-hidden"
            style={{ backgroundImage: "url('/Picture/anhcv/background.jpg')" }}
        >
            {/* Overlay nền mờ tổng thể */}
            <div className="absolute inset-0 bg-white/15 backdrop-blur-[3px]" />

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

            <section className="relative z-10 w-full max-w-[1400px] px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
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
                {/* 1. Phần Tiêu đề bên trái - Tinh chỉnh Typography */}
                <div className="relative  mb-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.1] overflow-hidden">
                        <span className="text-[100px] md:text-[90px] font-black whitespace-nowrap uppercase tracking-tighter text-[#4a3728]">
                            ACHIEVE
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
                        <span className="text-[#b53d54] font-bold text-[10px] uppercase tracking-[0.2em]">Thành tích & hoạt động nổi bật</span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
                        <h2 className="text-4xl md:text-6xl font-black text-[#4a3728] tracking-tighter leading-tight drop-shadow-md">
                            Những cột mốc <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#b53d54] animate-pulse">
                                của mình
                            </span>
                        </h2>
                    </motion.div>
                </div>

                {/* 2. Container chính - Hiệu ứng Mirror Glass với Stagger Children */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="lg:w-2/3 w-full bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-3xl rounded-[60px] border border-white/60 p-10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] overflow-hidden relative"
                >
                    {/* Ánh sáng quét qua gương (Glass Flare Effect) */}
                    <motion.div
                        animate={{ x: [-500, 1000] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                        className="absolute inset-0 w-40 h-full bg-white/20 -skew-x-12 blur-3xl pointer-events-none"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full relative z-10">

                        {/* THẺ 1: 2024 - Front-End */}
                        <motion.div variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} className="md:col-span-4 bg-[#b53d54] rounded-[35px] p-7 text-white shadow-2xl flex flex-col transition-shadow hover:shadow-[#b53d54]/30">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2 bg-white/20 rounded-xl"><Code size={22} /></div>
                                <span className="text-[11px] font-bold bg-white/20 px-3 py-1 rounded-full">2024</span>
                            </div>
                            <h3 className="text-lg font-black uppercase mb-2 tracking-tight">Top 2 “Front-End”</h3>
                            <p className="text-[12px] leading-relaxed opacity-90 mb-6 font-light">
                                Kết hợp cùng với 2 thành viên thiết kế Website cho CLB “Hỗ trợ lập trình” với giao diện hiện đại và tối ưu trải nghiệm.
                            </p>
                            <button className="mt-auto w-full py-3 bg-white/10 hover:bg-white text-white hover:text-[#b53d54] border border-white/30 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300">
                                Tham Gia Cuộc Thi Front-End
                            </button>
                        </motion.div>

                        {/* THẺ 2: ẢNH KỶ NIỆM 1 */}
                        <motion.div variants={fadeInUp} className="md:col-span-4 bg-gray-200 rounded-[35px] overflow-hidden shadow-lg border border-white/20 relative group">
                            <img
                                src="/Picture/khenthuong/anhfr.jpg"
                                alt="Kỷ niệm 2024"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#b53d54]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>

                        {/* THẺ 3: 2025 - ICPC */}
                        <motion.div variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} className="md:col-span-4 bg-[#4a3728] rounded-[35px] p-7 text-white shadow-2xl flex flex-col transition-shadow hover:shadow-black/30">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2 bg-white/10 rounded-xl"><Terminal size={22} className="text-amber-400" /></div>
                                <span className="text-[11px] font-bold bg-white/10 px-3 py-1 rounded-full">2025</span>
                            </div>
                            <h3 className="text-lg font-black uppercase mb-2 tracking-tight italic">ICPC Khoa</h3>
                            <p className="text-[12px] leading-relaxed opacity-90 mb-6 italic font-light">
                                Giải quyết các bài toán thuật toán và lập trình trong 4 tiếng. Rèn luyện tư duy giải thuật dưới áp lực thời gian.
                            </p>
                            <button className="mt-auto w-full py-3 bg-white/5 hover:bg-amber-400 hover:text-[#4a3728] border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300">
                                Tham Gia Cuộc Thi ICPC Khoa
                            </button>
                        </motion.div>

                        {/* THẺ 4: ẢNH KỶ NIỆM 2 */}
                        <motion.div variants={fadeInUp} className="md:col-span-3 bg-gray-200 rounded-[35px] h-[200px] md:h-full overflow-hidden border border-white/20 group">
                            <img src="/Picture/khenthuong/anhicpc1.jpg" alt="Research" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </motion.div>

                        {/* THẺ 5: 2025 - NCKH */}
                        <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="md:col-span-5 bg-white/90 backdrop-blur-md rounded-[35px] p-7 text-[#4a3728] shadow-xl border border-white flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-[#b53d54]/10 rounded-xl"><Microscope size={22} className="text-[#b53d54]" /></div>
                                <span className="text-[11px] font-bold bg-[#b53d54]/10 text-[#b53d54] px-3 py-1 rounded-full">2025</span>
                            </div>
                            <h3 className="text-base font-black uppercase mb-2 tracking-tight">Nghiên Cứu Khoa Học</h3>
                            <p className="text-[11px] leading-relaxed font-medium mb-4 text-[#4a3728]/80">
                                Đề tài học sâu chẩn đoán viêm phổi từ ảnh X-quang. Kết hợp phân đoạn và phân lớp để tối ưu độ chính xác trong y tế.
                            </p>
                            <button className="mt-auto w-full py-3 bg-[#b53d54] hover:bg-[#962d42] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg transition-colors">
                                Tham gia Nghiên Cứu Khoa Học
                            </button>
                        </motion.div>

                        {/* THẺ 6: ẢNH KỶ NIỆM 3 */}
                        <motion.div variants={fadeInUp} className="md:col-span-4 bg-gray-200 rounded-[35px] overflow-hidden border border-white/20 group">
                            <img src="Picture/khenthuong/anhnckh.jpg" alt="Teamwork" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </motion.div>

                    </div>

                    {/* CÂU CHỐT - Action Section */}
                    <motion.div variants={fadeInUp} className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#4a3728]/10 pt-8">
                        <div className="flex items-center gap-4 text-[#4a3728]">
                            <div className="p-3 bg-[#b53d54]/5 rounded-2xl">
                                <Quote size={24} className="text-[#b53d54]" />
                            </div>
                            <p className="text-[13px] font-bold italic leading-relaxed max-w-md opacity-80">
                                "Những trải nghiệm này rèn luyện cho mình tư duy, sự kiên trì và khả năng làm việc trong môi trường thực tế."
                            </p>
                        </div>

                        <div className="relative">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(181,61,84,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-[#b53d54] text-white rounded-full text-[12px] font-black uppercase tracking-[0.2em] shadow-xl flex items-center gap-3 transition-all"
                            >
                                Xem dự án của mình tại đây nhé 🚀 <ArrowRight size={16} />
                            </motion.button>
                        </div>
                    </motion.div>

                </motion.div>
            </section>
        </div>
    );
};

export default StudentJourneyMirror;