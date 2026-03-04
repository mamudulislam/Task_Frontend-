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
    <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-normal leading-tight tracking-tight text-[#1E1E1E] md:text-[48px]">
              Popular Products
            </h2>
            {/* Category Pills */}
            <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">
              <button className="rounded-full bg-[#6B7A1F] px-6 py-2 text-sm font-medium text-white transition sm:text-[16px]">
                Face Care
              </button>
              <button className="rounded-full bg-[#EAEAEA] px-6 py-2 text-sm font-medium text-[#333] transition hover:bg-[#6B7A1F] hover:text-white sm:text-[16px]">
                Body Care
              </button>
              <button className="rounded-full bg-[#EAEAEA] px-6 py-2 text-sm font-medium text-[#333] transition hover:bg-[#6B7A1F] hover:text-white sm:text-[16px]">
                Hair Care
              </button>
              <button className="rounded-full bg-[#EAEAEA] px-6 py-2 text-sm font-medium text-[#333] transition hover:bg-[#6B7A1F] hover:text-white sm:text-[16px]">
                Organic
              </button>
            </div>
          </div>
          {/* View all */}
          <button className="whitespace-nowrap rounded-full border border-[#6B7A1F] px-7 py-2.5 text-sm font-medium text-[#6B7A1F] transition hover:bg-[#6B7A1F] hover:text-white sm:px-8 sm:py-3 sm:text-[16px]">
            View all
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
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
                  className=" w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={320}
                  height={400}
                />
                <span className="absolute left-3 top-3 rounded-md bg-[#6B7A1F] px-3 py-1 text-xs font-medium text-white md:text-[14px]">
                  {product.discount}
                </span>
              </div>
              {/* Title */}
              <h4 className="mb-3 text-[17px] font-medium text-[#333] md:text-[18px]">
                {product.title}
              </h4>
              {/* Price + CTA */}
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[18px] font-semibold text-[#1E1E1E]">
                    {product.price}
                  </span>
                  <span className="text-sm text-[#9E9E9E] line-through">
                    {product.oldPrice}
                  </span>
                </div>
                <button className="rounded-full bg-[#6B7A1F] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#5A6819] active:scale-[0.97] md:px-6 md:py-2.5 md:text-[14px]">
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