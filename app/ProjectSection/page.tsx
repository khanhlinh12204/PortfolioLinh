"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Send, Layers, Zap, Activity, Brain, Globe, Sparkles, MessageSquare, ScanEye, GraduationCap, Plane, Star } from "lucide-react"; // Cài đặt Plane icon

// --- DỮ LIỆU DỰ ÁN ---
const JOURNEY_PROJECTS = [
  {
    id: 1,
    tag: "Khóa luận tốt nghiệp",
    title: "Nghiên cứu và triển khai phương pháp kết hợp giữa segmentation và classification dựa trên Deep Learning nhằm nâng cao độ chính xác trong chẩn đoán viêm phổi từ ảnh X-quang lồng ngực",
    quote: "Nâng cao độ chính xác chẩn đoán y khoa.",
    artTitle: "Deep Learning Research",
    contributions: ["Kết hợp segmentation + classification tối ưu", "Thiết kế pipeline AI y tế end-to-end", "Đánh giá hiệu năng trên tập dữ liệu X-ray"],
    tech: "Python • PyTorch • CNN • OpenCV",
    role: "Team 3 project",
    color: "bg-gradient-to-br from-[#fff1f2] to-[#ffe4e6]",
    icon: <Activity className="w-5 h-5" />,
    isReversed: false,
    imgLeft: "/picture/khenthuong/anhnckh.jpg",
    imgRight: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000"
  },
  {
    id: 2,
    tag: "Nghiên cứu khoa học",
    title: "NGHIÊN CỨU PHƯƠNG PHÁP KẾT HỢP PHÂN ĐOẠN VÀ PHÂN LỚP DỰA TRÊN HỌC SÂU CHO CHẨN ĐOÁN BỆNH VIÊM PHỔI TỪ ẢNH X-QUANG LỒNG NGỰC",
    quote: "Ứng dụng Học Sâu trong chẩn đoán hình ảnh.",
    artTitle: "Scientific Exploration",
    contributions: ["Xây dựng mô hình Deep Learning", "Chuẩn hóa dữ liệu ảnh y tế X-ray", "Phân tích & đánh giá kết quả mô hình"],
    tech: "Python • CNN • Computer Vision",
    role: "Team 3 project",
    color: "bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]",
    icon: <Brain className="w-5 h-5" />,
    isReversed: true,
    imgLeft: "/picture/khenthuong/anhcn1.jpg",
    imgRight: "/picture/khenthuong/phoi.png"
  },
  {
    id: 3,
    tag: "Phát triển Website",
    title: "Thiết kế và phát triển website giới thiệu CLB với giao diện hiện đại, thân thiện người dùng",
    quote: "Tối ưu trải nghiệm trên nhiều thiết bị.",
    artTitle: "Modern UI/UX Design",
    contributions: ["Thiết kế UI/UX hiện đại", "Xây dựng giao diện responsive", "Tối ưu trải nghiệm người dùng (UX flow)"],
    tech: "HTML • CSS • JavaScript",
    role: "Frontend Developer (Team 3)",
    color: "bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7]",
    icon: <Globe className="w-5 h-5" />,
    isReversed: false,
    imgLeft: "/picture/khenthuong/clb4 (1).png",
    imgRight: "/picture/khenthuong/clb4.png"
  },
  {
    id: 4,
    tag: "Xử lý Video AI",
    title: "HOÁN ĐỔI KHUÔM MẶT BẰNG MÔ-ĐUN INSWAPPER CỦA INSIGHTFACE TRONG XỬ LÝ VIDEO",
    quote: "Đảm bảo tính tự nhiên và giữ đặc trưng khuôn mặt.",
    artTitle: "InsightFace Pipeline",
    contributions: ["Xây dựng pipeline xử lý video", "Ứng dụng face swapping vào video", "Tối ưu chất lượng khuôn mặt đầu ra"],
    tech: "Python • InsightFace • Computer Vision",
    role: "Solo Project",
    color: "bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff]",
    icon: <Sparkles className="w-5 h-5" />,
    isReversed: true,
    imgLeft: "/picture/khenthuong/hdkm3.png",
    imgRight: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000"
  },
  {
    id: 5,
    tag: "Xử lý ngôn ngữ tự nhiên",
    title: "PHÂN TÍCH CẢM XÚC PHẢN HỒI SINH VIÊN BẰNG MÔ HÌNH PhoBERT",
    quote: "Hiểu sâu phản hồi sinh viên qua mô hình Transformer.",
    artTitle: "Vietnamese NLP",
    contributions: ["Tiền xử lý dữ liệu NLP tiếng Việt", "Huấn luyện PhoBERT Sentiment", "Đánh giá hiệu năng mô hình phân loại"],
    tech: "Python • PhoBERT • NLP • Deep Learning",
    role: "Team 3 Project",
    color: "bg-gradient-to-br from-[#fff7ed] to-[#ffedd5]",
    icon: <MessageSquare className="w-5 h-5" />,
    isReversed: false,
    imgLeft: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    imgRight: "/picture/khenthuong/ptcx.png"
  },
  {
    id: 6,
    tag: "Hệ thống AI đa giai đoạn",
    title: "Nhận dạng vùng phổi và chẩn đoán viêm phổi từ ảnh X-quang bằng mô hình đa giai đoạn kết hợp YOLOv8, VGG16 và Random Forest",
    quote: "Sự kết hợp giữa Object Detection và Machine Learning.",
    artTitle: "Hybrid Multi-stage",
    contributions: ["Thiết kế hệ thống AI đa mô hình", "Khoanh vùng và phân loại bệnh lý phổi", "Tối ưu hóa pipeline chẩn đoán"],
    tech: "YOLOv8 • VGG16 • Random Forest",
    role: "Research Project",
    color: "bg-gradient-to-br from-[#ecfeff] to-[#cffafe]",
    icon: <ScanEye className="w-5 h-5" />,
    isReversed: true,
    imgLeft: "/picture/khenthuong/ndp.png",
    imgRight: "/picture/khenthuong/phoi.png"
  }
];

