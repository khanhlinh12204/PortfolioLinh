"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Layers, Activity, Brain, Globe, Sparkles, MessageSquare, ScanEye, GraduationCap, Plane, Star } from "lucide-react";

// --- DỮ LIỆU DỰ ÁN ---
const JOURNEY_PROJECTS = [
  {
    id: 1,
    tag: "Khóa luận tốt nghiệp",
    title: "Nghiên cứu phương pháp kết hợp đặc trưng đa nguồn dựa trên Gated Fusion cho bài toán chẩn đoán viêm phổi từ ảnh X-quang",
    quote: "Khai thác nhiều nguồn đặc trưng để hỗ trợ chẩn đoán viêm phổi từ ảnh X-quang.",
    artTitle: "Gated Fusion Research",
    contributions: [
      "Triển khai Radiomics, Statistical Features và DenseNet-169",
      "Kết hợp đặc trưng truyền thống và học sâu bằng Gated Fusion",
      "So sánh mô hình với KNN, Logistic Regression và MLP"
    ],
    tech: "Python • PyTorch • CNN • Gated Fusion",
    role: "Radiomics • Statistical Features • DenseNet-169",
    detailsUrl: "https://drive.google.com/file/d/1K0ykZSlT4XgE4EbltO5SyXijP4MGBUAW/view?usp=sharing",
    color: "bg-gradient-to-br from-white/95 via-[#fff8f7] to-[#fff0f1]",
    icon: <Activity className="w-5 h-5" />,
    isReversed: false,
    imgLeft: "/picture/khenthuong/KLTN.jpg",
    imgRight: "/picture/khenthuong/anhnckh.jpg"
  },
  {
    id: 2,
    tag: "Nghiên cứu khoa học",
    title: "Kết hợp phân đoạn và phân lớp bằng học sâu để chẩn đoán viêm phổi từ ảnh X-quang",
    quote: "Từ định vị vùng phổi đến nhận diện dấu hiệu viêm phổi.",
    artTitle: "Scientific Exploration",
    contributions: ["Xây dựng quy trình phân đoạn và phân lớp ảnh X-quang", "Ứng dụng học sâu vào bài toán chẩn đoán viêm phổi", "Thực nghiệm, phân tích và đánh giá kết quả mô hình"],
    tech: "Python • CNN • Computer Vision",
    role: "Nghiên cứu phân đoạn • Phân lớp • Đánh giá mô hình",
    detailsUrl: "https://drive.google.com/file/d/1pNlj6R8DfmghReRQLeYC9luKtkfs8NV3/view?usp=sharing",
    color: "bg-gradient-to-br from-white/95 via-[#fffafa] to-[#f8eeee]",
    icon: <Brain className="w-5 h-5" />,
    isReversed: true,
    imgLeft: "/picture/khenthuong/anhcn1.jpg",
    imgRight: "/picture/khenthuong/phoi.png"
  },
  {
    id: 3,
    tag: "Phát triển Website",
    title: "Thiết kế và phát triển website giới thiệu CLB với giao diện hiện đại, thân thiện người dùng",
    quote: "Đưa hoạt động và câu chuyện của CLB đến gần hơn với mọi người.",
    artTitle: "Modern UI/UX Design",
    contributions: ["Thiết kế giao diện trực quan, đồng nhất với hình ảnh CLB", "Phát triển website tương thích nhiều kích thước màn hình", "Sắp xếp nội dung rõ ràng, thuận tiện tra cứu"],
    tech: "HTML • CSS • JavaScript",
    role: "Thiết kế giao diện • Phát triển Frontend",
    detailsUrl: "https://bach-thi-thien-thanh.github.io/BanhTrang/index.html",
    color: "bg-gradient-to-br from-white/95 via-[#fffaf8] to-[#f8efeb]",
    icon: <Globe className="w-5 h-5" />,
    isReversed: false,
    imgLeft: "/picture/khenthuong/clb4 (1).png",
    imgRight: "/picture/khenthuong/clb4.png"
  },
  {
    id: 4,
    tag: "Xử lý Video AI",
    title: "Hoán đổi khuôn mặt trong video bằng mô-đun INSwapper của InsightFace",
    quote: "Tạo video hoán đổi khuôn mặt tự nhiên với INSwapper.",
    artTitle: "InsightFace Pipeline",
    contributions: ["Tích hợp mô-đun INSwapper vào quy trình xử lý video", "Phát hiện và thay thế khuôn mặt qua các khung hình", "Hoàn thiện video đầu ra liền mạch, tự nhiên"],
    tech: "Python • InsightFace • Computer Vision",
    role: "Dự án cá nhân",
    detailsUrl: "https://drive.google.com/file/d/1Y2YnemSUk9XBGTbrO1Lrv-n1mvv9AnGl/view?usp=sharing",
    color: "bg-gradient-to-br from-white/95 via-[#fff9fb] to-[#f8eef2]",
    icon: <Sparkles className="w-5 h-5" />,
    isReversed: true,
    imgLeft: "/picture/khenthuong/hdkm3.png",
    imgRight: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000"
  },
  {
    id: 5,
    tag: "Xử lý ngôn ngữ tự nhiên",
    title: "Phân tích cảm xúc phản hồi sinh viên bằng mô hình PhoBERT",
    quote: "Chuyển phản hồi tiếng Việt thành góc nhìn hữu ích.",
    artTitle: "Vietnamese NLP",
    contributions: ["Tiền xử lý văn bản phản hồi tiếng Việt", "Ứng dụng PhoBERT để phân loại cảm xúc", "Đánh giá kết quả nhằm khai thác sắc thái ý kiến sinh viên"],
    tech: "Python • PhoBERT • NLP • Deep Learning",
    role: "Tiền xử lý dữ liệu • Phân tích cảm xúc • Đánh giá mô hình",
    detailsUrl: "https://drive.google.com/file/d/1K3H9Li1XpzhTRVNU1OUvuzcNNspw2euH/view?usp=sharing",
    color: "bg-gradient-to-br from-white/95 via-[#fffaf6] to-[#f8f0e9]",
    icon: <MessageSquare className="w-5 h-5" />,
    isReversed: false,
    imgLeft: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    imgRight: "/picture/khenthuong/ptcx.png"
  },
  {
    id: 6,
    tag: "Hệ thống AI đa giai đoạn",
    title: "Nhận dạng vùng phổi và chẩn đoán viêm phổi từ ảnh X-quang bằng mô hình đa giai đoạn kết hợp YOLOv8, VGG16 và Random Forest",
    quote: "Kết hợp định vị vùng phổi và phân loại để hỗ trợ chẩn đoán.",
    artTitle: "Hybrid Multi-stage",
    contributions: ["Dùng YOLOv8 xác định vùng phổi trên ảnh X-quang", "Trích xuất đặc trưng bằng VGG16, phân loại với Random Forest", "Kết nối các bước thành quy trình chẩn đoán đa giai đoạn"],
    tech: "YOLOv8 • VGG16 • Random Forest",
    role: "Nhận diện vùng phổi • Trích xuất đặc trưng • Phân loại",
    detailsUrl: "https://drive.google.com/file/d/1xd_xRVTHBsW85BXAmKGj8l_pDRYzl-ow/view?usp=sharing",
    color: "bg-gradient-to-br from-white/95 via-[#fffafa] to-[#f5eeee]",
    icon: <ScanEye className="w-5 h-5" />,
    isReversed: true,
    imgLeft: "/picture/khenthuong/ndp.png",
    imgRight: "/picture/khenthuong/phoi.png"
  },
  {
    id: 7,
    tag: "Website thương mại điện tử",
    title: "Thiết kế và phát triển giao diện website bán hàng trực tuyến Đông Trùng Hạ Thảo",
    quote: "Mang sản phẩm Đông Trùng Hạ Thảo đến gần hơn với khách hàng qua trải nghiệm mua sắm trực tuyến.",
    artTitle: "Herbal E-commerce",
    contributions: [
      "Thiết kế giao diện cửa hàng trực tuyến chỉn chu, dễ sử dụng",
      "Trình bày sản phẩm và thông tin nổi bật một cách rõ ràng",
      "Tối ưu trải nghiệm mua sắm trên nhiều kích thước màn hình"
    ],
    tech: "Next.js • React • Tailwind CSS",
    role: "Thiết kế giao diện • Phát triển Frontend",
    detailsUrl: "https://dongtrunghathao.khanhlinn.id.vn/dashboard",
    color: "bg-gradient-to-br from-white/95 via-[#fffaf7] to-[#f8eee8]",
    icon: <Globe className="w-5 h-5" />,
    isReversed: false,
    imgLeft: "/picture/khenthuong/dongtrunghathao1.png",
    imgRight: "/picture/khenthuong/dongtrunghathao2.png"
  }
];

