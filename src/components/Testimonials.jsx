import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    initial: "S",
    color: "from-purple-400 to-pink-500",
    bg: "from-purple-50 to-pink-50",
    text: `"Dr. Rodriguez helped me work through years of anxiety in just a few months. Her approach is so gentle yet effective. I finally feel like myself again."`,
  },
  {
    name: "Michael & Lisa T.",
    initial: "M",
    color: "from-blue-400 to-indigo-500",
    bg: "from-blue-50 to-indigo-50",
    text: `"We were on the brink of divorce when we started couples therapy with Dr. Rodriguez. Our marriage is stronger than ever."`,
  },
  {
    name: "Jennifer K.",
    initial: "J",
    color: "from-green-400 to-emerald-500",
    bg: "from-green-50 to-emerald-50",
    text: `"Therapy gave me tools to rebuild my confidence and relationships. I can’t thank Dr. Rodriguez enough for guiding me through my journey."`,
  },
  {
    name: "David R.",
    initial: "D",
    color: "from-orange-400 to-red-500",
    bg: "from-orange-50 to-red-50",
    text: `"I used to struggle with stress at work, but therapy taught me how to manage it and thrive. My productivity and happiness have improved greatly."`,
  },
  {
    name: "Emily W.",
    initial: "E",
    color: "from-pink-400 to-rose-500",
    bg: "from-pink-50 to-rose-50",
    text: `"I felt heard, understood, and supported every step of the way. Therapy transformed how I see myself and my future."`,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // lower = slower

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0; // reset for infinite loop
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scrollStep);
    };
    scrollStep();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 text-orange-600">
            Client Stories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from clients who found healing and growth through therapy
          </p>
        </div>

        {/* Auto Scroll Wrapper */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className={`flex-shrink-0 min-w-[350px] max-w-sm bg-gradient-to-br ${t.bg} rounded-3xl p-8 card-3d`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center`}
                >
                  <span className="text-white font-bold">{t.initial}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed line-clamp-4">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
