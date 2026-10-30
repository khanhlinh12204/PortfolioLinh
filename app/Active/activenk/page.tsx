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
        <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
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

function AutoChangingImage({ imageList, index, isRow2 = false, entranceDelay = 0 }: { imageList: string[], index: number, isRow2?: boolean, entranceDelay?: number }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imageList.length);
        }, 6500 + (index * 500));
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
            transition={{ duration: 0.8, delay: entranceDelay, ease: "easeOut" }}
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
                        transition={{ duration: 1.4, ease: "easeInOut" }}
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
        notes: [
            "Một lần tự tin tỏa sáng dưới ánh đèn sân khấu.",
            "Góp thêm sắc màu cho ngày hội của khoa.",
            "Cùng tạo nên khởi đầu thật đáng nhớ cho K49.",
            "Lưu giữ niềm vui trong dịp đặc biệt của khoa."
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
            "Hiến tóc cho bệnh nhân ung thư (09/2024)",
            "Hành trình “Uống nước nhớ nguồn” ý nghĩa",
            "Tưởng niệm các Anh hùng Liệt sĩ 27/7",
            "Hỗ trợ nhiệt tình Tân SV K47 nhập học",
            "Tham gia hiến máu tình nguyện",
            "Tình nguyện hỗ trợ cộng đồng trong mùa dịch COVID-19"
        ],
        notes: [
            "Trao đi yêu thương bằng một hành động nhỏ.",
            "Trân trọng những giá trị và nghĩa tình xưa.",
            "Một phút lắng lòng để bày tỏ niềm tri ân.",
            "Gửi lời chào thân thiện đến các bạn tân sinh viên.",
            "Góp một phần nhỏ để sẻ chia và tiếp thêm hy vọng.",
            "Chung tay giúp đỡ mọi người trong giai đoạn khó khăn."
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
        intro: "Mình tích cực góp sức cho hoạt động của CLB và Khoa, từ kết nối thành viên đến hỗ trợ các chương trình học thuật.",
        outro: "Mỗi hoạt động là một cơ hội để sẻ chia trách nhiệm, kết nối mọi người và góp phần tạo nên tập thể gắn bó.",
        desc: [
            "Tổ chức trại team building cho các thành viên CLB",
            "Tình nguyện viên hỗ trợ các cuộc thi của Khoa",
            "Đồng hành cùng thành viên CLB Hỗ trợ Lập trình",
            "Chung tay tổ chức hoạt động và phong trào của Khoa"
        ],
        notes: [
            "Tạo không gian giao lưu, gắn kết và cùng nhau trải nghiệm.",
            "Góp sức để các cuộc thi diễn ra chỉn chu, thuận lợi.",
            "Kết nối, chia sẻ và hỗ trợ các thành viên trong CLB.",
            "Cùng xây dựng môi trường sinh viên năng động."
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
    const [expandedSections, setExpandedSections] = useState<number[]>([]);

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
                            <div className="relative mx-auto max-w-6xl">
                                <div className={`pointer-events-none absolute -top-5 h-px w-2/3 bg-gradient-to-r ${sec.color} opacity-80 ${index % 2 === 0 ? "left-0" : "right-0 rotate-180"}`} />

                                <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className={`activity-intro relative isolate overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white/85 via-white/65 to-white/40 p-6 shadow-[0_20px_55px_rgba(74,55,40,0.12)] backdrop-blur-xl sm:rounded-[2.25rem] sm:p-8 md:col-span-5 ${index % 2 !== 0 ? "md:order-2" : ""}`}
                                    >
                                        <span className={`pointer-events-none absolute -right-2 -top-8 -z-10 select-none text-[150px] font-black leading-none tracking-tighter text-[#4a3728]/[0.035] sm:text-[190px] ${index % 2 !== 0 ? "-left-3 right-auto" : ""}`}>
                                            0{index + 1}
                                        </span>

                                        <span className={`mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${sec.color} px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#4a3728] shadow-[0_5px_16px_rgba(74,55,40,0.1)] sm:text-[10px]`}>
                                            <span className="h-1.5 w-1.5 rounded-full bg-white/90 shadow-sm" />
                                            Hoạt động tiêu biểu
                                            <span className="opacity-60">·</span>
                                            0{index + 1}
                                        </span>

                                        <h3 className="max-w-lg text-3xl font-black leading-[1.08] tracking-tight text-[#4a3728] sm:text-4xl lg:text-[2.75rem]">
                                            {sec.title}
                                        </h3>

                                        <div className={`my-5 h-1 w-20 rounded-full bg-gradient-to-r ${sec.color} shadow-sm`} />

                                        <p className="relative max-w-xl text-[15px] font-medium leading-7 text-[#5f4939] sm:text-base sm:leading-8">
                                            {sec.intro}
                                        </p>

                                        <div className="mt-7 rounded-2xl border border-white/80 bg-white/65 p-4 shadow-sm sm:mt-8 sm:p-5">
                                            <div className="mb-2 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.17em] text-[#9b7563]">
                                                <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${sec.color}`} />
                                                Điều mình trân trọng
                                            </div>
                                            <p className="text-[13px] font-semibold italic leading-6 text-[#765b48] sm:text-sm">
                                                “{sec.outro}”
                                            </p>
                                        </div>
                                    </motion.div>

                                    <div className={`activity-list relative md:col-span-7 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                                        <div className={`relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-white/55 via-white/35 to-white/20 p-4 shadow-[0_18px_48px_rgba(74,55,40,0.08)] backdrop-blur-md sm:rounded-[2rem] sm:p-6`}>
                                            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#4a3728]/[0.08] pb-4 sm:mb-6">
                                                <div className="flex items-center gap-3">
                                                    <span className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${sec.color} text-xs font-black text-[#4a3728] shadow-[0_7px_18px_rgba(74,55,40,0.14)]`}>
                                                        0{index + 1}
                                                    </span>
                                                    <div>
                                                        <span className="mb-0.5 block text-[9px] font-black uppercase tracking-[0.19em] text-[#9b7563]">
                                                            Hành trình tham gia
                                                        </span>
                                                        <span className="text-base font-black tracking-tight text-[#4a3728] sm:text-lg">
                                                            Những dấu ấn
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="shrink-0 rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-[9px] font-black tracking-[0.12em] text-[#8b6d4d] shadow-sm">
                                                    {String(sec.desc.length).padStart(2, "0")} HOẠT ĐỘNG
                                                </span>
                                            </div>

                                            <div className={`relative ${sec.desc.length > 4 ? "space-y-2 sm:space-y-2.5" : "space-y-3 sm:space-y-4"}`}>
                                                <span className={`absolute bottom-7 left-[35px] top-7 w-0.5 rounded-full bg-gradient-to-b ${sec.color} opacity-75`} />
                                            {sec.desc.slice(0, expandedSections.includes(index) ? sec.desc.length : 5).map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: 16 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.07 }}
                                                    whileHover={{ x: 4, y: -2 }}
                                                    className={`group relative flex items-center overflow-hidden rounded-2xl border border-white/90 bg-[#fffdfa]/90 shadow-[0_8px_24px_rgba(74,55,40,0.07)] transition-all duration-300 hover:border-[#d85165]/20 hover:bg-white hover:shadow-[0_16px_34px_rgba(181,61,84,0.14)] ${sec.desc.length > 4 ? "min-h-[68px] gap-3 px-3 py-2.5 sm:min-h-[76px] sm:gap-4 sm:px-4 sm:py-3" : "min-h-[92px] gap-4 px-4 py-4 sm:min-h-[104px] sm:gap-5 sm:px-5 sm:py-4"}`}
                                                >
                                                    <span className={`absolute inset-y-4 left-0 w-1 rounded-r-full bg-gradient-to-b ${sec.color} opacity-70 transition-all group-hover:inset-y-3 group-hover:w-1.5`} />
                                                    <span className={`relative z-10 flex shrink-0 items-center justify-center rounded-full border-[4px] border-[#fffdfa] bg-gradient-to-br ${sec.color} font-black text-[#4a3728] shadow-[0_5px_14px_rgba(74,55,40,0.16)] transition-transform group-hover:scale-110 ${sec.desc.length > 4 ? "h-8 w-8 text-[8px] sm:h-9 sm:w-9 sm:text-[9px]" : "h-10 w-10 text-[9px] sm:h-11 sm:w-11 sm:text-[10px]"}`}>
                                                        0{i + 1}
                                                    </span>
                                                    <span className="flex-1">
                                                        <span className={`block font-bold leading-relaxed text-[#4a3728] ${sec.desc.length > 4 ? "text-[12px] sm:text-[13px]" : "text-[13px] sm:text-sm"}`}>
                                                            {item}
                                                        </span>
                                                        <span className={`block font-medium leading-relaxed text-[#9b7563] ${sec.desc.length > 4 ? "mt-0.5 text-[10px] sm:text-[11px]" : "mt-1 text-[11px] sm:text-xs"}`}>
                                                            {sec.notes[i]}
                                                        </span>
                                                    </span>
                                                    <span aria-hidden="true" className="ml-auto text-lg font-light text-[#b53d54]/35 transition-all group-hover:translate-x-1 group-hover:text-[#b53d54]">›</span>
                                                </motion.div>
                                            ))}
                                            </div>
                                            {sec.desc.length > 5 && (
                                                <button
                                                    type="button"
                                                    aria-expanded={expandedSections.includes(index)}
                                                    onClick={() => setExpandedSections((current) =>
                                                        current.includes(index)
                                                            ? current.filter((sectionIndex) => sectionIndex !== index)
                                                            : [...current, index]
                                                    )}
                                                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-xs font-black text-[#765b48] shadow-sm transition-all hover:border-[#d85165]/20 hover:bg-white hover:text-[#b53d54] hover:shadow-md"
                                                >
                                                    <span>{expandedSections.includes(index) ? "Thu gọn" : `Xem thêm ${sec.desc.length - 5} hoạt động`}</span>
                                                    <span aria-hidden="true" className={`text-base transition-transform ${expandedSections.includes(index) ? "rotate-180" : ""}`}>⌄</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
                                className="relative pt-10"
                            >
                                <div className="relative z-20 mx-auto mb-4 flex w-fit max-w-full items-center justify-center gap-3 rounded-full border border-white/90 bg-[#fffaf6]/95 px-5 py-2.5 text-center shadow-[0_8px_24px_rgba(74,55,40,0.12)] backdrop-blur-md sm:mb-5 sm:px-6">
                                    <span className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${sec.color}`} />
                                    <span className="whitespace-nowrap text-[9px] font-black uppercase tracking-[0.14em] text-[#765b48] sm:text-[10px] sm:tracking-[0.18em]">
                                        Những khoảnh khắc được lưu giữ
                                    </span>
                                    <span className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${sec.color}`} />
                                </div>
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                                    <motion.span
                                        className="absolute left-[3%] top-[24%] text-2xl opacity-50 drop-shadow-sm sm:left-[5%] sm:text-3xl"
                                        animate={{ y: [0, -14, 4, 0], x: [0, 8, -3, 0], rotate: [0, 18, -12, 0], opacity: [0.35, 0.7, 0.45, 0.35] }}
                                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        🌸
                                    </motion.span>
                                    <motion.span
                                        className="absolute right-[4%] top-[39%] text-xl opacity-45 sm:right-[6%] sm:text-2xl"
                                        animate={{ y: [0, 12, -8, 0], x: [0, -7, 5, 0], rotate: [0, -24, 14, 0], opacity: [0.3, 0.6, 0.4, 0.3] }}
                                        transition={{ duration: 8, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        🍃
                                    </motion.span>
                                    <motion.span
                                        className="absolute left-[47%] top-[70%] text-lg text-[#d85165]/60 sm:left-[48%] sm:text-xl"
                                        animate={{ y: [0, -10, 0], scale: [0.8, 1.15, 0.8], opacity: [0.25, 0.75, 0.25] }}
                                        transition={{ duration: 3.8, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        ✦
                                    </motion.span>
                                    <motion.span
                                        className="absolute right-[24%] top-[11%] text-sm text-[#d85165]/50 sm:right-[28%] sm:text-base"
                                        animate={{ y: [0, -8, 2, 0], rotate: [0, 45, 90], opacity: [0.2, 0.65, 0.2] }}
                                        transition={{ duration: 4.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        ✧
                                    </motion.span>
                                </div>
                                <WavyPlaneEffect />
                                <div className="relative z-10 space-y-10">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {sec.row1Pools.map((pool, i) => (
                                            <AutoChangingImage key={i} imageList={pool} index={i} isRow2={false} entranceDelay={0.12 + i * 0.06} />
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                                        {sec.row2Pools.map((pool, i) => (
                                            <AutoChangingImage key={i} imageList={pool} index={i} isRow2={true} entranceDelay={0.3 + i * 0.06} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
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