type SakuraPetal = {
  id: string;
  top: string;
  left: string;
  size: number;
  delay: number;
};

// --- 🌸 COMPONENT: HIỆU ỨNG HOA ANH ĐÀO VÀ MÁY BAY DẪN ĐƯỜNG ---
const SakuraConnectionPath = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
  const getWaveX = (progress: number) => 50 + Math.sin(progress * Math.PI * 12) * 7;
  const petals: SakuraPetal[] = Array.from({ length: 42 }, (_, i) => {
    const progress = i / 42;
    const offset = ((i * 7) % 5 - 2) * 0.4;
    return {
      id: `flower-${i}`,
      top: `${progress * 100}%`,
      left: `${getWaveX(progress) + offset}%`,
      size: 10 + (i % 5) * 1.5,
      delay: i * 0.03,
    };
  });

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

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="absolute h-full w-full opacity-30" viewBox="0 0 1000 4000" preserveAspectRatio="none">
        <path
          d={`M 500 0 ${Array.from({ length: 101 }, (_, i) => `L ${getWaveX(i / 100) * 10} ${(i / 100) * 4000}`).join(' ')}`}
          stroke="#FDA4AF" strokeWidth="1.2" fill="none" strokeDasharray="5 8"
        />
      </svg>

      {/* --- ICON MÁY BAY GIẤY DI CHUYỂN VÀ XOAY THEO CUỘN CHUỘT --- */}
      <motion.div
        style={{ left: planeX, top: planeY, rotate: planeRotate }}
        className="absolute z-30 -ml-2 -mt-2 text-[#c25368] drop-shadow-[0_0_6px_rgba(194,83,104,0.3)]"
      >
        <Plane size={22} />
      </motion.div>

      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.55, scale: 1 }}
          animate={{ y: [0, 4, 0], rotate: [0, 180] }}
          transition={{ duration: 10 + (p.id.length % 6), repeat: Infinity, delay: p.delay }}
          className="absolute text-[#d9a2aa]"
          style={{ top: p.top, left: p.left, fontSize: `${p.size}px` }}
        >🌸</motion.div>
      ))}
    </div>
  );
};

export default function FeaturedTechJourney() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
      <div className="absolute inset-0 bg-[#fffaf8]/70 backdrop-blur-[2px]" />

      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 1200],
              x: [0, (i % 2 === 0 ? -1 : 1) * (24 + (i % 5) * 8)],
              rotate: [0, 720]
            }}
            transition={{
              duration: 18 + (i % 4) * 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
            className="absolute opacity-[0.15] filter blur-[0.5px]"
            style={{
              left: `${(i * 37) % 100}%`,
              top: "-5%",
              fontSize: `${14 + (i % 4) * 4}px`
            }}
          >
            {i % 2 === 0 ? "🌸" : "🍃"}
          </motion.div>
        ))}
      </div>

      <SakuraConnectionPath containerRef={sectionRef} />

      <div className="relative z-20 mx-auto max-w-[1160px] px-5 sm:px-8">
        <div className="relative mb-14 flex flex-col items-center text-center sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#d85165]/15 bg-white/75 px-4 py-2 shadow-sm shadow-[#70404a]/5 backdrop-blur sm:gap-3.5 sm:px-5"
          >
            <Sparkles className="w-4 h-4 text-[#d85165]" />
            <span className="text-[#d85165] text-xs font-bold tracking-[0.4em] uppercase">
              Hành trình dự án
            </span>
          </motion.div>

          <div className="relative px-3 pb-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[2.65rem] font-black leading-[1.05] tracking-[-0.045em] text-[#4a3728] sm:text-6xl md:text-7xl"
            >
              <span className="block sm:inline">Dự án </span>
              <span className="relative inline-block bg-gradient-to-r from-[#a8485a] via-[#d36e7c] to-[#a8485a] bg-clip-text text-transparent">
                của mình.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    d="M8 14Q150 2 292 14"
                    stroke="#d18a91"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-12 -top-8 hidden text-[#d85165]/30 md:block"
            >
              <Star size={48} fill="currentColor" />
            </motion.div>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#78645d] sm:text-base">
            Ghi lại những điều mình học được và tạo nên qua từng dự án — từ nghiên cứu đến những sản phẩm thực tế.
          </p>
        </div>

        {/* PROJECTS LIST */}
        <div className="space-y-32 md:space-y-40">
          {JOURNEY_PROJECTS.map((item) => {
            const isThesis = item.tag === "Khóa luận tốt nghiệp";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`flex flex-col items-center gap-10 md:flex-row md:gap-12 lg:gap-20 ${item.isReversed ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="group relative w-full md:w-1/2" onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
                  <div className={`relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_24px_60px_-28px_rgba(74,55,40,0.48)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_32px_70px_-28px_rgba(74,55,40,0.55)] ${isThesis ? 'ring-2 ring-[#d85165]/35' : 'ring-1 ring-[#9b5960]/10'}`}>
                    <img src={item.imgLeft} alt={`Hình ảnh dự án: ${item.title}`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                      <span className="max-w-[75%] truncate rounded-full border border-white/50 bg-[#fffaf8]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#754a4b] shadow-sm backdrop-blur-md">
                        {item.tag}
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-[#fffaf8]/90 text-[10px] font-black tracking-wider text-[#9b5960] shadow-sm backdrop-blur-md">
                        0{item.id}
                      </span>
                    </div>
                    <AnimatePresence>
                      {hoveredId === item.id && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center bg-[#4a3728]/35 p-6 text-center backdrop-blur-[2px]">
                          <p className="px-4 text-2xl italic text-white drop-shadow-lg md:text-3xl">{item.artTitle}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className={`absolute -bottom-7 ${item.isReversed ? '-left-6' : '-right-6'} z-20 hidden h-40 w-32 overflow-hidden rounded-3xl border-[5px] border-[#fffaf8] bg-white shadow-xl transition-transform group-hover:-translate-y-2 lg:block`}>
                    <img src={item.imgRight} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`group/info relative w-full overflow-hidden rounded-[2rem] border border-white/90 bg-white/70 p-5 shadow-[0_20px_55px_-32px_rgba(74,55,40,0.38)] ring-1 ring-[#9b5960]/10 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_28px_65px_-30px_rgba(74,55,40,0.45)] sm:p-7 md:w-1/2 md:space-y-6 ${item.isReversed ? 'md:text-right' : ''} ${isThesis ? 'ring-2 ring-[#c25368]/20' : ''}`}
                >
                  <span className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#dcaab0]/80 to-transparent ${isThesis ? 'h-1.5 via-[#c25368]' : ''}`} />
                  <span className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-[#f7e5e3]/55 blur-3xl transition-opacity group-hover/info:opacity-100" />
                  <div className="relative space-y-5 md:space-y-6">
                    <div className={`flex items-center gap-3 ${item.isReversed ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-2">
                        {isThesis && (
                          <div className="rounded-xl bg-[#c25368] p-3 text-white shadow-md shadow-[#c25368]/20">
                            <GraduationCap size={16} />
                          </div>
                        )}
                        <span className={`h-px w-8 ${isThesis ? 'bg-[#c25368]' : 'bg-[#dcaab0]'}`} />
                      </div>
                      <span className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] ${isThesis ? 'border-[#d85165]/20 bg-[#d85165]/10 font-black text-[#b64c60]' : 'border-[#dcaab0]/30 bg-white/70 font-bold text-[#a66b72]'}`}>{item.tag}</span>
                      <span className="ml-auto hidden text-[9px] font-bold tracking-[0.18em] text-[#b59c95] sm:block">PROJECT 0{item.id}</span>
                    </div>

                    <h3 className={`font-bold leading-[1.18] tracking-[-0.025em] transition-all
                    ${isThesis
                        ? 'text-[1.7rem] text-[#9f4559] sm:text-3xl md:text-[2.15rem]'
                        : 'text-[1.55rem] text-[#4a3728] sm:text-2xl md:text-[1.8rem]'}
                  `}>
                      {item.title}
                    </h3>

                    <div className={`inline-flex max-w-full items-start gap-3 rounded-2xl border border-[#dcaab0]/20 bg-white/75 px-4 py-3 shadow-sm shadow-[#70404a]/5 ${item.isReversed ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`shrink-0 rounded-lg p-2 ${isThesis ? 'bg-[#c25368]' : 'bg-[#dcaab0]'} text-white shadow-sm`}>{item.icon}</div>
                      <p className="text-left text-[13px] leading-5 text-[#6f5643]">{item.quote}</p>
                    </div>

                    <div className={`group/card relative isolate overflow-hidden rounded-[1.5rem] border border-white/90 ${item.color} p-5 shadow-[0_12px_35px_-24px_rgba(74,55,40,0.28)] ring-1 ring-[#9b5960]/[0.06] sm:p-6 ${isThesis ? 'ring-1 ring-[#c25368]/20' : ''}`}>
                      <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e7c2b9] via-[#d28b91] to-[#e7c2b9] ${isThesis ? 'h-1.5 from-[#b64c60] via-[#e5a5a8] to-[#b64c60]' : ''}`} />
                      <div className={`pointer-events-none absolute -right-12 -top-14 -z-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 group-hover/card:opacity-90 ${isThesis ? 'bg-[#f3c6ce]/55' : 'bg-[#f5e3dd]/60'}`} />
                      <div className="space-y-5">
                        <div className="space-y-3">
                          <div className={`flex items-center gap-2 text-[#a75b67] font-bold text-[10px] uppercase tracking-[0.16em] ${item.isReversed ? 'justify-end' : ''}`}>
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f9e9eb] text-[#b64c60]">
                              <Layers size={13} />
                            </span>
                            Điểm nổi bật
                            {isThesis && (
                              <span className="ml-auto rounded-full bg-[#b64c60]/10 px-2.5 py-1 text-[8px] font-black tracking-[0.12em] text-[#a34256]">
                                NỔI BẬT
                              </span>
                            )}
                          </div>
                          <ul className="space-y-1 text-[13px] font-medium leading-relaxed text-[#6b5a4d]">
                            {item.contributions.map((point, index) => (
                              <li key={point} className={`flex items-start gap-2.5 rounded-xl px-2 py-1.5 transition-colors hover:bg-white/70 ${item.isReversed ? 'flex-row-reverse text-right' : ''}`}>
                                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${isThesis ? 'bg-[#b64c60] text-white' : 'bg-white/80 text-[#a66b72] ring-1 ring-[#dcaab0]/30'}`}>
                                  {index + 1}
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-3 border-t border-[#9a6b60]/10 pt-4 sm:grid-cols-2 sm:gap-4">
                          <div>
                            <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b827a]">Công nghệ</span>
                            <p className="text-xs font-bold leading-relaxed text-[#5a4638]/85">{item.tech}</p>
                          </div>
                          <div>
                            <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b827a]">Trọng tâm</span>
                            <p className="text-xs font-bold leading-relaxed text-[#5a4638]/85">{item.role}</p>
                          </div>
                        </div>

                        <div className={`pt-2 ${item.isReversed ? 'text-right' : ''}`}>
                          <a
                            href={item.detailsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Xem tài liệu dự án: ${item.title}`}
                            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b64c60] ${isThesis ? 'bg-[#b64c60] shadow-[#b64c60]/20' : 'bg-[#5a4638] shadow-[#5a4638]/15 hover:bg-[#704f43]'}`}
                          >
                            Chi tiết dự án <ExternalLink size={11} />
                          </a>
                        </div>
                      </div>
                      <span className={`pointer-events-none absolute -bottom-8 -right-1 select-none text-8xl font-black italic leading-none ${isThesis ? 'text-[#b64c60]/[0.08]' : 'text-[#5a4638]/[0.05]'}`}>0{item.id}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}