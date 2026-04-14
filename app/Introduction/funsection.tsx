"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, MessageSquare, Award, BookOpen, Heart, Wallet, Sparkles } from 'lucide-react';

const LEADERSHIP_DATA = [
    {
        role: "Ủy viên Liên Chi Hội",
        org: "Khoa Công nghệ Thông tin",
        duration: "2025",
        desc: "Tham gia tổ chức các hoạt động học thuật và phong trào, đồng thời là cầu nối vững chắc giữa sinh viên và Nhà trường.",
        icon: <Award size={26} />,
        color: "from-[#b53d54] to-[#f2cbd4]",
        impacts: ["Tổ chức sự kiện", "Kết nối sinh viên"]
    },
    {
        role: "Trưởng ban Kỹ năng",
        org: "CLB Hỗ trợ Lập trình",
        duration: "2024 - Hiện tại",
        desc: "Hỗ trợ sinh viên học lập trình, giải đáp thắc mắc và chia sẻ kinh nghiệm giúp các bạn tiếp cận IT dễ dàng hơn.",
        icon: <BookOpen size={26} />,
        color: "from-[#4a3728] to-[#6f5643]",
        impacts: ["Đào tạo kỹ thuật", "Dẫn dắt Mentor"]
    },
    {
        role: "Thủ quỹ / Lớp phó tài chính",
        org: "Ban cán sự Lớp",
        duration: "2022 - Hiện tại",
        desc: "Quản lý thu chi minh bạch, lập kế hoạch tài chính và phân bổ chi phí hợp lý cho các hoạt động tập thể của lớp.",
        icon: <Wallet size={26} />,
        color: "from-[#d8e2dc] to-[#b5d8d3]",
        impacts: ["Budget Management", "Tracking & Reporting"]
    }
];

const SKILLS = [
    { name: "Leadership", color: "bg-[#f2cbd4]/40 border-[#f2cbd4]" },
    { name: "Teamwork", color: "bg-[#f9dcc4]/40 border-[#f9dcc4]" },
    { name: "Finance", color: "bg-[#d8e2dc]/40 border-[#d8e2dc]" },
    { name: "Organization", color: "bg-[#e2cfea]/40 border-[#e2cfea]" },
    { name: "Communication", color: "bg-[#f9dcc4]/40 border-[#f9dcc4]" }
];

// Hiệu ứng xuất hiện mượt mà khi cuộn xuống
const cardVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.8,
            delay: i * 0.1 // Tạo hiệu ứng xuất hiện lần lượt
        }
    })
};

export default function LeadershipSection() {
    return (
        <div
            className="relative w-full py-20 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('/Picture/anhcv/background.jpg')" }}
        >
            {/* Hiệu ứng hoa rơi giữ nguyên */}
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

            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] pointer-events-none" />

            <motion.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                className="relative w-full py-16 px-6 max-w-5xl mx-auto z-20 bg-white/40 backdrop-blur-xl rounded-[50px] border border-white/60 shadow-2xl"
            >
                <div className="flex flex-col gap-8 relative z-20">

                    {/* TIÊU ĐỀ - Thêm motion để lướt lên khi nhìn thấy */}
                    <motion.div variants={cardVariants} className="flex flex-col items-center mb-4">
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#f2cbd4] shadow-sm mb-4">
                            <Sparkles size={14} className="text-[#b53d54]" />
                            <span className="text-[#b53d54] font-bold text-[10px] uppercase tracking-widest">Vai trò & hành trình phát triển</span>
                        </div>
                        <div className="relative text-center">
                            <h2 className="text-3xl md:text-4xl font-black text-[#4a3728] relative z-10">
                                Thanh xuân và những vai trò
                            </h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#b53d54] animate-pulse block text-2xl md:text-3xl font-medium italic -mt-2">
                                của mình
                            </span>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-black text-[#4a3728]/5 tracking-[0.2em] whitespace-nowrap pointer-events-none z-0">
                                MY ROLES
                            </div>
                        </div>
                    </motion.div>

                    {/* HÀNG 1: 3 CARD VAI TRÒ */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {LEADERSHIP_DATA.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                custom={idx} // Truyền index để tạo delay
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(181,61,84,0.15)"
                                }}
                                className="bg-white/70 backdrop-blur-md rounded-[35px] border-2 border-white p-7 shadow-xl relative overflow-hidden group transition-all h-full"
                            >
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#f2cbd4]/20 rounded-full blur-3xl group-hover:bg-[#b53d54]/10 transition-colors duration-500" />

                                <div className="flex flex-col items-start gap-4 mb-5 relative z-10">
                                    <div className={`p-3.5 bg-gradient-to-br ${item.color} rounded-2xl text-white shadow-lg transform transition-transform group-hover:rotate-6`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="text-[#b53d54] font-black text-[9px] uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full shadow-sm border border-[#f2cbd4] flex items-center gap-1">
                                            <Sparkles size={10} className="animate-pulse" /> {item.duration}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-black text-[#4a3728] mt-2 tracking-tight leading-tight">
                                            {item.role}
                                        </h3>
                                        <p className="text-[#b53d54] font-bold text-[11px] uppercase tracking-tighter">
                                            {item.org}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[#6f5643] text-[13px] leading-relaxed font-medium mb-6 text-justify relative z-10 flex-grow">
                                    {item.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {item.impacts.map((imp, i) => (
                                        <div key={i} className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-white/80 border border-white/80 text-[10px] font-bold text-[#4a3728]">
                                            <Zap size={10} className="text-[#b53d54] animate-pulse" /> {imp}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* HÀNG 2: TRIẾT LÝ & KỸ NĂNG */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <motion.div
                            variants={cardVariants}
                            custom={3}
                            whileHover={{ scale: 1.01 }}
                            className="md:col-span-8 bg-gradient-to-br from-[#4a3728] to-[#6f5643] rounded-[35px] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center"
                        >
                            <Heart size={100} className="absolute -bottom-8 -right-8 opacity-10 rotate-12 text-[#f9dcc4] fill-[#f9dcc4] animate-pulse" />

                            <h4 className="text-lg font-black mb-3 flex items-center gap-2 relative z-10">
                                <MessageSquare className="text-[#f9dcc4]" size={18} /> Giá trị theo đuổi
                            </h4>
                            <p className="text-sm md:text-base text-[#f9dcc4] font-medium leading-relaxed italic relative z-10">
                                "Đối với mình, mỗi vai trò không chỉ là một vị trí đảm nhiệm, mà còn là cơ hội để học hỏi, phát triển và tạo ra những giá trị thiết thực cho cộng đồng."
                            </p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            custom={4}
                            className="md:col-span-4 bg-white/70 backdrop-blur-md rounded-[35px] border-2 border-white p-7 shadow-xl flex flex-col justify-center group"
                        >
                            <h4 className="text-[#4a3728] font-black mb-4 text-[10px] uppercase tracking-[0.2em] relative">
                                <Sparkles size={12} className="absolute -top-3 -left-3 text-[#b53d54] opacity-50 animate-pulse" />
                                Kỹ năng đúc kết
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.1, rotate: [-1, 1, 0] }}
                                        className={`px-3 py-1.5 rounded-full border-2 text-[9px] font-black uppercase tracking-wider text-[#4a3728] ${skill.color} shadow-sm cursor-default`}
                                    >
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}