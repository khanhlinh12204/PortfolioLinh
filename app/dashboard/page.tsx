"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Intro from './Intro';
import AwardsSection from './achieve';
import JourneySection from './active';
import ContactSection from './contact';

const Appdashboard = () => {
    return (

        <div className="relative overflow-hidden">
            <section className="relative w-full h-screen bg-[#fcfaf7] overflow-hidden flex items-center justify-center">

                {/* --- LỚP 1: BACKGROUND TOÀN MÀN HÌNH --- */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <Image
                        src="/picture/anhcv/background.jpg"
                        alt="Background Decor"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                </div>

                {/* --- CONTAINER CHÍNH --- */}
                <div className="relative z-30 w-full max-w-[1500px] px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* PHẦN 1: HÌNH ẢNH (BÊN TRÁI) - GIỮ NGUYÊN HOÀN TOÀN */}
                    <div className="flex-1 flex flex-col items-center justify-center relative">
                        {/* --- CỤM ẢNH BAY BỔNG (GIỮ NGUYÊN) --- */}
                        <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px] scale-120 lg:scale-135 
        animate-[float_4s_ease-in-out_infinite]"
                        >
                            <style dangerouslySetInnerHTML={{
                                __html: `
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-18px); }
            }
        `}} />

                            {/* 1. LỚP KHUNG NỀN */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/picture/anhcv/nen2.png"
                                    alt="Khung nền"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* 2. LỚP NHÂN VẬT & TÊN KHÁNH LINH */}
                            <div className="absolute inset-0 z-10 p-12 md:p-14 flex items-center justify-center">
                                <div className="relative w-full h-full -mt-6">
                                    <Image
                                        src="/picture/anhcv/Khanhlinh.png"
                                        alt="Khánh Linh"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                <div className="absolute inset-0 z-20 flex items-end justify-center pb-[10%] md:pb-[8%] pointer-events-none">
                                    <p className="text-7xl md:text-8xl font-normal text-white whitespace-nowrap tracking-wider drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-[family-name:var(--font-sedgwick)]"
                                        style={{
                                            textShadow: '2px 2px 10px rgba(216, 81, 101, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)',
                                            textTransform: 'none'
                                        }}
                                    >
                                        Khánh Linh
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="w-full text-center mt-16 md:mt-24 max-w-3xl px-8 flex flex-col items-center gap-6 relative group">
                            {/* Dấu ngoặc kép trang trí phía trên bên trái - mờ và lớn */}
                            <span className="absolute -top-10 -left-6 text-8xl text-[#4a3728] opacity-10 font-serif select-none group-hover:opacity-20 transition-opacity">
                                “
                            </span>

                            {/* Nội dung trích dẫn - Dùng Gradient và Shadow để nổi bật */}
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a3728] via-[#6f5643] to-[#4a3728] 
                  text-3xl md:text-3xl font-extrabold leading-snug tracking-tighter italic
                  drop-shadow-[0_2px_2px_rgba(74,55,40,0.15)]"
                                style={{ textTransform: 'none' }}
                            >
                                “Không có khó khăn nào là mãi mãi. Chỉ cần bạn kiên trì, mọi thứ rồi sẽ ổn”
                            </p>

                            {/* Dấu ngoặc kép trang trí phía dưới bên phải */}
                            <span className="absolute -bottom-16 -right-6 text-8xl text-[#4a3728] opacity-10 font-serif select-none group-hover:opacity-20 transition-opacity">
                                ”
                            </span>

                            {/* Thanh trang trí được thiết kế lại: tinh tế hơn, gradient */}
                            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#4a3728] to-transparent rounded-full opacity-30 mt-4 group-hover:opacity-50 transition-opacity"></div>
                        </div>
                    </div>

                    {/* PHẦN 2: VĂN BẢN (BÊN PHẢI) - CÓ CÁNH HOA RƠI BÊN TRONG KHUNG */}
                    <div className="flex-[1] flex items-center justify-center z-20">

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden backdrop-blur-md bg-white/10 border border-white/30 p-8 md:p-10 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] max-w-[600px] transition-all duration-500 hover:bg-white/15"
                        >

                            {/* --- HIỆU ỨNG HOA RƠI NỘI BỘ --- */}
                            <motion.div
                                animate={{
                                    y: [-20, 400],
                                    x: [0, 20, -20, 0],
                                    rotate: [0, 360]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-[20%] text-2xl opacity-30 pointer-events-none"
                            >
                                🌸
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [-20, 400],
                                    x: [0, -30, 30, 0],
                                    rotate: [360, 0]
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
                                className="absolute top-0 right-[15%] text-xl opacity-25 pointer-events-none"
                            >
                                🌸
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [-20, 400],
                                    x: [0, 15, -15, 0],
                                    rotate: [0, 180]
                                }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
                                className="absolute top-0 left-[50%] text-lg opacity-20 pointer-events-none"
                            >
                                🌸
                            </motion.div>

                            {/* --- NỘI DUNG CHÍNH --- */}
                            <div className="relative z-10">
                                {/* Header: Tên Lê Nhật Tường */}
                                <div className="mb-6">
                                    <span className="text-lg md:text-xl text-[#d88c51] font-semibold mb-2 block tracking-tight">
                                        Xin chào, mình là
                                    </span>
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4a3728] leading-tight tracking-tighter">
                                        Nguyễn Khánh Linh
                                    </h1>
                                    <div className="w-16 h-1 bg-[#d85165] mt-3 rounded-full opacity-70"></div>
                                </div>

                                {/* Nội dung giới thiệu */}
                                <div className="space-y-4 text-gray-700">
                                    <p className="text-base md:text-[17px] leading-relaxed font-semibold">
                                        Mình là sinh viên Công nghệ Thông tin, yêu thích tìm hiểu công nghệ và những điều mới mẻ trong quá trình học tập.
                                    </p>

                                    <p className="text-sm md:text-base leading-relaxed font-medium">
                                        Mình thích ghi lại những gì mình học được, những trải nghiệm nho nhỏ và cả những suy nghĩ trên hành trình trưởng thành của bản thân.
                                    </p>

                                    <p className="text-sm md:text-base italic opacity-80 border-l-2 border-[#d85165]/30 pl-4 py-1">
                                        Hy vọng những chia sẻ này sẽ phần nào giúp bạn có thêm động lực và một góc nhìn mới trên con đường của riêng mình 😊
                                    </p>
                                </div>

                                {/* Social & CTA */}
                                <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/30 pt-8">
                                    <div className="flex gap-5 items-center">
                                        {/* Nút Facebook - Tăng kích thước lên w-12 h-12 */}
                                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 text-[#4a3728] border border-white/20 hover:bg-[#d85165] hover:text-white transition-all shadow-md group">
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>

                                        {/* Nút Instagram - Tăng kích thước */}
                                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 text-[#4a3728] border border-white/20 hover:bg-[#d85165] hover:text-white transition-all shadow-md group">
                                            <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                        </a>

                                        {/* Nút Mail - Tăng kích thước */}
                                        <a href="mailto:your-email@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 text-[#4a3728] border border-white/20 hover:bg-[#d85165] hover:text-white transition-all shadow-md group">
                                            <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>

            </section>
            <div className="relative z-40">
                <Intro />
            </div>
             
             <div className="relative z-40">
                <AwardsSection />
            </div>
             <div className="relative z-40">
                <JourneySection />
            </div>
            
             <div className="relative z-40">
                <ContactSection />
            </div>
        </div>
        
       
    );
};

export default Appdashboard;