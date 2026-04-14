"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Sparkles } from 'lucide-react';

const DATA = [
    {
        tag: "Hoạt động Câu Lạc Bộ",
        title: "Câu lạc bộ Hỗ trợ Lập trình",
        quote: "Sẻ chia tri thức, cùng nhau nâng cao kỹ năng thực tế cho cộng đồng sinh viên.",
        desc: "Tham gia hỗ trợ kiến thức chuyên môn cho các bạn sinh viên, góp phần xây dựng môi trường học tập năng động và hiện đại.",
        img1: "/picture/khenthuong/hdclb.jpg",
        img2: "/picture/khenthuong/hdclb3.jpg"
    },
    {
        tag: "Hoạt động văn nghệ",
        title: "Tham gia hoạt động văn nghệ",
        quote: "Góp phần tạo nên những tiết mục ý nghĩa, kết nối tinh thần tập thể và lan tỏa năng lượng tích cực trong môi trường sinh viên.",
        desc: "Tham gia biểu diễn và hỗ trợ các hoạt động văn nghệ trong trường và câu lạc bộ, góp phần xây dựng môi trường sinh hoạt năng động, gắn kết và giàu cảm xúc.",
        img1: "/picture/khenthuong/anhvn1 (1).jpg",
        img2: "/picture/khenthuong/anhvn1 (2).jpg"
    },
    {
        tag: "Cống hiến Cộng đồng",
        title: "Đồng hành cùng CLB Hỗ trợ Lập trình",
        quote: "Sát cánh cùng đồng đội, biến những dòng code khô khan thành những giá trị thực tiễn cho sinh viên.",
        desc: "Trực tiếp tham gia điều phối các buổi học nhóm, cố vấn kỹ thuật và xây dựng các tài liệu hướng dẫn lập trình, giúp các thành viên mới vượt qua rào cản công nghệ và cùng nhau phát triển trong môi trường chuyên nghiệp.",
        img1: "/picture/khenthuong/anhsm.jpg",
        img2: "/picture/khenthuong/anhsm1.jpg"
    },
    {
        tag: "Phụng sự Cộng đồng",
        title: "Chiến dịch Hỗ trợ Chống dịch COVID-19",
        quote: "Sẻ chia khó khăn, lan tỏa sức trẻ để cùng cộng đồng vượt qua những giai đoạn thử thách.",
        desc: "Trực tiếp tham gia hỗ trợ công tác điều phối, phân phối nhu yếu phẩm và hỗ trợ lực lượng tuyến đầu, góp phần đảm bảo an sinh xã hội và lan tỏa năng lượng tích cực trong cộng đồng.",
        img1: "/picture/khenthuong/chiendich (2).jpg",
        img2: "/picture/khenthuong/chiendich.jpg"
    },
    {
        tag: "Hoạt động cộng đồng",
        title: "Hiến tóc vì cộng đồng",
        quote: "Trao đi một phần nhỏ của mình để mang lại niềm vui và hy vọng cho người khác.",
        desc: "Tham gia chương trình hiến tóc nhằm hỗ trợ bệnh nhân ung thư, góp phần lan tỏa tinh thần sẻ chia và những giá trị nhân văn trong cộng đồng.",
        img1: "/picture/khenthuong/hientoc.jpg",
        img2: "/picture/khenthuong/hientoc.jpg"
    }
];

const JourneySection = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % DATA.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="relative w-full py-10 bg-[#fcfaf7] overflow-hidden min-h-screen flex flex-col justify-center">

            {/* BACKGROUND */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <Image
                    src="/picture/anhcv/bg.jpg"
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

                {/* HEADER */}
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
                            Hoạt Động <br />
                            <span className="text-[#d85165] relative inline-block">
                                Cộng Đồng & Đóng Góp
                                <svg className="absolute -bottom-9 left-0 w-full" viewBox="0 0 300 20" fill="none">
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
                        "Những trải nghiệm không chỉ giúp mình trưởng thành, mà còn là cơ hội để đóng góp và tạo ra giá trị tích cực cho cộng đồng."
                    </p>
                </div>

                {/* SLIDER CONTAINER */}
                <div className="relative max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`card-journey-${index}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="relative overflow-hidden rounded-[40px] border border-white/50 shadow-2xl"
                        >
                            {/* LỚP PHỦ MÀU TOÀN CARD (OVERLAY) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d85165]/10 via-[#fff5f6]/80 to-[#6f5643]/10 backdrop-blur-3xl z-0" />

                            {/* NỘI DUNG CARD */}
                            <div className="relative z-10 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                                {/* CỘT TRÁI */}
                                <div className="space-y-8 order-2 md:order-1">
                                    <div className="relative w-full aspect-[16/10] max-w-[420px] mx-auto md:mx-0">
                                        <div className="absolute inset-0 bg-[#d85165]/10 rounded-[28px] rotate-3" />
                                        {/* Khung viền có màu phủ cho ảnh nhỏ */}
                                        <div className="relative h-full p-[6px] bg-gradient-to-tr from-[#d85165]/40 to-[#6f5643]/20 rounded-[28px] overflow-hidden">
                                            <div className="relative h-full w-full rounded-[24px] overflow-hidden">
                                                <Image src={DATA[index].img1} alt="img" fill className="object-cover" priority />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-[2px] w-10 bg-[#d85165]" />
                                            <span className="text-[#d85165] font-bold text-[11px] uppercase tracking-[0.2em]">{DATA[index].tag}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-[#4a3728]">{DATA[index].title}</h3>
                                        <p className="text-[#6f5643] italic border-l-4 border-[#d85165] pl-4">"{DATA[index].quote}"</p>
                                        <p className="text-[#6f5643]/80 text-sm md:text-base">{DATA[index].desc}</p>
                                    </div>
                                </div>

                                {/* CỘT PHẢI */}
                                <div className="flex flex-col items-center gap-8 order-1 md:order-2">
                                    <div className="relative w-full max-w-[340px] aspect-[3/4]">
                                        {/* Khung viền có màu phủ cho ảnh lớn */}
                                        <div className="relative h-full p-[10px] bg-gradient-to-bl from-[#d85165]/50 via-white/40 to-[#6f5643]/30 rounded-[60px] overflow-hidden shadow-xl">
                                            <div className="relative h-full w-full rounded-[50px] overflow-hidden">
                                                <Image src={DATA[index].img2} alt="img" fill className="object-cover" />
                                            </div>
                                        </div>
                                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-[#fdf0f2]">
                                            <Star className="text-[#d85165] fill-[#d85165] w-6 h-6" />
                                        </motion.div>
                                    </div>

                                    <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-4 bg-[#d85165] text-white rounded-full font-bold shadow-lg flex items-center gap-2">
                                        Kết nối cùng Khánh Linh <Sparkles size={16} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;