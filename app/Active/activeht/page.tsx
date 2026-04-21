"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Users, 
  Terminal, 
  Award, 
  ChevronRight,
  Code2,
  Cpu,
  ChevronDown,
  Sparkles,
  Star
} from "lucide-react";

// --- Dữ liệu giữ nguyên ---
const academicData = [
  {
    title: "Seminar & Workshop",
    icon: <Users className="w-6 h-6" />,
    color: "from-[#d85165]/10 to-[#d85165]/5", 
    textColor: "text-[#d85165]",
    description: "Tích cực tham gia và đồng tổ chức các buổi seminar, workshop học thuật nhằm chia sẻ kiến thức trong cộng đồng sinh viên.",
    images: ["/picture/hoatdong/HD1 (28).jpg", "/picture/hoatdong/HD1 (72).jpg", "/picture/khenthuong/l1.jpg", "/picture/khenthuong/anhpk1.jpg"],
    items: [
      { name: "“APPROACH TO PROGRAMMING”", detail: "Năm 2024 & 2025" },
      { name: "“KNOWLEDGE, SKILLS AND APPLICATIONS”", detail: "23/03/2024" },
      { name: "Workshop “FINAL CEREMONY CODECAMP HUẾ 2026”", detail: "Ban tổ chức" },
    ],
    petalConfig: { top: "-5%", right: "-5%", initialRotate: 0 }
  },
  {
    title: "CLB & Hỗ trợ học tập",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-[#d85165]/10 to-pink-50", 
    textColor: "text-[#d85165]",
    description: "Thành viên CLB Hỗ Trợ Lập Trình, đồng hành cùng sinh viên khóa dưới và tổ chức các hoạt động kỹ năng chuyên môn.",
    images: ["/picture/khenthuong/anhsp.jpg", "/picture/khenthuong/anhpk.jpg", "/picture/khenthuong/anhhd17.jpg", "/picture/khenthuong/anhhd.jpg"],
    items: [
      { name: "Hỗ trợ học tập cho SV K47, K48", detail: "Mentor Lập trình" },
      { name: "Tổ chức Trại kỹ năng CLB", detail: "Ban điều hành" },
      { name: "Workshop Kỹ năng mềm cho Dev", detail: "Điều phối viên" },
    ],
    petalConfig: { bottom: "10%", left: "-10%", initialRotate: 45 }
  },
  {
    title: "Trải nghiệm thực tế",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-[#d85165]/15 to-white/50", 
    textColor: "text-[#d85165]",
    description: "Chủ động kết nối doanh nghiệp và tham gia các hội nghị khoa học để mở rộng góc nhìn thực tế.",
    images: ["/picture/hoatdong/HD1 (77).jpg", "/picture/khenthuong/anhsm.jpg", "/picture/hoatdong/rikkei (1).png", "/picture/hoatdong/fpt.png"],
    items: [
      { name: "Hội nghị Khoa học Sinh viên ICT 2024", detail: "Thành viên tham dự" },
      { name: "Office Tour tại FPT Software Đà Nẵng", detail: "18/06/2024" },
      { name: "Kiến tập tại RikkeiSoft Huế", detail: "18/10/2024" },
      { name: "Diễn đàn quốc tế ICT phát triển bền vững", detail: "Huế - 2025" },
    ],
    petalConfig: { top: "40%", right: "-8%", initialRotate: -20 }
  },
  {
    title: "Cuộc thi & Tổ chức",
    icon: <Award className="w-6 h-6" />,
    color: "from-[#d85165]/20 to-[#d85165]/10", 
    textColor: "text-[#d85165]",
    description: "Thử thách bản thân qua các kỳ thi lập trình quốc tế và tham gia công tác tổ chức sự kiện quy mô Khoa.",
    images: ["/picture/hoatdong/HD1 (79).jpg", "/picture/khenthuong/anhicpc.jpg", "/picture/hoatdong/HD1 (81).jpg"],
    items: [
      { name: "Cuộc thi ICPC cấp Khoa năm 2025", detail: "Thí sinh tham gia" },
      { name: "Tổ chức ICPC cấp Khoa năm 2026", detail: "Ban nội dung" },
    ],
    petalConfig: { top: "15%", left: "30%", initialRotate: 15 }
  }
];

function ExpandableList({ items }: { items: any[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const threshold = 4; 
  const hasMore = items.length > threshold;
  const displayedItems = isExpanded ? items : items.slice(0, threshold);

  return (
    <div className="space-y-3 relative z-30">
      <AnimatePresence mode="popLayout">
        {displayedItems.map((item, i) => (
          <motion.div 
            layout
            key={item.name + i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-[#d85165]/10 hover:border-[#d85165]/40 hover:bg-white transition-all group/item shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <ChevronRight className="w-4 h-4 text-[#d85165] opacity-0 group-hover/item:opacity-100 -ml-4 group-hover/item:ml-0 transition-all duration-300" />
              <span className="text-[#5c4033] font-bold text-sm leading-snug">{item.name}</span>
            </div>
            <span className="mt-2 md:mt-0 text-[10px] font-black px-3 py-1 bg-[#d85165]/5 border border-[#d85165]/10 text-[#5c4033] rounded-full uppercase tracking-tighter group-hover/item:bg-[#d85165] group-hover/item:text-white transition-colors duration-300">
              {item.detail}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>

      {hasMore && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2 flex items-center justify-center gap-2 text-[#d85165] text-[10px] font-black uppercase tracking-widest hover:tracking-[0.2em] transition-all mt-2 group"
        >
          <span className="relative">
            {isExpanded ? "Thu gọn" : `Xem thêm (${items.length - threshold} mục)`}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d85165] group-hover:w-full transition-all duration-300"></span>
          </span>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
            <ChevronDown size={14} />
          </motion.div>
        </button>
      )}
    </div>
  );
}

function BigRotatingPetal({ config }: { config: any }) {
  return (
    <motion.div
      className="absolute pointer-events-none opacity-[0.10] group-hover:opacity-[0.25] transition-opacity duration-700 z-10 text-[180px] blur-[1px]"
      style={{ top: config.top, left: config.left, right: config.right, bottom: config.bottom }}
      animate={{ rotate: [config.initialRotate, config.initialRotate + 360] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >🌸</motion.div>
  );
}

export default function AcademicActivities() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section className="min-h-screen relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#fff9fa]">
      {/* Nền Parallax - Giữ nguyên opacity */}
      <motion.div 
        style={{ 
          backgroundImage: "url('/picture/anhcv/bg.jpg')",
          y: backgroundY 
        }}
        className="absolute inset-0 bg-cover bg-center bg-fixed grayscale-[0.3]"
      />
      
      <div className="absolute inset-0 backdrop-blur-[1px] z-0 pointer-events-none bg-gradient-to-b from-white/20 via-transparent to-white/20" />

      {/* Hoa đào rơi */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-100, 1200],
              x: [0, Math.sin(i) * 100],
              rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute text-xl opacity-[0.15] filter blur-[0.3px]"
            style={{ left: `${(i * 8.5)}%`, top: "-10%" }}
          >
            {i % 3 === 0 ? "🌸" : i % 3 === 1 ? "💮" : "🍃"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Header Section - Giữ kích thước chữ cũ nhưng đổi màu gradient bắt mắt */}
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
              Hoạt động chuyên môn <br />
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

        {/* Grid Cards - Giữ nguyên kích thước card và padding cũ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10">
          {academicData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -10 }} // Giảm độ nảy để thanh thoát hơn
              className="group relative bg-white/30 backdrop-blur-2xl border border-white/60 rounded-[3.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(216,81,101,0.12)] transition-all duration-700 flex flex-col min-h-[780px] overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d85165]/0 via-[#d85165]/5 to-[#d85165]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl z-0" />
              
              <BigRotatingPetal config={section.petalConfig} />

              {/* Photo Stack - Giữ nguyên h-64 như cũ */}
              <div className="relative h-64 mb-14 flex items-center justify-center flex-shrink-0 z-30">
                {section.images.map((img, imgIdx) => (
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0, scale: 0.8, rotate: imgIdx % 2 === 0 ? -10 : 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotate: imgIdx % 2 === 0 ? -4 : 4,
                      x: imgIdx * 15 
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (imgIdx * 0.15), type: "spring", stiffness: 50 }}
                    whileHover={{ scale: 1.1, zIndex: 100, rotate: 0, transition: { duration: 0.3 } }}
                    className="absolute w-[80%] h-full rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl transition-all duration-500 cursor-none"
                    style={{ zIndex: 10 + imgIdx, left: `${10 + (imgIdx * 2.5)}%` }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  </motion.div>
                ))}
                
                {/* Floating Badge - Nhấn mạnh hơn với Icon Star */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-6 -right-2 z-[110] bg-[#422f27] text-white text-[9px] font-black px-5 py-3 rounded-2xl flex items-center gap-2 shadow-2xl border border-white/20 group-hover:bg-[#d85165] transition-colors duration-300"
                >
                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                  {section.images.length} KHOẢNH KHẮC
                </motion.div>
              </div>

              {/* Icon & Label */}
              <div className="flex items-end justify-between mb-8 flex-shrink-0 relative z-30">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  className={`p-5 rounded-[2rem] bg-gradient-to-br ${section.color} ${section.textColor} shadow-[inset_0_2px_10px_rgba(255,255,255,0.5)] border border-white/50`}
                >
                  {section.icon}
                </motion.div>
                <div className="flex flex-col items-end">
                   <span className="text-[11px] font-black text-[#d85165] uppercase tracking-[0.3em] opacity-40 mb-1">SECTION</span>
                   <span className="text-3xl font-black text-[#d85165]/10">0{idx + 1}</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-shrink-0 relative z-30">
                <h3 className="text-3xl font-black text-[#422f27] mb-5 group-hover:text-[#d85165] transition-colors duration-500 uppercase tracking-tight leading-none">
                  {section.title}
                </h3>
                <p className="text-[#5c4033]/70 text-base leading-relaxed mb-10 font-medium border-l-2 border-[#d85165]/20 pl-4 italic group-hover:border-[#d85165] transition-all">
                  {section.description}
                </p>
                <ExpandableList items={section.items} />
              </div>

              {/* Trang trí Watermark Code2 - Giữ nguyên */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.04] group-hover:opacity-[0.12] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-1000 pointer-events-none text-[#d85165] z-10">
                <Code2 size={200} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation cho gradient tiêu đề */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}