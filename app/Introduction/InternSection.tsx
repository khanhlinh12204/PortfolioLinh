"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
        role: "Thực tập sinh Tester",
        location: "Dự án: App giao hàng Pango (Web & Mobile)",
        desc: "Kiểm thử các luồng cốt lõi như tạo đơn, tính phí và quản lý tài xế; viết test case cho thanh toán, định vị và push notification. Thực hiện kiểm thử chức năng, UI/UX, theo dõi lỗi và phối hợp với lập trình viên trước khi phát hành.",
        tags: ["Manual Testing", "Test Case", "Web & Mobile"],
        color: "bg-[#b53d54]",
        icon: <Code size={20} />
    },
    {
        year: "09/2023 - 12/2023",
        company: "VNNIC",
        role: "Thực tập sinh",
        location: "Chi nhánh Đà Nẵng",
        desc: "Tham gia gán nhãn, giám sát dữ liệu và nghiên cứu ứng dụng Qwen3-VL-2B-Instruct cùng Computer Vision để hỗ trợ phát hiện website vi phạm tên miền .vn. Đồng thời phát triển website bán hàng và portfolio, triển khai thực tế trên tên miền .vn.",
        tags: ["Qwen3-VL", "Computer Vision", "Web Development"],
        color: "bg-[#4a3728]",
        icon: <Terminal size={20} />
    },
    {
        year: "2026 - Hiện tại",
        company: "PT Valley Tech",
        role: "Lập trình viên Di động",
        location: "Phát triển ứng dụng di động",
        desc: "Phát triển các luồng giao diện UI/UX và triển khai tính năng cốt lõi theo yêu cầu sản phẩm. Tích hợp thư viện chuyên dụng, tối ưu hiệu năng và hoàn thiện ứng dụng sẵn sàng triển khai thực tế.",
        tags: ["Mobile Development", "UI/UX", "Performance"],
        color: "bg-[#b53d54]",
        icon: <Code size={20} />
    }
];

