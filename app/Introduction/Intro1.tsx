"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

const INFO_STATS = [
    { label: "Chuyên ngành", value: "Khoa học máy tính" },
    { label: "Học vấn", value: "ĐH Khoa học Huế" },
    { label: "Thành tích", value: "GPA 3.64 / 4.0" },
    { label: "Mục tiêu", value: "Frontend Developer" },
];

// CHỈ THAY ĐỔI MẢNG NÀY ĐỂ ẢNH TO VÀ AN TOÀN
const IMAGE_TAGS = [
    {
        src: "/Picture/khenthuong/l12.jpg",
        alt: "Project 01",
        position: "top-[5%] left-[5%]", // Sát lề trên và trái (an toàn)
        yValues: [-20, 20],
        size: "w-64 h-40", // To hơn
        rotation: "-6deg",
        delay: 0
    },
    {
        src: "/Picture/khenthuong/l4.jpg",
        alt: "Project 02",
        position: "bottom-[10%] left-[10%]", // Sát lề dưới
        yValues: [20, -20],
        size: "w-72 h-44", // To nhất
        rotation: "8deg",
        delay: 0.5
    },
    {
        src: "/Picture/khenthuong/l15.jpg",
        alt: "Achievement",
        position: "top-[10%] right-[10%]", // Sát lề phải
        yValues: [-15, 15],
        size: "w-52 h-52", // Ảnh vuông to
        rotation: "-4deg",
        delay: 1
    },
    {
        src: "/Picture/khenthuong/l10.jpg",
        alt: "Activity",
        position: "bottom-[15%] right-[5%]",
        yValues: [10, -10],
        size: "w-64 h-40",
        rotation: "5deg",
        delay: 1.5
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] // ✅ FIX
        }
    }
};

