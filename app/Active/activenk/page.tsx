"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Component Icon Máy bay
const PaperPlaneIcon = () => (
    <svg 
        viewBox="0 0 24 24" 
        className="w-full h-full text-[#d85165] fill-current"
    >
        <path d="M21.4499 1.11L0.709905 10.3C0.199905 10.51 -0.0800953 11.03 0.0199047 11.56C0.119905 12.09 0.589905 12.46 1.12991 12.46H8.70991V20.39C8.70991 21.42 9.99991 21.88 10.6499 21.08L13.8999 17.07L18.5699 21.43C19.0599 21.88 19.8299 21.75 20.1599 21.16L23.7999 2.19C24.0199 1.12 22.4799 0.28 21.4499 1.11ZM18.0699 19.12L10.7099 12.24L20.2599 4.39L18.0699 19.12Z" />
    </svg>
);

function WavyPlaneEffect() {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-visible">
            <motion.div
                className="absolute w-12 h-12"
                style={{ top: "100px" }}
                initial={{ left: "-5vw", opacity: 0 }}
                whileInView={{ 
                    left: ["-5vw", "25vw", "50vw", "75vw", "105vw"],
                    top: ["5%", "20%", "60%", "50%", "40%"],
                    rotate: [20, 35, 10, -10, 0],
                    opacity: [0, 1, 1, 1, 0]
                }}
                transition={{ 
                    duration: 12, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <div className="relative">
                    <div className="w-full h-full filter drop-shadow-[0_5px_15px_rgba(216,81,101,0.5)]">
                        <PaperPlaneIcon />
                    </div>
                    <motion.div 
                        className="absolute top-1/2 right-[90%] w-40 h-[2px] border-t-2 border-dashed border-[#d85165]/20 -translate-y-1/2"
                        style={{ originX: 1 }}
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </div>
    );
}

function AutoChangingImage({ imageList, index, isRow2 = false }: { imageList: string[], index: number, isRow2?: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imageList.length);
        }, 4000 + (index * 400));
        return () => clearInterval(interval);
    }, [imageList, index]);

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: isRow2 ? (index % 2 === 0 ? 80 : -80) : (index % 2 === 0 ? -80 : 80),
                scale: 0.95,
                filter: "blur(6px)"
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                filter: "blur(0px)"
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-[2.5rem] bg-white border-2 border-dashed border-[#d85165]/40 group z-0 ${
                isRow2 
                ? (index % 2 === 0 ? "-translate-y-6" : "translate-y-6")
                : (index % 2 === 0 ? "translate-y-6" : "-translate-y-6")
            }`}
            style={{
                boxShadow: "0 20px 50px -10px rgba(216, 81, 101, 0.4), 0 0 30px 2px rgba(216, 81, 101, 0.2)"
            }}
        >
            <div className="relative w-full h-[220px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageList[currentIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={imageList[currentIndex]}
                            alt="activity"
                            fill
                            className="object-cover group-hover:scale-110 transition duration-700 p-2 rounded-[2.5rem]"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#d85165]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
        </motion.div>
    );
}

const sections = [
    {
        title: "🎭 Văn nghệ & phong trào",
        color: "from-[#ff9a9e] to-[#fecfef]",
        bgImage: "/picture/anhcv/bg.jpg",
        intro: "Mình tích cực tham gia các hoạt động văn nghệ và phong trào của khoa, xem đây là cách để cân bằng giữa học tập và cuộc sống sinh viên, đồng thời lan tỏa năng lượng tích cực đến mọi người xung quanh.",
        outro: "Những trải nghiệm trên giúp mình tự tin hơn khi đứng trước đám đông và hòa nhập tốt hơn trong môi trường tập thể.",
        desc: [
            "Biểu diễn tại “HUSC’s Got Talent 2024”",
            "Văn nghệ chương trình IT-Campus – Khoa CNTT",
            "Chào đón Tân Sinh viên K49 nồng nhiệt",
            "Kỷ niệm 30 năm thành lập Khoa CNTT"
        ],
        row1Pools: [
            ["/picture/hoatdong/HD1 (38).jpg", "/picture/hoatdong/HD1 (5).jpg"],
            ["/picture/hoatdong/HD1 (2).jpg", "/picture/hoatdong/HD1 (95).jpg"],
            ["/picture/hoatdong/HD1 (3).jpg", "/picture/hoatdong/HD1 (12).jpg"],
            ["/picture/hoatdong/HD1 (60).jpg", "/picture/hoatdong/HD1 (11).jpg"],
        ],
        row2Pools: [
            ["/picture/hoatdong/HD1 (46).jpg", "/picture/hoatdong/HD1 (15).jpg"],
            ["/picture/hoatdong/HD1 (49).jpg", "/picture/hoatdong/HD1 (2).jpg"],
            ["/picture/hoatdong/HD1 (11).jpg", "/picture/hoatdong/HD1 (3).jpg"],
            ["/picture/hoatdong/HD1 (36).jpg", "/picture/hoatdong/HD1 (32).jpg"],
        ]
    },
    {
        title: "❤️ Hoạt động cộng đồng",
        color: "from-[#ffecd2] to-[#fcb69f]",
        bgImage: "/picture/anhcv/background.jpg",
        intro: "Bên cạnh đó, mình luôn mong muốn đóng góp cho cộng đồng thông qua những hoạt động ý nghĩa và nhân văn.",
        outro: "Những hoạt động này giúp mình hiểu rõ hơn về giá trị của sự sẻ chia, trách nhiệm và tinh thần cộng đồng.",
        desc: [
            "Hiến tóc cho bệnh nhận ung thư (09/2024)",
            "Hành trình “Uống nước nhớ nguồn” ý nghĩa",
            "Tưởng niệm các Anh hùng Liệt sĩ 27/7",
            "Hỗ trợ nhiệt tình Tân SV K47 nhập học"
        ],
        row1Pools: [
            ["/picture/hoatdong/HD1 (23).jpg", "/picture/khenthuong/anhhd8.jpg"],
            ["/picture/hoatdong/HD1 (10).jpg", "/picture/hoatdong/HD1 (22).jpg"],
            ["/picture/hoatdong/HD1 (4).jpg", "/picture/hoatdong/HD2.jpg"],
            ["/picture/hoatdong/HD1 (90).jpg", "/picture/hoatdong/HD1 (92).jpg"],
        ],
        row2Pools: [
            ["/piCture/hoatdong/HD1 (91).jpg", "/picture/hoatdong/HD1 (22).jpg"],
            ["/picture/hoatdong/HD1 (4).jpg", "/picture/hoatdong/hd1.jpg"],
            ["/picture/hoatdong/HD1 (14).jpg", "/picture/hoatdong/HD2.jpg"],
            ["/picture/khenthuong/chiendich.jpg", "/picture/khenthuong/Hientoc.png"],
        ]
    },
    {
        title: "🌱 Đóng góp & tinh thần sinh viên",
        color: "from-[#a1c4fd] to-[#c2e9fb]",
        bgImage: "/picture/anhcv/bg.jpg",
        intro: "Trong môi trường học tập và sinh hoạt, mình luôn chủ động đóng góp và hỗ trợ những người xung quanh để cùng nhau phát triển.",
        outro: "Từng bước nhỏ đóng góp đều giúp môi trường tập thể thêm vững mạnh.",
        desc: [
            "CLB Hỗ trợ lập trình: Đồng hành cùng K47, K48",
            "Chủ động hỗ trợ bạn bè vượt qua khó khăn",
            "Đóng góp sôi nổi cho phong trào khoa & CLB",
            "Rèn luyện bản lĩnh qua các kỳ trại kỹ năng"
        ],
        row1Pools: [
            ["/picture/khenthuong/anhsp.jpg", "/picture/khenthuong/l9.jpg"],
            ["/picture/khenthuong/anhhd10.jpg", "/picture/khenthuong/anhhd7.jpg"],
            ["/picture/khenthuong/anhhd15.jpg", "/picture/hoatdong/HD1 (1).jpg"],
            ["/picture/khenthuong/anhhd4.jpg", "/picture/hoatdong/HD1 (6).jpg"],
        ],
        row2Pools: [
            ["/picture/hoatdong/HD1 (20).jpg", "/picture/hoatdong/HD1 (86).jpg"],
            ["/picture/hoatdong/HD1 (21).jpg", "/picture/hoatdong/HD1 (85).jpg"],
            ["/picture/hoatdong/HD1 (24).jpg", "/picture/hoatdong/HD1 (59).jpg"],
            ["/picture/hoatdong/HD1 (56).jpg", "/picture/hoatdong/HD1 (50).jpg"],
        ]
    }
];

export default function BeyondSection() {
    return (
        <section className="w-full flex flex-col">
            {sections.map((sec, index) => (
                <div 
                    key={index}
                    className="w-full relative py-24 px-6 md:px-24 overflow-hidden"
                    style={{
                        backgroundImage: `url('${sec.bgImage}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {/* LỚP PHỦ NỀN TRẮNG MỜ CHO TỪNG PHẦN */}
                    <div className="absolute inset-0 bg-white/15 backdrop-blur-[2px] z-0 pointer-events-none" />

                    {/* Hiệu ứng hoa bay */}
                    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, 2000],
                                    x: [0, Math.random() * 100 - 50],
                                    rotate: [0, 720]
                                }}
                                transition={{
                                    duration: 18 + Math.random() * 12,
                                    repeat: Infinity,
                                    delay: i * 1.5,
                                    ease: "linear"
                                }}
                                className="absolute text-2xl opacity-[0.2]"
                                style={{ left: `${Math.random() * 100}%`, top: "-5%" }}
                            >
                                {i % 2 === 0 ? "🌸" : "🍃"}
                            </motion.div>
                        ))}
                    </div>

                    {/* NỘI DUNG CHÍNH */}
                    <div className="relative z-20 space-y-32">
                        
                        {/* Header (Chỉ hiện ở phần đầu tiên) */}
                        {index === 0 && (
                            <div className="relative text-center mb-12">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.1] overflow-hidden">
                                    <span className="text-[100px] md:text-[140px] font-black whitespace-nowrap uppercase tracking-tighter text-[#4a3728]">
                                        INTERN
                                    </span>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="inline-block px-4 py-1 rounded-full bg-[#d85165]/10 text-[#d85165] text-xs font-black tracking-widest mb-4"
                                >
                                    🌸 BEYOND THE CLASSROOM
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                    <h2 className="text-4xl md:text-6xl font-black text-[#4a3728] tracking-tighter leading-tight drop-shadow-md">
                                        Hoạt động ngoại khóa <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#b53d54] animate-pulse">
                                            của mình
                                        </span>
                                    </h2>
                                </motion.div>
                            </div>
                        )}

                        {/* Chi tiết nội dung section */}
                        <div className="space-y-16">
                            <div className={`max-w-5xl flex flex-col ${index % 2 !== 0 ? "ml-auto text-right items-end" : "mr-auto text-left items-start"}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className={`inline-block px-8 py-3 rounded-tr-[2rem] rounded-bl-[2rem] bg-gradient-to-r ${sec.color} shadow-[5px_5px_0px_#4a3728] mb-8 text-[#4a3728] font-black text-2xl md:text-4xl`}
                                >
                                    {sec.title}
                                </motion.div>

                                <motion.p 
                                    className={`text-[#6f5643] text-lg md:text-xl font-medium leading-relaxed mb-8 border-[#d85165] pl-6 ${index % 2 !== 0 ? "border-r-4 border-l-0 pr-6 text-right" : "border-l-4"}`}
                                >
                                    {sec.intro}
                                </motion.p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-[16px] w-full">
                                    {sec.desc.map((item, i) => (
                                        <div key={i} className={`p-4 rounded-2xl bg-white shadow-sm border border-[#d85165]/5 flex items-center gap-4 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                                            <span className={`w-3 h-3 rounded-full bg-gradient-to-br ${sec.color}`} />
                                            <span className="font-bold text-[#4a3728]">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[#8b6d4d] italic font-semibold text-lg bg-[#d85165]/5 inline-block px-4 py-2 rounded-xl">
                                    ✨ {sec.outro}
                                </p>
                            </div>

                            <div className="relative pt-10">
                                <WavyPlaneEffect />
                                <div className="space-y-10 relative z-0">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {sec.row1Pools.map((pool, i) => (
                                            <AutoChangingImage key={i} imageList={pool} index={i} isRow2={false} />
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                                        {sec.row2Pools.map((pool, i) => (
                                            <AutoChangingImage key={i} imageList={pool} index={i} isRow2={true} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Quote (Chỉ hiện ở phần cuối cùng) */}
                        {index === sections.length - 1 && (
                            <motion.div className="text-center pt-5">
                                <div className="inline-block bg-gradient-to-r from-[#d85165] to-[#ffafbd] p-[1px] rounded-[2rem] shadow-lg">
                                    <div className="bg-white/95 backdrop-blur-sm px-8 py-6 rounded-[1.9rem]">
                                        <p className="text-xl md:text-2xl font-bold text-[#4a3728] leading-tight italic">
                                            “Không chỉ học tập, mình còn <span className="text-[#d85165]">trưởng thành</span> qua những trải nghiệm và giá trị mang lại cho cộng đồng.”
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}