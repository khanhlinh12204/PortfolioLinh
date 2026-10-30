"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Users, Brain, Timer, BookOpen, MessageCircle, Target, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import Image from 'next/image';

const softSkills = [
    {
        title: "Teamwork & Communication",
        sub: "Sự thấu hiểu từ trái tim",
        desc: "Phối hợp với các thành viên, trao đổi thông tin rõ ràng và cùng hướng đến mục tiêu chung trong dự án, hoạt động tập thể.",
        image: "/picture/khenthuong/anhhd11.jpg",
        icon: <Users size={18} />,
        color: "bg-pink-100/30",
        glowColor: "shadow-[0_0_15px_rgba(216,81,101,0.2)]",
        borderColor: "border-pink-200/50",
        blob: "rounded-[60%_40%_70%_30%/40%_50%_60%_40%]",
    },
    {
        title: "Active Listening",
        sub: "Lắng nghe chủ động",
        desc: "Chú ý tiếp nhận ý kiến, đặt câu hỏi khi cần và phản hồi tích cực để thấu hiểu vấn đề, phối hợp hiệu quả hơn.",
        image: "/picture/khenthuong/anhhd12.jpg",
        icon: <MessageCircle size={18} />,
        color: "bg-orange-100/30",
        glowColor: "shadow-[0_0_15px_rgba(255,165,0,0.2)]",
        borderColor: "border-orange-200/50",
        blob: "rounded-[40%_60%_30%_70%/50%_40%_50%_60%]",
    },
    {
        title: "Problem Solving",
        sub: "Phân tích & tìm giải pháp",
        desc: "Tiếp cận vấn đề theo từng bước, phân tích nguyên nhân và lựa chọn hướng xử lý phù hợp trong học tập, lập trình.",
        image: "/picture/khenthuong/anhhd13.jpg",
        icon: <Brain size={18} />,
        color: "bg-blue-100/30",
        glowColor: "shadow-[0_0_15px_rgba(0,191,255,0.2)]",
        borderColor: "border-blue-200/50",
        blob: "rounded-[50%_50%_50%_50%/30%_60%_40%_70%]",
    },
    {
        title: "Self-learning",
        sub: "Chủ động cập nhật kiến thức",
        desc: "Tự tìm kiếm tài liệu, học hỏi công nghệ mới và chủ động bổ sung kiến thức phục vụ học tập, phát triển chuyên môn.",
        image: "/picture/khenthuong/anhhd14.jpg",
        icon: <BookOpen size={18} />,
        color: "bg-purple-100/30",
        glowColor: "shadow-[0_0_15px_rgba(128,0,128,0.2)]",
        borderColor: "border-purple-200/50",
        blob: "rounded-[30%_70%_40%_60%/60%_30%_70%_40%]",
    },
    {
        title: "Time Management",
        sub: "Quản trị thời gian",
        desc: "Sắp xếp công việc theo mức độ ưu tiên, cân đối thời gian học tập, hoạt động ngoại khóa và phát triển cá nhân.",
        image: "/picture/khenthuong/anhhd15.jpg",
        icon: <Timer size={18} />,
        color: "bg-pink-100/30",
        glowColor: "shadow-[0_0_15px_rgba(216,81,101,0.2)]",
        borderColor: "border-pink-200/50",
        blob: "rounded-[60%_40%_70%_30%/40%_50%_60%_40%]",
    },
    {
        title: "Leadership & Organization",
        sub: "Điều phối & Tổ chức",
        desc: "Tham gia tổ chức hoạt động, phân chia và theo dõi công việc, kết nối thành viên trong các hoạt động CLB và lớp học.",
        image: "/picture/khenthuong/anhhd17.jpg",
        icon: <Target size={18} />,
        color: "bg-orange-100/30",
        glowColor: "shadow-[0_0_15px_rgba(255,165,0,0.2)]",
        borderColor: "border-orange-200/50",
        blob: "rounded-[40%_60%_30%_70%/50%_40%_50%_60%]",
    },
    {
        title: "Teaching Assistant",
        sub: "Hỗ trợ giảng dạy",
        desc: "Hỗ trợ giải thích kiến thức, hướng dẫn bài tập và đồng hành cùng sinh viên trong các nội dung học tập, lập trình cơ bản.",
        image: "/picture/khenthuong/anhsp.jpg",
        icon: <GraduationCap size={18} />,
        color: "bg-blue-100/30",
        glowColor: "shadow-[0_0_15px_rgba(0,191,255,0.2)]",
        borderColor: "border-blue-200/50",
        blob: "rounded-[50%_50%_50%_50%/30%_60%_40%_70%]",
    }
];

