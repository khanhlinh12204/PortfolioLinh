"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    BriefcaseBusiness,
    CalendarDays,
    MapPin,
    Zap,
    Sparkles,
    ArrowRight,
    Code,
    Terminal,
    Quote
} from 'lucide-react';

const INTERNSHIP_STEPS = [
    {
        year: "03/2024 - 06/2024",
        company: "DHY Solution",
        role: "Intern",
        location: "TP. Hồ Chí Minh",
        desc: "Tham gia vào môi trường thực tế, học cách đọc hiểu yêu cầu, phối hợp cùng team để xây dựng giao diện cũng như xử lý logic cơ bản.",
        tags: ["Frontend", "Teamwork", "UI/UX"],
        color: "bg-[#b53d54]",
        icon: <Code size={20} />
    },
    {
        year: "09/2023 - 12/2023",
        company: "VNNIC Đà Nẵng",
        role: "Intern",
        location: "Chi nhánh Đà Nẵng",
        desc: "Tiếp cận môi trường hạ tầng hệ thống Internet. Tìm hiểu cách vận hành mạng và các dịch vụ quan trọng, giúp nâng cao tư duy kỹ thuật thực tế.",
        tags: ["Network", "Infrastructure", "System"],
        color: "bg-[#4a3728]",
        icon: <Terminal size={20} />
    }
];

const InternshipRoadmap = () => {
    return (
        <div
            className="relative w-full py-28 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
            style={{ backgroundImage: "url('/Picture/anhcv/background.jpg')" }}
        >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[3px] pointer-events-none" />

            <section className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center">

            
                 <div className="relative text-center mb-12">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.1] overflow-hidden">
                                        <span className="text-[100px] md:text-[140px] font-black whitespace-nowrap uppercase tracking-tighter text-[#4a3728]">
                                            INTERN
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
                                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#b53d54]">Kinh nghiệm thực tế</span>
                                    </motion.div>
                
                                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
                                        <h2 className="text-4xl md:text-6xl font-black text-[#4a3728] tracking-tighter leading-tight drop-shadow-md">
                                            Chặng đường Trải nghiệm <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#b53d54] animate-pulse">
                                                của mình
                                            </span>
                                        </h2>
                                    </motion.div>
                                </div>

                 

                {/* Container Roadmap */}
                <div className="w-full bg-white/25 backdrop-blur-2xl rounded-[60px] border border-white/50 p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.1)] relative overflow-hidden group">

                    {/* Bố cục Grid 3 cột: Thẻ 1 - Ảnh - Thẻ 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">

                        {/* THẺ 1: DHY Solution */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-4 rounded-2xl ${INTERNSHIP_STEPS[0].color} text-white shadow-xl`}>
                                    {INTERNSHIP_STEPS[0].icon}
                                </div>
                                <div className="bg-white/80 border border-white px-4 py-1.5 rounded-full shadow-sm">
                                    <span className="text-[12px] font-black text-[#4a3728] flex items-center gap-2">
                                        <CalendarDays size={14} className="text-[#b53d54]" /> {INTERNSHIP_STEPS[0].year}
                                    </span>
                                </div>
                            </div>

                            <motion.div whileHover={{ y: -10 }} className="bg-white/40 backdrop-blur-md rounded-[40px] border border-white/80 p-8 shadow-xl h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-6 border-b border-white/40 pb-4">
                                        <h3 className="text-2xl font-black text-[#4a3728] mb-1">{INTERNSHIP_STEPS[0].company}</h3>
                                        <div className="flex items-center gap-2 text-[#b53d54] font-bold text-xs uppercase tracking-wider italic">
                                            <BriefcaseBusiness size={14} /> {INTERNSHIP_STEPS[0].role}
                                        </div>
                                    </div>
                                    <p className="text-[#4a3728]/80 text-sm leading-relaxed font-medium mb-8 text-justify italic">
                                        "{INTERNSHIP_STEPS[0].desc}"
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {INTERNSHIP_STEPS[0].tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 rounded-xl bg-white/80 border border-white text-[10px] font-black text-[#4a3728] flex items-center gap-1">
                                            <Zap size={10} className="text-[#b53d54]" /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* PHẦN ẢNH Ở GIỮA - TẠO ĐIỂM NHẤN HÀNH TRÌNH */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 flex items-center justify-center relative min-h-[300px]"
                        >
                            <div className="relative w-full h-full rounded-[40px] overflow-hidden border-4 border-white shadow-2xl group/img">
                                <img
                                    src="/Picture/khenthuong/tt.jpg"
                                    alt="Internship Journey"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-130"
                                />
                                <div className="absolute inset-0  to-transparent flex items-end p-6">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover/img:opacity-100 transition-opacity">
                                        Moments at work 📸
                                    </p>
                                </div>
                            </div>
                            {/* Icon trang trí bay quanh ảnh */}
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-5 -right-5 bg-white p-3 rounded-2xl shadow-lg text-[#b53d54]">
                                <Sparkles size={20} />
                            </motion.div>
                        </motion.div>

                        {/* THẺ 2: VNNIC Đà Nẵng */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-8 lg:justify-end">
                                <div className="bg-white/80 border border-white px-4 py-1.5 rounded-full shadow-sm order-2 lg:order-1">
                                    <span className="text-[12px] font-black text-[#4a3728] flex items-center gap-2">
                                        <CalendarDays size={14} className="text-[#b53d54]" /> {INTERNSHIP_STEPS[1].year}
                                    </span>
                                </div>
                                <div className={`p-4 rounded-2xl ${INTERNSHIP_STEPS[1].color} text-white shadow-xl order-1 lg:order-2`}>
                                    {INTERNSHIP_STEPS[1].icon}
                                </div>
                            </div>

                            <motion.div whileHover={{ y: -10 }} className="bg-white/40 backdrop-blur-md rounded-[40px] border border-white/80 p-8 shadow-xl h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-6 border-b border-white/40 pb-4">
                                        <h3 className="text-2xl font-black text-[#4a3728] mb-1">{INTERNSHIP_STEPS[1].company}</h3>
                                        <div className="flex items-center gap-2 text-[#b53d54] font-bold text-xs uppercase tracking-wider italic">
                                            <BriefcaseBusiness size={14} /> {INTERNSHIP_STEPS[1].role}
                                        </div>
                                    </div>
                                    <p className="text-[#4a3728]/80 text-sm leading-relaxed font-medium mb-8 text-justify italic">
                                        "{INTERNSHIP_STEPS[1].desc}"
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 lg:justify-end">
                                    {INTERNSHIP_STEPS[1].tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 rounded-xl bg-white/80 border border-white text-[10px] font-black text-[#4a3728] flex items-center gap-1">
                                            <Zap size={10} className="text-[#b53d54]" /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Câu chốt */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-16 pt-10 border-t border-white/40 flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div className="flex items-center gap-5 max-w-2xl">
                            <div className="p-4 bg-white/50 rounded-full border border-white">
                                <Quote size={28} className="text-[#b53d54] opacity-40" />
                            </div>
                            <p className="text-sm md:text-base font-bold text-[#4a3728]/80 italic leading-relaxed">
                                "Những trải nghiệm thực tập này là nền tảng quan trọng giúp mình hiểu rõ về môi trường chuyên nghiệp và định hướng tương lai."
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="group flex items-center gap-4 bg-[#4a3728] hover:bg-[#b53d54] text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-2xl"
                        >
                            Khám phá thêm kiến thức <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default InternshipRoadmap;