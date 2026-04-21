"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Trophy,
  Heart,
  Flower2,
  Layers
} from "lucide-react";

const achievementGroups = [
  {
    category: "Học thuật & Giải thưởng",
    icon: <Trophy size={24} className="text-amber-500" />,
    images: [
      "/picture/khenthuong/z6173100973720_829a90afcfef5ea99705411d4e1de50a.jpg",
      "/picture/khenthuong/bk.jpg",
      "/picture/khenthuong/z6175101305816_15d59e4c6bb93a6db577f1ed26dc75dc.jpg",
      "/picture/hoatdong/HD1 (26).jpg",
      "/picture/khenthuong/hsxs.jpg"
    ],
    items: [
      { text: "Giải Nhì SPIT Front-End 2024" },
      { text: "Sinh viên Xuất sắc (2024–2025)" },
      { text: "Sinh viên Giỏi (2022–2024)" },
      { text: "Danh hiệu “Sinh viên 5 tốt”" },
      { text: "Học bổng 5 kỳ liên tiếp" },
    ]
  },
  {
    category: "Hoạt động & Cộng đồng",
    icon: <Heart size={24} className="text-rose-400" />,
    images: [
      "/picture/khenthuong/z6173100999162_b262cfbeb6f581f18de837c3918cb79b.jpg",
      "/picture/khenthuong/z6614994670445_ef65bfebd0af1d558313d9b2047b2358.jpg",
      "/picture/khenthuong/15 (1).png",
      "/picture/khenthuong/hientoc.jpg",
      "/picture/hoatdong/giaycn.png"
    ],
    items: [
      { text: "Xuất sắc Đoàn – Hội (2024-2025)" },
      { text: "Thành viên tích cực CLB HTLT" },
      { text: "Hiến tóc vì cộng đồng" },
      { text: "Hỗ trợ SV học tập" }
    ]
  }
];

const wavyPetalShapes = [
  "rounded-[50%_50%_50%_50%/60%_60%_40%_40%]",
  "rounded-[45%_55%_70%_30%/50%_50%_60%_40%]",
  "rounded-[60%_40%_40%_60%/60%_40%_60%_40%]",
  "rounded-[50%_50%_30%_70%/40%_60%_40%_60%]",
  "rounded-[55%_45%_50%_50%/50%_50%_50%_50%]"
];

export default function EnhancedBloomingGallery() {
  return (
    <section className="relative py-20 px-4 md:px-12 bg-[#fffcfb] overflow-hidden"
      style={{
        backgroundImage: "url('/picture/anhcv/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />

      {/* Hiệu ứng cánh hoa rơi */}
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

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[15%] left-[-10%] w-[700px] h-[700px] bg-rose-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[700px] h-[700px] bg-amber-50 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="relative mb-20 flex flex-col items-start justify-start text-left">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.08] overflow-hidden z-0">
            <span className="text-[80px] md:text-[150px] font-black whitespace-nowrap uppercase tracking-tighter text-[#4a3728] block -ml-2">
              GROWTH
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10 inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full border-2 border-[#f2cbd4] bg-white/80 backdrop-blur-md shadow-lg transition-all hover:ring-4 hover:ring-[#f2cbd4]/40 cursor-default"
          >
            <Sparkles className="text-[#b53d54]" size={16} />
            <span className="text-[#b53d54] font-bold text-[10px] uppercase tracking-[0.2em]">
              HÀNH TRÌNH HỌC TẬP
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#5c4033] tracking-tighter leading-tight drop-shadow-sm">
              Những Thành Tích Đáng Nhớ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d85165] via-[#ff8a9a] to-[#d85165] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                của mình
              </span>
            </h2>
            <div className="mt-6 h-1.5 w-32 bg-[#d85165] rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-white/50"
              />
            </div>
          </motion.div>
        </div>

        <div className="space-y-20">
          {achievementGroups.map((group, idx) => (
            <div key={idx} className={`relative flex flex-col items-center gap-24 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

              {/* Nội dung văn bản */}
              <div className="flex-1 flex flex-wrap gap-4 z-20 justify-center lg:justify-start">
                <div className="w-full flex items-center gap-5 mb-12 justify-center lg:justify-start">
                  <div className="w-16 h-16 bg-white rounded-3xl shadow-2xl border border-rose-50 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h3 className="text-4xl font-black text-[#422f27] italic">{group.category}</h3>
                </div>
                {group.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-8 py-4 bg-white/80 backdrop-blur-sm shadow-xl border border-rose-50 rounded-full flex items-center gap-3"
                  >
                    <Sparkles size={12} className="text-rose-400" />
                    <span className="text-base font-bold text-[#5c4033]">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* BÔNG HOA TO & TRÒN TRỊA */}
              <div className="flex-1 relative h-[700px] w-full flex items-center justify-center">

                <div className="relative w-full h-full flex items-center justify-center">
                  {group.images.map((img, i) => {
                    const total = group.images.length;
                    const angle = (i * 360) / total;
                    const distance = 160;

                    return (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, x: 0, y: 0 }}
                        whileInView={{
                          scale: 1,
                          x: Math.cos((angle - 90) * (Math.PI / 180)) * distance,
                          y: Math.sin((angle - 90) * (Math.PI / 180)) * distance,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 45,
                          damping: 18,
                          delay: i * 0.1
                        }}
                        className="absolute w-[220px] h-[280px] md:w-[240px] md:h-[300px]"
                      >
                        <motion.div
                          animate={{
                            y: [0, -15, 0],
                            rotate: [angle, angle + 2, angle]
                          }}
                          transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          whileHover={{ scale: 1.15, zIndex: 50 }}
                          // Thêm shadow màu hồng lan tỏa (Pink Aura Shadow)
                          className={`relative w-full h-full bg-white p-1.5 shadow-[0_10px_40px_rgba(244,114,182,0.3)] border-[4px] border-white overflow-hidden group/petal ${wavyPetalShapes[i % wavyPetalShapes.length]}`}
                        >
                          <div className="relative w-full h-full overflow-hidden rounded-[inherit]">
                            <Image
                              src={img}
                              alt="milestone"
                              fill
                              className="object-cover transition-transform duration-700 group-hover/petal:scale-105"
                              style={{ transform: `rotate(-${angle}deg) scale(1.45)` }}
                            />

                            {/* Lớp phủ màu hồng dịu (Pink Overlay) trên ảnh */}
                            <div className="absolute inset-0 bg-rose-400/10 group-hover/petal:bg-transparent transition-colors duration-500" />

                            {/* Hiệu ứng viền sáng hồng bên trong */}
                            <div className="absolute inset-0 ring-inset ring-[15px] ring-rose-200/20 pointer-events-none" />
                          </div>

                          {/* Lớp phủ gradient hồng ở đáy cánh hoa */}
                          <div className="absolute inset-0 bg-gradient-to-t from-rose-200/30 via-transparent to-transparent opacity-60 group-hover/petal:opacity-0 transition-opacity" />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Badge đếm số lượng */}
                <div className="absolute bottom-0 bg-[#422f27] px-6 py-3 rounded-2xl shadow-2xl z-40 flex items-center gap-3">
                  <Layers size={16} className="text-amber-300" />
                  <span className="text-[11px] font-black text-white tracking-[0.2em] uppercase">
                    {group.images.length} Memorable Moments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}