const InternshipRoadmap = () => {
    return (
        <div
            className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed py-12 sm:py-16 lg:py-20"
            style={{ backgroundImage: "url('/picture/anhcv/background.jpg')" }}
        >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[3px] pointer-events-none" />

            <section className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-12">


                <div className="relative mb-9 text-center sm:mb-10">
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
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b53d54] sm:text-[11px] sm:tracking-[0.4em]">Kinh nghiệm thực tế</span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
                        <h2 className="text-3xl font-black leading-tight tracking-tighter text-[#4a3728] drop-shadow-md sm:text-4xl md:text-5xl">
                            Chặng đường Trải nghiệm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#b53d54] animate-pulse">
                                của mình
                            </span>
                        </h2>
                    </motion.div>
                </div>



                {/* Container Roadmap */}
                <div className="group relative w-full overflow-hidden rounded-[28px] border border-white/50 bg-white/25 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.1)] backdrop-blur-2xl sm:rounded-[36px] sm:p-5 md:p-6 lg:p-5 xl:rounded-[48px] xl:p-7 2xl:p-9">

                    <ol
                        aria-label="Thứ tự các chặng trải nghiệm"
                        className="relative mb-7 grid grid-cols-3"
                    >
                        <motion.span
                            aria-hidden="true"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute left-[16.666%] right-[16.666%] top-4 h-0.5 origin-left bg-[#b53d54]/25"
                        />
                        {INTERNSHIP_STEPS.map((step, index) => (
                            <motion.li
                                key={step.company}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.35 }}
                                className="relative z-10 flex min-w-0 flex-col items-center gap-2 text-center"
                            >
                                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-[#b53d54] text-[10px] font-black text-white shadow-md ring-4 ring-[#f2cbd4]/40">
                                    0{index + 1}
                                </span>
                                <span className="max-w-full truncate text-[9px] font-bold text-[#4a3728] sm:text-[10px]">
                                    {step.company}
                                </span>
                            </motion.li>
                        ))}
                    </ol>

                    {/* Bố cục Grid 3 cột: Thẻ 1 - Ảnh - Thẻ 2 */}
                    <div className="relative z-10 grid min-w-0 grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-3 xl:gap-5 2xl:gap-6">

                        {/* THẺ 1: DHY Solution */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex min-w-0 flex-col lg:col-span-4"
                        >
                            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                                <div className={`relative p-4 rounded-2xl ${INTERNSHIP_STEPS[0].color} text-white shadow-xl`}>
                                    {INTERNSHIP_STEPS[0].icon}
                                    <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#f2cbd4] text-[9px] font-black text-[#4a3728] shadow">01</span>
                                </div>
                                <div className="bg-white/80 border border-white px-4 py-1.5 rounded-full shadow-sm">
                                    <span className="text-[12px] font-black text-[#4a3728] flex items-center gap-2">
                                        <CalendarDays size={14} className="text-[#b53d54]" /> {INTERNSHIP_STEPS[0].year}
                                    </span>
                                </div>
                            </div>

                            <motion.div whileHover={{ y: -8 }} className="flex h-full flex-col justify-between rounded-[32px] border border-[#f2cbd4]/80 bg-gradient-to-br from-white/95 via-[#fff8f8]/95 to-[#fce8ed]/90 p-5 shadow-[0_16px_40px_rgba(181,61,84,0.14)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_22px_48px_rgba(181,61,84,0.22)] sm:rounded-[36px] sm:p-6">
                                <div>
                                    <div className="mb-4 border-b border-white/40 pb-3">
                                        <h3 className="text-2xl font-black text-[#4a3728] mb-1">{INTERNSHIP_STEPS[0].company}</h3>
                                        <div className="flex items-center gap-2 text-[#b53d54] font-bold text-xs uppercase tracking-wider italic">
                                            <BriefcaseBusiness size={14} /> {INTERNSHIP_STEPS[0].role}
                                        </div>
                                        <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#8b6d4d]">
                                            <MapPin size={13} className="shrink-0 text-[#b53d54]" />
                                            {INTERNSHIP_STEPS[0].location}
                                        </p>
                                    </div>
                                    <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl border-4 border-white/80 shadow-lg">
                                        <Image
                                            src="/picture/khenthuong/pango.jpg"
                                            alt="Ứng dụng giao hàng Pango"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                    <p className="text-[#4a3728]/80 text-[13px] leading-relaxed font-medium mb-5 text-justify italic">
                                        “{INTERNSHIP_STEPS[0].desc}”
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
                            className="relative flex min-h-[200px] min-w-0 items-center justify-center sm:min-h-[250px] lg:col-span-4 lg:min-h-[270px]"
                        >
                            <div className="group/img relative h-[230px] w-full overflow-hidden rounded-[24px] border-4 border-white shadow-2xl sm:h-[280px] lg:h-full lg:min-h-[270px] lg:rounded-[32px]">
                                <Image
                                    src="/picture/khenthuong/tt2.jpg"
                                    alt="Moments at work"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                                />
                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#2c211c]/55 via-transparent to-transparent p-6">
                                    <p className="text-xs font-bold uppercase tracking-widest text-white">
                                        Moments at work 📸
                                    </p>
                                </div>
                            </div>
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -right-5 -top-5 rounded-2xl bg-white p-3 text-[#b53d54] shadow-lg">
                                <Sparkles size={20} />
                            </motion.div>
                        </motion.div>

                        {/* THẺ 2: VNNIC Đà Nẵng */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex min-w-0 flex-col lg:col-span-4"
                        >
                            <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4 lg:justify-end">
                                <div className="bg-white/80 border border-white px-4 py-1.5 rounded-full shadow-sm order-2 lg:order-1">
                                    <span className="text-[12px] font-black text-[#4a3728] flex items-center gap-2">
                                        <CalendarDays size={14} className="text-[#b53d54]" /> {INTERNSHIP_STEPS[1].year}
                                    </span>
                                </div>
                                <div className={`relative p-4 rounded-2xl ${INTERNSHIP_STEPS[1].color} text-white shadow-xl order-1 lg:order-2`}>
                                    {INTERNSHIP_STEPS[1].icon}
                                    <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#f2cbd4] text-[9px] font-black text-[#4a3728] shadow">02</span>
                                </div>
                            </div>

                            <motion.div whileHover={{ y: -8 }} className="flex h-full flex-col justify-between rounded-[32px] border border-[#e8d9cf]/90 bg-gradient-to-br from-white/95 via-[#faf6f2]/95 to-[#eee4dc]/90 p-5 shadow-[0_16px_40px_rgba(74,55,40,0.14)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_22px_48px_rgba(74,55,40,0.2)] sm:rounded-[36px] sm:p-6">
                                <div>
                                    <div className="mb-4 border-b border-white/40 pb-3">
                                        <h3 className="text-2xl font-black text-[#4a3728] mb-1">{INTERNSHIP_STEPS[1].company}</h3>
                                        <div className="flex items-center gap-2 text-[#b53d54] font-bold text-xs uppercase tracking-wider italic">
                                            <BriefcaseBusiness size={14} /> {INTERNSHIP_STEPS[1].role}
                                        </div>
                                        <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#8b6d4d]">
                                            <MapPin size={13} className="shrink-0 text-[#b53d54]" />
                                            {INTERNSHIP_STEPS[1].location}
                                        </p>
                                    </div>
                                    <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl border-4 border-white/80 bg-[#f9f5f0] shadow-lg">
                                        <Image
                                            src="/picture/khenthuong/vnnic.jpg"
                                            alt="Thực tập tại Trung tâm Internet Việt Nam (VNNIC)"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                            className="object-contain transition-transform duration-700 hover:scale-[1.03]"
                                        />
                                    </div>
                                    <p className="text-[#4a3728]/80 text-[13px] leading-relaxed font-medium mb-5 text-justify italic">
                                        “{INTERNSHIP_STEPS[1].desc}”
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

                    {/* THẺ 3: PT Valley Tech */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-7 flex w-full max-w-[920px] flex-col sm:mt-8"
                    >
                        <div className="mb-5 flex items-center gap-4 lg:justify-center">
                            <div className={`relative rounded-2xl ${INTERNSHIP_STEPS[2].color} p-3 text-white shadow-xl`}>
                                {INTERNSHIP_STEPS[2].icon}
                                <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#f2cbd4] text-[9px] font-black text-[#4a3728] shadow">03</span>
                            </div>
                            <div className="rounded-full border border-white bg-white/80 px-4 py-1.5 shadow-sm">
                                <span className="flex items-center gap-2 text-[12px] font-black text-[#4a3728]">
                                    <CalendarDays size={14} className="text-[#b53d54]" />
                                    {INTERNSHIP_STEPS[2].year}
                                </span>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ y: -8 }}
                            className="rounded-[28px] border border-[#f2cbd4]/80 bg-gradient-to-br from-white/95 via-[#fff8f8]/95 to-[#fce8ed]/90 p-4 shadow-[0_16px_40px_rgba(181,61,84,0.14)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_22px_48px_rgba(181,61,84,0.22)] sm:rounded-[36px] sm:p-5 lg:p-6"
                        >
                            <div className="grid items-center gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
                                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border-4 border-white/80 shadow-lg lg:aspect-[4/3]">
                                    <Image
                                        src="/picture/khenthuong/PT_valleytech.jpg"
                                        alt="Ứng dụng di động tại PT Valley Tech"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <div className="mb-4 border-b border-white/60 pb-3">
                                        <h3 className="mb-1 text-2xl font-black text-[#4a3728]">
                                            {INTERNSHIP_STEPS[2].company}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b53d54]">
                                            <BriefcaseBusiness size={14} />
                                            {INTERNSHIP_STEPS[2].role}
                                        </div>
                                        <p className="mt-2 text-xs font-semibold text-[#8b6d4d]">
                                            {INTERNSHIP_STEPS[2].location}
                                        </p>
                                    </div>
                                    <p className="mb-5 text-justify text-[13px] font-medium leading-relaxed text-[#4a3728]/80">
                                        {INTERNSHIP_STEPS[2].desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {INTERNSHIP_STEPS[2].tags.map((tag) => (
                                            <span key={tag} className="flex items-center gap-1 rounded-xl border border-white bg-white/80 px-3 py-1 text-[10px] font-black text-[#4a3728]">
                                                <Zap size={10} className="text-[#b53d54]" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Câu chốt */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/40 pt-8 md:flex-row"
                    >
                        <div className="flex items-center gap-5 max-w-2xl">
                            <div className="p-4 bg-white/50 rounded-full border border-white">
                                <Quote size={28} className="text-[#b53d54] opacity-40" />
                            </div>
                            <p className="text-sm md:text-base font-bold text-[#4a3728]/80 italic leading-relaxed">
                                “Những trải nghiệm thực tập này là nền tảng quan trọng giúp mình hiểu rõ về môi trường chuyên nghiệp và định hướng tương lai.”
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