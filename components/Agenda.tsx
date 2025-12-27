import React from 'react';
import { motion } from 'framer-motion';

const chapters = [
  {
    title: "Chapter 1: Tổ Kén",
    subtitle: "Nhìn Lại",
    theme: "Reflection",
    items: [
      { time: "18:45 – 19:15", label: "Set the Space", desc: "Hạ nhịp. Vào mood." },
      { time: "19:15", label: "Opening", desc: "Set up. Bật nhạc. Thắp nến." },
      { time: "19:30 – 20:00", label: "Ăn tối", desc: "Thưởng thức cùng nhau." },
      { time: "20:00 – 20:25", label: "Recap & Văn nghệ", desc: "Những gì đã đi qua." },
      { time: "20:25 – 20:45", label: "Đóng kén", desc: "Viết ra điều đã làm. Bỏ bớt thứ không còn cần." },
    ]
  },
  {
    title: "Chapter 2: Phá Kén",
    subtitle: "Mở Ra",
    theme: "Rebirth",
    items: [
      { time: "20:45 – 21:05", label: "Viết mở ra", desc: "Cho bản thân. Cho chúng mình." },
      { time: "21:05 – 21:20", label: "Tarot", desc: "Từ khóa dẫn lối cho năm 2026." },
      { time: "21:20 – 21:40", label: "Cảm ơn", desc: "Cảm ơn mình. Cảm ơn nhau. Chào năm mới." },
      { time: "21:40 – 21:50", label: "Thiền kết", desc: "Ngồi yên. Đặt tay lên tim. Kết lại." },
    ]
  }
];

export const Agenda: React.FC = () => {
  return (
    <div className="space-y-80">
      {chapters.map((chapter, idx) => (
        <motion.div
          key={chapter.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          {/* Chapter Header - Italicized */}
          <div className="text-center mb-48">
            <h2 className="font-serif italic text-7xl sm:text-9xl text-white mb-6 tracking-tight text-dreamy">
              {chapter.title}
            </h2>
            <p className="font-dreamy italic text-3xl sm:text-5xl text-purple-300/70 tracking-[0.05em] font-medium text-dreamy">
              {chapter.subtitle}
            </p>
          </div>

          {/* Timeline - Robust Visibility, Italic */}
          <div className="space-y-28 max-w-3xl mx-auto">
            {chapter.items.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-20 items-center sm:items-baseline text-center sm:text-left group"
              >
                <span className="font-dreamy italic text-xl sm:text-2xl text-purple-300/40 tracking-wide min-w-[180px] group-hover:text-purple-300 transition-colors duration-500 font-medium">
                  {item.time}
                </span>
                <div className="flex-1">
                  <h3 className="font-dreamy italic text-3xl sm:text-4xl text-white font-medium tracking-wide mb-3 group-hover:text-purple-200 transition-colors duration-500">
                    {item.label}
                  </h3>
                  <p className="font-inter text-gray-400 text-lg sm:text-xl font-normal leading-relaxed tracking-normal group-hover:text-gray-200 transition-colors duration-500 opacity-80">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Soft Chapter Visual Backdrops */}
          <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] blur-[180px] opacity-[0.08] rounded-full ${idx === 0 ? 'bg-white' : 'bg-purple-500'}`} />
        </motion.div>
      ))}
    </div>
  );
};