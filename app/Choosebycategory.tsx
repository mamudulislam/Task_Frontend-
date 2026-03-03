import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "FACE CARE",
    image: "/images/face.png",
  },
  {
    title: "BODY CARE",
    image: "/images/body.png",
  },
  {
    title: "HAIR CARE",
    image: "/images/hair.png",
    featured: true,
  },
  {
    title: "ORGANIC",
    image: "/images/organic.png",
  },
];

export default function CategorySection() {
  return (
    <section
      className="w-full py-[70px] bg-[#FAFFE5]"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-[50px]">
          <h3 className="relative z-10 text-[48px] leading-[56px] font-normal text-black">
            Choose by category
          </h3>

          <div className="flex items-center gap-4">
            <button className="w-[44px] h-[44px] rounded-full border border-[#C8CEB5] flex items-center justify-center text-[#6B705C] hover:bg-[#6B705C] hover:text-white transition">
              <ArrowLeft size={18} />
            </button>

            <button className="w-[44px] h-[44px] rounded-full border border-[#C8CEB5] flex items-center justify-center text-[#6B705C] hover:bg-[#6B705C] hover:text-white transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-[20px] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Center arrow (only for featured) */}
              {item.featured && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[90px] h-[90px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <ArrowUpRight size={28} className="text-white" />
                  </div>
                </div>
              )}

              {/* Bottom label */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-[#7A5C46]/80 backdrop-blur-md rounded-[16px] px-6 py-4">
                  <p className="text-white text-[20px] leading-[26px] tracking-[1px] uppercase font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}