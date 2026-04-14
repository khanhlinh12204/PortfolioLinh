"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Data Structure - Đã tối ưu cho bố cục Bento
const projectsData = [
  {
    id: "thesis",
    type: "Graduation Thesis",
    title: "AI Pneumonia Detection",
    artTitle: "Viêm Phổi AI",
    badge: "★ Featured",
    researchBadge: "🔬 Research",
    icon: "🧠",
    color: "bg-gradient-to-br from-[#ffdae0] to-[#fecdd3]",
    desc: "Nghiên cứu & triển khai phân đoạn (segmentation) & phân lớp (classification) chẩn đoán viêm phổi từ ảnh X-quang.",
    contributions: ["Pipeline AI y tế", "Tối ưu hiệu năng"],
    role: "AI Researcher (Team 3)",
    // Dùng ảnh tạm, bạn hãy thay bằng ảnh thật tỷ lệ 16:10 hoặc 4:3
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1000",
    size: "large", // Card lớn bên trái
  },
  {
    id: "research",
    type: "Scientific Research",
    title: "AI Pneumonia Diagnosis",
    artTitle: "Nghiên Cứu",
    icon: "🔍",
    color: "bg-gradient-to-br from-cyan-50 to-blue-100",
    desc: "Xây dựng & thử nghiệm các mô hình CNN cải thiện khả năng phân loại bệnh.",
    role: "Research Member",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000",
    size: "wide", // Card rộng bên phải
  },
  {
    id: "face_swap",
    type: "Face Swap Video",
    title: "InSwapper System",
    artTitle: "Hoán Đổi Face",
    icon: "🎭",
    color: "bg-gradient-to-br from-purple-50 to-indigo-100",
    desc: "Hệ thống hoán đổi khuôn mặt tự nhiên sử dụng InsightFace.",
    role: "Solo Project",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000",
    size: "small",
  },
  {
    id: "web_clb",
    type: "Website CLB",
    title: "Support Programming",
    artTitle: "Web CLB",
    icon: "💻",
    color: "bg-gradient-to-br from-emerald-50 to-teal-100",
    desc: "Thiết kế UI/UX hiện đại, responsive layout cho cộng đồng lập trình.",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    size: "small",
  },
  {
    id: "sentiment",
    type: "NLP Sentiment",
    title: "PhoBERT Analysis",
    artTitle: "Cảm Xúc AI",
    icon: "💬",
    color: "bg-gradient-to-br from-orange-50 to-amber-100",
    desc: "Phân tích cảm xúc phản hồi sinh viên bằng mô hình PhoBERT tiếng Việt.",
    role: "NLP Developer",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000",
    size: "small",
  }
];

