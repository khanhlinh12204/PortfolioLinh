"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Zap, AlertCircle, Star, Target, CheckCircle2, XCircle } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  });

  return (
    <section className="relative py-28 px-6 overflow-hidden z-0 bg-[#f6efe7]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#b53d54]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16"
        >
          {/* PHẦN 1: THẾ MẠNH (GLOW CAM) */}
          <motion.div 
            variants={cardVariants("left")}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
          >
            {/* Lớp phủ sáng ngoài viền (Glow bên ngoài) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-[45px] blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
            
            <div className="relative h-full p-10 md:p-14 rounded-[40px] bg-white/70 backdrop-blur-2xl border-2 border-orange-400/30 shadow-2xl flex flex-col">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 rounded-2xl bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.4)] text-white">
                  <Zap size={28} fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#4a3728] uppercase tracking-tighter">Thế mạnh</h3>
                  <div className="h-1 w-12 bg-orange-400 mt-1 rounded-full" />
                </div>
              </div>

              <ul className="space-y-6">
                {[
                  "Tư duy logic & giải thuật tốt",
                  "Khả năng tự học công nghệ mới nhanh",
                  "Nền tảng Khoa học máy tính vững chắc",
                  "Đam mê trải nghiệm người dùng UI/UX"
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-4 group/item"
                  >
                    <CheckCircle2 size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-[#6b5b4d] font-bold text-lg group-hover/item:text-[#4a3728] transition-colors">
                        {text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Decor chìm */}
              <Star size={120} className="absolute -bottom-6 -right-6 text-orange-400/5 -rotate-12" />
            </div>
          </motion.div>

          {/* PHẦN 2: HẠN CHẾ (GLOW ĐỎ) */}
          <motion.div 
            variants={cardVariants("right")}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
          >
            {/* Lớp phủ sáng ngoài viền (Glow bên ngoài) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#b53d54] to-rose-400 rounded-[45px] blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
            
            <div className="relative h-full p-10 md:p-14 rounded-[40px] bg-[#4a3728] border-2 border-[#b53d54]/40 shadow-2xl flex flex-col text-white">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 rounded-2xl bg-[#b53d54] shadow-[0_0_20px_rgba(181,61,84,0.4)] text-white">
                  <AlertCircle size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Hạn chế</h3>
                  <div className="h-1 w-12 bg-[#b53d54] mt-1 rounded-full" />
                </div>
              </div>

              <ul className="space-y-6">
                {[
                  "Chưa có nhiều kinh nghiệm thực chiến",
                  "Đang tối ưu tốc độ xử lý các bài khó",
                  "Đôi khi quá cầu toàn vào chi tiết nhỏ",
                  "Cần cải thiện thêm kỹ năng Public Speaking"
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-4 group/item"
                  >
                    <XCircle size={20} className="text-[#b53d54] mt-1 flex-shrink-0" />
                    <span className="text-white/80 font-semibold text-lg group-hover/item:text-white transition-colors">
                        {text}
                    </span>
                  </motion.li>
                ))}
              </ul>

               {/* Decor chìm */}
               <Target size={120} className="absolute -bottom-6 -right-6 text-white/5 rotate-12" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}