export default function AboutPage() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => { setIsMounted(true); }, []);

    if (!isMounted) return null;

    return (
        <main className="bg-[#fcfaf7] ">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Picture/anhcv/background.jpg"
                    alt="Full Background"
                    fill
                    className="object-cover "
                    priority
                />

                <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-[#fcfaf7] opacity-80" />


            </div>
            <section className="relative w-full  flex items-center overflow-hidden ">
                <div className="mt-10 w-full md:w-1/2 px-6 md:px-5 flex flex-col justify-center transform scale-85 ">

                    {/* Quầng sáng trang trí */}
                    <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#d85165]/5 blur-[120px] rounded-full z-0" />

                    <motion.div
                        className="space-y-4 md:space-y-5 lg:space-y-6 max-w-2xl relative z-10"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* TITLE SECTION */}
                        <motion.div variants={itemVariants} className="relative space-y-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -top-6 -left-6 text-[#d85165]/40"
                            >
                                <Sparkles size={32} />
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-[#4a3728] tracking-tighter">
                                Xin chào, mình là
                                <br />
                                <span className="relative inline-block mt-1">
                                    <span className="relative z-10 text-[#d85165] italic font-serif font-medium tracking-normal">
                                        Nguyễn Khánh Linh
                                    </span>
                                    <motion.span
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                        className="absolute bottom-2 left-0 h-[30%] bg-[#d85165]/10 -z-10 rounded-sm"
                                    />
                                </span>{" "}
                                ✨
                            </h1>
                        </motion.div>

                        {/* NỘI DUNG MỚI TỪ USER */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-4 text-[#6f5643] text-[25px] md:text-[19px] leading-relaxed font-medium max-w-xl text-justify"
                        >
                            <p>
                                Hiện là sinh viên năm 4 ngành{" "}
                                <span className="text-[#d85165] font-bold">Công nghệ Thông tin</span> tại Trường Đại học Khoa học Huế, mình định hướng phát triển trong lĩnh vực lập trình và công nghệ.
                            </p>

                            <p>
                                Với mình, lập trình không chỉ dừng lại ở việc viết code mà còn là cách để giải quyết vấn đề và tạo ra{" "}
                                <span className="italic border-b border-[#d85165]/40">giá trị thực tế</span>. Vì vậy, mình luôn chủ động học hỏi mỗi ngày, kết hợp giữa lý thuyết và thực hành thông qua các dự án cá nhân, hoạt động học thuật và làm việc nhóm.
                            </p>

                            <p>
                                Từ những ngày đầu còn nhiều bỡ ngỡ, mình đã dần xây dựng tư duy logic, khả năng tự học và sự kiên trì trong quá trình phát triển bản thân. Mỗi sản phẩm hoàn thành không chỉ là kết quả, mà còn là một bước tiến trong hành trình trưởng thành của mình.
                            </p>

                            <p className="font-bold text-[#4a3728]">
                                Mình đặc biệt yêu thích việc học qua thực hành và không ngừng cải thiện qua từng dự án nhỏ. Hiện tại, mình đang tìm kiếm cơ hội thực tập để tích lũy kinh nghiệm thực tế, nâng cao kỹ năng lập trình và chuẩn bị tốt hơn cho con đường nghề nghiệp phía trước.
                            </p>
                        </motion.div>

                        {/* CONTENT CARD QUOTE */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="group relative p-5 rounded-[30px] bg-white/50 backdrop-blur-3xl border border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.03)] overflow-hidden"
                        >
                            <span className="absolute -top-2 -right-2 text-6xl text-[#d85165]/5 font-serif select-none leading-none group-hover:text-[#d85165]/10 transition-colors">
                                “
                            </span>
                            <p className="relative z-10 text-[#4a3728] text-sm italic font-semibold border-l-4 border-[#d85165] pl-4">
                                Rất vui khi bạn ghé thăm không gian nhỏ này của mình. 🌸
                            </p>
                        </motion.div>

                        {/* STATS CARD SECTION */}
                        <motion.div
                            variants={itemVariants}
                            className="p-10 rounded-[50px] bg-[#4a3728] text-white shadow-2xl"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {INFO_STATS.map((item, i) => (
                                    <motion.div key={i} whileHover={{ y: -2 }}>
                                        <p className="text-[15px] uppercase tracking-[0.2em] text-[#d85165] font-black">
                                            {item.label}
                                        </p>
                                        <p className="text-white/90 font-bold text-[14px] lg:text-[11px] truncate">
                                            {item.value}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* BUTTONS SECTION */}
                        <motion.div
                            variants={itemVariants}
                            className="pt-2 flex items-center gap-6"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(216, 81, 101, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-[#d85165] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg overflow-hidden transition-all"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Kết nối với mình{" "}
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </span>

                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute top-0 left-0 w-1/2 h-full bg-white/20 skew-x-[-20deg]"
                                />
                            </motion.button>

                            <Link
                                href="#journey"
                                className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#d85165]"
                            >
                                <span className="border-b-2 border-[#d85165] pb-1 transition-opacity group-hover:opacity-70">
                                    Xem Hành trình
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div >

                {/* RIGHT IMAGE SECTION - KHÔNG THAY ĐỔI CẤU TRÚC, CHỈ TỐI ƯU HIỂN THỊ */}
                <div className="hidden md:block absolute right-0 top-0 h-full w-[47%] z-10" >
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="relative h-full w-full">
                        <Image
                            src="/Picture/khenthuong/l8.jpg"
                            alt="Linh"
                            fill
                            className="object-cover grayscale-[10%] contrast-[1.05]"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#fcf9f0] z-20" />

                        {IMAGE_TAGS.map((tag, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, rotate: tag.rotation }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [tag.yValues[0], tag.yValues[1], tag.yValues[0]],
                                    rotate: tag.rotation
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 0,
                                    zIndex: 100,
                                    transition: { duration: 0.3 }
                                }}
                                transition={{
                                    opacity: { delay: 1 + tag.delay, duration: 0.8 },
                                    scale: { delay: 1 + tag.delay, duration: 0.8 },
                                    y: {
                                        duration: 6 + index,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className={`absolute ${tag.position} ${tag.size} z-30 rounded-2xl overflow-hidden border-[6px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-all duration-500`}
                            >
                                <Image
                                    src={tag.src}
                                    alt={tag.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#d85165]/5 pointer-events-none hover:bg-transparent transition-colors" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div >

                <div className="fixed inset-0 pointer-events-none z-50">
                    {[...Array(5)].map((_, i) => (
                        <motion.div key={i} animate={{ y: [0, 1000], rotate: 360, x: [0, 100, 0] }} transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }} className="absolute text-2xl opacity-20" style={{ left: `${i * 20}%`, top: "-10%" }}>🌸</motion.div>
                    ))}
                </div>
            </section >
        </main >
    );
}