// --- 🌸 COMPONENT: HIỆU ỨNG HOA ANH ĐÀO VÀ MÁY BAY DẪN ĐƯỜNG ---
const SakuraConnectionPath = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
  const [petals, setPetals] = useState<any[]>([]);
  const getWaveX = (progress: number) => 50 + Math.sin(progress * Math.PI * 12) * 7;

  // Lấy tiến độ cuộn trang
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  

  // Làm mượt tiến độ cuộn
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Tính toán vị trí X và Y cho máy bay
  const planeX = useTransform(smoothProgress, (p) => `${getWaveX(p)}%`);
  const planeY = useTransform(smoothProgress, (p) => `${p * 100}%`);
  // Tính toán góc xoay dựa trên độ dốc của đường cong để mũi máy bay luôn hướng về phía trước
  const planeRotate = useTransform(smoothProgress, (p) => Math.cos(p * Math.PI * 12) * 45 + 90);

  useEffect(() => {
    const p = [];
    const count = 90;
    for (let i = 0; i < count; i++) {
      const progress = i / count;
      const xBase = getWaveX(progress);
      const jitter = (Math.random() - 0.5) * 2.5;
      p.push({
        id: `flower-${i}`,
        top: `${progress * 100}%`,
        left: `${xBase + jitter}%`,
        size: 18 + Math.random() * 17,
        delay: i * 0.03,
      });
    }
    setPetals(p);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="absolute w-full h-full opacity-80" viewBox="0 0 1000 4000" preserveAspectRatio="none">
        <path
          d={`M 500 0 ${Array.from({ length: 101 }, (_, i) => `L ${getWaveX(i / 100) * 10} ${(i / 100) * 4000}`).join(' ')}`}
          stroke="#FDA4AF" strokeWidth="1.2" fill="none" strokeDasharray="5 8"
        />
      </svg>

      {/* --- ICON MÁY BAY GIẤY DI CHUYỂN VÀ XOAY THEO CUỘN CHUỘT --- */}
      <motion.div
        style={{ left: planeX, top: planeY, rotate: planeRotate }}
        className="absolute z-30 text-pink-500 -ml-3 -mt-3 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
      >
        <Plane size={32} className="fill-pink-500" />
      </motion.div>

      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          animate={{ y: [0, 5, 0], rotate: [0, 360] }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: p.delay }}
          className="absolute text-pink-300 drop-shadow-sm"
          style={{ top: p.top, left: p.left, fontSize: `${p.size}px` }}
        >🌸</motion.div>
      ))}
    </div>
  );
};

