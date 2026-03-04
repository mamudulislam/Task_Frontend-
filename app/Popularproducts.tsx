import React from "react";

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: "Cucumber Extract",
  price: "$24.00",
  oldPrice: "$32.00",
  discount: "10%",
  image: "/images/products.png",
}));

export default function PopularProducts() {
  return (
    <section className="w-full bg-[#F5F5F5] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal leading-snug text-[#1E1E1E]">
              Popular Products
            </h2>

            {/* Category Pills */}
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {["Face Care", "Body Care", "Hair Care", "Organic"].map((cat) => (
                <button
                  key={cat}
                  className={`rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-[16px] font-medium transition ${
                    cat === "Face Care"
                      ? "bg-[#6B7A1F] text-white"
                      : "bg-[#EAEAEA] text-[#333] hover:bg-[#6B7A1F] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <button className="whitespace-nowrap rounded-full border border-[#6B7A1F] px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-[16px] font-medium text-[#6B7A1F] transition hover:bg-[#6B7A1F] hover:text-white">
            View all
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-[#E6E6E6] bg-white p-4 transition-shadow hover:shadow-xl"
            >
              {/* Image + Discount */}
              <div className="relative mb-4 overflow-hidden rounded-[14px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 rounded-md bg-[#6B7A1F] px-2 sm:px-3 py-1 text-xs sm:text-[14px] font-medium text-white">
                  {product.discount}
                </span>
              </div>

              {/* Title */}
              <h4 className="mb-2 text-[16px] sm:text-[17px] md:text-[18px] font-medium text-[#333]">
                {product.title}
              </h4>

              {/* Price + CTA */}
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[16px] sm:text-[18px] md:text-[18px] font-semibold text-[#1E1E1E]">
                    {product.price}
                  </span>
                  <span className="text-xs sm:text-sm text-[#9E9E9E] line-through">
                    {product.oldPrice}
                  </span>
                </div>

                <button className="rounded-full bg-[#6B7A1F] px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-[14px] font-medium text-white transition hover:bg-[#5A6819] active:scale-[0.97]">
                  Buy Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}