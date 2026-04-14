"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, Sparkles, Star } from 'lucide-react';

const PETALS_COUNT = 15;

const ContactAndFooter = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        setIsMounted(true);
        const generatedPetals = Array.from({ length: PETALS_COUNT }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 10 + Math.random() * 10,
            size: 15 + Math.random() * 20,
            type: Math.random() > 0.6 ? '🌸' : '🍃'
        }));
        setPetals(generatedPetals);
    }, []);

    const petalVariants = {
        hidden: { y: '-10vh', opacity: 0 },
        visible: (custom) => ({
            y: '110vh',
            x: [`${custom.x}%`, `${custom.x + (Math.random() > 0.5 ? 5 : -5)}%`, `${custom.x}%`],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
            transition: {
                duration: custom.duration,
                delay: custom.delay,
                repeat: Infinity,
                ease: 'linear',
            }
        })
    };

    if (!isMounted) return null;

    return (
        <section className="relative w-full pt-32 pb-10 bg-[#fcfaf7] overflow-hidden min-h-screen flex flex-col justify-center">

            {/* 1. BACKGROUND ĐÃ ĐƯỢC THU NHỎ (FIXED) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <Image
                    src="/Picture/anhcv/background.jpg"
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
                            Contact Me
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
                            Liên hệ <br />
                            <span className="text-[#d85165] relative inline-block">
                                với mình
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
                        "Rất vui được kết nối và cùng bạn chia sẻ, học hỏi những điều mới trên hành trình phía trước."
                    </p>
                </div>

                {/* 4. CONTACT SECTION */}
                <div className="relative max-w-5xl mx-auto mb-32">
                    {/* PORTRAIT IMAGE BOX */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative w-full md:w-3/4 aspect-[16/9] rounded-[50px] overflow-hidden shadow-2xl z-0"
                    >
                        <Image
                            src="/Picture/khenthuong/anhlinh1.jpg"
                            alt="Portrait"
                            fill
                            className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Overlay Gradient và Chữ */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4a3728]/90 via-[#4a3728]/20 to-transparent" />
                        <div className="absolute bottom-10 left-0 right-0 px-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="space-y-2"
                            >
                                <span className="block w-12 h-1 bg-[#d85165] mb-4 rounded-full" />
                                <h3 className="text-2xl md:text-3xl font-medium leading-tight text-white/95 italic">
                                    "Bắt đầu từ một lời chào, <br />
                                    <span className="text-[#d85165] font-black not-italic drop-shadow-[0_2px_10px_rgba(216,81,101,0.4)]">
                                        mình cùng kết nối nhé 💕
                                    </span>"
                                </h3>
                            </motion.div>
                        </div>
                    </motion.div>
                    {/* FORM BOX */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 w-full md:w-[500px] p-8 md:p-12 rounded-[40px] z-20 mt-[-50px] md:mt-0"
                        style={{
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)",
                            backdropFilter: "blur(25px)",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                            boxShadow: "0 50px 100px -20px rgba(216,81,101,0.2), inset 0 0 20px rgba(255, 255, 255, 0.2)"
                        }}
                    >
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <h4 className="text-2xl font-black text-[#4a3728]">Gửi lời nhắn</h4>
                                <div className="h-1 w-12 bg-[#d85165] mt-2 rounded-full" />
                            </div>
                            <Send className="w-6 h-6 text-[#d85165] opacity-40" />
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-4">
                                {[
                                    { key: "name", type: "text", label: "Họ và tên", placeholder: "Tên của bạn..." },
                                    { key: "email", type: "email", label: "Email / SĐT", placeholder: "Email/SĐT của bạn..." },
                                    { key: "msg", type: "textarea", label: "Nội dung", placeholder: "Bạn đang nghĩ gì?" }
                                ].map((input) => (
                                    <div key={input.key} className="relative group">
                                        <label className="text-[10px] font-black text-[#d85165] uppercase tracking-widest ml-2 mb-1 block">
                                            {input.label}
                                        </label>
                                        {input.type === 'textarea' ? (
                                            <textarea
                                                rows={3}
                                                placeholder={input.placeholder}
                                                className="w-full px-6 py-4 rounded-2xl outline-none transition-all text-[#4a3728] font-bold placeholder:text-[#4a3728]/20 resize-none shadow-inner bg-white/40 focus:bg-white/80 border border-transparent focus:border-[#d85165]/20"
                                            />
                                        ) : (
                                            <input
                                                type={input.type}
                                                placeholder={input.placeholder}
                                                className="w-full px-6 py-4 rounded-2xl outline-none transition-all text-[#4a3728] font-bold placeholder:text-[#4a3728]/20 shadow-inner bg-white/40 focus:bg-white/80 border border-transparent focus:border-[#d85165]/20"
                                            />
                                        )}
                                        <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#d85165] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ y: -5, shadow: "0 20px 40px -10px rgba(216,81,101,0.5)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-[#d85165] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] relative overflow-hidden group shadow-lg"
                            >
                                <span className="relative z-10">Kết nối với mình </span>
                                <motion.div
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
                                />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>


            </div>
        </section>
    );
};

export default ContactAndFooter;