"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// --- DỮ LIỆU KỸ NĂNG ---
const skillsData = [
  {
    title: "Programming",
    icon: <Code2 className="w-5 h-5" />,
    position: "top-[-10%] left-[-10%] md:top-[0%] md:left-[-15%]",
    color: "from-[#ffb7c5] to-[#f4a261]",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C/C++", level: 75 },
    ],
  },
  {
    title: "AI / ML & Vision",
    icon: <BrainCircuit className="w-5 h-5" />,
    position: "top-[-10%] right-[-10%] md:top-[0%] md:right-[-15%]",
    color: "from-[#ff8fa3] to-[#ffb7c5]",
    items: [
      { name: "Deep Learning", level: 75 },
      { name: "Computer Vision", level: 70 },
      { name: "CNN Architectures", level: 70 },
    ],
  },
  {
    title: "Data Intelligence",
    icon: <Database className="w-5 h-5" />,
    position: "bottom-[-10%] left-[-10%] md:bottom-[0%] md:left-[-15%]",
    color: "from-[#8b6d4d] to-[#d4a373]",
    items: [
      { name: "Data Processing", level: 80 },
      { name: "Visualization", level: 75 },
      { name: "Kaggle Competitions", level: 70 },
    ],
  },
  {
    title: "Web Development",
    icon: <Globe className="w-5 h-5" />,
    position: "bottom-[-10%] right-[-10%] md:bottom-[0%] md:right-[-15%]",
    color: "from-[#ffb7c5] to-[#faedcd]",
    items: [
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
        {/* <Image
          src="/Picture/anhcv/bg.jpg"
          alt="Background Image"
          fill
          priority
          quality={100}
          className="object-cover grayscale-[40%]"
        /> */}
        {/* Lớp phủ Glassmorphism để hiện nền ảnh */}
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

      <div className="relative z-20 w-full max-w-5xl flex-1 flex items-center justify-center min-h-[600px] md:min-h-[700px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 w-80 h-80 md:w-[480px] md:h-[480px] flex items-center justify-center"
        >
          <div className="absolute inset-20 bg-[#ff8fa3] rounded-full blur-[100px] opacity-30 animate-pulse" />
          <div className="relative w-full h-full overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[morph_10s_ease-in-out_infinite] border-4 border-white shadow-[0_30px_60px_rgba(255,183,197,0.3)] bg-white/50 backdrop-blur-md flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute pointer-events-none select-none opacity-[0.05]"
            >
              <span className="text-[350px] md:text-[550px] leading-none">🌸</span>
            </motion.div>
            <div className="relative z-20 flex flex-col items-center">
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl md:text-[140px] font-serif italic font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ff4d6d] to-[#ffdae0] drop-shadow-[0_0_20px_rgba(255,77,109,0.4)] select-none px-4"
              >
                Skill
              </motion.span>
              <div className="h-[2px] w-[60%] bg-gradient-to-r from-transparent via-[#ff4d6d] to-transparent mt-[-10px] opacity-60" />
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-60px] pointer-events-none"
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
            className={`absolute z-30 ${group.position} w-[290px] md:w-[350px] group`}
          >
            <div className="relative p-7 md:p-9 rounded-[40px] bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_rgba(255,183,197,0.1)] transition-all group-hover:bg-white/95 group-hover:shadow-[#ffdae0]/40 overflow-hidden">
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${group.color} text-white shadow-md`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4a3728] group-hover:text-[#ff4d6d] transition-colors">
                  {group.title}
                </h3>
              </div>
              <div className="space-y-7 relative z-10">
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