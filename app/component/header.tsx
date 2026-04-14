"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const pathname = usePathname();

    const menuItems = [
        { name: "Trang chủ", href: "/" },
        {
            name: "Giới Thiệu",
            href: "/Introduction",
        },
        {
            name: "Kỹ Năng", href: "#ky-nang",
            subMenu: [
                { name: "Kỹ năng chuyên môn", href: "/ItemSection" },
                { name: "kỹ năng mềm", href: "#branding" },
            ]
        },
        {
            name: "Dự Án",href: "/ProjectSection",
        },
        { name: "Hoạt động", href: "#hoat-dong" },
        { name: "Blog", href: "#blog" },
        { name: "Liên hệ", href: "#lien-he" },
    ];

    return (
        <header className="w-full bg-[#f9f5f0] relative z-50 shadow-sm border-b border-[#e8dfd5]/50">

            {/* Background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-[radial-gradient(circle,#f3e1d1_0%,transparent_70%)]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 h-[80px] flex items-center justify-between relative">

                {/* LOGO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: [1, 1.05, 1] }}
                    transition={{
                        opacity: { duration: 0.8 },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative z-30 w-[180px] md:w-[280px]"
                >
                    <Link href="/">
                        <div className="absolute top-[-45px] md:top-[-75px] left-0">
                            <Image
                                src="/Picture/anhcv/anhlogo3.png"
                                alt="logo Khánh Linh"
                                width={320}
                                height={160}
                                priority
                                className="object-contain drop-shadow-md cursor-pointer scale-75 md:scale-100"
                            />
                        </div>
                    </Link>
                </motion.div>

                {/* DESKTOP MENU */}
                <nav className="hidden lg:flex items-center gap-6 text-[#8b6d4d] font-medium relative z-20">
                    {menuItems.map((item, index) => {
                        const hasSubMenu = !!item.subMenu;
                        const isActive = pathname === item.href;

                        return (
                            <div
                                key={index}
                                className="relative py-4"
                                onMouseEnter={() => hasSubMenu && setActiveDropdown(index)}
                                onMouseLeave={() => hasSubMenu && setActiveDropdown(null)}
                            >
                                <div className="flex items-center gap-1 group cursor-pointer transition-colors hover:text-[#b58d63]">
                                    <Link
                                        href={item.href}
                                        className={`text-[14px] uppercase tracking-[0.1em] ${isActive ? "text-[#b58d63]" : ""}`}
                                    >
                                        {item.name}
                                    </Link>
                                    {hasSubMenu && (
                                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`} />
                                    )}
                                    {/* Underline hiệu ứng */}
                                    <span className={`absolute bottom-3 left-0 h-[1.5px] bg-[#b58d63] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                                </div>

                                {/* DROPDOWN MENU */}
                                <AnimatePresence>
                                    {hasSubMenu && activeDropdown === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-[100%] left-[-20px] min-w-[200px] bg-white/95 backdrop-blur-xl border border-[#e8dfd5] shadow-xl shadow-[#8b6d4d]/5 rounded-2xl overflow-hidden p-2"
                                        >
                                            {item.subMenu?.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={sub.href}
                                                    className="flex items-center px-4 py-3 text-[13px] text-[#8b6d4d] hover:bg-[#f9f5f0] hover:text-[#b58d63] rounded-xl transition-all"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#b58d63]/30 mr-3 group-hover:bg-[#b58d63]" />
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}

                    <motion.button whileHover={{ scale: 1.1 }} className="ml-4 text-[#8b6d4d] hover:text-[#b58d63]">
                        <Search size={20} strokeWidth={2.5} />
                    </motion.button>
                </nav>

                {/* MOBILE */}
                <div className="flex lg:hidden items-center gap-4 relative z-50">
                    <Search size={20} className="text-[#8b6d4d]" />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#8b6d4d] p-1"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 lg:hidden bg-[#f9f5f0] z-[40] p-6 pt-24"
                    >
                        <div className="flex flex-col gap-2 overflow-y-auto h-full">
                            {menuItems.map((item, index) => (
                                <div key={index} className="border-b border-[#e8dfd5]/50 py-2">
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href={item.href}
                                            onClick={() => !item.subMenu && setIsOpen(false)}
                                            className="text-xl font-semibold text-[#8b6d4d]"
                                        >
                                            {item.name}
                                        </Link>
                                        {item.subMenu && (
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                                                className="p-2"
                                            >
                                                <ChevronDown className={`transition-transform ${activeDropdown === index ? "rotate-180" : ""}`} />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Submenu */}
                                    {item.subMenu && activeDropdown === index && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            className="pl-4 mt-2 flex flex-col gap-3"
                                        >
                                            {item.subMenu.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-[#b58d63] text-base italic"
                                                >
                                                    + {sub.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* PETALS */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <motion.span
                        key={i}
                        initial={{ y: -20, x: 200 * i, opacity: 0 }}
                        animate={{ y: 120, opacity: [0, 0.4, 0] }}
                        transition={{ duration: 8, repeat: Infinity, delay: i * 2 }}
                        className="absolute text-[12px]"
                    >
                        🌸
                    </motion.span>
                ))}
            </div>
        </header>
    );
}