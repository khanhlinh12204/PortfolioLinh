"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Coffee, Waves, Palette, Heart, Sparkles,
    ArrowRight, Quote, Sunset, Stars, Compass, Tent
} from 'lucide-react';

const personalityTags = [
    { label: "Hoàng hôn trên biển", icon: <Sunset size={14} />, color: "from-orange-400 to-[#b53d54]" },
    { label: "Khám phá tự nhiên", icon: <Tent size={14} />, color: "from-emerald-500 to-teal-700" },
    { label: "Ngắm sao đêm", icon: <Stars size={14} />, color: "from-indigo-400 to-purple-600" },
    { label: "Du lịch & Chill", icon: <Compass size={14} />, color: "from-blue-400 to-cyan-600" },
    { label: "UI Design", icon: <Palette size={14} />, color: "from-pink-400 to-[#b53d54]" },
    { label: "Cafe & Chill", icon: <Coffee size={14} />, color: "from-amber-600 to-amber-800" }
];

const AboutMeSection = () => {
    return (
        <div
            className="relative w-full py-16 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
            style={{ backgroundImage: "url('/picture/anhcv/background.jpg')" }}
        >
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
            {/* Overlay nền mờ mịn */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[6px] pointer-events-none" />

            {/* Các hạt bokeh trang trí */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-20 left-[5%] w-64 h-64 bg-[#b53d54]/20 rounded-full blur-[100px]"
            />

            <section className="relative z-10 w-full max-w-7xl px-6 lg:px-12">

                <div className="flex flex-col items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/90 border border-white shadow-xl mb-4"
                    >
                        <Sparkles size={18} className="text-[#b53d54] animate-pulse" />
                        <span className="text-[#4a3728] font-black text-[10px] uppercase tracking-[0.4em]">Những sở thích nho nhỏ</span>
                    </motion.div>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* KHỐI TRÁI: Portrait - Hiệu ứng trượt từ trái vào khi scroll đến */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 relative group"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#b53d54]/20 to-transparent rounded-[60px] translate-x-4 translate-y-4 blur-sm transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />

                            <div className="relative h-full w-full rounded-[60px] overflow-hidden border-8 border-white shadow-2xl z-10">
                                <img
                                    src="/picture/khenthuong/l2.jpg"
                                    alt="Nguyễn Khánh Linh"
                                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4a3728]/40 to-transparent" />
                            </div>

                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute -bottom-4 -left-4 z-20 bg-white p-5 rounded-[25px] shadow-2xl border border-white/50 flex flex-col items-center"
                            >
                                <Heart className="text-[#b53d54] fill-[#b53d54]" size={24} />
                                <span className="text-[9px] font-black text-[#4a3728] uppercase mt-1 tracking-widest">Free Spirit</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* KHỐI PHẢI: Content Story - Hiệu ứng trượt từ phải vào khi scroll đến */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col gap-8"
                    >
                        {/* Intro Section */}
                        <div className="relative">
                            <Quote className="absolute -top-10 -left-10 text-[#b53d54]/10 w-24 h-24" />
                            <h2 className="text-5xl md:text-6xl font-black text-[#4a3728] mb-6 leading-tight">
                                Gửi vào gió <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] to-orange-400">chút mộng mơ...</span>
                            </h2>
                            <p className="text-lg md:text-xl font-bold text-[#b53d54] italic leading-relaxed mb-6">
                                "Mình đi gom nhặt vẻ đẹp của thiên nhiên để nuôi dưỡng sự sáng tạo mỗi ngày."
                            </p>
                            <p className="text-[#4a3728]/90 text-base md:text-lg leading-relaxed font-medium max-w-2xl text-justify">
                                Ngoài những dòng code và giờ học trên giảng đường, mình là một người yêu sự nhẹ nhàng, sáng tạo và luôn tìm kiếm cảm hứng từ những điều nhỏ bé xung quanh.
                                Mình đặc biệt yêu biển – nhất là những buổi hoàng hôn, khi mọi thứ trở nên chậm lại và bình yên hơn.
                                Mình cũng thích đi chill, khám phá thiên nhiên, du lịch và ngắm sao vào những đêm trời trong, như một cách để <strong>“reset”</strong> và nạp lại năng lượng sau những ngày bận rộn.
                            </p>
                        </div>

                        {/* Bento Style cho sở thích - Tự động trượt lên nhẹ khi lướt tới */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            <div className="bg-white/40 backdrop-blur-xl rounded-[35px] border border-white/60 p-8 shadow-lg hover:bg-white/60 transition-all group">
                                <Sunset className="text-[#b53d54] mb-4 group-hover:scale-110 transition-transform" size={32} />
                                <h4 className="font-black text-[#4a3728] text-sm uppercase tracking-wider mb-2">Sea & Solitude</h4>
                                <p className="text-xs text-[#4a3728]/70 leading-relaxed font-medium">
                                    Tìm thấy sự bình yên khi ngắm hoàng hôn tan vào lòng biển, nơi mọi áp lực dường như tan biến.
                                </p>
                            </div>
                            <div className="bg-[#4a3728]/5 backdrop-blur-xl rounded-[35px] border border-white/40 p-8 shadow-lg hover:bg-white/60 transition-all group text-justify">
                                <Stars className="text-indigo-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                                <h4 className="font-black text-[#4a3728] text-sm uppercase tracking-wider mb-2">Night Sky & Stars</h4>
                                <p className="text-xs text-[#4a3728]/70 leading-relaxed font-medium">
                                    Đắm mình dưới bầu trời sao để nhắc nhở bản thân rằng thế giới luôn tràn đầy những điều kỳ diệu chưa được khám phá.
                                </p>
                            </div>
                        </motion.div>

                        {/* Tags & Call to action */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white/30 backdrop-blur-2xl rounded-[40px] border border-white/50 p-8 shadow-xl"
                        >
                            <div className="flex flex-wrap gap-3 mb-8">
                                {personalityTags.map((tag, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/60 border border-white shadow-sm transition-all cursor-default"
                                    >
                                        <div className={`p-1.5 rounded-full bg-gradient-to-br ${tag.color} text-white`}>
                                            {tag.icon}
                                        </div>
                                        <span className="text-[10px] font-extrabold text-[#4a3728] uppercase tracking-widest">{tag.label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ x: 10 }}
                                className="group flex items-center gap-4 text-[#b53d54] font-black text-xs uppercase tracking-[0.3em]"
                            >
                                Let's discover more
                                <div className="w-10 h-10 rounded-full border border-[#b53d54] flex items-center justify-center group-hover:bg-[#b53d54] group-hover:text-white transition-all">
                                    <ArrowRight size={16} />
                                </div>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutMeSection;