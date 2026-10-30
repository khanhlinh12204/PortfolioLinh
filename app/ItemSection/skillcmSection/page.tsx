"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// --- DỮ LIỆU KỸ NĂNG ---
const skillsData = [
  {
    title: "Programming",
    description: "Sử dụng Python, Java và C/C++ để xây dựng chương trình, xử lý logic và giải quyết các bài toán lập trình.",
    icon: <Code2 className="w-5 h-5" />,
    position: "lg:top-0 lg:left-[-15%]",
    color: "from-[#ffb7c5] to-[#f4a261]",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "AI / ML & Vision",
    description: "Ứng dụng học sâu, thị giác máy tính và NLP vào các bài toán nhận diện, phân loại hình ảnh và xử lý ngôn ngữ.",
    icon: <BrainCircuit className="w-5 h-5" />,
    position: "lg:top-0 lg:right-[-15%]",
    color: "from-[#ff8fa3] to-[#ffb7c5]",
    items: [
      { name: "Deep Learning (PyTorch, TensorFlow)", level: 75 },
      { name: "Computer Vision (YOLOv8, OpenCV)", level: 70 },
      { name: "NLP (PhoBERT, Transformers)", level: 70 },
    ],
  },
  {
    title: "Data Intelligence",
    description: "Tiền xử lý, phân tích và trực quan hóa dữ liệu bằng các thư viện Python; thực hành mô hình trên Kaggle và Google Colab.",
    icon: <Database className="w-5 h-5" />,
    position: "lg:bottom-0 lg:left-[-15%]",
    color: "from-[#8b6d4d] to-[#d4a373]",
    items: [
      { name: "Data Processing (Pandas, NumPy)", level: 80 },
      { name: "Data Visualization (Matplotlib)", level: 75 },
      { name: "Kaggle & Google Colab", level: 70 },
    ],
  },
  {
    title: "Web Development",
    description: "Xây dựng giao diện web với Next.js, React và Tailwind CSS, chú trọng bố cục rõ ràng và khả năng hiển thị trên nhiều thiết bị.",
    icon: <Globe className="w-5 h-5" />,
    position: "lg:bottom-0 lg:right-[-15%]",
    color: "from-[#ffb7c5] to-[#faedcd]",
    items: [
      { name: "HTML & CSS", level: 85 },
      { name: "Next.js & React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Responsive UI", level: 80 },
    ],
  },
];

const FloatingPetals = () => {
  const [petals, setPetals] = useState<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
  }[]>([]);
  useEffect(() => {
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 15,
      size: 15 + Math.random() * 20,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -50, x: `${petal.left}vw`, rotate: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            x: `${petal.left + (Math.random() * 10 - 5)}vw`,
            rotate: 360,
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear"
          }}
          className="absolute text-pink-300"
          style={{ fontSize: petal.size }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default function SkillSection() {
  return (
    <section className="relative w-full py-10 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/picture/anhcv/background.jpg')" }} >
      {/* Lớp phủ phía trên ảnh nền */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      {/* 📸 PHẦN CHỈNH SỬA: BACKGROUND NỀN TOÀN TRANG */}
      <div className="absolute inset-0 z-[-1]" >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div >

      {/* GIỮ NGUYÊN TOÀN BỘ PHẦN DƯỚI ĐÂY */}
      < FloatingPetals />

      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-pink-100/30 blur-[100px] rounded-full pointer-events-none"
      />

      {/* HEADER - Đã cập nhật tiêu đề và nội dung mới */}
      <div className="relative z-20 max-w-7xl mx-auto w-full mb-24 flex flex-col md:flex-row items-end justify-between gap-8 text-[#4a3728]">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4 bg-white/80 w-fit px-4 py-1.5 rounded-full border border-[#ffdae0] backdrop-blur-sm shadow-sm"
          >
            <Sparkles size={16} className="text-[#ff8fa3] animate-pulse" />
            <span className="text-[#ff8fa3] font-bold text-[10px] uppercase tracking-[0.3em]">Năng lực chuyên môn</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
            Kỹ năng & <br />
            <span className="italic font-serif font-light text-[#ff8fa3]">Công cụ.</span>
          </h2>
        </div>
        <p className="max-w-[320px] text-[#8b6d4d] text-sm italic font-medium border-l-2 border-[#ffb7c5] pl-4 leading-relaxed bg-white/40 backdrop-blur-sm p-2 rounded-r-lg shadow-sm">
          "Làm chủ công nghệ để hiện thực hóa những ý tưởng đột phá."
        </p>
      </div>

      <div className="relative z-20 grid w-full max-w-5xl grid-cols-1 items-center justify-items-center gap-6 px-5 py-8 sm:grid-cols-2 lg:block lg:min-h-[900px] lg:px-0 lg:py-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[600px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-[#e8bdc5]/60 lg:block"
        >
          <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-[#e8aeba] shadow-[0_0_0_5px_rgba(255,255,255,0.55)]" />
          <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-[#e8aeba] shadow-[0_0_0_5px_rgba(255,255,255,0.55)]" />
          <span className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-[#e8aeba] shadow-[0_0_0_5px_rgba(255,255,255,0.55)]" />
          <span className="absolute left-1/2 -bottom-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-[#e8aeba] shadow-[0_0_0_5px_rgba(255,255,255,0.55)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 col-span-full flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 lg:absolute lg:left-1/2 lg:top-1/2 lg:h-[420px] lg:w-[420px] lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <div className="absolute inset-16 bg-[#ff8fa3] rounded-full blur-[90px] opacity-30 animate-pulse" />
          <div className="relative w-full h-full overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[morph_10s_ease-in-out_infinite] border-4 border-white shadow-[0_30px_60px_rgba(255,183,197,0.3)] bg-white/50 backdrop-blur-md flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute pointer-events-none select-none opacity-[0.05]"
            >
              <span className="text-[280px] md:text-[460px] leading-none">🌸</span>
            </motion.div>
            <div className="relative z-20 flex flex-col items-center">
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl sm:text-8xl md:text-[120px] font-serif italic font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ff4d6d] to-[#ffdae0] drop-shadow-[0_0_20px_rgba(255,77,109,0.4)] select-none px-4"
              >
                Skill
              </motion.span>
              <div className="mt-1 h-[2px] w-[52%] bg-gradient-to-r from-transparent via-[#ff4d6d] to-transparent opacity-60" />
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#ffdae0]/80 bg-white/65 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#b65b6c] shadow-sm backdrop-blur-sm">
                <Sparkles size={11} />
                Skills & tools
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-48px] pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="absolute text-2xl md:text-3xl opacity-70"
                style={{
                  top: `${50 + 55 * Math.cos(i * 60 * Math.PI / 180)}%`,
                  left: `${50 + 55 * Math.sin(i * 60 * Math.PI / 180)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                🌸
              </span>
            ))}
          </motion.div>
        </motion.div>

        {skillsData.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
            className={`relative z-30 w-full max-w-[350px] group lg:absolute ${group.position}`}
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/85 p-6 shadow-[0_18px_40px_rgba(92,56,66,0.12)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/95 group-hover:shadow-[0_24px_48px_rgba(92,56,66,0.18)] md:p-7">
              <div className={`absolute inset-x-8 top-0 h-[3px] rounded-full bg-gradient-to-r ${group.color}`} />
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className={`shrink-0 rounded-2xl bg-gradient-to-br ${group.color} p-3 text-white shadow-md shadow-pink-200/40 ring-4 ring-white`}>
                  {group.icon}
                </div>
                <div>
                  <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#c1848e]">
                    Năng lực chuyên môn
                  </span>
                  <h3 className="text-xl font-bold text-[#4a3728] group-hover:text-[#ff4d6d] transition-colors">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#8b6d4d]">
                    {group.description}
                  </p>
                </div>
              </div>
              <div className="relative z-10 space-y-5 border-t border-[#f2e4e3] pt-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aa8580]">
                  Công nghệ tiêu biểu
                </p>
                {group.items.map((skill, index) => (
                  <div key={index} className="group/item">
                    <div className="flex justify-between items-center mb-2 text-[10px] font-bold uppercase tracking-widest text-[#8b6d4d]">
                      <span>{skill.name}</span>
                      <span className="text-[#ff4d6d]">{skill.level}%</span>
                    </div>
                    <div className="h-[5px] w-full bg-pink-50/50 rounded-full relative shadow-inner border border-pink-100/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 2, ease: "circOut", delay: 0.8 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${group.color} relative rounded-full`}
                      >
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[16px] z-20"
                        >
                          🌸
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
      `}</style>
    </section >
  );
}