export default function ProjectShowcase({ onBack }: { onBack: () => void }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f8f4f1] text-[#4a3728] font-sans p-4 md:p-10 overflow-hidden relative selection:bg-[#ff8fa3] selection:text-white">
      
      {/* NỀN DECOR MỜ LỚN */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#ff8fa3]/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-200/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* TOP BAR */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-[#4a3728]/10 pb-10">
          <motion.button 
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-[#4a3728] text-white rounded-2xl font-bold text-sm shadow-lg shadow-[#4a3728]/20 transition-all"
          >
            ← Back to Portfolio
          </motion.button>

          <div className="text-left md:text-right">
            <div className="flex items-center gap-2 mb-4 bg-white px-4 py-1.5 rounded-full border border-[#ffdae0] backdrop-blur-sm shadow-sm ml-auto">
               <span className="w-2.5 h-2.5 bg-[#ff8fa3] rounded-full animate-pulse"></span>
               <span className="text-[#ff8fa3] font-black text-[10px] uppercase tracking-[0.2em]">Bento Innovation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
              KHO <br />
              <span className="text-[#ff8fa3] italic font-serif lowercase">Dự án.</span>
            </h1>
          </div>
        </header>

        {/* BENTO GRID LAYOUT CHÍNH */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
          
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              // CẤU HÌNH KÍCH THƯỚC BENTO
              className={`relative rounded-[45px] p-1 overflow-hidden group shadow-sm hover:shadow-3xl transition-all duration-500
                ${project.size === 'large' ? 'md:col-span-2 md:row-span-3 bg-white' : ''}
                ${project.size === 'wide' ? 'md:col-span-2 md:row-span-2 bg-white' : ''}
                ${project.size === 'small' ? 'md:col-span-1 md:row-span-2 bg-white' : ''}
              `}
            >
              {/* Nội dung bên trong Card - Bo góc nhỏ hơn 1 chút so với viền ngoài */}
              <div className={`w-full h-full rounded-[43px] p-8 flex flex-col relative overflow-hidden ${project.size !== 'large' ? project.color : 'bg-white'}`}>
                
                {/* Header Card: Icon và Tiêu đề */}
                <div className="flex justify-between items-start gap-4 mb-6 z-10 relative">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{project.type}</span>
                    <h3 className={`font-extrabold leading-tight ${project.size === 'large' ? 'text-3xl tracking-tighter' : 'text-xl tracking-tight'}`}>{project.title}</h3>
                  </div>
                  <span className="text-3xl group-hover:scale-125 transition-transform">{project.icon}</span>
                </div>

                {/* Hình ảnh và Hiệu ứng AI Scanner */}
                <div className={`relative rounded-3xl overflow-hidden border-4 border-white shadow-md flex-1 mb-6 ${project.size === 'large' ? 'min-h-[250px]' : ''}`}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  
                  {/* Overlay nghệ thuật và AI Scan Line */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#4a3728]/40 backdrop-blur-md flex items-center justify-center p-4 text-center"
                      >
                        <p className="text-white font-serif italic text-4xl drop-shadow-xl">{project.artTitle}</p>
                        {/* Tia quét AI */}
                        <motion.div 
                          className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#ff8fa3] to-transparent shadow-[0_0_20px_#ff8fa3]"
                          animate={{ top: ["0%", "100%", "0%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Card & Badges (Chỉ dành cho card Large bên trái) */}
                {project.size === 'large' && (
                  <div className="space-y-6 z-10 relative border-t border-[#4a3728]/5 pt-6 mt-auto">
                    <div className="flex gap-2">
                      <span className="bg-[#4a3728] text-white text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 uppercase tracking-tighter shadow-sm">{project.badge}</span>
                      <span className="bg-white border border-[#4a3728]/10 text-[#4a3728] text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 uppercase tracking-tighter shadow-inner">{project.researchBadge}</span>
                    </div>
                    <div className="bg-[#f8f4f1] p-5 rounded-3xl border border-[#4a3728]/5">
                      <p className="text-[11px] font-black uppercase text-[#ff8fa3] mb-3 tracking-tighter">Key Contributions</p>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-xs font-bold leading-relaxed">
                        {project.contributions?.map((c, i) => <li key={i}>{c}</li>)}
                      </ul>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 py-3.5 bg-[#ff8fa3] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#d85165] transition-colors shadow-lg shadow-[#ff8fa3]/20">Live Demo</button>
                      <button className="flex-1 py-3.5 bg-[#4a3728] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#5d4634] transition-colors shadow-lg shadow-[#4a3728]/20">View Code</button>
                    </div>
                  </div>
                )}

                {/* Footer cho các card còn lại */}
                {project.size !== 'large' && (
                  <div className="mt-auto z-10 relative">
                    <p className="text-sm font-medium leading-relaxed opacity-70 mb-4 line-clamp-2">{project.desc}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-[#4a3728]/5">
                      <span className="text-[10px] font-black opacity-40 italic tracking-wider">#{project.role}</span>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner text-[#4a3728] font-bold text-xl group-hover:bg-[#4a3728] group-hover:text-white transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>
                )}

                {/* Số thứ tự trang trí mờ ở góc */}
                <span className="absolute -bottom-6 -right-5 text-[150px] font-black opacity-[0.03] italic group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}