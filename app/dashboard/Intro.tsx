"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Intro() {
    const personalStories = [
        {
            tag: "Hành trình",
            title: "Cô gái Công nghệ từ Cố đô",
            desc: "Mình là sinh viên năm cuối chuyên ngành Khoa học Máy tính tại ĐH Khoa học Huế. Với mình, lập trình không chỉ là những dòng code khô khan, mà là cách mình tạo ra giá trị cho cuộc sống.",
            align: "self-end",
            rotate: "rotate-2",
            delay: 0.1
        },
        {
            tag: "Tâm thế",
            title: "Học hỏi là hơi thở",
            desc: "Linh luôn tin rằng sự chủ động là chìa khóa. Từ những buổi nghiên cứu khoa học đến các cuộc thi lập trình, mình luôn trân trọng từng bài học để hoàn thiện bản thân mỗi ngày.",
            align: "self-start",
            rotate: "-rotate-1",
            delay: 0.2
        },
        {
            tag: "Kết nối",
            title: "Lan tỏa năng lượng",
            desc: "Bên cạnh bàn phím, mình tìm thấy niềm vui trong các hoạt động Đoàn - Hội. Việc kết nối mọi người và cùng nhau tổ chức sự kiện giúp mình trưởng thành và tự tin hơn rất nhiều.",
            align: "self-end",
            rotate: "rotate-1",
            delay: 0.3
        },
        {
            tag: "Ước mơ",
            title: "Vươn mình ra biển lớn",
            desc: "Hiện tại, mình đang tìm kiếm những cơ hội thực tập đầy thử thách để hiện thực hóa giấc mơ trở thành một Lập trình viên chuyên nghiệp, mang trí tuệ Việt vươn xa.",
            align: "self-start",
            rotate: "-rotate-2",
            delay: 0.4
        }
    ];

    return (
        // 1. Giảm py-16 xuống py-10 và dùng h-auto để thu hẹp chiều dài
        <section className="relative w-full h-auto flex items-center justify-center py-10 px-6 md:px-12 lg:px-24 bg-[#fcfaf7] overflow-hidden">

            {/* --- 1. LỚP NỀN DECOR & GRADIENT --- */}
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="/picture/anhcv/bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover blur-[2px]"
                    priority
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute w-[600px] h-[600px] bg-rose-100/30 blur-[120px] rounded-full -top-20 -left-20" />
                <div className="absolute w-[500px] h-[500px] bg-orange-50/40 blur-[100px] rounded-full bottom-0 right-0" />
            </div>

            {/* --- 2. HIỆU ỨNG CÁNH HOA & LÁ BAY --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
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
                        className="absolute text-2xl opacity-25"
                        style={{ left: `${Math.random() * 100}%`, top: "-10%" }}
                    >
                        {i % 2 === 0 ? "🌸" : "🍃"}
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 w-full max-w-[1300px] flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-16">

                {/* --- PHẦN PHẢI: VISUAL (Ảnh & Quote) --- */}
                <div className="lg:sticky lg:top-10 flex-1 flex flex-col items-center group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        // 2. Thu nhỏ nhẹ khung ảnh để cân đối chiều dài mới
                        className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[1.5px] border-dashed bg-rose-200/60 rounded-[40%_60%_70%_30%/40%_50%_60%_40%] scale-110"
                        />

                        <motion.div
                            animate={{
                                borderRadius: ["40% 60% 70% 30% / 40% 40% 60% 50%", "30% 60% 70% 40% / 50% 60% 30% 60%", "40% 60% 70% 30% / 40% 40% 60% 50%"]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full overflow-hidden border-4 border-white shadow-2xl z-10 "
                        >
                            <Image
                                src="/picture/anhcv/anhgt.jpg"
                                alt="Khánh Linh"
                                fill
                                className="object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </motion.div>

                        <div className="absolute -top-6 -right-6 text-6xl z-20 animate-bounce delay-700 opacity-80">🌸</div>
                        <div className="absolute -bottom-6 -left-6 text-5xl z-20 animate-pulse opacity-70">🌿</div>
                    </motion.div>

                    <div className="mt-12 text-center space-y-4">
                        <div className="relative">
                            {[...Array(3)].map((_, i) => (
                                <motion.span
                                    key={i}
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                    className="absolute text-rose-300 text-sm"
                                    style={{
                                        top: Math.random() * 100 + "%",
                                        left: Math.random() * 100 + "%"
                                    }}
                                >
                                    ✦
                                </motion.span>
                            ))}

                            <motion.p
                                initial={{ filter: "blur(10px)", opacity: 0 }}
                                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 1.5 }}
                                className="text-[#d85165] text-xl md:text-2xl font-light tracking-wide text-center leading-relaxed"
                            >
                                <span className="text-3xl font-serif">“</span>
                                Gói ghém <span className="font-bold text-[#4a3728]">yêu thương</span> vào từng dòng code,
                                <br />
                                chạm tay đến những <span className="border-b border-rose-200">giấc mơ vươn tầm</span>.
                                <span className="text-3xl font-serif">”</span>
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* --- PHẦN TRÁI: STORYTELLING --- */}
                <div className="flex-[1.2] flex flex-col gap-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-1 text-center lg:text-left mb-2"
                    >
                        <span className="text-rose-400 font-bold tracking-[0.2em] uppercase text-xs">Portfolio Intro</span>
                        <h2 className="text-[#4a3728] text-4xl md:text-5xl font-bold tracking-tight">
                            Góc nhỏ của <span className="text-rose-500">Linh...</span>
                        </h2>
                    </motion.div>

                    {/* 3. Giảm gap-6 xuống gap-4 để thu hẹp khoảng cách các card */}
                    <div className="flex flex-col gap-4 relative">
                        <div className="absolute left-0 lg:left-4 w-[1px] h-full bg-gradient-to-b from-rose-200 to-transparent -z-10 hidden md:block" />

                        {personalStories.map((story, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? 20 : -20 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ delay: story.delay, duration: 0.6 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                // 4. Giảm padding p-8 xuống p-5 để card gọn hơn
                                className={`
                                    ${story.align} 
                                    relative max-w-[420px] p-5
                                    bg-white/50 backdrop-blur-xl
                                    border border-white/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)]
                                    rounded-[2rem] ${story.rotate}
                                    hover:rotate-0 hover:bg-white/80 transition-all duration-500 group/card
                                `}
                            >
                                <div className="absolute -top-3 left-8">
                                    <span className="px-3 py-0.5 bg-rose-500 text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-md">
                                        {story.tag}
                                    </span>
                                </div>

                                {/* Đã sửa text-rgba thành text-[#d85165]/80 */}
                                <h3 className="text-[#d85165]/90 text-lg font-bold mb-2 group-hover/card:text-rose-600 transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                                    {story.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- NÚT SỞ THÍCH --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-4 p-1 bg-[#4a3728] rounded-full inline-flex items-center self-center lg:self-start group cursor-default shadow-xl hover:bg-rose-600 transition-colors duration-500"
                    >
                        <div className="bg-[#fcfaf7] px-6 py-3 rounded-full flex items-center gap-3">
                            <span className="text-xl animate-bounce">🏔️</span>
                            <span className="text-[#4a3728] font-bold text-xs tracking-wide">
                                Linh yêu: Biển xanh & Núi cao
                            </span>
                        </div>
                        <Link href="/Introduction">
                        <div className="px-5 text-white text-xs font-bold group-hover:translate-x-1 transition-transform">
                            Khám phá →
                        </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}