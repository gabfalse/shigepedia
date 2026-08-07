import { useEffect, useState } from "react";
import { homeSlides } from "../../Data/HomeSlides";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % homeSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = homeSlides[current];

  return (
    <div className="relative overflow-hidden rounded-xl border border-base">
      <a
        href={slide.link}
        target={slide.external ? "_blank" : "_self"}
        rel={slide.external ? "noopener noreferrer" : undefined}
        className="group block"
      >
        <div className="relative aspect-[830/310] w-full">
          <img
            src={slide.image}
            alt={slide.title}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center p-4 sm:p-6 lg:p-10">
         

            
          </div>
        </div>
      </a>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {homeSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-8 bg-primary"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}