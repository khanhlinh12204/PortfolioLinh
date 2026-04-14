"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Quote, Sparkles, GraduationCap, Code, Rocket, Star, Heart, Brain, Zap, Compass } from 'lucide-react';

const GLOSSY_STYLES = [
    { bg: "bg-[#f2cbd4]/30", border: "border-[#f2cbd4]/60", shadow: "shadow-[0_8px_15px_rgba(242,203,212,0.3)]", glow: "group-hover:ring-[#f2cbd4]/50" },
    { bg: "bg-[#f9dcc4]/30", border: "border-[#f9dcc4]/60", shadow: "shadow-[0_8px_15px_rgba(249,220,196,0.3)]", glow: "group-hover:ring-[#f9dcc4]/50" },
    { bg: "bg-[#d8e2dc]/30", border: "border-[#d8e2dc]/60", shadow: "shadow-[0_8px_15px_rgba(216,226,220,0.3)]", glow: "group-hover:ring-[#d8e2dc]/50" },
    { bg: "bg-[#e2cfea]/30", border: "border-[#e2cfea]/60", shadow: "shadow-[0_8px_15px_rgba(226,207,234,0.3)]", glow: "group-hover:ring-[#e2cfea]/50" }
];

const JOURNEY_LIST = [
    { id: 1, tag: "Năm 1", icon: <Star size={16} />, title: "Khởi đầu", quote: "Bắt đầu từ những điều nhỏ nhất.", desc: "Tốt nghiệp cấp 3 với số điểm THPT 25,55. Gia nhập thành viên câu lạc Bộ Lửa Xanh. Tham gia các hoạt động ngoại khóa của Khoa, của trường.", imgLeft: "/picture/khenthuong/hdclb.jpg", imgRight: "/picture/khenthuong/hdclb3.jpg", isReversed: false },
    { id: 2, tag: "Năm 2", icon: <GraduationCap size={16} />, title: "Phát triển", quote: "Không ngừng học hỏi và thử sức.", desc: "Tham gia câu Lạc bộ Hỗ trợ Lập Trình với tư cách là thành viên đi hỗ trợ. Đạt danh hiệu Sinh viên giỏi năm 2022-2023. Tình nguyện viên IT-Campus và chào đón tân sinh viên. Tham gia buổi hỗ trợ nhập học cho tân sinh viên K47 năm 2023. Đạt danh hiệu Sinh viên 5 tốt cấp Trường. Tham gia văn nghệ của Khoa và Hội thảo nghiên cứu cấp Trường. Nhận học bổng Sinh viên Tài Năng “NEVER GIVE UP”. Tham gia tổ chức sự kiện 2 buổi seminar “Knowledge, Skills and Applications”. Tổ chức các hoạt động kỹ năng, ngoại khóa dành cho CLB.", imgLeft: "/picture/khenthuong/hdclb3.jpg", imgRight: "/picture/khenthuong/hdclb.jpg", isReversed: true },
    { id: 3, tag: "Năm 3", icon: <Code size={16} />, title: "Bứt phá", quote: "Trưởng thành qua từng trải nghiệm.", desc: "Giữ chức vụ Trưởng ban Kỹ năng trong CLB Hỗ trợ Lập Trình và Ủy viên Liên chi Hội Khoa CNTT. Đạt danh hiệu Sinh viên 5 tốt cấp trường năm 2023-2024. Tham gia cuộc thi ICPC cấp Khoa. Tham gia văn nghệ chào mừng Tân Sinh Viên và 26-3. Tham gia nghiên cứu khoa học cấp Trường năm 2025. Đạt danh hiệu Sinh viên giỏi năm 2023-2024. Tham gia và tổ chức các hoạt động ngoại khóa của Trường, Khoa. Thực tập tại Công ty DHY Solution với vai trò Intern.", imgLeft: "/picture/khenthuong/hdclb.jpg", imgRight: "/picture/khenthuong/hdclb3.jpg", isReversed: false },
    { id: 4, tag: "Năm 4", icon: <Rocket size={16} />, title: "Hoàn thiện", quote: "Sẵn sàng cho hành trình phía trước.", desc: "Tiếp tục giữ chức vụ Trưởng ban Kỹ năng trong CLB Hỗ trợ Lập Trình. Đạt danh hiệu sinh viên Xuất sắc năm 2024-2025. Tham gia ban tổ chức cuộc thi ICPC cấp Khoa. Thực tập tại Trung tâm Internet Việt Nam (VNNIC) chi nắng Đà Nẵng với vai trò Intern. Tham gia vào BTC chương trình 'Polkadot' dành cho sinh viên Khoa CNTT.", imgLeft: "/picture/khenthuong/hdclb3.jpg", imgRight: "/picture/khenthuong/hdclb.jpg", isReversed: true }
];