export default function SoftSkillSoftDesign() {
    const [isExpanded, setIsExpanded] = useState(false);
    const visibleSkills = isExpanded ? softSkills : softSkills.slice(0, 4);

    return (
        <section className="relative w-full py-3 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
            style={{ backgroundImage: "url('/picture/anhcv/background.jpg')" }}>

            {/* Lớp phủ mờ nền */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

            {/* Hiệu ứng cánh hoa rơi */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(15)].map((_, i) => {
                    const left = (i * 37) % 100;
                    const drift = (i % 2 === 0 ? 1 : -1) * (30 + (i % 4) * 12);
                    return (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, 900],
                            x: [0, drift],
                            rotate: [0, 720]
                        }}
                        transition={{
                            duration: 14 + (i % 5) * 2,
                            repeat: Infinity,
                            delay: (i % 8) * 1.5,
                            ease: "linear"
                        }}
                        className="absolute text-2xl opacity-20"
                        style={{ left: `${left}%`, top: "-10%" }}
                    >
                        {i % 2 === 0 ? "🌸" : "🍃"}
                    </motion.div>
                    );
                })}
            </div>

            <div className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* --- PHẦN TRÁI: NỘI DUNG --- */}
                <div className="flex-[1.2] flex flex-col gap-6 w-full pt-10">

                    {/* Header với hiệu ứng cuộn mượt mà */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-20 max-w-7xl mx-auto w-full mb-24 flex flex-col md:flex-row items-end justify-between gap-8 text-[#4a3728]"
                    >
                        <div className="text-left">
                            <motion.div className="flex items-center gap-2 mb-4 bg-white/80 w-fit px-4 py-1.5 rounded-full border border-[#ffdae0] backdrop-blur-sm shadow-sm">
                                <Sparkles size={16} className="text-[#ff8fa3] animate-pulse" />
                                <span className="text-[#ff8fa3] font-bold text-[10px] uppercase tracking-[0.3em]">Năng lực cá nhân</span>
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">Kỹ năng <br /><span className="italic font-light text-[#ff8fa3]">mềm.</span></h2>
                        </div>
                        <p className="max-w-[320px] text-[#8b6d4d] text-sm italic font-medium border-l-2 border-[#ffb7c5] pl-4 leading-relaxed bg-white/40 backdrop-blur-sm p-2 rounded-r-lg shadow-sm">
                            Sự kết hợp giữa kiến thức chuyên môn và kỹ năng mềm là chìa khóa để tạo nên những giá trị bền vững.
                        </p>
                    </motion.div>

                    {/* Danh sách kỹ năng */}
                    <div className="flex flex-col gap-8 w-full">
                        <AnimatePresence mode="popLayout">
                            {visibleSkills.map((skill, i) => (
                                <motion.div
                                    key={skill.title}
                                    layout
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: (i % 4) * 0.1,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{ y: -5 }}
                                    className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-5 p-5 sm:p-6
                                        bg-white/65 backdrop-blur-xl border ${skill.borderColor} ${skill.glowColor}
                                        rounded-[30px] transition-all duration-300 overflow-hidden relative group hover:bg-white/85 hover:shadow-[0_22px_50px_rgba(74,55,40,0.12)]`}
                                >
                                    <div className={`absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d85165]/40 to-transparent ${i % 2 === 0 ? "md:left-40" : "md:right-40"}`} />
                                    <div className="relative z-10 h-[116px] w-[116px] shrink-0 sm:h-[132px] sm:w-[132px]">
                                        <div className={`relative h-full w-full ${skill.blob} overflow-hidden border-[5px] border-white shadow-[0_10px_26px_rgba(74,55,40,0.12)]`}>
                                            <img src={skill.image} alt={skill.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        </div>
                                    </div>
                                    <div className={`relative z-10 w-full flex-1 ${skill.color} p-5 sm:p-6 rounded-[24px] border border-white/60`}>
                                        <div className="mb-3 flex items-center justify-between gap-3">
                                            <div className="flex min-w-0 items-center gap-2">
                                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/75 text-[#d85165] shadow-sm">{skill.icon}</span>
                                                <span className="truncate text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a65c67]">{skill.sub}</span>
                                            </div>
                                            <span className="shrink-0 text-[10px] font-bold tracking-[0.18em] text-[#a65c67]/70">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold tracking-tight text-[#4a3728] transition-colors group-hover:text-[#b64c60] sm:text-xl">{skill.title}</h3>
                                        <p className="text-[13px] font-medium leading-[1.75] text-[#6f5c55]">{skill.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Nút Xem thêm / Thu gọn */}
                    <motion.button
                        layout
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-12 flex items-center gap-3 px-10 py-4 bg-[#4a3728] text-white rounded-full font-bold shadow-xl hover:bg-[#5d4634] transition-all self-center md:self-start group"
                    >
                        {isExpanded ? (
                            <>Thu gọn <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" /></>
                        ) : (
                            <>Xem thêm kỹ năng <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" /></>
                        )}
                    </motion.button>
                </div>

                {/* --- PHẦN PHẢI: VISUAL --- */}
                <div className="lg:sticky lg:top-1/4 flex-1 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "backOut" }}
                        className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] animate-[gentleFloat_8s_ease-in-out_infinite]"
                    >
                        <style dangerouslySetInnerHTML={{ __html: `@keyframes gentleFloat { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(1deg); } }` }} />
                        <div className="absolute -top-10 -right-10 w-32 h-32 opacity-40 rotate-12 pointer-events-none z-20"><span className="text-7xl">🌸</span></div>
                        <div className="absolute -bottom-5 -left-10 w-24 h-24 opacity-30 -rotate-12 pointer-events-none z-20"><span className="text-6xl">🌿</span></div>
                        <div className="absolute inset-0 z-0 scale-160">
                            <Image src="/picture/anhcv/nen2.png" alt="Khung" fill className="object-contain opacity-90 pl-15 -mt-8" />
                        </div>
                        <div className="absolute inset-0 z-10 w-200 flex items-center justify-center pr-55">
                            <div className="relative w-full h-full">
                                <Image src="/picture/khenthuong/clb3.png" alt="Khánh Linh" fill className="object-contain drop-shadow-6xl" priority />
                            </div>
                        </div>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 w-full text-center">
                            <motion.p className="text-6xl md:text-7xl font-normal text-[#4a3728] font-[family-name:var(--font-sedgwick)] whitespace-nowrap">Gắn kết</motion.p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-24 text-center"
                    >
                        <span className="text-[#d85165] font-bold tracking-[0.4em] uppercase text-xs opacity-70">Aspirations</span>
                        <div className="h-[2px] w-16 bg-[#d85165]/20 mx-auto my-4 rounded-full"></div>
                        <p className="text-[#4a3728] text-lg italic font-medium max-w-sm leading-relaxed">
                            Mỗi trải nghiệm là một cơ hội để mình trưởng thành hơn mỗi ngày.
                        </p>
                    </motion.div>
                </div>

            </div>

            <style jsx global>{`
                @keyframes shine { 100% { left: 125%; } }
                .animate-shine { animation: shine 1s; }
            `}</style>
        </section>
    );
}