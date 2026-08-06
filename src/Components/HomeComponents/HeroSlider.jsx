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
    <section className="relative mb-8 w-full overflow-hidden rounded-3xl">
      <a
        href={slide.link}
        target={slide.link.startsWith("http") ? "_blank" : "_self"}
        rel={slide.link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        <div className="aspect-[860/310] w-full overflow-hidden rounded-3xl">
          <img
            src={slide.image}
            alt={`Slide ${current + 1}`}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </a>

      {/* Indicator */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-4">
        {homeSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}