const PHILOSOPHY_LIST = [
    { title: "Vì sao mình chọn IT?", icon: <Brain size={20} />, color: "text-[#d85165]", glowColor: "group-hover:shadow-[#d85165]/40", content: "Ban đầu là sự tò mò về cách website tạo ra giá trị. Càng học, mình càng nhận ra IT là lĩnh vực của tư duy, sáng tạo và giải quyết vấn đề thực tế." },
    { title: "Thử thách & Khó khăn", icon: <Zap size={20} />, color: "text-[#f4a261]", glowColor: "group-hover:shadow-[#f4a261]/40", content: "Từng mắc kẹt với lỗi nhỏ, từng nản lòng khi so sánh với người khác. Nhưng chính sự kiên nhẫn đã giúp mình làm quen với tư duy lập trình." },
    { title: "Bước ngoặt hành trình", icon: <Compass size={20} />, color: "text-[#6f5643]", glowColor: "group-hover:shadow-[#6f5643]/40", content: "Tham gia CLB và dự án thực tế là lúc code không còn khô khan. Mình học được cách làm việc nhóm và tự tin hơn vào con đường đã chọn." }
];

export default function JourneyStorySection() {
    const [isMounted, setIsMounted] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => { setIsMounted(true); }, []);
    if (!isMounted) return null;

    const formatHighlightText = (sentence: string): React.ReactNode => {
        const keywords = [
            "Sinh viên 5 tốt",
            "ICPC",
            "Intern",
            "Học bổng",
            "Trưởng ban",
            "tư duy",
            "sáng tạo",
            "giải quyết vấn đề"
        ];

        const escapeRegExp = (text: string) =>
            text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        let parts: (string | React.ReactNode)[] = [sentence];

        keywords.forEach(word => {
            let newParts: (string | React.ReactNode)[] = [];

            parts.forEach(part => {
                if (typeof part === 'string') {
                    const splitParts = part.split(
                        new RegExp(`(${escapeRegExp(word)})`, 'gi')
                    );
                    newParts.push(...splitParts);
                } else {
                    newParts.push(part);
                }
            });

            parts = newParts;
        });

        const isKeyword = (part: string) =>
            keywords.some(kw => kw.toLowerCase() === part.toLowerCase());

        return parts.map((part, i) =>
            typeof part === "string" && isKeyword(part) ? (
                <span key={i} className="text-[#b53d54] font-black">
                    {part}
                </span>
            ) : (
                <React.Fragment key={i}>{part}</React.Fragment>
            )
        );
    };

    return (
        <section
            className="relative w-full py-20 overflow-hidden min-h-screen bg-fixed bg-cover bg-center"
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
            <div className="absolute inset-0 bg-[#fff9f2]/40 z-0" />

            <div className="absolute inset-0 z-10 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div key={i} animate={{ y: [-20, 1000], x: [0, 50, -50, 0], rotate: 360 }} transition={{ duration: 20 + i, repeat: Infinity, ease: "linear" }} className="absolute opacity-30 text-2xl" style={{ left: `${i * 12}%`, top: "-5%" }}>
                        🌸
                    </motion.div>
                ))}
            </div>

            <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#f9dcc4] origin-left z-[100] shadow-[0_0_15px_rgba(181,61,84,0.5)]" />

            <div className="max-w-5xl mx-auto px-6 relative z-20">

                {/* --- HEADER --- */}
                <div className="relative text-center mb-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.1] overflow-hidden">
                        <span className="text-[100px] md:text-[140px] font-black whitespace-nowrap uppercase tracking-tighter text-[#4a3728]">
                            MY STORY • JOURNEY
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
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#b53d54]">Ký ức & Trưởng thành</span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
                        <h2 className="text-4xl md:text-6xl font-black text-[#4a3728] tracking-tighter leading-tight drop-shadow-md">
                            Hành trình sinh viên <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#b53d54] animate-pulse">
                                của mình
                            </span>
                        </h2>
                    </motion.div>
                </div>

                {/* Story Quote */}
                <div className="relative mb-16 max-w-4xl mx-auto group">
                    <Quote className="absolute -top-10 -left-6 size-20 text-[#f2cbd4]/40 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                    <div className="relative p-8 rounded-[40px] bg-white/60 backdrop-blur-lg border-2 border-white/80 shadow-2xl shadow-[#f2cbd4]/10 transition-all hover:ring-8 hover:ring-white/40">
                        <p className="text-[#4a3728] text-base md:text-lg leading-relaxed text-justify font-bold italic">
                            <span className="text-6xl font-black text-[#b53d54] float-left mr-3 mt-1 leading-[0.8] drop-shadow-sm">M</span>
                            ình đến với Công nghệ Thông tin không phải từ đầu đã giỏi, mà bắt đầu từ sự tò mò và mong muốn tạo ra điều gì đó có giá trị. Từ những dòng code đầu tiên còn nhiều sai sót, mình đã dần học cách tư duy, giải quyết vấn đề và sự kiên trì qua từng đêm thức trắng.
                        </p>
                    </div>
                </div>

                {/* --- PHILOSOPHY CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {PHILOSOPHY_LIST.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`bg-white/70 backdrop-blur-md p-7 rounded-[35px] border-2 border-white shadow-xl transition-all duration-500 group relative overflow-hidden ${item.glowColor} hover:shadow-2xl`}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full pointer-events-none" />
                            <div className={`mb-4 p-4 rounded-2xl bg-white shadow-lg inline-block transition-transform group-hover:scale-110 group-hover:rotate-6 ${item.color}`}>
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-black text-[#4a3728] mb-3">{item.title}</h4>
                            <p className="text-sm text-[#6f5643] leading-relaxed font-semibold">
                                {formatHighlightText(item.content)}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* --- TIMELINE --- */}
                <div className="relative space-y-16">
                    <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[4px] opacity-20 hidden md:block"
                        style={{ backgroundImage: 'linear-gradient(to bottom, #b53d54 50%, transparent 50%)', backgroundSize: '4px 30px' }} />

                    {JOURNEY_LIST.map((card) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${card.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 relative z-10 group`}
                        >
                            {/* Hình ảnh với Glow Border */}
                            <div className="w-full md:w-1/2 relative">
                                <div className="relative aspect-[4/3] rounded-[45px] overflow-hidden border-[12px] border-white shadow-[0_25px_60px_rgba(0,0,0,0.18)] transition-all duration-700 group-hover:shadow-[#b53d54]/30 group-hover:-translate-y-3 group-hover:ring-[15px] group-hover:ring-white/40">
                                    <Image src={card.imgLeft} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                                </div>
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1, rotate: card.isReversed ? 12 : -12 }}
                                    transition={{ delay: 0.4 }}
                                    className={`absolute w-40 h-52 rounded-[35px] border-[8px] border-white shadow-2xl z-30 overflow-hidden ${card.isReversed ? '-left-10 -bottom-10' : '-right-10 -bottom-10'} group-hover:rotate-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[#f2cbd4]/50`}
                                >
                                    <Image src={card.imgRight} alt="decor" fill className="object-cover" />
                                </motion.div>
                            </div>

                            {/* Nội dung với hiệu ứng Ring Glow */}
                            <div className={`w-full md:w-1/2 space-y-6 ${card.isReversed ? 'md:text-right' : ''}`}>
                                <div className={`flex items-center gap-4 ${card.isReversed ? 'md:justify-end' : ''}`}>
                                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#b53d54] to-[#f9dcc4] text-white shadow-2xl ring-4 ring-white transition-transform group-hover:scale-125 group-hover:rotate-12">
                                        {card.icon}
                                    </div>
                                    <span className="text-[#b53d54] font-black text-[12px] uppercase tracking-[0.2em] bg-white px-5 py-2 rounded-full shadow-lg border border-[#f2cbd4] transition-all group-hover:bg-[#b53d54] group-hover:text-white">{card.tag}</span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-black text-[#4a3728] tracking-tighter drop-shadow-sm group-hover:text-[#b53d54] transition-colors duration-500">{card.title}</h3>

                                <div className={`relative p-6 bg-white/80 backdrop-blur-md rounded-[30px] border-l-[8px] border-[#b53d54] shadow-xl transition-all duration-500 group-hover:ring-4 group-hover:ring-[#b53d54]/20 ${card.isReversed ? 'md:border-l-0 md:border-r-[8px]' : ''}`}>
                                    <p className="text-[#6f5643] italic font-black text-sm md:text-base leading-relaxed">"{card.quote}"</p>
                                </div>

                                <div className="pt-2 space-y-4">
                                    {card.desc.split('.').filter((s: string) => s.trim() !== "").map((sentence: string, idx: number) => {
                                        const style = GLOSSY_STYLES[idx % GLOSSY_STYLES.length];
                                        const isLeft = card.isReversed ? (idx % 2 !== 0) : (idx % 2 === 0);
                                        return (
                                            <div key={idx} className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                                <motion.div
                                                    whileHover={{ scale: 1.05, x: isLeft ? 10 : -10 }}
                                                    className={`relative overflow-hidden px-7 py-3 rounded-full border-2 ${style.border} ${style.bg} ${style.shadow} backdrop-blur-md transition-all duration-300 max-w-[95%] group cursor-default hover:ring-4 ring-offset-2 ring-offset-transparent ${style.glow}`}
                                                >
                                                    <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/50 to-transparent z-10 rounded-t-full"></div>
                                                    <p className="relative z-30 text-[12px] md:text-[14px] font-black text-[#4a3728] leading-snug">
                                                        {formatHighlightText(sentence.trim())}.
                                                    </p>
                                                </motion.div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- FOOTER CARD --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    // Giảm: mt-32 -> mt-20, py-20 -> py-12, px-10 -> px-6, rounded-[60px] -> rounded-[40px], border-4 -> border-2
                    className="mt-20 text-center relative py-12 px-6 rounded-[40px] bg-gradient-to-br from-[#f2cbd4]/30 via-white/40 to-[#f9dcc4]/30 border-2 border-white shadow-[0_20px_50px_rgba(181,61,84,0.15)] backdrop-blur-2xl transition-all hover:ring-[12px] hover:ring-white/30"
                >
                    {/* Giảm: -top-10 -> -top-7, w-20 -> w-14, h-20 -> h-14, border-4 -> border-2 */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-[#f2cbd4]">
                        {/* Giảm: size 35 -> 24 */}
                        <Heart size={24} className="text-[#b53d54] fill-[#b53d54] animate-bounce" />
                    </div>

                    {/* Giảm: top-12 -> top-8, size 50 -> 32 */}
                    <Sparkles className="absolute top-8 left-1/2 -translate-x-1/2 text-[#b53d54] opacity-40" size={32} />

                    {/* Giảm: text-3xl/5xl -> text-xl/3xl, max-w-3xl -> max-w-xl */}
                    <h3 className="text-xl md:text-3xl font-black text-[#4a3728] leading-tight max-w-xl mx-auto drop-shadow-sm mt-7">
                        "Hành trình này <span className="text-[#b53d54] relative">mới chỉ bắt đầu
                            {/* Giảm: h-2 -> h-1.5 */}
                            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#f2cbd4] -z-10 rounded-full"></span>
                        </span> — còn rất nhiều điều phía trước để mình tiếp tục khám phá và phát triển."
                    </h3>

                    <motion.div
                        whileHover={{ y: -5 }}
                        // Giảm: mt-12 -> mt-8, px-10 -> px-7, py-4 -> py-2.5, text-sm -> text-xs
                        className="mt-8 inline-flex items-center gap-2 bg-[#b53d54] text-white px-7 py-2.5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] md:text-xs shadow-[0_10px_20px_rgba(181,61,84,0.3)] hover:shadow-[#b53d54]/50 transition-all cursor-pointer"
                    >
                        <span>Keep Moving Forward</span>
                        {/* Giảm: size 18 -> 14 */}
                        <Rocket size={14} className="animate-pulse" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}