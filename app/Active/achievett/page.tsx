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
      "/academic-1.jpg",
      "/academic-2.jpg",
      "/academic-3.jpg",
      "/academic-4.jpg",
      "/academic-5.jpg"
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
      "/picture/khenthuong/z6173100973720_829a90afcfef5ea99705411d4e1de50a.jpg",
      "/picture/khenthuong/z6173100999162_b262cfbeb6f581f18de837c3918cb79b.jpg",
      "/picture/khenthuong/z6175101305816_15d59e4c6bb93a6db577f1ed26dc75dc.jpg",
      "/picture/khenthuong/z6175101408399_8e81d4396de324ea49acd5adecc4994a.jpg",
      "/picture/khenthuong/z6614994670445_ef65bfebd0af1d558313d9b2047b2358.jpg"
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
    <section className="relative py-40 px-4 md:px-12 bg-[#fffcfb] overflow-hidden">

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[15%] left-[-10%] w-[700px] h-[700px] bg-rose-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[700px] h-[700px] bg-amber-50 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="mb-32 text-center lg:text-left">
          <h2 className="text-6xl md:text-8xl font-serif italic text-[#422f27] leading-[1.1]">
            Dấu ấn & <br />
            <span className="not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-amber-500">Rực rỡ.</span>
          </h2>
        </div>

        <div className="space-y-[35vh]">
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