export default function FeaturedTechJourney() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-[#fffcf9] overflow-hidden"
      style={{
        backgroundImage: "url('/picture/anhcv/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />

      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 1200],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 720]
            }}
            transition={{
              duration: 18 + Math.random() * 12,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
            className="absolute text-2xl opacity-[0.15] filter blur-[0.5px]"
            style={{ left: `${Math.random() * 100}%`, top: "-5%" }}
          >
            {i % 2 === 0 ? "🌸" : "🍃"}
          </motion.div>
        ))}
      </div>

      <SakuraConnectionPath containerRef={sectionRef} />

      <div className="max-w-[1100px] mx-auto px-8 relative z-20" >
        <div className="relative flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-4 flex items-center gap-3 bg-[#d85165]/10 px-5 py-2 rounded-full border border-[#d85165]/20"
          >
            <Sparkles className="w-4 h-4 text-[#d85165]" />
            <span className="text-[#d85165] text-xs font-bold tracking-[0.4em] uppercase">
              Portfolio Highlights
            </span>
            <Sparkles className="w-4 h-4 text-[#d85165]" />
          </motion.div>

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-black text-[#4a3728] leading-[1.1] tracking-tight"
            >
              Dự án <br />
              <span className="text-[#d85165] relative inline-block">
                của mình
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    d="M5 15Q150 -5 295 15"
                    stroke="#d85165"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-12 hidden md:block text-[#d85165] opacity-40"
            >
              <Star size={48} fill="currentColor" />
            </motion.div>
          </div>

          <p className="mt-8 text-[#6f5643] font-semibold text-lg opacity-70 italic max-w-2xl">
            "Ghi lại những nỗ lực và kết quả nhỏ trong hành trình học hỏi của mình. "
          </p>
        </div>

        {/* PROJECTS LIST */}
        <div className="space-y-48" >
          {JOURNEY_PROJECTS.map((item) => {
            const isThesis = item.tag === "Khóa luận tốt nghiệp";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row items-center gap-14 lg:gap-24 ${item.isReversed ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="relative w-full md:w-1/2 group" onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
                  <div className={`relative aspect-[4/3] rounded-[40px] overflow-hidden border-[8px] border-white shadow-xl z-10 transition-all duration-500 group-hover:shadow-2xl ${isThesis ? 'ring-4 ring-pink-100' : ''}`}>
                    <img src={item.imgLeft} alt="" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" />
                    <AnimatePresence>
                      {hoveredId === item.id && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#4a3728]/40 backdrop-blur-[2px] flex items-center justify-center p-6 text-center">
                          <p className="text-white italic text-2xl md:text-3xl drop-shadow-lg px-4">{item.artTitle}</p>
                          <motion.div className="absolute inset-x-0 h-[2px] bg-pink-300 shadow-[0_0_15px_#f9a8d4]" animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className={`absolute -bottom-10 ${item.isReversed ? '-left-8' : '-right-8'} w-36 h-48 rounded-3xl border-[6px] border-white shadow-lg overflow-hidden hidden lg:block z-20 transition-transform group-hover:-translate-y-2`}>
                    <img src={item.imgRight} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                </div>

                <div className={`w-full md:w-1/2 space-y-6 ${item.isReversed ? 'md:text-right' : ''}`}>
                  <div className={`flex items-center gap-3 ${item.isReversed ? 'md:justify-end' : ''}`}>
                    <div className="flex items-center gap-2">
                      {isThesis && (
                        <div className="p-3.5 bg-pink-500 rounded-lg text-white shadow-md shadow-pink-200">
                          <GraduationCap size={16} />
                        </div>
                      )}
                      <span className={`w-10 h-[1.5px] ${isThesis ? 'bg-pink-500' : 'bg-pink-300'}`} />
                    </div>
                    <span className={`${isThesis ? 'text-pink-600 font-black' : 'text-pink-400 font-bold'} text-[11px] uppercase tracking-[0.2em]`}>{item.tag}</span>
                  </div>

                  <h3 className={`font-black text-[#4a3728] leading-tight tracking-tight drop-shadow-sm transition-all
                    ${isThesis
                      ? 'text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#4a3728] via-[#db2777] to-[#4a3728]'
                      : 'text-2xl md:text-3xl'}
                  `}>
                    {item.title}
                  </h3>

                  <div className={`inline-flex items-center gap-2 p-1.5 px-4 rounded-xl bg-white/70 border border-pink-100 shadow-sm ${item.isReversed ? 'flex-row-reverse' : ''}`}>
                    <div className={`p-1.5 ${isThesis ? 'bg-pink-500' : 'bg-pink-300'} text-white rounded-lg shadow-sm`}>{item.icon}</div>
                    <p className="text-[12px] italic text-[#6f5643] font-medium">"{item.quote}"</p>
                  </div>

                  <motion.div whileHover={{ y: -5 }} className={`p-8 rounded-[40px] ${item.color} border border-white shadow-md transition-all relative overflow-hidden`}>
                    <div className="space-y-5">
                      <div className="space-y-3">
                        <div className={`flex items-center gap-2 text-pink-500/60 font-bold text-[9px] uppercase tracking-tighter ${item.isReversed ? 'justify-end' : ''}`}>
                          <Layers size={12} /> Key Contributions
                        </div>
                        <ul className="text-[12.5px] text-[#6b5a4d] space-y-2.5 font-medium leading-relaxed">
                          {item.contributions.map((point, idx) => (
                            <li key={idx} className={`flex items-start gap-2.5 ${item.isReversed ? 'flex-row-reverse text-right' : ''}`}>
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${isThesis ? 'bg-pink-500' : 'bg-pink-300'} shrink-0`} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/40">
                        <div>
                          <span className="block text-[8px] font-bold text-[#5a4638]/40 uppercase mb-0.5 tracking-wider">Tech Stack</span>
                          <p className="text-[11px] font-bold text-[#5a4638]/80">{item.tech}</p>
                        </div>
                        <div>
                          <span className="block text-[8px] font-bold text-[#5a4638]/40 uppercase mb-0.5 tracking-wider">Role</span>
                          <p className="text-[11px] font-bold text-[#5a4638]/80">{item.role}</p>
                        </div>
                      </div>

                      <div className={`pt-2 ${item.isReversed ? 'text-right' : ''}`}>
                        <button className={`px-7 py-3 ${isThesis ? 'bg-pink-600' : 'bg-[#5a4638]'} text-white rounded-full font-bold text-[9px] uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 inline-flex shadow-lg`}>
                          Chi tiết dự án <Send size={10} />
                        </button>
                      </div>
                    </div>
                    <span className="absolute -bottom-6 -right-2 text-8xl font-black opacity-[0.04] italic pointer-events-none">0{item.id}</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}